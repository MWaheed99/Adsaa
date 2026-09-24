import { Link } from "react-router-dom";

export default function ArticleHero({ post }) {
  

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay fading into the page background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.15)_0%,rgba(10,10,10,0.45)_55%,#0a0a0a_100%)]" />

      <div className="relative mx-auto max-w-7xl px-8 pb-24 pt-8">
        
        <div className="flex">
          <nav className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm backdrop-blur-md">
            <Link
              to="/"
              className="text-white transition-colors duration-300 hover:text-orange-500"
            >
              <i className="fa-solid fa-house"></i>
            </Link>
            <i className="fa-solid fa-chevron-left text-[10px] text-neutral-400"></i>
            
            <Link
              to="/blogs"
              className="text-neutral-300 transition-colors duration-300 hover:text-orange-500"
            >
              المدونة
            </Link>
            <i className="fa-solid fa-chevron-left text-[10px] text-neutral-400"></i>
            
            <Link
              to={`/blogs?category=${post.category}`}
              className="font-medium text-orange-500 transition-all duration-300 hover:brightness-125"
            >
              {post.category}
            </Link>
            
            
          </nav>
        </div>

        
        <div className="ml-auto mt-14 max-w-4xl lg:mr-24">
          
          <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-neutral-300">
            <Link
              to={`/blog?category=${post.category}`}
              className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white shadow-[0_4px_20px_rgba(249,115,22,0.4)] transition-all duration-300 ease-in-out hover:scale-105"
            >
              {post.category}
            </Link>
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-calendar"></i>
              <span>{post.date}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-clock"></i>
              <span>{post.readTime}</span>
            </div>
          </div>

          
          <h1 className="mb-10 text-right text-3xl font-extrabold leading-[1.3] text-white sm:text-4xl md:text-[56px]">
            {post.title}
          </h1>

          
          <div className="flex">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md transition-all duration-300 ease-in-out hover:border-orange-500/40">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-[58px] w-[58px] rounded-full border-2 border-orange-500 object-cover"
              />
              <div className="text-right">
                <p className="text-sm font-bold text-white">{post.author.name}</p>
                <p className="text-sm text-neutral-400">{post.author.role}</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
