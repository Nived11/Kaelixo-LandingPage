// components/Hero.tsx
// components/Hero.tsx
"use client";
import Link from "next/link";
import DashboardVisual from "./DashboardVisual";
import { useBookingModal } from "@/hooks/useBookingModal";
import BookingFormModal from "@/components/BookingFormModal";
// താഴെ Variants കൂടെ ആഡ് ചെയ്യുക
import { motion, Variants } from "framer-motion"; 

export default function Hero() {
  const {
    isOpen,
    openModal,
    closeModal,
    formData,
    handleInputChange,
    handleFormSubmit,
    isSubmitting,
    phoneError,
  } = useBookingModal();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <>
      <section
        className="relative w-[min(1440px,92vw)] mx-auto z-10 flex flex-col justify-center min-h-[calc(100vh-76px)] py-4 sm:py-2 overflow-x-clip"
        id="home"
      >
        <div className="grid grid-cols-1 xl:grid-cols-[46%_54%] items-center my-auto gap-6 xl:gap-0">
          
          <motion.div 
            className="pt-1 xl:pt-0"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <div className="text-[12px] md:text-[14px] tracking-[2.5px] font-semibold mb-[8px] bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] via-[#a855f7] to-[var(--pink)] font-[family-name:var(--font-space-grotesk),sans-serif]">
                THINK. BUILD. GROW.
              </div>
              <div className="w-[26px] h-[2px] bg-[var(--pink)] mb-[12px]"></div>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              className="font-[800] text-[36px] sm:text-[40px] md:text-[clamp(36px,3.4vw,52px)] leading-[1.08] md:leading-[1.05] tracking-[-1px] md:tracking-[-2px] m-0 mb-[14px] max-w-[640px] font-[family-name:var(--font-space-grotesk),sans-serif]"
            >
              Technology <br className="block sm:hidden" /> That
              <br />
              Helps <br className="block sm:hidden" /> Businesses
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] via-[#be5cf6] to-[#c51466]">
                Think Bigger, <br className="block sm:hidden" /> Build
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b31875] to-[var(--pink)]">
                Smarter
              </span>
              <br />
              and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] via-[#f65cf4] to-[var(--pink)]">
                Grow <br className="block sm:hidden" /> Faster.
              </span>
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p 
              variants={itemVariants}
              className="max-w-[560px] text-[var(--muted)] text-[13px] md:text-[15px] leading-[1.5] mb-[18px]"
            >
              We design intelligent websites, build powerful software, create
              custom CRM solutions and deliver digital growth strategies for
              ambitious businesses worldwide.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex gap-[18px] sm:gap-[20px] flex-wrap md:flex-nowrap">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
                style={{ fontWeight: 800 }}
                className="inline-flex items-center justify-center md:justify-between gap-[12px] sm:gap-[16px] text-white bg-gradient-to-r from-[var(--pink)] via-[#e2125a] to-[var(--violet)] py-[10px] px-[20px] sm:pl-[24px] sm:pr-[10px] rounded-[12px] text-[11px] tracking-[0.4px] shadow-[0_12px_28px_rgba(255,0,82,0.3)] hover:-translate-y-[2px] hover:shadow-[0_18px_36px_rgba(255,0,82,0.45)] transition-all duration-300 w-full md:w-auto cursor-pointer"
              >
                <span className="text-center md:text-left">
                  BOOK FREE CONSULTATION
                </span>

                <span
                  className="w-[30px] h-[30px] border border-white/50 bg-transparent text-white flex items-center justify-center rounded-full text-[12px] shrink-0"
                  style={{ fontWeight: 800 }}
                >
                  ↗
                </span>
              </Link>

              <Link
                className="inline-flex items-center justify-center md:justify-between gap-[12px] sm:gap-[16px] py-[10px] px-[20px] sm:pl-[24px] sm:pr-[10px] rounded-[12px] border border-white/45 bg-[rgba(12,26,37,0.7)] text-white font-extrabold text-[11px] tracking-[0.4px] backdrop-blur-md hover:border-[var(--pink)] hover:-translate-y-[2px] transition-all duration-300 w-full md:w-auto cursor-pointer font-[family-name:var(--font-space-grotesk),sans-serif]"
                href="#services"
              >
                <span className="text-center md:text-left">
                  EXPLORE OUR SERVICES
                </span>

                <span className="w-[30px] h-[30px] border border-white/50 bg-transparent text-white flex items-center justify-center rounded-full text-[10px] shrink-0">
                  ▶
                </span>
              </Link>
            </motion.div>

            {/* Stats Metrics Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-[10px] md:gap-2 mt-[50px] md:border-t md:border-[var(--line)] md:pt-[14px] max-w-none md:max-w-[600px]">
              <div className="flex gap-[10px] items-center border-0 md:pr-[10px] md:border-r md:border-[var(--line)]">
                <span className="text-[20px] text-[var(--pink)]">♙</span>
                <div>
                  <strong className="block text-[18px] leading-none mb-[2px]">
                    120+
                  </strong>
                  <span className="text-[11px] text-[#b4bdd1]">
                    Happy Clients
                  </span>
                </div>
              </div>
              <div className="flex gap-[10px] items-center border-0 md:pr-[10px] md:border-r md:border-[var(--line)]">
                <span className="text-[20px] text-[var(--pink)]">🚀</span>
                <div>
                  <strong className="block text-[18px] leading-none mb-[2px]">
                    250+
                  </strong>
                  <span className="text-[11px] text-[#b4bdd1]">
                    Projects Delivered
                  </span>
                </div>
              </div>
              <div className="flex gap-[10px] items-center border-0 md:pr-[10px] md:border-r md:border-[var(--line)]">
                <span className="text-[20px] text-[var(--pink)]">◎</span>
                <div>
                  <strong className="block text-[18px] leading-none mb-[2px]">
                    10+
                  </strong>
                  <span className="text-[11px] text-[#b4bdd1]">
                    Countries Served
                  </span>
                </div>
              </div>
              <div className="flex gap-[10px] items-center border-0">
                <span className="text-[20px] text-[var(--pink)]">↗</span>
                <div>
                  <strong className="block text-[18px] leading-none mb-[2px]">
                    98%
                  </strong>
                  <span className="text-[11px] text-[#b4bdd1]">
                    Client Satisfaction
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <DashboardVisual />
          </motion.div>
        </div>
      </section>

      {/* Booking Form Modal */}
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