import Link from "next/link";
import DashboardVisual from "./DashboardVisual"; // Import path അനുസരിച്ച് മാറ്റുക

export default function Hero() {
  return (
    <section className="relative w-[min(1440px,92vw)] mx-auto z-10 flex flex-col justify-center min-h-[calc(100vh-76px)] py-4 sm:py-2 overflow-x-clip" id="home">
      <div className="grid grid-cols-1 xl:grid-cols-[46%_54%] items-center my-auto gap-6 xl:gap-0">
        <div className="pt-1 xl:pt-0">
          {/* Eyebrow */}
          <div className="text-[12px] md:text-[14px] tracking-[2.5px] font-semibold mb-[8px] bg-clip-text text-transparent bg-gradient-to-r from-[#4a7cff] via-[#b547ff] to-[var(--pink)]">
            THINK. BUILD. GROW.
          </div>
          <div className="w-[26px] h-[2px] bg-[var(--pink)] mb-[12px]"></div>
          
          {/* Heading */}
          <h1 className="font-[800] text-[clamp(32px,8vw,48px)] md:text-[clamp(36px,3.4vw,52px)] leading-[1.05] tracking-[-1.5px] md:tracking-[-2px] m-0 mb-[14px] max-w-[640px]">
            Technology <br className="block sm:hidden" /> That<br />
            Helps <br className="block sm:hidden" /> Businesses<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#245bff] via-[#b547ff] to-[var(--pink)]">
              Think Bigger, <br className="block sm:hidden" /> Build Smarter
            </span>
            <br />
            and <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#245bff] via-[#b547ff] to-[var(--pink)]">
              Grow <br className="block sm:hidden" /> Faster.
            </span>
          </h1>
          
          {/* Description Paragraph */}
          <p className="max-w-[560px] text-[var(--muted)] text-[13px] md:text-[15px] leading-[1.5] mb-[18px]">
            We design intelligent websites, build powerful software, create
            custom CRM solutions and deliver digital growth strategies for
            ambitious businesses worldwide.
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-[12px] flex-wrap md:flex-nowrap">
            <Link className="inline-flex items-center justify-center gap-[10px] border-0 text-white bg-gradient-to-r from-[var(--pink)] via-[#f11583] to-[var(--violet)] py-[11px] px-[20px] rounded-[12px] font-extrabold text-[12px] md:text-[13px] tracking-[0.2px] shadow-[0_12px_28px_rgba(255,0,82,0.22)] hover:-translate-y-[2px] transition-all duration-300 w-full md:w-auto cursor-pointer" href="#contact">
              BOOK FREE CONSULTATION <span>↗</span>
            </Link>
            <Link className="inline-flex items-center justify-center gap-[10px] py-[11px] px-[18px] rounded-[12px] border border-white/45 bg-[#09122a7a] text-white font-extrabold text-[12px] md:text-[13px] backdrop-blur-md hover:border-[var(--pink)] hover:-translate-y-[2px] transition-all duration-300 w-full md:w-auto cursor-pointer" href="#services">
              EXPLORE OUR SERVICES <span className="w-[20px] h-[20px] border border-white/45 rounded-full grid place-items-center text-[9px]">▶</span>
            </Link>
          </div>
          
          {/* Stats Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] md:gap-0 mt-[20px] md:border-t md:border-[var(--line)] md:pt-[14px] max-w-none md:max-w-[600px]">
            <div className="flex gap-[10px] items-center border-0 md:pr-[10px] md:border-r md:border-[var(--line)]">
              <span className="text-[20px] text-[var(--pink)]">♙</span>
              <div>
                <strong className="block text-[18px] leading-none mb-[2px]">120+</strong>
                <span className="text-[11px] text-[#b4bdd1]">Happy Clients</span>
              </div>
            </div>
            <div className="flex gap-[10px] items-center border-0 md:pr-[10px] md:border-r md:border-[var(--line)]">
              <span className="text-[20px] text-[var(--pink)]">🚀</span>
              <div>
                <strong className="block text-[18px] leading-none mb-[2px]">250+</strong>
                <span className="text-[11px] text-[#b4bdd1]">Projects Delivered</span>
              </div>
            </div>
            <div className="flex gap-[10px] items-center border-0 md:pr-[10px] md:border-r md:border-[var(--line)]">
              <span className="text-[20px] text-[var(--pink)]">◎</span>
              <div>
                <strong className="block text-[18px] leading-none mb-[2px]">10+</strong>
                <span className="text-[11px] text-[#b4bdd1]">Countries Served</span>
              </div>
            </div>
            <div className="flex gap-[10px] items-center border-0">
              <span className="text-[20px] text-[var(--pink)]">↗</span>
              <div>
                <strong className="block text-[18px] leading-none mb-[2px]">98%</strong>
                <span className="text-[11px] text-[#b4bdd1]">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Side Container extracted as a separate component */}
        <DashboardVisual />
      </div>
    </section>
  );
}