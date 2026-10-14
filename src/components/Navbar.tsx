import { Icon } from '@iconify/react';
import type { MouseEvent } from 'react';
import { useState } from 'react';
import Logo from '../assets/Icon-Cat.png';

function handleSectionNavigation(event: MouseEvent<HTMLAnchorElement>) {
    const section = document.getElementById(event.currentTarget.hash.slice(1));

    if (!section) return;

    event.preventDefault();
    window.history.pushState(null, '', event.currentTarget.hash);
    const target = section.querySelector<HTMLElement>('[data-scroll-center]') ?? section;
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function navigateToSection(event: MouseEvent<HTMLAnchorElement>) {
        handleSectionNavigation(event);
        setIsMenuOpen(false);
    }

    return (
        <section className="sticky top-0 z-50 flex w-full flex-wrap items-center justify-between rounded-xl border border-white/10 bg-[#181717]/80 py-4 text-white backdrop-blur-sm sm:px-6 md:px-12 md:py-5">
            <div>
                <img src={Logo} alt="Logo" className="h-6 w-auto sm:h-8" />
            </div>

            <button
                type="button"
                className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-[#D6B36A] transition-colors hover:bg-white/5 md:hidden"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                <Icon icon={isMenuOpen ? 'pixelarticons:close' : 'pixelarticons:menu'} className="size-6" />
            </button>

            <nav aria-label="Main navigation" className="hidden items-center gap-1 text-[8px] text-[#A8A3A3] sm:gap-3 sm:text-xs md:flex md:gap-6 md:text-sm">
                <a href="#home" onClick={navigateToSection} className="transition-colors hover:text-[#D6B36A]">HOME</a>
                <span aria-hidden="true" className="text-white/25">|</span>
                <a href="#about" onClick={navigateToSection} className="transition-colors hover:text-[#D6B36A]">ABOUT ME</a>
                <span aria-hidden="true" className="text-white/25">|</span>
                <a href="#ability" onClick={navigateToSection} className="transition-colors hover:text-[#D6B36A]">ARSENAL</a>
                <span aria-hidden="true" className="text-white/25">|</span>
                <a href="#project" onClick={navigateToSection} className="transition-colors hover:text-[#D6B36A]">PROJECT</a>
            </nav>

            {isMenuOpen && (
                <nav
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                    className="flex basis-full flex-col gap-1 border-t border-white/10 pt-3 mt-3 text-xs text-[#A8A3A3] md:hidden"
                >
                    <a href="#home" onClick={navigateToSection} className="rounded-lg px-3 py-3 transition-colors hover:bg-white/5 hover:text-[#D6B36A]">HOME</a>
                    <a href="#about" onClick={navigateToSection} className="rounded-lg px-3 py-3 transition-colors hover:bg-white/5 hover:text-[#D6B36A]">ABOUT ME</a>
                    <a href="#ability" onClick={navigateToSection} className="rounded-lg px-3 py-3 transition-colors hover:bg-white/5 hover:text-[#D6B36A]">ARSENAL</a>
                    <a href="#project" onClick={navigateToSection} className="rounded-lg px-3 py-3 transition-colors hover:bg-white/5 hover:text-[#D6B36A]">PROJECT</a>
                </nav>
            )}
        </section>
    )
}