import Avatar from "../../assets/photo-1463453091185-61582044d556.jpeg";

export default function JoinUs() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24">
      {/* Orange glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-[832px] rounded-[32px] border border-white/10 bg-[#161616] px-8 py-16 text-center">
        
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff7a00,#ff4d00)] text-2xl text-white shadow-[0_8px_30px_rgba(249,115,22,0.3)]">
          <i className="fa-regular fa-envelope"></i>
        </div>

       
        <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
          اشترك في <span className="text-[#f7931e]">نشرتنا الإخبارية</span>
        </h2>

        <p className="mb-10 text-base text-neutral-500">
          احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
        </p>

        
        <div className="mx-auto mb-7 flex max-w-lg flex-col-reverse gap-3 sm:flex-row">
          
          <input
            type="email"
            placeholder="ادخل بريدك الإلكتروني"
            className="flex-1 rounded-2xl border border-white/10 bg-[#0a0a0a] px-6 py-4 text-right text-sm text-white transition-all duration-300 placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none"
          />
          <button className="h-15 rounded-2xl bg-[linear-gradient(to_right,#ff7a00,#ff4d00)] px-8 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_30px_rgba(249,115,22,0.45)] sm:w-36">
            اشترك الآن
          </button>
        </div>

        
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500">
          
          <div className="flex -space-x-2">
            <img
              src={Avatar}
              alt=""
              className="h-7 w-7 rounded-full border-2 border-[#161616] object-cover"
            />
            <img
              src={Avatar}
              alt=""
              className="h-7 w-7 rounded-full border-2 border-[#161616] object-cover"
            />
            <img
              src={Avatar}
              alt=""
              className="h-7 w-7 rounded-full border-2 border-[#161616] object-cover"
            />
          </div>
          <span>
            انضم لـ <b className="text-white">10,000+</b> مصور
          </span>
          <span className="h-1 w-1 rounded-full bg-neutral-700"></span>
          <span>بدون إزعاج</span>
          <span className="h-1 w-1 rounded-full bg-neutral-700"></span>
          <span>إلغاء الاشتراك في أي وقت</span>

        </div>
      </div>
    </section>
  );
}
