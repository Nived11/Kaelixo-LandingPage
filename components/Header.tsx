"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 flex items-center justify-between gap-7 h-[70px] md:h-[76px] w-[min(1440px,92vw)] mx-auto">
      
      {/* Brand & Logo - Updated with Public Images */}
      <Link href="#home" className="flex items-center gap-[10px] min-w-[220px]" aria-label="Kaelixo home">
        {/* Kaelixo Logo Image */}
        <div className="relative w-[40px] h-[44px] md:w-[46px] md:h-[50px] flex items-center justify-center">
          <Image
            src="/kaelixo-logo.png" // SVG ആണെങ്കിൽ /kaelixo-logo.svg ആക്കുക
            alt="Kaelixo Logo"
            width={46}
            height={50}
            className="object-contain drop-shadow-[0_10px_24px_rgba(255,0,82,0.25)]"
            priority
          />
        </div>

        <span className="flex flex-col justify-start items-start">
          {/* Kaelixo Name Image */}
          <Image
            src="/kaelixo-name.png" // SVG ആണെങ്കിൽ /kaelixo-name.svg ആക്കുക
            alt="Kaelixo"
            width={130}
            height={28}
            className="object-contain h-[24px] md:h-[28px] w-auto"
            priority
          />
          <small className="block mt-[2px] text-[11px] font-bold tracking-[1.2px] text-[#dbe1f0]">
            THINK. BUILD. <b className="text-[var(--pink)]">GROW.</b>
          </small>
        </span>
      </Link>
      
      {/* Desktop CTA Button */}
      <Link 
        href="#contact" 
        className="hidden lg:inline-flex items-center gap-[10px] text-white bg-gradient-to-r from-[var(--pink)] via-[#f11583] to-[var(--violet)] py-[10px] px-[18px] rounded-[12px] font-extrabold text-[12px] tracking-[0.4px] shadow-[0_12px_28px_rgba(255,0,82,0.23)] hover:-translate-y-[2px] hover:shadow-[0_18px_36px_rgba(255,0,82,0.35)] transition-all duration-300"
      >
        BOOK FREE CONSULTATION 
        <span className="w-[24px] h-[24px] bg-white text-[var(--pink)] flex items-center justify-center rounded-full text-[14px] font-bold">↗</span>
      </Link>
      
      {/* Mobile Toggle Button */}
      <button 
        className="lg:hidden block border border-[var(--line)] bg-white/5 text-white w-[40px] h-[40px] rounded-[10px] text-[16px]" 
        aria-label="Open navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[70px] md:top-[76px] left-0 right-0 bg-[var(--bg2)] p-5 border-b border-white/10 flex flex-col gap-[16px] z-50 rounded-b-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:hidden">
          <Link 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)} 
            className="mt-[5px] flex items-center justify-center gap-[10px] text-white bg-gradient-to-r from-[var(--pink)] via-[#f11583] to-[var(--violet)] py-[12px] rounded-[12px] font-extrabold text-[12px] tracking-[0.2px] shadow-[0_12px_28px_rgba(255,0,82,0.23)]"
          >
            BOOK FREE CONSULTATION <span className="w-[24px] h-[24px] bg-white text-[var(--pink)] flex items-center justify-center rounded-full text-[14px] font-bold">↗</span>
          </Link>
        </div>
      )}
    </header>
  );
}