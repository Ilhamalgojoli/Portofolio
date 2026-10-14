import Achievment from "./Achievment";
import Equipment from "./Equipment";
import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Skills() {
    const [activeTab, setActiveTab] = useState('equipment');
    const { ref, isVisible } = useScrollReveal();

    return (
        <section ref={ref} id='ability' className={`flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-28 text-white transition-[opacity,transform] duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:transition-none motion-reduce:opacity-100 md:gap-12 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div data-scroll-center className="flex w-full flex-col items-center gap-8 md:gap-12">
                <div className="relative w-full max-w-[1280px]">
                    <div className="relative z-10 grid grid-cols-2 text-center text-sm font-medium tracking-[0.12em] md:text-base">
                        <button
                            aria-pressed={activeTab === 'equipment'}
                            className={`relative border-b-2 px-2 py-4 transition-colors duration-150 cursor-pointer sm:px-4 ${activeTab === 'equipment'
                                ? 'text-[#D6B36A]'
                                : 'border-transparent text-[#A8A3A3] hover:text-[#E5E5E5]'
                                }`}
                            onClick={() => setActiveTab('equipment')}
                        >
                            EQUIPMENT
                            {activeTab === 'equipment' && <span className="absolute inset-x-0 bottom-[-2px] h-0.5 bg-[#D6B36A]" />}
                        </button>
                        <button
                            aria-pressed={activeTab === 'achievement'}
                            className={`relative border-b-2 px-2 py-4 transition-colors duration-150 cursor-pointer sm:px-4 ${activeTab === 'achievement'
                                ? 'text-[#D6B36A]'
                                : 'border-transparent text-[#A8A3A3] hover:text-[#E5E5E5]'
                                }`}
                            onClick={() => setActiveTab('achievement')}
                        >
                            ACHIEVEMENT
                            {activeTab === 'achievement' && <span className="absolute inset-x-0 bottom-[-2px] h-0.5 bg-[#D6B36A]" />}
                        </button>
                    </div>
                </div>

                <div className='relative w-full max-w-[1280px] md:h-[min(680px,calc(100vh-15rem))]'>
                    {activeTab === 'equipment' && (
                        <div className='min-h-[656px] md:absolute md:inset-0'>
                            <Equipment />
                        </div>
                    )}
                    {activeTab === 'achievement' && (
                        <div className='h-[min(680px,calc(100vh-15rem))] min-h-[540px] md:absolute md:inset-0'>
                            <Achievment />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}