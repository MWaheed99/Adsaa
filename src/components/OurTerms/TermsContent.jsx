import { Link } from "react-router-dom";

export default function PrivacyContent() {
	return (
		<section className="bg-[#0b0b0b] px-4  py-16">
			<div className="mx-auto max-w-4xl space-y-10">
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">1</span>
						
            <h2 className="text-xl font-bold text-white">الموافقة على الشروط</h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">
						بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.
					</p>
				</div>

				
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">2</span>
						
            <h2 className="text-xl font-bold text-white">رخصة الاستخدام</h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.</p>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">بموجب هذا الترخيص لا يجوز لك:</p>
					<ul className="mt-4">
						<li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-xmark mt-0.5 shrink-0 text-[#f21a1a]"></i>
							
              <span>تعديل أو نسخ المواد</span>
						</li>
						<li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-xmark mt-0.5 shrink-0 text-[#f21a1a]"></i>
							
              <span>استخدام المواد لأي غرض تجاري أو للعرض العام</span>
						</li>
						<li className="flex items-start  gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-xmark mt-0.5 shrink-0 text-[#f21a1a]"></i>
							
              <span>محاولة فك أو عكس هندسة أي برنامج على الموقع</span>
						</li>
						<li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-xmark mt-0.5 shrink-0 text-[#f21a1a]"></i>
							
              <span>إزالة أي حقوق نشر أو علامات ملكية من المواد</span>
						</li>
						<li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-xmark mt-0.5 shrink-0 text-[#f21a1a]"></i>
							
							<span>نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر</span>
						</li>
					</ul>
				</div>

				
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">3</span>
						
            <h2 className="text-xl font-bold text-white">إخلاء المسؤولية</h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.</p>
					
				</div>

				
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">4</span>
						
            <h2 className="text-xl font-bold text-white">القيود</h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">
					في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.
					</p>
				</div>

				
				{/* <div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">5</span>
						
            <h2 className="text-xl font-bold text-white">أمان البيانات </h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">
						لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.
					</p>
				</div> */}

				
				<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">5</span>
						
            <h2 className="text-xl font-bold text-white">5محتوى المستخدم</h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.</p>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">يجب ألا يكون محتواك:</p>
					<ul className="mt-4">
						<li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-xmark mt-0.5 shrink-0 text-[#f21a1a]"></i>
              <span>أن يكون تشهيرياً أو فاحشاً أو مسيئاً</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-xmark mt-0.5 shrink-0 text-[#f21a1a]"></i>
              <span>انتهاك حقوق الملكية الفكرية للآخرين</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-xmark mt-0.5 shrink-0 text-[#f21a1a]"></i>
              <span>تواء فيروسات أو أكواد ضارة</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-xmark mt-0.5 shrink-0 text-[#f21a1a]"></i>
              <span>انتهاك أي قوانين أو لوائح معمول بها</span>
						</li>
            <li className="flex items-start gap-3 border-b border-white/5 py-3 text-sm text-gray-300 last:border-0">
							<i className="fa-solid fa-circle-xmark mt-0.5 shrink-0 text-[#f21a1a]"></i>
              <span>الإعلان عن منتجات أو خدمات غير مصرح بها</span>
						</li>
					</ul>
				</div>

					<div>
					<div className="flex items-center gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#f2751a] text-xs font-bold text-white">6</span>
						
            <h2 className="text-xl font-bold text-white">التعديلات</h2>
					</div>
					<p className="mt-4 text-sm leading-relaxed text-gray-300">
						قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.
					</p>
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
					<Link to="/privacy" className="font-medium text-[#f2751a]">
						سياسة الخصوصية
					</Link>
				</div>
			</div>
		</section>
	);
}
