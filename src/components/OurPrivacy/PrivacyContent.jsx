import { Link } from "react-router-dom";

export default function PrivacyContent() {
	return (
		<section className="bg-[#0b0b0b] px-4  py-16">
			<div className="mx-auto max-w-4xl space-y-10">
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">1</span>
						
            <h2 className="text-xl font-bold text-white">مقدمة</h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">
						مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.
					</p>
				</div>

				
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">2</span>
						
            <h2 className="text-xl font-bold text-white">المعلومات التي نجمعها</h2>
					</div>
					<ul className="mt-4">
						<li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
							
              <span>بيانات الهوية: تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه</span>
						</li>
						<li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
							
              <span>بيانات الاتصال: تشمل عنوان البريد الإلكتروني</span>
						</li>
						<li className="flex items-start  gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
							
              <span>البيانات التقنية: تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.</span>
						</li>
						<li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
							
              <span>بيانات الاستخدام: تشمل معلومات حول كيفية استخدامك لموقعنا</span>
						</li>
					</ul>
				</div>

				
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">3</span>
						
            <h2 className="text-xl font-bold text-white">كيف نستخدم معلوماتك</h2>
					</div>
					<ul className="mt-4">
						<li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>لتقديم خدمتنا والحفاظ عليها</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>لإخطارك بالتغييرات في خدمتنا</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>لتقديم دعم العملاء</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا </span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>لمراقبة استخدام خدمتنا</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>لاكتشاف ومنع ومعالجة المشاكل التقنية</span>
						</li>
					</ul>
				</div>

				
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">4</span>
						
            <h2 className="text-xl font-bold text-white">ملفات تعريف الارتباط</h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">
						نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض
						أجزاء موقعنا.
					</p>
				</div>

				
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">5</span>
						
            <h2 className="text-xl font-bold text-white">أمان البيانات </h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">
						لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.
					</p>
				</div>

				
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">6</span>
						
            <h2 className="text-xl font-bold text-white">حقوقك</h2>
					</div>
					<ul className="mt-4">
						<li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>طلب الوصول إلى بياناتك الشخصية</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>طلب تصحيح بياناتك الشخصية</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>طلب مسح بياناتك الشخصية</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>الاعتراض على معالجة بياناتك الشخصية</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>طلب تقييد معالجة بياناتك الشخصية</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-check mt-0.5 shrink-0 text-[#f2751a]"></i>
              <span>الحق في سحب الموافقة</span>
						</li>
					</ul>
				</div>

				
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">7</span>
						
            <h2 className="text-xl font-bold text-white">تواصل معانا</h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:</p>
					<a href="mailto:hello@adasah.com" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#f2751a]">
						hello@adasah.com
						<i className="fa-solid fa-envelope text-xs"></i>
					</a>
				</div>

				
				<div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
					باستخدامك موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً{" "}
					<Link to="/terms" className="font-medium text-[#f2751a]">
						شروط الخدمة
					</Link>
				</div>
			</div>
		</section>
	);
}
