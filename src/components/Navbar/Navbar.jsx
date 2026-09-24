import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoTmage from "../../assets/logo-GdqARQRt.png";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className="bg-mist-900 text-white fixed top-0 left-0 right-0 z-40">
				<div className="container mx-auto flex justify-between items-center py-4 px-4">
					<div className="flex gap-3 items-center">
						<img src={LogoTmage} alt="" className="w-14" />
						<div className="flex flex-col">
							<p className="font-bold text-xl">عدسة</p>
							<p className="text-sm text-[#ee5f0f]">عالم التصوير الفوتوغرافي</p>
						</div>
					</div>

					{/* روابط النافبار - تظهر من md لفوق بس */}
					<ul className="hidden md:flex gap-5 px-3 py-4 border border-mist-800 rounded-full">
						<li>
							<NavLink to="">الرئيسية</NavLink>
						</li>
						<li>
							<NavLink to="/blogs">المدونة</NavLink>
						</li>
						<li>
							<NavLink to="/about">من نحن</NavLink>
						</li>
					</ul>

					<div className="flex items-center gap-3">
						<div className="hidden md:flex items-center px-4 py-3 text-mist-600 duration-300 ease-in-out hover:border hover:border-mist-800 hover:text-[#ee5f0f] rounded-full cursor-pointer">
							<i className="fa-solid fa-magnifying-glass"></i>
						</div>

						{/* زرار ابدأ القراءة - يظهر من md لفوق بس */}
						<button className="hidden md:block px-7 py-3 bg-[#ee5f0f] rounded-full font-bold text-sm">ابدأ القراءة</button>

						{/* ايكون الهامبرجر - يظهر من md لتحت بس - بيتغير للـ X لما المينو يفتح */}
						<button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"} className="md:hidden flex items-center justify-center w-10 h-10 text-white text-xl">
							<i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
						</button>
					</div>
				</div>

				{/* مينو الموبايل - بيفتح لتحت تحت النافبار بحركة سلسة */}
				<div className={`md:hidden absolute top-full left-0 right-0 bg-mist-900 text-white px-6 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`}>
					<div className="flex flex-col">
						{/* روابط المينو */}
						<ul className="flex flex-col gap-4 border border-mist-800 rounded-3xl px-4 py-6 bg-mist-800/30 mb-6">
							<li>
								<NavLink className="res-nav block w-full" to="" onClick={() => setIsMenuOpen(false)}>
									الرئيسية
								</NavLink>
							</li>
							<li>
								<NavLink className="res-nav block w-full" to="/blogs" onClick={() => setIsMenuOpen(false)}>
									المدونة
								</NavLink>
							</li>
							<li>
								<NavLink className="res-nav block w-full" to="/about" onClick={() => setIsMenuOpen(false)}>
									من نحن
								</NavLink>
							</li>
						</ul>

						{/* زرار ابدأ القراءة */}
						<button className="w-full py-4 bg-[#ee5f0f] rounded-full font-bold text-base" onClick={() => setIsMenuOpen(false)}>
							ابدأ القراءة
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}
