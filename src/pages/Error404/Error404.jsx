import { Link } from "react-router-dom";

export default function Error404() {
	return (
		<div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] px-4 text-white">
			
			<div
				className="absolute inset-0 opacity-70"
				style={{
					backgroundImage: `
            linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
					backgroundSize: "60px 60px",
				}}
			/>

			{/* Center Orange Glow */}
			<div
				className="absolute left-1/2 top-[45%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[100px]"
				style={{
					background: "radial-gradient(circle, rgba(255,111,0,0.18) 0%, rgba(255,111,0,0.05) 45%, transparent 70%)",
				}}
			/>

			
			<main className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
				{/* 404 */}
				<h1
					 className="select-none text-[150px] font-black leading-none tracking-[-8px] sm:text-[170px] md:text-[180px]"
					style={{
						background: "linear-gradient(135deg, #ff8a00 0%, #ffad00 50%, #ff7100 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					404
				</h1>

				
				<div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#ff8a00]/40 bg-[#5b3508]/30">
					<i className="fa-regular fa-face-frown text-[44px] text-[#ff7200]" />
				</div>

				
				<h2 className="mt-8 text-[25px] font-bold leading-tight text-white sm:text-[27px]">عفواً! الصفحة غير موجودة</h2>

				
				<p className="mt-5 max-w-[560px] text-[16px] font-normal leading-8 text-[#777]">
					الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى
					<br className="hidden sm:block" />
					المسار الصحيح.
				</p>

				
				<div className="mt-8 flex flex-col-reverse items-center gap-3 sm:flex-row">
					
          <Link
            to="/"
						className="flex h-[58px] min-w-[205px] items-center justify-center gap-3 rounded-full bg-[#ff6b00] px-7 text-[15px] font-bold text-white shadow-[0_8px_30px_rgba(255,107,0,0.15)] transition-all duration-300 hover:bg-[#ff7b1a] hover:shadow-[0_8px_35px_rgba(255,107,0,0.25)]"
					>
						<span>الذهاب للرئيسية</span>

						<i className="fa-solid fa-house text-[14px]" />
					</Link>
					<Link
						to="/blogs"
						className="flex h-[58px] min-w-[205px] items-center justify-center gap-3 rounded-full border border-[#292929] bg-transparent px-7 text-[15px] font-bold text-white transition-all duration-300 hover:border-[#ff7200]/50 hover:bg-[#ff7200]/5"
					>
						<span>تصفح المقالات</span>

						<i className="fa-regular fa-newspaper text-[16px]" />
					</Link>

					
					
				</div>
			</main>
		</div>
	);
}
