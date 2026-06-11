"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

// آیکون‌های پلتفرم‌ها در خارج از کامپوننت تعریف شده‌اند تا از رندر مجدد جلوگیری شود
const socialPlatforms = {
  Instagram: (
    <svg
      className="w-5 h-5 text-pink-500 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  Telegram: (
    <svg
      className="w-5 h-5 text-blue-500 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z" />
    </svg>
  ),
  WhatsApp: (
    <svg
      className="w-5 h-5 text-green-500 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M11.42 21.81c-1.63 0-3.2-.41-4.58-1.19L1.5 22l1.43-5.22A9.97 9.97 0 011.5 11.8C1.5 6.27 5.96 1.8 11.42 1.8s9.92 4.47 9.92 10-4.46 10-9.92 10zm-4.73-3.53l.26.15c1.3.77 2.82 1.18 4.4 1.18 4.9 0 8.89-3.99 8.89-8.89 0-4.9-3.99-8.89-8.89-8.89-4.9 0-8.89 3.99-8.89 8.89 0 1.63.42 3.16 1.22 4.49l.16.27-1.05 3.84 3.9-1.04zM16.92 14.8c-.28-.14-1.68-.83-1.94-.93-.26-.1-.45-.14-.64.14-.19.28-.73.93-.89 1.12-.16.19-.32.22-.6.08-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.4-1.68-1.56-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.46-.48-.64-.49h-.54c-.19 0-.49.07-.75.35-.26.28-1.02 1-1.02 2.44s1.04 2.84 1.18 3.03c.14.19 2.06 3.15 5 4.42 2.94 1.27 2.94.85 3.48.8.54-.05 1.68-.69 1.92-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.54-.33z" />
    </svg>
  ),
};

export default function ContactPage({
  phone,
  instagram,
  telegram,
  whatsapp,
  address,
  labels,
  description,
  iconPathPrefix = "/Image/Logo",
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // State های مربوط به دراپ‌داون شبکه‌های اجتماعی
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState("Instagram");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d4a116e4-9bd1-486f-9427-9378a6c25cd0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        alert(labels.errorAlert);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(labels.networkErrorAlert);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full bg-[#d8e6fe] pt-48 pb-10 sm:pt-56 md:pt-72 md:pb-20 px-4 sm:px-6">
      {/* --- بخش تصویر پس‌زمینه و هاله آبی --- */}
      <div className="absolute top-0 left-0 w-full h-[450px] sm:h-[500px] md:h-[600px] z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Image/New/contact-office.png')",
          }}
        />
        <div className="absolute inset-0 mix-blend-multiply"></div>
        <div className="absolute inset-0 "></div>
      </div>
      {/* ---------------------------------- */}

      {/* کارت فرم تماس */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-xl overflow-hidden p-5 sm:p-8 mt-10 md:p-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* ستون اطلاعات تماس */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 ltr:text-left rtl:text-right">
                {labels.title}
              </h1>

              {description && (
                <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-gray-500 ltr:text-left rtl:text-right mb-8 sm:mb-10 text-justify">
                  {description}
                </p>
              )}

              <div className="space-y-5 sm:space-y-6">
                {/* آدرس */}
                <div className="flex ltr:flex-row rtl:flex-row items-start sm:items-center gap-3 sm:gap-4 ltr:text-left rtl:text-right">
                  <div className="p-2.5 sm:p-3 bg-[#eef4ff] rounded-lg sm:rounded-xl shrink-0 mt-1 sm:mt-0">
                    <img
                      src="/Image/Logo/Address.png"
                      alt="address"
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">
                      {labels.addressLabel}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed">
                      {address || labels.addressPlaceholder}
                    </div>
                  </div>
                </div>

                {/* تلفن */}
                <div className="flex ltr:flex-row rtl:flex-row items-center gap-3 sm:gap-4 ltr:text-left rtl:text-right">
                  <div className="p-2.5 sm:p-3 bg-[#eef4ff] rounded-lg sm:rounded-xl shrink-0">
                    <img
                      src="/Image/Logo/Telephone.png"
                      alt="phone"
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">
                      {labels.phoneLabel}
                    </div>
                    <a
                      href={phone ? `tel:${phone}` : "#"}
                      className="text-xs sm:text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors block dir-ltr"
                    >
                      {phone || labels.phonePlaceholder}
                    </a>
                  </div>
                </div>

                {/* ایمیل */}
                <div className="flex ltr:flex-row rtl:flex-row items-center gap-3 sm:gap-4 ltr:text-left rtl:text-right">
                  <div className="p-2.5 sm:p-3 bg-[#eef4ff] rounded-lg sm:rounded-xl shrink-0">
                    <img
                      src={`${iconPathPrefix}/Email.png`}
                      alt="email"
                      className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>
                  <a
                    href="mailto:info@jolfafoods.com"
                    className="text-xs sm:text-sm font-medium text-blue-900 hover:text-blue-600 transition-colors"
                  >
                    info@jolfafoods.com
                  </a>
                </div>
              </div>
            </div>

            {/* شبکه‌های اجتماعی */}
            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 flex flex-col gap-4 text-sm sm:text-base">
              <div className="flex ltr:flex-row rtl:flex-row items-center gap-3 w-fit">
                <div className="p-2.5 sm:p-3 bg-[#eef4ff] rounded-lg sm:rounded-xl shrink-0">
                  <img
                    src={`${iconPathPrefix}/whatsapp.png`}
                    alt="whatsapp"
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium dir-ltr"
                >
                  {whatsapp?.replace("https://wa.me/", "") || "989134441269"}
                </a>
              </div>

              <div className="flex ltr:flex-row rtl:flex-row items-center gap-3 w-fit">
                <div className="p-2.5 sm:p-3 bg-[#eef4ff] rounded-lg sm:rounded-xl shrink-0">
                  <img
                    src={`${iconPathPrefix}/Telegram.png`}
                    alt="telegram"
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
                <a
                  href={telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium dir-ltr"
                >
                  jolfacheese
                </a>
              </div>

              <div className="flex ltr:flex-row rtl:flex-row items-center gap-3 w-fit">
                <div className="p-2.5 sm:p-3 bg-[#eef4ff] rounded-lg sm:rounded-xl shrink-0">
                  <img
                    src={`${iconPathPrefix}/instagram.png`}
                    alt="instagram"
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium dir-ltr"
                >
                  jolfacheese
                </a>
              </div>
            </div>
          </div>

          {/* ستون فرم تماس */}
          <div className="w-full lg:w-1/2 mt-4 sm:mt-8 lg:mt-0 flex flex-col justify-center border-t lg:border-t-0 ltr:lg:border-l rtl:lg:border-r border-gray-100 pt-6 lg:pt-0 ltr:lg:pl-10 rtl:lg:pr-10">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 py-8 sm:py-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {labels.successTitle}
                </h3>
                <p className="text-sm sm:text-base text-gray-500">
                  {labels.successMessage}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 sm:mt-6 px-5 sm:px-6 py-2 bg-gray-50 border border-gray-200 text-sm sm:text-base text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {labels.newMsgBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <input
                  type="hidden"
                  name="subject"
                  value={labels.emailSubject}
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {/* ردیف اول: نام و شماره تماس */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 space-y-1.5 sm:space-y-2 ltr:text-left rtl:text-right">
                    <label
                      htmlFor="name"
                      className="text-[11px] sm:text-xs font-semibold text-gray-600"
                    >
                      {labels.formNameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      required
                      className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ltr:text-left rtl:text-right"
                      placeholder={labels.formNamePlaceholder}
                    />
                  </div>

                  <div className="w-full sm:w-1/2 space-y-1.5 sm:space-y-2 ltr:text-left rtl:text-right">
                    <label
                      htmlFor="phone"
                      className="text-[11px] sm:text-xs font-semibold text-gray-600"
                    >
                      {labels.formPhoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="Phone"
                      dir="ltr"
                      required
                      className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-left rtl:text-right"
                      placeholder={labels.formPhonePlaceholder}
                    />
                  </div>
                </div>

                {/* ردیف دوم: ایمیل و پلتفرم شبکه اجتماعی */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 space-y-1.5 sm:space-y-2 ltr:text-left rtl:text-right">
                    <label
                      htmlFor="email"
                      className="text-[11px] sm:text-xs font-semibold text-gray-600"
                    >
                      {labels.formEmailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      dir="ltr"
                      className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-left rtl:text-right"
                      placeholder={labels.formEmailPlaceholder}
                    />
                  </div>

                  <div className="w-full sm:w-1/2 space-y-1.5 sm:space-y-2 ltr:text-left rtl:text-right">
                    <label
                      htmlFor="social_id"
                      className="text-[11px] sm:text-xs font-semibold text-gray-600"
                    >
                      {labels.formSocialLabel}
                    </label>
                    <div className="flex gap-2 relative">
                      {/* --- شروع دراپ‌داون سفارشی --- */}
                      <div className="relative w-1/3">
                        <input
                          type="hidden"
                          name="Social_Platform"
                          value={selectedSocial}
                        />

                        <button
                          type="button"
                          onClick={() => setIsSocialOpen(!isSocialOpen)}
                          className="w-full h-full flex items-center justify-between bg-white border border-gray-200 rounded-lg sm:rounded-xl px-2 sm:px-3 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            {socialPlatforms[selectedSocial]}
                            <span className="text-[10px] sm:text-xs text-gray-900 hidden sm:block"></span>
                          </div>
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </button>

                        {isSocialOpen && (
                          <ul className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                            {Object.keys(socialPlatforms).map((platform) => (
                              <li
                                key={platform}
                                onClick={() => {
                                  setSelectedSocial(platform);
                                  setIsSocialOpen(false);
                                }}
                                className="flex items-center gap-2 px-2 sm:px-3 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
                              >
                                {socialPlatforms[platform]}
                                <span className="text-[10px] sm:text-xs text-gray-700 hidden sm:block"></span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {/* --- پایان دراپ‌داون سفارشی --- */}

                      <input
                        type="text"
                        id="social_id"
                        name="Social_ID"
                        dir="ltr"
                        className="w-2/3 bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-left rtl:text-right"
                        placeholder={labels.formSocialPlaceholder}
                      />
                    </div>
                  </div>
                </div>

                {/* ردیف سوم: کشور و شهر */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 space-y-1.5 sm:space-y-2 ltr:text-left rtl:text-right">
                    <label
                      htmlFor="country"
                      className="text-[11px] sm:text-xs font-semibold text-gray-600"
                    >
                      {labels.formCountryLabel}
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="Country"
                      className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ltr:text-left rtl:text-right"
                      placeholder={labels.formCountryPlaceholder}
                    />
                  </div>

                  <div className="w-full sm:w-1/2 space-y-1.5 sm:space-y-2 ltr:text-left rtl:text-right">
                    <label
                      htmlFor="city"
                      className="text-[11px] sm:text-xs font-semibold text-gray-600"
                    >
                      {labels.formCityLabel}
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="City"
                      className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ltr:text-left rtl:text-right"
                      placeholder={labels.formCityPlaceholder}
                    />
                  </div>
                </div>

                {/* متن پیام */}
                <div className="space-y-1.5 sm:space-y-2 ltr:text-left rtl:text-right">
                  <label
                    htmlFor="message"
                    className="text-[11px] sm:text-xs font-semibold text-gray-600"
                  >
                    {labels.formMsgLabel}
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    required
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none ltr:text-left rtl:text-right"
                    placeholder={labels.formMsgPlaceholder}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 bg-[#2563eb] hover:bg-blue-700 disabled:bg-gray-400 text-white text-sm sm:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      <span>{labels.submitting}</span>
                    </>
                  ) : (
                    <>
                      <span>{labels.submitBtn}</span>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 ltr:rotate-0 rtl:-scale-x-100" />
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
