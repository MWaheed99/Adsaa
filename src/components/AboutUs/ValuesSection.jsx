

export default function ValuesSection() {

const values = [
  {
    title: "الجودة أولاً",
    desc: "محتوى مدروس وموثوق بخبرة كبيرة",
    icon: "fa-solid fa-star",
  },
  {
    title: "تركيز عملي",
    desc: "أمثلة واقعية بإمكانك تطبيقها اليوم",
    icon: "fa-solid fa-bolt",
  },
  {
    title: "المجتمع",
    desc: "تعلم مع أهم المصورين",
    icon: "fa-solid fa-users",
  },
  {
    title: "دائماً محدث",
    desc: "أحدث الاتجاهات وأفضل الممارسات",
    icon: "fa-solid fa-arrows-rotate",
  },
];

  return (
    <section className="bg-[#0b0b0b] py-20 px-4">
      <div className="mx-auto max-w-6xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#f2751a]/15 px-4 py-1.5 text-sm font-medium text-[#f2751a]">
          <i className="fa-solid fa-circle-dot text-xs"></i> قيمنا
        </span>

        <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
          <span className="text-[#f2751a]">|</span> قيمنا <span className="text-[#f2751a]">|</span>
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm text-gray-400 sm:text-base">
          المبادئ التي نوجه كل ما نقوم بإنشائه
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#151515] p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2751a]/15 text-[#f2751a]">
                <i className={`${v.icon} text-lg`}></i>
              </div>
              <h3 className="text-base font-semibold text-white">{v.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
