import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-[#e04b06] via-[#f2751a] to-[#b33b04]">
      <div className="mx-auto max-w-6xl px-6 py-14 text-center sm:px-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
          نحب أن نستمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد اقتراح موضوع، أو فقط تريد قول مرحباً - نحن هنا للتواصل
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" className="flex items-center gap-2 rounded-xl bg-[#171717] px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-black hover:shadow-lg hover:shadow-black/30">
            تواصل معنا
            <i className="fa-solid fa-envelope text-sm"></i>
          </button>

          <Link to="/blogs" className="rounded-xl border border-white/70 px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white/15">
            تصفح المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}
