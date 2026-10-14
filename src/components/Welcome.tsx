import SpriteAnimation, { type SpriteFrameOffset } from './SpriteAnimation';
import useScrollReveal from '../hooks/useScrollReveal';

const IDLE_FRAME_URLS = Object.entries(
    import.meta.glob<string>('../assets/Animasi/Idle/*.png', {
        eager: true,
        query: '?url',
        import: 'default',
    }),
)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
    .map(([, url]) => url);

const IDLE_FRAME_WIDTH = 688;
const IDLE_FRAME_HEIGHT = 408;
const IDLE_FRAME_OFFSETS: readonly SpriteFrameOffset[] = [
    [-70, 0], [-22, 0], [26, 0], [79, 1],
    [-70, 6], [-23, 8], [25, 9], [80, 9],
    [-73, 17], [-23, 17], [24, 18], [79, 19],
    [-73, 24], [-23, 23], [25, 24], [79, 23],
];
export default function Welcome() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section
            ref={ref}
            id='home'
            className="flex min-h-screen items-center justify-center px-6 pb-12 pt-28 text-[#E5E5E5]"
        >
            <div className='grid w-full max-w-6xl items-center gap-8 rounded-2xl border border-[#4A4545] bg-[#1D1B1B] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-14'>
                <div className='flex flex-col items-start gap-6'>
                    <p 
                        style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
                        className={`flex items-center gap-3 text-[10px] leading-relaxed tracking-wider text-[#D6B36A] sm:text-xs transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                    >
                        <span className='h-2 w-2 rounded-full bg-[#D6B36A] shadow-[0_0_12px_#D6B36A]' />
                        PERSONAL PORTFOLIO
                    </p>
                    <div 
                        style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
                        className={`flex flex-col gap-5 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                    >
                        <h1 className='text-2xl leading-relaxed text-white sm:text-3xl'>
                            Hi there, welcome!
                        </h1>
                        <p className='max-w-xl font-mono text-sm leading-7 text-[#A8A3A3]'>
                            Welcome to my portfolio. Explore the skills and projects I&apos;ve built.
                        </p>
                    </div>
                    <div 
                        style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
                        className={`flex flex-wrap gap-3 pt-1 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                    >
                        <a
                            href='#about'
                            className='rounded-lg border border-[#D6B36A] bg-[#D6B36A] px-5 py-3 font-mono text-xs font-semibold text-[#181717] transition-colors hover:bg-[#E5C77F]'
                        >
                            ABOUT ME
                        </a>
                    </div>
                </div>

                <div 
                    style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
                    className={`relative flex min-h-64 items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-[#181717] px-2 py-3 sm:min-h-80 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                >
                    <span className='absolute right-4 top-4 rounded-md border border-[#4A4545] px-3 py-2 font-mono text-[10px] text-[#A8A3A3]'>
                        IDLE MODE
                    </span>
                    <SpriteAnimation
                        frameUrls={IDLE_FRAME_URLS}
                        frameOffsets={IDLE_FRAME_OFFSETS}
                        frameDuration={140}
                        width={IDLE_FRAME_WIDTH}
                        height={IDLE_FRAME_HEIGHT}
                        loop
                        className='aspect-[43/24.5] w-[min(70vw,420px)] [image-rendering:pixelated]'
                    />
                </div>
            </div>
        </section>
    )
}
