import Data from "../../data/posts.json";

const socials = ["fa-brands fa-linkedin-in", "fa-brands fa-github", "fa-brands fa-x-twitter"];

export default function WritersSection() {
  return (
    <section className="bg-[#0b0b0b] py-20 px-4">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#f2751a]/15 px-4 py-1.5 text-sm font-medium text-[#f2751a]">
          فريقنا
        </span>

        <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
          تعرف على كتابنا
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm text-gray-400 sm:text-base">
          فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {Data.posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-[#151515] p-8"
            >
              <div className="relative mb-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-white/10"
                />
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#f2751a] ring-2 ring-[#151515]">
                  <i className="fa-solid fa-check text-xs text-white"></i>
                </span>
              </div>

              <h3 className="text-base font-semibold text-white">{post.author.name}</h3>
              <p className="mt-1 text-sm text-[#f2751a]">{post.author.role}</p>

              <div className="mt-4 flex items-center gap-2">
                {socials.map((s, j) => (
                  <span
                    key={j}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-gray-400"
                  >
                    <i className={`${s} text-sm`}></i>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
