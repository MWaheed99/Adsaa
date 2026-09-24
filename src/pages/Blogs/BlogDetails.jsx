import BlogHero from "../../components/BlogDetails/BlogHero";
import BlogSidebar from "../../components/BlogDetails/BlogSidebar";
import BlogContent from "../../components/BlogDetails/BlogContent";
import BlogExtras from "../../components/BlogDetails/BlogExtras";
import RelatedBlogs from "../../components/BlogDetails/RelatedBlogs";
import { Link, useParams } from "react-router-dom";
import data from "../../data/posts.json"; 
import { parseContent } from "../../components/BlogDetails/parseContent";
export default function BlogDetails() {
  const { slug } = useParams();
  const post = data.posts.find((p) => p.slug === slug);



  if (!post) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[#0a0a0a] text-center">
        <h1 className="text-3xl font-bold text-white">المقال غير موجود</h1>
        <Link to="/blog" className="text-orange-500 transition-all duration-300 hover:brightness-125">
          الرجوع للمدونة
        </Link>
      </div>
    );
  }

  const { intro, sections } = parseContent(post.content);

  // same blog category
  const related = data.posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)
	return (
		<>
			<BlogHero post={post}/>
			<div className="bg-[#0a0a0a]">
        <div className="mx-auto grid max-w-7xl gap-8 px-8 py-12 md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_300px] lg:gap-12">
				<div>
					<BlogContent post={post} intro={intro} sections={sections}/>
					<BlogExtras post={post}/>
				</div>
        <BlogSidebar post={post} sections={sections} />
				
			</div>
			<RelatedBlogs related={related}/>
      </div>
		</>
	);
}
