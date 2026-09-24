// بيحوّل نص الـ content لمقدمة + أقسام
// كل سطر بيبدأ بـ "## " هو عنوان قسم، والنص اللي بعده هو فقرات القسم
export function parseContent(content) {
  const [intro, ...blocks] = content.split("\n\n## ");

  const sections = blocks.map((block, index) => {
    const [title, ...paragraphs] = block.split("\n\n");
    return { id: `section-${index + 1}`, title, paragraphs };
  });

  return { intro: intro.split("\n\n"), sections };
}
