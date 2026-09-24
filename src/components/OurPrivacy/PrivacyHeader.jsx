import { Link } from "react-router-dom";

export default function PrivacyHeader() {
  return (
    <section className="relative flex  items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-16 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="flex flex-col items-center max-w-4xl">
        
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          
          <Link to="/">الرئيسية</Link>
          <i className="fa-solid fa-angle-left text-xs"></i>
          <span className="text-[#f2751a]">سياسة الخصوصية</span>
        </div>

        <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f2751a]/15 text-[#f2751a]">
          <i className="fa-solid fa-lock text-lg"></i>
        </div>

        {/* Title */}
        <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
          سياسة الخصوصية
        </h1>
        <p className="mt-2 text-sm text-gray-400">آخر تحديث: 15 يناير 2026</p>

        
        <div className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-[#f2751a]/30 bg-[#f2751a]/10 p-6">
          <div className="text-right">
            <h3 className="text-base font-semibold text-[#f2751a]">
              خصوصيتك تهمنا
            </h3>
            <p className="mt-1 text-sm text-gray-300">
              نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه
            </p>
          </div>
          <i className="fa-solid fa-shield-halved text-xl text-[#f2751a]"></i>
        </div>
      </div>
    </section>
  );
}
