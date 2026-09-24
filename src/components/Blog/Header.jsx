
export default function Header() {
  return (
    <section className="relative flex  items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-16 text-center">
      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Orange glows */}
      <div className="pointer-events-none absolute left-[10%] top-[10%] h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[10%] h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative flex flex-col items-center">
        
        <div className="mb-10 flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs text-neutral-300">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          <span>مدونتنا</span>
        </div>

        
        <h1 className="mb-6 text-4xl font-extrabold leading-[1.55] text-white sm:text-5xl lg:text-6xl">
          استكشف <span className="text-[#f7931e]">مقالاتنا</span>
          
        </h1>

        
        <p className="mb-12 max-w-2xl text-lg leading-10 text-neutral-500 sm:text-[22px]">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>

        
        
      </div>
      
    </section>
  )
}
