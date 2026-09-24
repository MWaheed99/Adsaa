import { Link } from "react-router-dom";

export default function RelatedArticles({ related }) {
  if (related.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-8 pb-20">
      <div className="border-t border-white/10 pt-10">
        
        <div className="mb-8 flex items-center justify-between">
          

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/10 text-orange-500">
              <i className="fa-regular fa-images"></i>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-white">مقالات قد تعجبك</h2>
              <p className="text-xs text-neutral-500">استكشف المزيد من المحتوى المميز</p>
            </div>
            
          </div>

          <Link
            to="/blogs"
            className="group flex items-center gap-2 text-sm text-orange-500 transition-all duration-300 hover:brightness-125"
          >
            <span>عرض الكل</span>
            <i className="fa-solid fa-arrow-left transition-transform duration-300 group-hover:-translate-x-1"></i>
          </Link>
        </div>

        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.id}
              to={`/blogs/${item.slug}`}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_16px_40px_rgba(249,115,22,0.2)]"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <span className="absolute right-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold text-white">
                  {item.category}
                </span>
              </div>
              <div className="p-4 text-right">
                <h3 className="mb-4 min-h-[44px] text-sm font-bold leading-relaxed text-white transition-colors duration-300 group-hover:text-orange-500">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.author.avatar}
                      alt={item.author.name}
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span>{item.author.name}</span>
                  </div>
                  <span>{item.readTime}</span>
                  
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
