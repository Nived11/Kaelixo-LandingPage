// components/Header.tsx   
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useBookingModal } from "@/hooks/useBookingModal";
import BookingFormModal from "@/components/BookingFormModal";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, openModal, closeModal, formData, handleInputChange, handleFormSubmit, isSubmitting, phoneError } = useBookingModal();

  return (
    <>
      <header className="relative z-50 flex items-center justify-between gap-7 h-[70px] md:h-[76px] w-[min(1440px,92vw)] mx-auto">
        
        <Link href="#home" className="flex items-center min-w-[180px]" aria-label="Kaelixo home">
          <motion.div 
            className="relative flex items-center"
            initial={{ 
              opacity: 0, 
              x: -25, 
              clipPath: "inset(0 100% 0 0)" 
            }} 
            animate={{ 
              opacity: 1, 
              x: 0, 
              clipPath: "inset(0 0% 0 0)" 
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/kaelixo-fulllogo.png" 
              alt="Kaelixo Logo"
              width={140}
              height={36}
              className="object-contain h-[30px] md:h-[36px] w-auto drop-shadow-[0_10px_24px_rgba(255,0,82,0.25)]"
              priority
            />
          </motion.div>
        </Link>
        
        {/* Desktop CTA Link */}
        <Link 
          href="#" 
          onClick={(e) => {
            e.preventDefault(); 
            openModal();
          }}
          style={{ fontWeight: 800 }}
          className="hidden lg:inline-flex items-center justify-between gap-[16px] text-white bg-gradient-to-r from-[var(--pink)] via-[#e2125a] to-[var(--violet)] py-[10px] pl-[24px] pr-[10px] rounded-[16px] text-[11px] tracking-[0.4px] shadow-[0_12px_28px_rgba(255,0,82,0.3)] hover:-translate-y-[2px] hover:shadow-[0_18px_36px_rgba(255,0,82,0.45)] transition-all duration-300 no-underline cursor-pointer"
        >
          <span>BOOK FREE CONSULTATION</span>
          <span className="w-[30px] h-[30px] border border-white/50 bg-transparent text-white flex items-center justify-center rounded-full text-[12px] shrink-0" style={{ fontWeight: 800 }}>↗</span>
        </Link>
        
        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden block border border-[var(--line)] bg-white/5 text-white w-[40px] h-[40px] rounded-[10px] text-[16px] cursor-pointer" 
          aria-label="Open navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-[70px] md:top-[76px] left-0 right-0 bg-[var(--bg2)] p-5 border-b border-white/10 flex flex-col gap-[16px] z-50 rounded-b-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:hidden">
            <Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                openModal();
              }} 
              style={{ fontWeight: 800 }}
              className="mt-[5px] flex items-center justify-between gap-[16px] text-white bg-gradient-to-r from-[var(--pink)] via-[#d9004c] to-[var(--violet)] py-[12px] pl-[20px] pr-[10px] rounded-[14px] text-[11px] tracking-[0.2px] shadow-[0_12px_28px_rgba(255,0,82,0.3)] no-underline cursor-pointer"
            >
              <span>BOOK FREE CONSULTATION</span>
              <span className="w-[30px] h-[30px] border border-white/50 bg-transparent text-white flex items-center justify-center rounded-full text-[12px] shrink-0" style={{ fontWeight: 800 }}>↗</span>
            </Link>
          </div>
        )}
      </header>

      <BookingFormModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        isSubmitting={isSubmitting}
        phoneError={phoneError}  
      />
    </>
  );
}