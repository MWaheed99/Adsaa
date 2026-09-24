import { Link } from "react-router-dom";
import Statics from "./Statics";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-16 text-center">
      
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Orange glows */}
      <div className="pointer-events-none absolute left-[10%] top-[10%] h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[10%] h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative flex flex-col items-center">
        
        <div className="mb-10 flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs text-neutral-300">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          <span>مرحباً بك في عدسة</span>
        </div>

        
        <h1 className="mb-6 text-4xl font-extrabold leading-[1.55] text-white sm:text-5xl lg:text-6xl">
          اكتشف <span className="text-[#f7931e]">فن</span>
          <br />
          التصوير الفوتوغرافي
        </h1>

        
        <p className="mb-12 max-w-2xl text-lg leading-10 text-neutral-500 sm:text-[22px]">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
        </p>

        
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          

          <Link
            to="/blogs"
            className="flex h-[58px] items-center gap-3 rounded-full bg-[linear-gradient(to_right,#f97316,#ea580c)] px-10 text-sm font-bold text-white shadow-[0_8px_30px_rgba(249,115,22,0.25)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_36px_rgba(249,115,22,0.5)]"
          >
            <span>استكشف المقالات</span>
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <Link
            to="/about"
            className="flex h-[58px] items-center gap-2 rounded-full border border-white/10 px-8 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:border-orange-500 hover:text-orange-500"
          >
            <span>اعرف المزيد</span>
            <i className="fa-solid fa-circle-info"></i>
          </Link>
        </div>
        <Statics />
      </div>
      
    </section>
  );
}
