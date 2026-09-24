export default function ArticleExtras({ post }) {
  return (
    <div className="mt-12 space-y-5">
      
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/10 text-sm text-orange-500">
            <i className="fa-solid fa-tags"></i>
          </div>
          <h3 className="text-sm font-bold text-white">الوسوم</h3>

        </div>
        <div className="flex flex-wrap gap-3">
          {post.tags
            .slice()
            .map((tag) => (
              <span
                key={tag}
                className="cursor-pointer rounded-full border border-white/15 px-4 py-1.5 text-xs text-neutral-400 transition-all duration-300 ease-in-out hover:border-orange-500 hover:text-orange-500"
              >
                #{tag}
              </span>
            ))}
        </div>
      </div>

      
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/10 text-sm text-orange-500">
            <i className="fa-solid fa-share-nodes"></i>
          </div>
          <h3 className="text-sm font-bold text-white">شارك المقال</h3>
        </div>
        <div className="flex gap-3">
          <a
            href="#"
            aria-label="نسخ الرابط"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-neutral-400 transition-all duration-300 ease-in-out hover:scale-110 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <i className="fa-solid fa-link"></i>
          </a>
          <a
            href="#"
            aria-label="واتساب"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-neutral-400 transition-all duration-300 ease-in-out hover:scale-110 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="#"
            aria-label="لينكدإن"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-neutral-400 transition-all duration-300 ease-in-out hover:scale-110 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            aria-label="X"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-neutral-400 transition-all duration-300 ease-in-out hover:scale-110 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>

        
      </div>

      
      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
         <img
          src={post.author.avatar.replace("w=100&h=100", "w=200&h=200")}
          alt={post.author.name}
          className="h-20 w-20 shrink-0 rounded-2xl border-2 border-orange-500/60 object-cover"
        />
        <div className="text-right">
          <p className="mb-1 text-[11px] font-bold text-orange-500">كاتب المقال</p>
          <h3 className="text-xl font-bold text-white">{post.author.name}</h3>
          <p className="mb-2 text-xs text-neutral-500">{post.author.role}</p>
          <p className="text-xs leading-6 text-neutral-400">
            مصور شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
          </p>
        </div>
       
      </div>
    </div>
  );
}
