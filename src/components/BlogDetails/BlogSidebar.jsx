import { Link } from "react-router-dom";

export default function ArticleSidebar({ post, sections }) {
  

  return (
    <aside className="space-y-6 md:sticky md:top-24 md:self-start">
      
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/10 text-orange-500">
            <i className="fa-solid fa-list-ul"></i>
          </div>
          <h3 className="text-sm font-bold text-white">محتويات المقال</h3>
          
        </div>

        <nav className="space-y-4">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group flex items-center gap-3 py-2 text-sm text-neutral-500 transition-all duration-300 ease-in-out hover:-translate-x-1 hover:text-orange-500"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/10 text-xs text-neutral-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                {index + 1}
              </span>
              <span>{section.title}</span>
              
            </a>
          ))}
        </nav>
      </div>

      
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex flex-col items-center gap-1 rounded-xl border border-white/5 bg-black/40 px-2 py-4 text-center">
          <i className="fa-regular fa-calendar text-orange-500"></i>
          <p className="text-sm font-bold text-white">{post.date}</p>
          <p className="text-[10px] text-neutral-600">تاريخ النشر</p>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl border border-white/5 bg-black/40 px-2 py-4 text-center">
          <i className="fa-regular fa-clock text-orange-500"></i>
          <p className="text-sm font-bold text-white">{post.readTime}</p>
          <p className="text-[10px] text-neutral-600">وقت القراءة</p>
        </div>
      </div>

      
      <div className="rounded-2xl border border-orange-500/30 bg-[linear-gradient(135deg,rgba(249,115,22,0.18),rgba(249,115,22,0.05))] p-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/20 text-lg text-orange-500">
          <i className="fa-solid fa-envelope"></i>
        </div>
        <h4 className="mb-2 text-sm font-bold text-white">لا تفوّت جديدنا</h4>
        <p className="mb-5 text-xs text-neutral-500">اشترك للحصول على أحدث المقالات</p>
        <Link
          to="/blog"
          className="block rounded-xl bg-[linear-gradient(to_right,#ff7a00,#ff4d00)] py-3 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_24px_rgba(249,115,22,0.4)]"
        >
          تصفح المزيد
        </Link>
      </div>
    </aside>
  );
}
