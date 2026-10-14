import { Icon } from "@iconify/react";
import Armor from "./Armor";
import Weapon from "./Weapon";

export default function Equipment() {
    return (
        <div className='grid min-h-[656px] w-full grid-cols-1 gap-4 md:h-full md:min-h-0 md:grid-cols-2'>
            <section className='flex min-h-[320px] flex-col overflow-hidden rounded-xl border border-[#4A4545] bg-[#1A1818]/80 md:min-h-0'>
                <header className='flex items-center justify-between border-b border-[#4A4545] px-5 py-4'>
                    <div className='flex items-center gap-3'>
                        <Icon icon="pixelarticons:sword" className='size-6 text-[#D6B36A]' />
                        <div className='flex flex-col gap-1.5'>
                            <h2 className='text-sm font-semibold tracking-wider text-white'>WEAPON</h2>
                            <p className='text-[10px] text-[#A8A3A3]'>Programming languages & technologies</p>
                        </div>
                    </div>
                    <span className='text-[9px] tracking-wider text-[#A8A3A3]'>SKILL TREE</span>
                </header>
                <div className='min-h-0 flex-1'>
                    <Weapon />
                </div>
            </section>
            <section className='flex min-h-[320px] flex-col overflow-hidden rounded-xl border border-[#4A4545] bg-[#1A1818]/80 md:min-h-0'>
                <header className='flex items-center gap-3 border-b border-[#4A4545] px-5 py-4'>
                    <Icon icon="pixelarticons:shield" className='size-6 text-[#D6B36A]' />
                    <div className='flex flex-col gap-1.5'>
                        <h2 className='text-sm font-semibold tracking-wider text-white'>ARMOR</h2>
                        <p className='text-[10px] text-[#A8A3A3]'>Frameworks, libraries & game engines</p>
                    </div>
                </header>
                <div className='min-h-0 flex-1'>
                    <Armor />
                </div>
            </section>
        </div>

    );
}