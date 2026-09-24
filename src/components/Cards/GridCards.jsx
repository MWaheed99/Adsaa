import { Link } from "react-router-dom";

export default function GridCards(props) {
  return <>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {
            props.Data.map((article) => <Link
            key={article.id}
            to={`/blogs/${article.slug}`}
            className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_16px_40px_rgba(249,115,22,0.2)]"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <span className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-bold text-white">
                {article.category}
              </span>
            </div>
            <div className="p-4 text-right">
              <div className="mb-3 flex items-center  gap-2 text-[14px] text-neutral-500">
                <i className="fa-regular fa-clock"></i>
                <span>{article.readTime}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold leading-relaxed text-white transition-colors duration-300 group-hover:text-orange-500">
                {article.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-[16px] font-medium leading-relaxed text-neutral-500">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                
                <div className="flex items-center gap-2">
                  
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="">
                    <p className="text-[11px] font-bold text-white">{article.author.name}</p>
                    <p className="text-[10px] text-neutral-500">{article.author.role}</p>
                  </div>
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10 text-[9px] text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                  <i className="fa-solid fa-chevron-left"></i>
                </span>
              </div>
            </div>
          </Link>
          )
          }

          
        </div>
  </>
}
