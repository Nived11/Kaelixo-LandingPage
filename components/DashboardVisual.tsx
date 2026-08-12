"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function DashboardVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visual = visualRef.current;
    const dashboard = dashboardRef.current;
    if (!visual || !dashboard) return;

    function fitMobileDashboard() {
      if (window.innerWidth < 1280) {
        const baseWidth = 660; 
        const parentWidth = visual!.clientWidth; 
        const scale = parentWidth / baseWidth; 
        
        dashboard!.style.transform = `translateX(-50%) scale(${scale})`;
        visual!.style.height = `${Math.ceil(430 * scale + 20)}px`;
      } else {
        dashboard!.style.transform = "";
        visual!.style.height = "";
      }
    }
    
    fitMobileDashboard();
    window.addEventListener("resize", fitMobileDashboard);

    const handleMouseMove = (e: MouseEvent) => {
      const r = visual.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      dashboard.style.animation = "none";
      dashboard.style.transform = `rotateY(${-10 + x * 7}deg) rotateX(${
        5 - y * 5
      }deg) translate(${x * 9}px,${y * 9}px)`;
    };

    const handleMouseLeave = () => {
      dashboard.style.animation = "dashboardFloat 7s ease-in-out infinite";
      dashboard.style.transform = "";
    };

    if (window.matchMedia("(pointer:fine)").matches) {
      visual.addEventListener("mousemove", handleMouseMove);
      visual.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("resize", fitMobileDashboard);
      visual.removeEventListener("mousemove", handleMouseMove);
      visual.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className="relative h-[280px] sm:h-[340px] md:h-[400px] xl:h-[500px] mt-[40px] xl:mt-0 xl:perspective-[1300px] order-last xl:order-none overflow-hidden xl:overflow-visible" 
      id="visual" 
      ref={visualRef}
    >
      {/* Globe Visual */}
      <div className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] xl:w-[460px] xl:h-[460px] rounded-full left-1/2 -translate-x-1/2 sm:right-[-60px] sm:translate-x-0 xl:right-[-80px] top-[20px] xl:top-[10px] bg-[radial-gradient(circle_at_36%_32%,rgba(36,91,255,0.26),transparent_30%),repeating-radial-gradient(circle_at_center,transparent_0_31px,rgba(45,117,255,0.16)_33px_34px),repeating-linear-gradient(90deg,transparent_0_31px,rgba(255,0,82,0.08)_32px_33px)] border border-[rgba(67,113,255,0.14)] drop-shadow-[0_0_65px_rgba(38,86,255,0.16)] animate-[spin_48s_linear_infinite] after:content-[''] after:absolute after:inset-[18%] after:rounded-full after:border after:border-dashed after:border-[rgba(255,0,82,0.25)] pointer-events-none"></div>
      
      {/* Red Glowing Ring Accent */}
      <div className="absolute left-1/3 -translate-x-1/2 bottom-[10px] w-[160px] sm:w-[220px] xl:w-[340px] xl:right-[40px] xl:translate-x-0 xl:bottom-[10px] h-[35px] sm:h-[45px] rounded-[50%] border-[2px] border-[rgba(255,0,82,0.45)] shadow-[0_0_35px_var(--pink),inset_0_0_25px_rgba(36,91,255,0.35)] [transform:rotateX(75deg)] animate-[ringPulse_3.5s_ease-in-out_infinite] pointer-events-none"></div>
      
      {/* Orbs */}
      <span className="hidden xl:block absolute rounded-full blur-[0.3px] animate-[orbFloat_8s_ease-in-out_infinite] w-[20px] h-[20px] bg-gradient-to-br from-[var(--pink)] to-[var(--violet)] right-[10px] top-[160px]"></span>
      <span className="hidden xl:block absolute rounded-full blur-[0.3px] animate-[orbFloat_8s_ease-in-out_infinite] [animation-delay:-3s] w-[14px] h-[14px] bg-gradient-to-br from-[var(--blue)] to-[var(--pink)] left-[60px] top-[100px]"></span>
      <span className="hidden xl:block absolute rounded-full blur-[0.3px] animate-[orbFloat_8s_ease-in-out_infinite] [animation-delay:-5s] w-[10px] h-[10px] bg-[var(--cyan)] left-[170px] bottom-[30px]"></span>

      {/* Floating Cards */}
      <div className="hidden xl:block absolute w-[140px] p-[10px] rounded-[14px] bg-gradient-to-br from-[rgba(20,30,66,0.82)] to-[rgba(10,18,42,0.72)] border border-[rgba(122,83,255,0.38)] shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-[18px] z-[3] animate-[cardFloat_6s_ease-in-out_infinite] left-[0px] top-[180px] [animation-delay:-1.2s]">
        <div className="text-[18px] text-[var(--pink)] mb-[3px]">⌘</div>
        <strong className="text-[12px]">Custom Solutions</strong>
        <p className="text-[var(--muted)] text-[10px] leading-[1.3] mt-[2px]">Scalable, secure and future-ready systems.</p>
      </div>
      <div className="hidden xl:block absolute w-[140px] p-[10px] rounded-[14px] bg-gradient-to-br from-[rgba(20,30,66,0.82)] to-[rgba(10,18,42,0.72)] border border-[rgba(122,83,255,0.38)] shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-[18px] z-[3] animate-[cardFloat_6s_ease-in-out_infinite] right-[0px] top-[10px] [animation-delay:-2.8s]">
        <div className="text-[18px] text-[var(--pink)] mb-[3px]">◉</div>
        <strong className="text-[12px]">Digital Growth</strong>
        <p className="text-[var(--muted)] text-[10px] leading-[1.3] mt-[2px]">Data-driven strategies that deliver real results.</p>
      </div>
      <div className="hidden xl:block absolute w-[140px] p-[10px] rounded-[14px] bg-gradient-to-br from-[rgba(20,30,66,0.82)] to-[rgba(10,18,42,0.72)] border border-[rgba(122,83,255,0.38)] shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-[18px] z-[3] animate-[cardFloat_6s_ease-in-out_infinite] right-[10px] bottom-[10px] [animation-delay:-4s]">
        <div className="text-[18px] text-[var(--pink)] mb-[3px]">◇</div>
        <strong className="text-[12px]">End-to-End Support</strong>
        <p className="text-[var(--muted)] text-[10px] leading-[1.3] mt-[2px]">From strategy to launch and beyond.</p>
      </div>

      {/* Dashboard Container */}
      <div 
        className="absolute top-[0px] xl:top-[5px] left-[50%] xl:left-auto xl:right-[10px] w-[660px] h-[430px] xl:[transform:rotateY(-10deg)_rotateX(5deg)] preserve-3d xl:animate-[dashboardFloat_7s_ease-in-out_infinite] transition-transform duration-[0.16s] ease-out origin-top" 
        id="dashboard" 
        ref={dashboardRef}
      >
        <div className="w-full h-full rounded-[22px] p-[18px] bg-gradient-to-br from-[#0a122bf9] to-[#070d1ff0] border border-[#7b8eff5c] shadow-[0_30px_90px_rgba(0,0,0,0.5),inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-[18px] grid grid-cols-[120px_1fr] gap-[14px] overflow-hidden">
          <aside className="border-r border-[var(--line)] pr-[10px]">
            <div className="mb-[20px] flex items-center justify-start">
              <Image 
                src="/kaelixo-fulllogo.png" 
                alt="Kaelixo Logo" 
                width={70} 
                height={25} 
                className="object-contain"
              />
            </div>
            <div className="px-[8px] py-[9px] text-white bg-gradient-to-r from-[rgba(122,66,255,0.72)] to-[rgba(255,0,82,0.18)] rounded-[8px] text-[11px] my-[4px]">▣ Dashboard</div>
            <div className="px-[8px] py-[9px] text-[#77829b] rounded-[8px] text-[11px] my-[4px]">⌁ Analytics</div>
            <div className="px-[8px] py-[9px] text-[#77829b] rounded-[8px] text-[11px] my-[4px]">□ Projects</div>
            <div className="px-[8px] py-[9px] text-[#77829b] rounded-[8px] text-[11px] my-[4px]">♙ Clients</div>
            <div className="px-[8px] py-[9px] text-[#77829b] rounded-[8px] text-[11px] my-[4px]">₹ Revenue</div>
            <div className="px-[8px] py-[9px] text-[#77829b] rounded-[8px] text-[11px] my-[4px]">✉ Messages</div>
            <div className="px-[8px] py-[9px] text-[#77829b] rounded-[8px] text-[11px] my-[4px]">▤ Reports</div>
            <div className="px-[8px] py-[9px] text-[#77829b] rounded-[8px] text-[11px] my-[4px]">⚙ Settings</div>
          </aside>
          <main className="flex flex-col gap-[12px]">
            <div className="flex justify-between items-center">
              <strong className="text-[16px]">Business Growth</strong>
              <span className="text-[10px] text-[#8d96ac]">THIS YEAR ▾</span>
            </div>
            <div className="grid grid-cols-[1.5fr_0.75fr_0.75fr_0.75fr_0.75fr] gap-[8px]">
              <div className="bg-gradient-to-br from-[rgba(22,34,66,0.82)] to-[rgba(11,20,46,0.68)] border border-white/5 rounded-[10px] p-[12px]">
                <h3 className="text-[13px] m-0 mb-[3px]">Business Growth</h3>
                <b className="text-[24px] text-[var(--pink)]">+245%</b>
                <div className="h-[80px] relative mt-[2px] overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="g" x1="0" x2="1">
                        <stop stopColor="#7a42ff" />
                        <stop offset="1" stopColor="#ff0052" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 95 C45 55,70 100,110 70 S170 18,205 57 S270 96,305 55 S360 74,400 20"
                      fill="none"
                      stroke="url(#g)"
                      strokeWidth="5"
                      className="[stroke-dasharray:700] [stroke-dashoffset:700] animate-[draw_3s_ease_forwards_0.7s]"
                    />
                    <path
                      d="M0 95 C45 55,70 100,110 70 S170 18,205 57 S270 96,305 55 S360 74,400 20 L400 120 L0 120 Z"
                      fill="url(#g)"
                      opacity=".12"
                    />
                  </svg>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[rgba(22,34,66,0.82)] to-[rgba(11,20,46,0.68)] border border-white/5 rounded-[10px] p-[12px]">
                <span className="text-[9px] text-[#8290aa]">Total Projects</span>
                <strong className="text-[15px] block my-[6px] mb-[3px]">128</strong>
                <em className="text-[#36db8a] text-[9px] not-italic">+18%</em>
              </div>
              <div className="bg-gradient-to-br from-[rgba(22,34,66,0.82)] to-[rgba(11,20,46,0.68)] border border-white/5 rounded-[10px] p-[12px]">
                <span className="text-[9px] text-[#8290aa]">Active Clients</span>
                <strong className="text-[15px] block my-[6px] mb-[3px]">86</strong>
                <em className="text-[#36db8a] text-[9px] not-italic">+12%</em>
              </div>
              <div className="bg-gradient-to-br from-[rgba(22,34,66,0.82)] to-[rgba(11,20,46,0.68)] border border-white/5 rounded-[10px] p-[12px]">
                <span className="text-[9px] text-[#8290aa]">Total Revenue</span>
                <strong className="text-[15px] block my-[6px] mb-[3px]">₹24.8M</strong>
                <em className="text-[#36db8a] text-[9px] not-italic">+32%</em>
              </div>
              <div className="bg-gradient-to-br from-[rgba(22,34,66,0.82)] to-[rgba(11,20,46,0.68)] border border-white/5 rounded-[10px] p-[12px]">
                <span className="text-[9px] text-[#8290aa]">Active Users</span>
                <strong className="text-[15px] block my-[6px] mb-[3px]">1,248</strong>
                <em className="text-[#36db8a] text-[9px] not-italic">+28%</em>
              </div>
            </div>
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-[10px]">
              <section className="bg-[rgba(12,23,52,0.78)] border border-white/5 rounded-[10px] p-[12px] min-h-[125px]">
                <div className="text-[10px] text-[#99a4bb]">Performance Overview</div>
                <div className="h-[75px] flex gap-[6px] items-end">
                  <i className="w-[12%] rounded-t-[4px] rounded-b-[2px] bg-gradient-to-b from-[var(--pink)] to-[var(--violet)] animate-[bar_3s_ease-in-out_infinite_alternate] origin-bottom h-[38%]"></i>
                  <i className="w-[12%] rounded-t-[4px] rounded-b-[2px] bg-gradient-to-b from-[var(--pink)] to-[var(--violet)] animate-[bar_3s_ease-in-out_infinite_alternate] origin-bottom h-[58%] [animation-delay:0.2s]"></i>
                  <i className="w-[12%] rounded-t-[4px] rounded-b-[2px] bg-gradient-to-b from-[var(--pink)] to-[var(--violet)] animate-[bar_3s_ease-in-out_infinite_alternate] origin-bottom h-[76%] [animation-delay:0.4s]"></i>
                  <i className="w-[12%] rounded-t-[4px] rounded-b-[2px] bg-gradient-to-b from-[var(--pink)] to-[var(--violet)] animate-[bar_3s_ease-in-out_infinite_alternate] origin-bottom h-[48%] [animation-delay:0.6s]"></i>
                  <i className="w-[12%] rounded-t-[4px] rounded-b-[2px] bg-gradient-to-b from-[var(--pink)] to-[var(--violet)] animate-[bar_3s_ease-in-out_infinite_alternate] origin-bottom h-[88%] [animation-delay:0.8s]"></i>
                  <i className="w-[12%] rounded-t-[4px] rounded-b-[2px] bg-gradient-to-b from-[var(--pink)] to-[var(--violet)] animate-[bar_3s_ease-in-out_infinite_alternate] origin-bottom h-[68%] [animation-delay:1s]"></i>
                </div>
              </section>
              <section className="bg-[rgba(12,23,52,0.78)] border border-white/5 rounded-[10px] p-[12px] min-h-[125px]">
                <div className="text-[10px] text-[#99a4bb]">Active Team</div>
                <div className="flex mt-[12px]">
                  <span className="w-[30px] h-[30px] rounded-full grid place-items-center bg-gradient-to-br from-[#2f4db7] to-[#9b41ff] border-2 border-[#0b1530] text-[9px]">VS</span>
                  <span className="w-[30px] h-[30px] rounded-full grid place-items-center bg-gradient-to-br from-[#2f4db7] to-[#9b41ff] border-2 border-[#0b1530] -ml-[6px] text-[9px]">LK</span>
                  <span className="w-[30px] h-[30px] rounded-full grid place-items-center bg-gradient-to-br from-[#2f4db7] to-[#9b41ff] border-2 border-[#0b1530] -ml-[6px] text-[9px]">SW</span>
                  <span className="w-[30px] h-[30px] rounded-full grid place-items-center bg-gradient-to-br from-[#2f4db7] to-[#9b41ff] border-2 border-[#0b1530] -ml-[6px] text-[9px]">AN</span>
                </div>
                <p className="text-[#8e99b2] text-[10px] leading-[1.4] mt-2">
                  Design, development, products and growth teams working together.
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}