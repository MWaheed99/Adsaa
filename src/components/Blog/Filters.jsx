import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Data from "../../data/posts.json";
import GridCards from "../Cards/GridCards";
import VerticalCards from "../Cards/VerticalCards";
import Pagination from "./Pagination";

export default function Filters() {
	const [searchParams] = useSearchParams();

	const categoryFromUrl = searchParams.get("category") || "all";

	const categories = [
		{ value: "all", label: "جميع المقالات" },
		{ value: "إضاءة", label: "إضاءة" },
		{ value: "بورتريه", label: "بورتريه" },
		{ value: "مناظر طبيعية", label: "مناظر طبيعية" },
		{ value: "تقنيات", label: "تقنيات" },
		{ value: "معدات", label: "معدات" },
	];

	const [type, setType] = useState("grid");

	const [activeCategory, setActiveCategory] = useState(categoryFromUrl);

	const [filteredData, setFilteredData] = useState(() => {
		if (categoryFromUrl === "all") {
			return Data.posts;
		}

		return Data.posts.filter(
			(post) => post.category === categoryFromUrl
		);
	});

	const [searchTerm, setSearchTerm] = useState("");

	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 6;

	const changeType = (type) => {
		setType(type);
	};

	const filterData = (category, search) => {
		let result = Data.posts;

		if (category !== "all") {
			result = result.filter(
				(post) => post.category === category
			);
		}

		if (search.trim() !== "") {
			result = result.filter((post) =>
				post.title
					.toLowerCase()
					.includes(search.toLowerCase())
			);
		}

		setFilteredData(result);
		setCurrentPage(1);
	};

	const totalPages = Math.ceil(
		filteredData.length / itemsPerPage
	);

	const startIndex = (currentPage - 1) * itemsPerPage;

	const currentData = filteredData.slice(
		startIndex,
		startIndex + itemsPerPage
	);

	return (
		<section className="bg-[#0a0a0a] pb-5">

			{/* Search + categories */}
			<div className="border-b border-white/10">
				<div className="mx-auto flex max-w-7xl flex-col gap-4 px-8 py-3.5 lg:flex-row lg:items-center lg:justify-between">

					{/* Search */}
					<div className="group relative w-full lg:w-80">
						<i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500 transition-colors duration-300 group-focus-within:text-orange-500"></i>

						<input
							type="text"
							placeholder="ابحث في المقالات..."
							value={searchTerm}
							onChange={(e) => {
								const value = e.target.value;

								setSearchTerm(value);

								filterData(
									activeCategory,
									value
								);
							}}
							className="h-[50px] w-full rounded-xl border border-white/10 bg-white/5 pl-12 pr-12 text-right text-sm text-white transition-all duration-300 placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none"
						/>
					</div>

					{/* Categories */}
					<div className="flex flex-wrap justify-end gap-2">
						{categories.map((category) => (
							<button
								key={category.value}
								onClick={() => {
									setActiveCategory(
										category.value
									);

									filterData(
										category.value,
										searchTerm
									);
								}}
								className={
									activeCategory === category.value
										? "rounded-xl border border-transparent bg-[linear-gradient(to_right,#ff7a00,#ff4d00)] px-4 py-2 text-sm font-bold text-white shadow-[0_4px_16px_rgba(249,115,22,0.3)]"
										: "rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-300 ease-in-out hover:border-orange-500/50 hover:text-orange-500"
								}
							>
								{category.label}
							</button>
						))}
					</div>
				</div>
			</div>

			
			<div className="mx-auto flex max-w-7xl items-center justify-between px-8 pb-8 pt-12">

				<p className="text-sm text-neutral-400">
					عرض{" "}
					<b className="text-white">
						{filteredData.length}
					</b>{" "}
					مقالات
				</p>

				<div className="flex gap-1 rounded-xl border border-white/10 bg-white/5 p-1">

					<button
						onClick={() => changeType("grid")}
						className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm transition-all duration-300 ${
							type === "grid"
								? "bg-orange-500 text-white"
								: "text-neutral-500 hover:text-orange-500"
						}`}
					>
						<i className="fa-solid fa-table-cells-large"></i>
					</button>

					<button
						onClick={() => changeType("vertical")}
						className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm transition-all duration-300 ${
							type === "vertical"
								? "bg-orange-500 text-white"
								: "text-neutral-500 hover:text-orange-500"
						}`}
					>
						<i className="fa-solid fa-bars"></i>
					</button>

				</div>
			</div>

			{/* Cards */}
			{type === "grid" ? (
				<GridCards Data={currentData} />
			) : (
				<VerticalCards Data={currentData} />
			)}

			{/* Pagination */}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				setCurrentPage={setCurrentPage}
			/>
		</section>
	);
}