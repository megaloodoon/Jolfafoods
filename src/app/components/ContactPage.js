// export default function ContactPage({
//   phone,
//   instagram,
//   telegram,
//   whatsapp,
//   address,
//   labels,
//   description = "",
//   iconPathPrefix = "/Image/Logo",
// }) {
//   return (
//     <div className="max-w-3xl mx-auto bg-white dark:bg-[radial-gradient(circle,rgba(0,0,48,1)_0%,rgba(9,0,56,1)_20%,rgba(0,28,74,1)_50%,rgba(4,17,51,1)_80%,rgba(1,1,59,1)_100%)] p-6 rounded shadow">
//       <h1 className="text-2xl font-bold mb-4">{labels.title}</h1>

//       {description && (
//         <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
//           {description}
//         </p>
//       )}

//       <div className="space-y-4">
//         <div className="flex items-center gap-2">
//           <img
//             src="/Image/Logo/Address.png"
//             alt="address"
//             className="w-10 h-10 object-contain"
//           />
//           <div>
//             <div className="text-sm text-gray-500 mb-1">
//               {labels.addressLabel}
//             </div>
//             <div className="text-base">
//               {address || labels.addressPlaceholder}
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center gap-2">
//           <img
//             src="/Image/Logo/Telephone.png"
//             alt="phone"
//             className="w-10 h-10 object-contain"
//           />
//           <div>
//             <div className="text-sm text-gray-500 mb-1">
//               {labels.phoneLabel}
//             </div>
//             <a
//               href={phone ? `tel:${phone}` : "#"}
//               className="text-lg text-blue-600"
//             >
//               {phone || labels.phonePlaceholder}
//             </a>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <img
//             src={`${iconPathPrefix}/Email.png`}
//             alt="email"
//             className="w-10 h-10 object-contain"
//           />
//           <a
//             href="mailto:info@jolfafoods.com"
//             className="text-lg text-blue-600"
//           >
//             info@jolfafoods.com
//           </a>
//         </div>

//         <div className="flex flex-col gap-3 mt-2">
//           <div className="flex items-center gap-2">
//             <img
//               src={`${iconPathPrefix}/instagram.png`}
//               alt="instagram"
//               className="w-10 h-10 object-contain"
//             />
//             <a
//               href={instagram || "https://www.instagram.com/jolfacheese/"}
//               target="_blank"
//               rel="noreferrer"
//               className="text-lg text-blue-600"
//             >
//               {instagram
//                 ? instagram
//                     .replace("https://www.instagram.com/", "")
//                     .replace("/", "")
//                 : "jolfacheese"}
//             </a>
//           </div>
//           <div className="flex items-center gap-2">
//             <img
//               src={`${iconPathPrefix}/Telegram.png`}
//               alt="telegram"
//               className="w-10 h-10 object-contain"
//             />
//             <a
//               href={telegram || "https://t.me/jolfacheese"}
//               target="_blank"
//               rel="noreferrer"
//               className="text-lg text-blue-600"
//             >
//               {telegram
//                 ? telegram.replace("https://t.me/", "").replace("/", "")
//                 : "@jolfacheese"}
//             </a>
//           </div>
//           <div className="flex items-center gap-2">
//             <img
//               src={`${iconPathPrefix}/whatsapp.png`}
//               alt="whatsapp"
//               className="w-10 h-10 object-contain"
//             />
//             <a
//               href={whatsapp || "https://wa.me/+989134441269"}
//               target="_blank"
//               rel="noreferrer"
//               className="text-lg text-blue-600"
//             >
//               {whatsapp
//                 ? whatsapp.replace("https://wa.me/", "").replace("/", "")
//                 : "09134441269"}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage({
  phone,
  instagram,
  telegram,
  whatsapp,
  address,
  labels, // تمام متن‌ها از اینجا وارد می‌شوند
  description,
  iconPathPrefix = "/Image/Logo",
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "a850fde3-bfb6-4826-afd6-cc6fa4f17ef6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        alert("خطا / Error");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("خطای ارتباط / Network Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="bg-white dark:bg-[radial-gradient(circle,rgba(0,0,48,1)_0%,rgba(9,0,56,1)_20%,rgba(0,28,74,1)_50%,rgba(4,17,51,1)_80%,rgba(1,1,59,1)_100%)] rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-blue-900/30">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* ستون اطلاعات تماس */}
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-l lg:rtl:border-l-0 lg:rtl:border-r border-gray-100 dark:border-blue-900/50">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {labels.title}
            </h1>

            {description && (
              <p className="text-sm leading-relaxed text-gray-600 dark:text-blue-200 mb-10">
                {description}
              </p>
            )}

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors shrink-0">
                  <img src="/Image/Logo/Address.png" alt="address" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-blue-300/70 mb-1">
                    {labels.addressLabel}
                  </div>
                  <div className="text-gray-800 dark:text-blue-50 leading-relaxed">
                    {address || labels.addressPlaceholder}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors shrink-0">
                  <img src="/Image/Logo/Telephone.png" alt="phone" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 dark:text-blue-300/70 mb-1">
                    {labels.phoneLabel}
                  </div>
                  <a href={phone ? `tel:${phone}` : "#"} className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors dir-ltr block ltr:text-left rtl:text-right">
                    {phone || labels.phonePlaceholder}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors shrink-0">
                  <img src={`${iconPathPrefix}/Email.png`} alt="email" className="w-8 h-8 object-contain" />
                </div>
                <a href="mailto:info@jolfafoods.com" className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  info@jolfafoods.com
                </a>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-blue-900/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <img src={`${iconPathPrefix}/instagram.png`} alt="instagram" className="w-8 h-8 object-contain" />
                    <a href={instagram} target="_blank" rel="noreferrer" className="text-base text-gray-700 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dir-ltr">
                      jolfacheese
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={`${iconPathPrefix}/Telegram.png`} alt="telegram" className="w-8 h-8 object-contain" />
                    <a href={telegram} target="_blank" rel="noreferrer" className="text-base text-gray-700 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dir-ltr">
                      Jolfacheese
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={`${iconPathPrefix}/whatsapp.png`} alt="whatsapp" className="w-8 h-8 object-contain" />
                    <a href={whatsapp} target="_blank" rel="noreferrer" className="text-base text-gray-700 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dir-ltr">
                      {whatsapp?.replace("https://wa.me/", "")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ستون فرم تماس */}
          <div className="p-8 lg:p-12 bg-gray-50/50 dark:bg-white/[0.02]">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500 py-10">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{labels.successTitle}</h3>
                <p className="text-gray-600 dark:text-blue-200">{labels.successMessage}</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2 bg-white dark:bg-blue-900/30 border border-gray-200 dark:border-blue-800 text-gray-700 dark:text-blue-100 rounded-lg hover:bg-gray-50 dark:hover:bg-blue-900/50 transition-colors"
                >
                  {labels.newMsgBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="subject" value={labels.emailSubject} />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-blue-200">{labels.formNameLabel}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="Name" 
                      required
                      className="w-full bg-white dark:bg-blue-950/40 border border-gray-200 dark:border-blue-800/50 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                      placeholder={labels.formNamePlaceholder}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-blue-200">{labels.formPhoneLabel}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="Phone"
                      dir="ltr"
                      required
                      className="w-full bg-white dark:bg-blue-950/40 border border-gray-200 dark:border-blue-800/50 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-left rtl:text-right"
                      placeholder={labels.formPhonePlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-blue-200">{labels.formMsgLabel}</label>
                  <textarea 
                    id="message" 
                    name="Message" 
                    required
                    rows={4}
                    className="w-full bg-white dark:bg-blue-950/40 border border-gray-200 dark:border-blue-800/50 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                    placeholder={labels.formMsgPlaceholder}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-8 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-blue-900/50 disabled:text-gray-200 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{labels.submitting}</span>
                    </>
                  ) : (
                    <>
                      <span>{labels.submitBtn}</span>
                      <Send className="w-5 h-5 rtl:-scale-x-100" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}


