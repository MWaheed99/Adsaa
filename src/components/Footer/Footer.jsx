import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-right text-neutral-400  border-t-1 border-white/10">
      {/* توهج خفيف في الخلفية */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.07),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-8 pt-16">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 md:grid-cols-4">
          {/* البراند */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-2xl font-bold text-white shadow-[0_0_24px_rgba(249,115,22,0.4)]">
                ع
              </div>
              <h3 className="text-xl font-bold text-white">عدسة</h3>
              
            </div>
            <p className="mb-6 text-sm leading-7 text-neutral-500">
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار
              المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-500 transition-all duration-300 ease-in-out hover:scale-110 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-500 transition-all duration-300 ease-in-out hover:scale-110 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-500 transition-all duration-300 ease-in-out hover:scale-110 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-500 transition-all duration-300 ease-in-out hover:scale-110 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          

          {/* استكشف */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-400" />
              <h4 className="text-[15px] font-bold text-white">استكشف</h4>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="group flex cursor-pointer items-center gap-2 pr-2 text-neutral-500 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:text-orange-500">
                <i className="fa-solid fa-angle-left icon"></i>
                <span>الرئيسية</span>
              </li>
              <li className="group flex cursor-pointer items-center gap-2 pr-2 text-neutral-500 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:text-orange-500">
                <i className="fa-solid fa-angle-left icon"></i>
                <span>المدونة</span>
              </li>
              <li className="group flex cursor-pointer items-center gap-2 pr-2 text-neutral-500 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:text-orange-500">
                <i className="fa-solid fa-angle-left icon"></i>
                <span>من نحن</span>
              </li>
            </ul>
          </div>

          {/* التصنيفات */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-400" />
              <h4 className="text-[15px] font-bold text-white">التصنيفات</h4>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="group flex cursor-pointer items-center gap-2 pr-2 text-neutral-500 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:text-orange-500">
                <i className="fa-solid fa-angle-left icon"></i>
                <span>إضاءة</span>
              </li>
              <li className="group flex cursor-pointer items-center gap-2 pr-2 text-neutral-500 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:text-orange-500">
                <i className="fa-solid fa-angle-left icon"></i>
                <span>بورتريه</span>
              </li>
              <li className="group flex cursor-pointer items-center gap-2 pr-2 text-neutral-500 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:text-orange-500">
                <i className="fa-solid fa-angle-left icon"></i>
                <span>مناظر طبيعية</span>
              </li>
              <li className="group flex cursor-pointer items-center gap-2 pr-2 text-neutral-500 transition-all duration-300 ease-in-out hover:-translate-x-2 hover:text-orange-500">
                <i className="fa-solid fa-angle-left icon"></i>
                <span>تقنيات</span>
              </li>
            </ul>
          </div>

          
          {/* النشرة البريدية */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-8 bg-orange-400" />
              <h4 className="text-[15px] font-bold text-white">ابق على اطلاع</h4>
            </div>
            <p className="mb-5 text-sm leading-7 text-neutral-500">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <input
              type="email"
              placeholder="ادخل بريدك الإلكتروني"
              className="mb-3 h-[46px] w-full rounded-xl border border-white/10 bg-white/5 px-4 text-right text-xs text-white transition-all duration-300 placeholder:text-neutral-600 focus:border-orange-500 focus:outline-none"
            />
            <button className="h-[52px] w-full rounded-full bg-[linear-gradient(to_right,#f97316,#ea580c)] text-sm font-bold text-white transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-[0_8px_24px_rgba(249,115,22,0.4)]">
              اشترك
            </button>
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-6 text-sm text-neutral-500 md:flex-row">
          <p>
            © 2026 عدسة. صنع بكل <i className="fa-solid fa-heart text-orange-500"></i> جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="transition-all duration-300 hover:text-orange-500">شروط الخدمة</Link>
            <Link to="/privacy" className="transition-all duration-300 hover:text-orange-500">سياسة الخصوصية</Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
