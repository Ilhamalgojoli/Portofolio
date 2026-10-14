import { useEffect, useRef, useState } from 'react';

export type SpriteFrameOffset = readonly [x: number, y: number];

export type SpriteFrameInsets = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};

export type SpriteSheet = {
    columns: number;
    frameCount: number;
    frameHeight: number;
    frameWidth: number;
};

type SpriteAnimationProps = {
    frameUrls: readonly string[];
    width: number;
    height: number;
    className?: string;
    frameDuration?: number;
    frameOffsets?: readonly SpriteFrameOffset[];
    frameInsets?: SpriteFrameInsets;
    spriteSheet?: SpriteSheet;
    loop?: boolean;
    onComplete?: () => void;
};

export default function SpriteAnimation({
    frameUrls,
    width,
    height,
    className,
    frameDuration = 140,
    frameOffsets = [],
    frameInsets,
    spriteSheet,
    loop = true,
    onComplete,
}: SpriteAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loadedFrames, setLoadedFrames] = useState<HTMLImageElement[]>([]);
    const frameCount = spriteSheet?.frameCount ?? frameUrls.length;

    useEffect(() => {
        let cancelled = false;
        const images = frameUrls.map((url) => {
            return { image: new Image(), url };
        });

        void Promise.all(
            images.map(({ image, url }, index) => new Promise<HTMLImageElement>((resolve, reject) => {
                image.onload = () => resolve(image);
                image.onerror = () => reject(new Error(`Failed to load sprite frame ${index + 1}: ${image.src}`));
                image.src = url;
            })),
        )
            .then((frames) => {
                if (!cancelled) {
                    setLoadedFrames(frames);
                }
            })
            .catch((error: unknown) => {
                console.error('Failed to load sprite animation frames.', error);
            });

        return () => {
            cancelled = true;
            images.forEach(({ image }) => {
                image.onload = null;
                image.onerror = null;
            });
        };
    }, [frameUrls]);

    useEffect(() => {
        if (frameCount === 0) {
            console.error('SpriteAnimation requires at least one frame.');
            return;
        }

        if (frameDuration <= 0) {
            console.error('SpriteAnimation frameDuration must be greater than zero.');
            return;
        }

        if (loadedFrames.length !== frameUrls.length) return;

        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;
        if (spriteSheet && (spriteSheet.columns <= 0 || spriteSheet.frameWidth <= 0 || spriteSheet.frameHeight <= 0)) {
            console.error('SpriteAnimation spriteSheet dimensions must be greater than zero.');
            return;
        }

        const top = frameInsets?.top ?? 0;
        const right = frameInsets?.right ?? 0;
        const bottom = frameInsets?.bottom ?? 0;
        const left = frameInsets?.left ?? 0;
        let frameIndex = 0;
        let lastFrameTime = performance.now();
        let animationFrame = 0;

        const drawFrame = () => {
            const frameImage = loadedFrames[spriteSheet ? 0 : frameIndex];
            const [offsetX, offsetY] = frameOffsets[frameIndex] ?? [0, 0];
            context.clearRect(0, 0, width, height);
            context.save();
            context.beginPath();
            context.rect(left, top, width - left - right, height - top - bottom);
            context.clip();
            if (spriteSheet) {
                const column = frameIndex % spriteSheet.columns;
                const row = Math.floor(frameIndex / spriteSheet.columns);
                context.drawImage(
                    frameImage,
                    column * spriteSheet.frameWidth,
                    row * spriteSheet.frameHeight,
                    spriteSheet.frameWidth,
                    spriteSheet.frameHeight,
                    offsetX,
                    offsetY,
                    width,
                    width * spriteSheet.frameHeight / spriteSheet.frameWidth,
                );
            } else {
                context.drawImage(
                    frameImage,
                    offsetX,
                    offsetY,
                    width,
                    width * frameImage.height / frameImage.width,
                );
            }
            context.restore();
        };

        const animate = (time: number) => {
            const elapsed = time - lastFrameTime;

            if (elapsed >= frameDuration) {
                const framesToAdvance = Math.floor(elapsed / frameDuration);
                lastFrameTime += framesToAdvance * frameDuration;

                if (!loop && frameIndex === frameCount - 1) {
                    onComplete?.();
                    return;
                }

                frameIndex = loop
                    ? (frameIndex + framesToAdvance) % frameCount
                    : Math.min(frameIndex + framesToAdvance, frameCount - 1);
                drawFrame();
            }

            animationFrame = window.requestAnimationFrame(animate);
        };

        drawFrame();
        animationFrame = window.requestAnimationFrame(animate);

        return () => window.cancelAnimationFrame(animationFrame);
    }, [frameCount, frameDuration, frameOffsets, frameInsets, frameUrls.length, height, loadedFrames, loop, onComplete, spriteSheet, width]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden='true'
            width={width}
            height={height}
            className={className}
        />
    );
}
