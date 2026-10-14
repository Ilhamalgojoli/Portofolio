import { Icon } from "@iconify/react"
import { useEffect, useState } from "react";
import { MyProject } from "../data/my_data"

export default function Img({ id }: { id: number }) {
    const currIdProject = MyProject.find(
        project => project.id === id
    )

    const [activeSlide, setActiveSlide] = useState({ projectId: id, index: 0 });
    const [isFullSizeOpen, setIsFullSizeOpen] = useState(false);
    const currIndex = activeSlide.projectId === id ? activeSlide.index : 0;
    const currImages = currIdProject?.image ?? [];
    const slideCount = currImages.length;

    useEffect(() => {
        if (!isFullSizeOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsFullSizeOpen(false);
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                setActiveSlide((previous) => {
                    const currentIndex = previous.projectId === id ? previous.index : 0;
                    const direction = event.key === "ArrowLeft" ? -1 : 1;

                    return {
                        projectId: id,
                        index: (currentIndex + direction + slideCount) % slideCount,
                    };
                });
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [id, isFullSizeOpen, slideCount]);

    if (!currIdProject) {
        return null
    }

    const buttonPrev = () => {
        setActiveSlide({ projectId: id, index: (currIndex - 1 + currImages.length) % currImages.length });
    }

    const buttonNext = () => {
        setActiveSlide({ projectId: id, index: (currIndex + 1) % currImages.length });
    }

    return (
        <>
            <div className="group relative aspect-[1.8/1] w-full overflow-hidden rounded-xl border border-[#4A4545] bg-[#242222]">
                <img
                    src={currImages[currIndex]}
                    alt={`${currIdProject.name} preview ${currIndex + 1}`}
                    className="block h-auto w-full select-none"
                />
                <div className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-[radial-gradient(ellipse_at_center,transparent_65%,black_160%)]" />
                <button
                    type="button"
                    aria-label={`View ${currIdProject.name} image ${currIndex + 1} full size`}
                    onClick={() => setIsFullSizeOpen(true)}
                    className="absolute left-3 top-3 z-30 rounded-md border border-white/30 bg-black/75 px-3 py-1.5 font-mono text-xs text-white shadow-lg backdrop-blur transition-colors hover:border-[#D6B36A] hover:bg-black"
                >
                    View full size
                </button>
                <span className="absolute right-3 top-3 z-20 rounded-md border border-white/20 bg-black/70 px-2.5 py-1 font-mono text-xs text-white backdrop-blur">
                    {String(currIndex + 1).padStart(2, "0")} / {String(currImages.length).padStart(2, "0")}
                </span>
                <div className="absolute inset-x-0 bottom-4 z-20 flex items-center justify-center gap-2">
                    {currImages.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            aria-label={`Show preview ${index + 1}`}
                            aria-pressed={currIndex === index}
                            onClick={() => setActiveSlide({ projectId: id, index })}
                            className={`size-2.5 rounded-full transition-all duration-200 ${currIndex === index ? "scale-125 bg-[#D6B36A]" : "bg-white/60 hover:bg-white"}`}
                        />
                    ))}
                </div>
                <div className="absolute inset-0 z-20 flex items-center justify-between px-3">
                    <button
                        type="button"
                        aria-label="Previous image"
                        onClick={buttonPrev}
                        className="flex size-10 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white shadow-lg backdrop-blur transition-colors hover:border-[#D6B36A] hover:bg-black sm:size-12"
                    >
                        <Icon icon="pixelarticons:chevron-left" className="size-5 sm:size-6" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next image"
                        onClick={buttonNext}
                        className="flex size-10 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white shadow-lg backdrop-blur transition-colors hover:border-[#D6B36A] hover:bg-black sm:size-12"
                    >
                        <Icon icon="pixelarticons:chevron-right" className="size-5 sm:size-6" />
                    </button>
                </div>
            </div>

            {isFullSizeOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${currIdProject.name} image viewer`}
                    onClick={() => setIsFullSizeOpen(false)}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
                >
                    <button
                        type="button"
                        aria-label="Close full-size image"
                        onClick={() => setIsFullSizeOpen(false)}
                        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white hover:border-[#D6B36A] sm:right-8 sm:top-8"
                    >
                        <Icon icon="pixelarticons:close" className="size-6" />
                    </button>
                    <img
                        src={currImages[currIndex]}
                        alt={`${currIdProject.name} full-size preview ${currIndex + 1}`}
                        onClick={(event) => event.stopPropagation()}
                        className="max-h-[90vh] max-w-[92vw] select-none object-contain"
                    />
                    <span className="absolute left-1/2 top-5 -translate-x-1/2 rounded-md border border-white/20 bg-black/70 px-3 py-1.5 font-mono text-sm text-white">
                        {String(currIndex + 1).padStart(2, "0")} / {String(currImages.length).padStart(2, "0")}
                    </span>
                    <button
                        type="button"
                        aria-label="Previous full-size image"
                        onClick={(event) => {
                            event.stopPropagation();
                            buttonPrev();
                        }}
                        className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white hover:border-[#D6B36A] sm:left-8 sm:size-14"
                    >
                        <Icon icon="pixelarticons:chevron-left" className="size-6" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next full-size image"
                        onClick={(event) => {
                            event.stopPropagation();
                            buttonNext();
                        }}
                        className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white hover:border-[#D6B36A] sm:right-8 sm:size-14"
                    >
                        <Icon icon="pixelarticons:chevron-right" className="size-6" />
                    </button>
                </div>
            )}
        </>
    );
}