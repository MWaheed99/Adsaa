import { Link } from "react-router-dom";

export default function VerticalCards(props) {
  return <>
  {props.Data.map((article) => <div key={article.id} className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:min-h-[242px] md:grid-cols-2 mb-4">
          
          {/* Image */}
          <div className="relative h-56 md:h-auto">
            <img
              src={article.image}
              alt="الساعة الذهبية"
              alt="الساعة الذهبية"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute right-3 top-3 flex items-center gap-1 rounded-xl bg-orange-500 px-4 py-2 text-[10px] font-bold text-white">
              <i className="fa-solid fa-star"></i>
              <span>مميز</span>
            </span>
          </div>
          
          {/* Content */}
          <div className="flex flex-col justify-between gap-20 p-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-[20px] border border-orange-500/30 bg-orange-500/10 px-2 py-1 text-[14px] font-bold text-orange-500">
                  {article.category}
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                  <i className="fa-regular fa-clock"></i>
                  <span className="text-[14px]">{article.readTime}</span>
                </div>
                
              </div>

              <h3 className="mb-3 text-xl md:text-3xl font-bold text-white">
                {article.title}
              </h3>

              <p className="text-l leading-relaxed text-neutral-500">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={article.author.avatar}
                    alt="سالم أحمد"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <span className="absolute -bottom-0.5 -left-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#141414] bg-orange-500"></span>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-white">{article.author.name}</p>
                  <p className="text-[10px] text-neutral-500">{article.date}</p>
                </div>
                
              </div>
              {/* Read more */}
              <Link
                to={`/blogs/${article.slug}`}
                className="flex items-center gap-2 text-xs font-bold text-orange-500 transition-all duration-300 hover:brightness-125"
              >
                <span>اقرأ المقال</span>
                <i className="fa-solid fa-arrow-left transition-transform duration-300 group-hover:-translate-x-1"></i>
              </Link>

              
            </div>
          </div>

          
        </div>)}
  </>
    
  
}
