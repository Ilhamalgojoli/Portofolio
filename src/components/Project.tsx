import { Icon } from "@iconify/react";
import { useState } from "react";
import { MyProject } from "../data/my_data";
import Img from "./ImageSlide";

export default function Project() {
    const [currIndex, setCurrIndex] = useState<number>(0);
    const currentProject = MyProject[currIndex];

    const buttonNext = () => {
        setCurrIndex((index) => (index + 1) % MyProject.length);
    };

    const buttonPrev = () => {
        setCurrIndex((index) => (index - 1 + MyProject.length) % MyProject.length);
    };

    return (
        <section
            id="project"
            className="flex min-h-screen items-center justify-center bg-[#181717] px-4 py-24 text-[#E5E5E5] sm:px-6"
        >
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="mb-7 flex items-end justify-between gap-4 sm:mb-8">
                    <div className="flex flex-col gap-3">
                        <p className="font-mono text-sm tracking-[0.25em] text-[#D6B36A] sm:text-base">SELECTED WORK</p>
                        <h2 className="text-2xl leading-relaxed text-white sm:text-4xl">PROJECTS</h2>
                    </div>
                    <p className="font-mono text-sm text-[#A8A3A3] sm:text-base">
                        {String(currIndex + 1).padStart(2, "0")} <span className="text-[#4A4545]">/</span> {String(MyProject.length).padStart(2, "0")}
                    </p>
                </div>

                <article className="grid min-h-[600px] overflow-hidden rounded-2xl border border-[#4A4545] bg-[#201E1E] shadow-[0_24px_80px_rgba(0,0,0,0.25)] lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="min-w-0 border-b border-[#4A4545] bg-[#181717] p-3 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
                        <Img id={currentProject.id} />
                    </div>
                    <div className="flex min-w-0 flex-col p-6 sm:p-10 lg:p-12">
                        <h3 className="mb-10 text-lg leading-relaxed text-white sm:text-xl lg:text-2xl">{currentProject.name}</h3>

                        <div className="flex flex-col gap-10">
                            <div>
                                <span className="rounded-full border border-[#D6B36A]/40 bg-[#D6B36A]/10 px-4 py-2 font-mono text-xs text-[#D6B36A] sm:text-sm">
                                    {currentProject.category}
                                </span>
                            </div>

                            <p className="font-mono text-sm leading-8 text-[#A8A3A3] sm:text-base sm:leading-9">
                                {currentProject.description}
                            </p>
                        </div>

                        <div className="mt-auto flex items-center justify-between gap-4 pt-10">
                            <div className="flex items-center gap-2">
                                {MyProject.map((project, index) => (
                                    <button
                                        key={project.id}
                                        type="button"
                                        aria-label={`Show project ${index + 1}: ${project.name}`}
                                        aria-pressed={currIndex === index}
                                        onClick={() => setCurrIndex(index)}
                                        className={`h-1.5 rounded-full transition-all duration-200 ${currIndex === index ? "w-7 bg-[#D6B36A]" : "w-1.5 bg-[#625D5D] hover:bg-[#A8A3A3]"}`}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    aria-label="Previous project"
                                    onClick={buttonPrev}
                                    className="flex size-10 items-center justify-center rounded-lg border border-[#4A4545] text-[#A8A3A3] transition-colors hover:border-[#D6B36A] hover:text-[#D6B36A]"
                                >
                                    <Icon icon="pixelarticons:chevron-left" className="size-5" />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Next project"
                                    onClick={buttonNext}
                                    className="flex size-10 items-center justify-center rounded-lg border border-[#4A4545] text-[#A8A3A3] transition-colors hover:border-[#D6B36A] hover:text-[#D6B36A]"
                                >
                                    <Icon icon="pixelarticons:chevron-right" className="size-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
