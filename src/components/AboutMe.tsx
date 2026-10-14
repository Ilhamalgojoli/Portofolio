import { Icon } from "@iconify/react";
import useScrollReveal from "../hooks/useScrollReveal";
import MyFoto from "../assets/MyFoto.png";

const focusAreas = [
    {
        icon: "pixelarticons:code",
        title: "Frontend",
        description: "Building clear, responsive interfaces with React and modern web tools.",
    },
    {
        icon: "pixelarticons:terminal",
        title: "Backend",
        description: "Working with APIs, application logic, and database-driven features.",
    },
    {
        icon: "pixelarticons:device-phone",
        title: "Full-stack projects",
        description: "Connecting user experiences with the systems that power them.",
    },
];

export default function AboutMe() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section
            ref={ref}
            id="about"
            className="flex min-h-screen items-center justify-center px-4 py-28 text-[#E5E5E5] sm:px-6"
        >
            <div data-scroll-center className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.8fr] lg:gap-8">
                <article className="aspect-[3/4] w-full self-center overflow-hidden rounded-2xl border border-[#4A4545] bg-[#201E1E]">
                    <img src={MyFoto} alt="Ilham" className="size-full object-cover" />
                </article>

                <div className="flex flex-col gap-10 rounded-2xl border border-[#4A4545] bg-[#1D1B1B] p-6 sm:p-10">
                    <div className="flex flex-col justify-between gap-8">
                        <div className="flex flex-col gap-6">
                            <p
                                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
                                className={`font-mono text-xs tracking-[0.25em] text-[#D6B36A] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-sm ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                            >
                                A LITTLE ABOUT ME
                            </p>
                            <div
                                style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
                                className={`flex flex-col gap-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                            >
                                <h1 className="text-2xl leading-relaxed text-white sm:text-3xl">Hi, I&apos;m Ilham.</h1>
                                <p className="font-mono text-xs tracking-[0.2em] text-[#D6B36A]">JUNIOR DEVELOPER</p>
                                <p className="font-mono text-sm leading-8 text-[#A8A3A3]">
                                    I&apos;m a junior developer who enjoys turning ideas into useful digital experiences. I build projects across the frontend and backend, and keep exploring new tools through hands-on work.
                                </p>
                                <p className="font-mono text-sm leading-8 text-[#A8A3A3]">
                                    This portfolio is a snapshot of what I&apos;m learning and creating—from web interfaces to applications backed by APIs and databases.
                                </p>
                            </div>
                        </div>

                        <div
                            style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
                            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                        >
                            <a
                                href="#ability"
                                className="inline-flex w-fit items-center gap-3 rounded-lg border border-[#D6B36A]/60 px-5 py-3 font-mono text-xs text-[#D6B36A] transition-colors hover:bg-[#D6B36A] hover:text-[#181717]"
                            >
                                EXPLORE MY ARSENAL
                                <Icon icon="pixelarticons:arrow-right" className="size-4" />
                            </a>
                        </div>
                    </div>

                    <div className="grid gap-6 border-t border-[#4A4545] pt-8 sm:grid-cols-3">
                        {focusAreas.map((area, index) => (
                            <article
                                key={area.title}
                                style={{ transitionDelay: isVisible ? `${index * 200}ms` : "0ms" }}
                                className={`flex flex-col gap-4 transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                            >
                                <Icon icon={area.icon} className="size-7 text-[#D6B36A]" />
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-sm leading-relaxed text-white">{area.title}</h2>
                                    <p className="font-mono text-[11px] leading-6 text-[#A8A3A3]">{area.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
