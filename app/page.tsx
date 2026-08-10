import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Container headerikku vendi */}
     <div className="min-h-screen w-full overflow-y-auto relative bg-[radial-gradient(circle_at_82%_52%,rgba(36,91,255,0.18),transparent_28%),radial-gradient(circle_at_70%_75%,rgba(255,0,82,0.12),transparent_24%),linear-gradient(135deg,#030611_0%,#040918_48%,#07122a_100%)] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] before:bg-[size:48px_48px] before:pointer-events-none before:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),rgba(0,0,0,0.15))]">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%22180%22_height=%22180%22_viewBox=%220_0_180_180%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%22.9%22_numOctaves=%222%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%22.35%22/%3E%3C/svg%3E')]"></div>

      <Header />
      <Hero />
    </div>
    </main>
  );
}