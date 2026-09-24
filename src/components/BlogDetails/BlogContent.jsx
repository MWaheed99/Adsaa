export default function ArticleContent({ post, intro, sections }) {
  return (
    <article className="text-right">
     
      <div className="mb-10 rounded-2xl border border-orange-500/30 bg-[linear-gradient(135deg,rgba(249,115,22,0.15),rgba(249,115,22,0.04))] p-6">
        <p className="text-lg italic leading-relaxed text-neutral-300">"{post.excerpt}"</p>
      </div>

      
      <div className="space-y-4">
        {intro.map((text, i) => (
          <p key={i} className="text-lg leading-[30px] text-neutral-300">
            {text}
          </p>
        ))}
      </div>

      
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-14 scroll-mt-24">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/40 bg-orange-500/10 text-orange-500">
              <i className="fa-solid fa-camera"></i>
            </div>
            <h2 className="text-2xl font-bold text-white lg:text-3xl">{section.title}</h2>
          </div>
          <div className="space-y-4">
            {section.paragraphs.map((text, i) => (
              <p key={i} className="text-base leading-7 text-neutral-300">
                {text}
              </p>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
