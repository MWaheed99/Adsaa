export default function Pagination({
	currentPage,
	totalPages,
	setCurrentPage,
}) {
	const pages = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);

	return (
		<section className="flex flex-col items-center gap-3 bg-[#0a0a0a] px-6 py-12">
			<div className="flex items-center gap-2">

				{/* Previous */}
				<button
					onClick={() => setCurrentPage((prev) => prev - 1)}
					disabled={currentPage === 1}
					className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm transition-all duration-300 ease-in-out ${
						currentPage === 1
							? "cursor-not-allowed border-white/5 bg-white/[0.02] text-neutral-700"
							: "border-white/10 bg-white/5 text-white hover:border-orange-500/50 hover:text-orange-500"
					}`}
				>
					<i className="fa-solid fa-chevron-right"></i>
				</button>

				{/* Pages */}
				<div className="flex gap-1">
					{pages.map((page) => (
						<button
							key={page}
							onClick={() => setCurrentPage(page)}
							className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-bold transition-all duration-300 ease-in-out ${
								currentPage === page
									? "border-transparent bg-[linear-gradient(135deg,#ff7a00,#ff4d00)] text-white shadow-[0_4px_16px_rgba(249,115,22,0.3)]"
									: "border-white/10 bg-white/5 text-neutral-400 hover:border-orange-500/50 hover:text-orange-500"
							}`}
						>
							{page}
						</button>
					))}
				</div>

				{/* Next */}
				<button
					onClick={() => setCurrentPage((prev) => prev + 1)}
					disabled={currentPage === totalPages}
					className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm transition-all duration-300 ease-in-out ${
						currentPage === totalPages
							? "cursor-not-allowed border-white/5 bg-white/[0.02] text-neutral-700"
							: "border-white/10 bg-white/5 text-white hover:border-orange-500/50 hover:text-orange-500"
					}`}
				>
					<i className="fa-solid fa-chevron-left"></i>
				</button>
			</div>

			<p className="text-xs text-neutral-500">
				صفحة {currentPage} من {totalPages}
			</p>
		</section>
	);
}