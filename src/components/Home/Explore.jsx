import { Link } from "react-router-dom";

export default function Explore() {
	return (
		<section className="bg-[#111111] px-8 py-20">
			<div className="mx-auto max-w-7xl">
				
				<div className="mb-14 flex flex-col items-center text-center">
					<div className="mb-4 flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-bold text-orange-500">
						<span className="h-2 w-2 rounded-full bg-orange-500"></span>
						<span className="h-2 w-2 rounded-full bg-orange-500"></span>
						<span>التصنيفات</span>
					</div>
					<h2 className="mb-6 text-4xl font-extrabold text-white md:text-6xl">استكشف حسب الموضوع</h2>
					<p className="text-lg text-neutral-500">اعثر على محتوى مصمم حسب اهتماماتك</p>
				</div>

				
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					
					<Link
            to="/blogs?category=تقنيات"
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_12px_40px_rgba(249,115,22,0.3)]"
					>
						<div className="absolute inset-0 bg-[linear-gradient(135deg,#f85a00,#ff9100)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						<span className="absolute left-12 top-12 flex h-8 w-8 -translate-x-2 items-center justify-center rounded-full bg-white/20 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
							<i className="fa-solid fa-chevron-left"></i>
						</span>
						<div className="relative flex flex-col">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-xl text-orange-500 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/20 group-hover:text-white">
								<i className="fa-solid fa-sliders"></i>
							</div>
							<h3 className="text-lg font-bold text-white">تقنيات</h3>
							<p className="mt-1 text-xs text-neutral-500 transition-all duration-300 group-hover:text-white/80">5 مقالة</p>
						</div>
					</Link>

					
					<Link
						to="/blogs?category=مناظر طبيعية"
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_12px_40px_rgba(249,115,22,0.3)]"
					>
						<div className="absolute inset-0 bg-[linear-gradient(135deg,#f85a00,#ff9100)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						<span className="absolute left-12 top-12 flex h-8 w-8 -translate-x-2 items-center justify-center rounded-full bg-white/20 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
							<i className="fa-solid fa-chevron-left"></i>
						</span>
						<div className="relative flex flex-col">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-xl text-orange-500 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/20 group-hover:text-white">
								<i className="fa-solid fa-mountain-sun"></i>
							</div>
							<h3 className="text-lg font-bold text-white">مناظر طبيعية</h3>
							<p className="mt-1 text-xs text-neutral-500 transition-all duration-300 group-hover:text-white/80">2 مقالة</p>
						</div>
					</Link>

					
					<Link
						to="/blogs?category=بورتريه"
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_12px_40px_rgba(249,115,22,0.3)]"
					>
						<div className="absolute inset-0 bg-[linear-gradient(135deg,#f85a00,#ff9100)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						<span className="absolute left-12 top-12 flex h-8 w-8 -translate-x-2 items-center justify-center rounded-full bg-white/20 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
							<i className="fa-solid fa-chevron-left"></i>
						</span>
						<div className="relative flex flex-col">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-xl text-orange-500 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/20 group-hover:text-white">
								<i className="fa-solid fa-user"></i>
							</div>
							<h3 className="text-lg font-bold text-white">بورتريه</h3>
							<p className="mt-1 text-xs text-neutral-500 transition-all duration-300 group-hover:text-white/80">3 مقالة</p>
						</div>
					</Link>

					
					<Link
						to="/blogs?category=إضاءة"
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_12px_40px_rgba(249,115,22,0.3)]"
					>
						<div className="absolute inset-0 bg-[linear-gradient(135deg,#f85a00,#ff9100)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						<span className="absolute left-12 top-12 flex h-8 w-8 -translate-x-2 items-center justify-center rounded-full bg-white/20 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
							<i className="fa-solid fa-chevron-left"></i>
						</span>
						<div className="relative flex flex-col">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-xl text-orange-500 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/20 group-hover:text-white">
								<i className="fa-solid fa-sun"></i>
							</div>
							<h3 className="text-lg font-bold text-white">إضاءة</h3>
							<p className="mt-1 text-xs text-neutral-500 transition-all duration-300 group-hover:text-white/80">3 مقالة</p>
						</div>
					</Link>

					
					<Link
						to="/blogs?category=معدات"
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_12px_40px_rgba(249,115,22,0.3)] lg:col-start-4"
					>
						<div className="absolute inset-0 bg-[linear-gradient(135deg,#f85a00,#ff9100)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
						<span className="absolute left-12 top-12 flex h-8 w-8 -translate-x-2 items-center justify-center rounded-full bg-white/20 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
							<i className="fa-solid fa-chevron-right"></i>
						</span>
						<div className="relative flex flex-col">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-xl text-orange-500 transition-all duration-300 group-hover:border-transparent group-hover:bg-white/20 group-hover:text-white">
								<i className="fa-solid fa-gear"></i>
							</div>
							<h3 className="text-lg font-bold text-white">معدات</h3>
							<p className="mt-1 text-xs text-neutral-500 transition-all duration-300 group-hover:text-white/80">3 مقالة</p>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
