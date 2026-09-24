import Statics from '../AboutUs/Statics'

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-16 text-center">
      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Orange glows */}
      <div className="pointer-events-none absolute left-[10%] top-[10%] h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[10%] h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative flex flex-col items-center">
        
        <div className="mb-10 flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs text-neutral-300">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          <span>من نحن</span>
        </div>

        
        <h1 className="mb-6 text-4xl font-extrabold leading-[1.55] text-white sm:text-5xl lg:text-6xl">
        مهمتنا هي<span className="text-[#f7931e]"> الإعلام والإلهام </span>
          
        </h1>

        
        <p className="mb-3 max-w-2xl text-lg leading-10 text-neutral-500 sm:text-[22px]">
        مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة
        </p>
        
        <Statics />
      </div>
      
    </section>
  )
}
