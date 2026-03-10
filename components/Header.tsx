"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-4 z-50 flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 lg:gap-4 mt-4 p-3 lg:px-[1.2rem] lg:py-[0.95rem] border border-[rgba(72,44,26,0.08)] rounded-[1.5rem] lg:rounded-full bg-[rgba(255,248,239,0.7)] backdrop-blur-[20px] shadow-[0_12px_30px_rgba(63,35,15,0.08)] transition-all duration-300">
            <Link href="#hero" className="flex items-center gap-[0.7rem] font-extrabold tracking-[0.01em] text-text flex-1 lg:flex-none min-w-0" aria-label="TableTrail home">
                <div className="w-4 h-4 rounded-[0.28rem] bg-gradient-to-br from-amber via-red to-green shadow-[0_6px_18px_rgba(203,90,66,0.35)] rotate-[14deg]" />
                <span className="text-text">BuildifyCode</span>
            </Link>

            {/* Mobile Book Demo – shown between md and lg */}
            <Link
                href="#contact"
                className="hidden md:flex lg:hidden order-2 items-center justify-center min-h-[2.5rem] px-4 py-2 rounded-full border border-[rgba(54,34,20,0.12)] bg-[rgba(255,250,245,0.88)] font-bold text-sm transition-all duration-220 hover:-translate-y-[1px]"
            >
                Book Demo
            </Link>

            {/* Hamburger toggle – hidden on lg+ */}
            <button
                className="nav-toggle flex lg:hidden order-3 flex-col justify-center items-center w-10 h-10 p-2 gap-[5px] border-none bg-transparent cursor-pointer"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span className={`w-[1.5rem] h-0.5 bg-text rounded-[2px] transition-all duration-200 ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`w-[1.5rem] h-0.5 bg-text rounded-[2px] transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-[1.5rem] h-0.5 bg-text rounded-[2px] transition-all duration-200 ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>

            {/* Navigation links */}
            <nav
                className={`
          ${isOpen ? 'flex' : 'hidden'} lg:flex
          w-full lg:w-auto order-4 lg:order-none
          flex-col lg:flex-row items-center lg:items-center 
          mt-2 lg:mt-0 pt-2 lg:pt-0 gap-0 lg:gap-[1.25rem] 
          border-t border-[rgba(72,44,26,0.12)] lg:border-none
          text-muted font-manrope text-[0.95rem] transition-all duration-300
        `}
            >
                {["Features", "Workflow", "Results", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={closeMenu}
                        className="relative group py-3 lg:py-0 w-full lg:w-auto text-center lg:text-left border-b border-[rgba(72,44,26,0.08)] lg:border-none last:border-b-0"
                    >
                        {item}
                        <span className="hidden lg:block absolute left-0 bottom-[-0.25rem] w-full h-[1px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-180 origin-left" />
                    </Link>
                ))}
            </nav>

            {/* Desktop Book Demo */}
            <Link
                href="#contact"
                className="hidden lg:inline-flex items-center justify-center min-h-[3rem] px-[1.25rem] py-[0.85rem] rounded-full border border-[rgba(54,34,20,0.12)] bg-[rgba(255,250,245,0.88)] font-bold transition-all duration-220 hover:-translate-y-[1px]"
            >
                Book Demo
            </Link>
        </header>
    );
}
