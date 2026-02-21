import ContactPage from "@/app/components/ContactPage";

export default function Page() {
  const labels = {
    // اطلاعات تماس
    title: "اتصل بنا",
    phoneLabel: "هاتف",
    addressLabel: "عنوان المصنع",
    phonePlaceholder: "+989134441269",
    addressPlaceholder: "إيران، أصفهان، مدينة رازي الصناعية، شارع الرابع.",
    
    // فرم تماس
    formNameLabel: "الاسم الكامل",
    formNamePlaceholder: "أدخل اسمك الكامل",
    formPhoneLabel: "رقم الهاتف",
    formPhonePlaceholder: "أدخل رقم الهاتف",
    formMsgLabel: "نص الرسالة",
    formMsgPlaceholder: "اكتب رسالتك أو طلبك هنا...",
    submitBtn: "إرسال الرسالة",
    submitting: "جاري الإرسال...",
    successTitle: "تم إرسال رسالتك بنجاح!",
    successMessage: "شكرًا لتواصلك معنا. سيقوم فريقنا بمراجعة رسالتك قريبًا.",
    newMsgBtn: "إرسال رسالة جديدة",
    emailSubject: "رسالة جديدة من الموقع (عربي)",
  };

  return (
    <main dir="rtl" className="min-h-screen p-8">
      <ContactPage
        phone={"+989134441269"}
        instagram={"https://www.instagram.com/jolfacheese"}
        telegram={"https://t.me/jolfacheese"}
        whatsapp={"https://wa.me/989134441269"}
        address={"إيران، أصفهان، مدينة رازي الصناعية، شارع الرابع."}
        description={"للاستفسارات والمبيعات والتعاون، يرجى التواصل عبر الهاتف أو عبر قنواتنا على إنستغرام وتلجرام. يتم الرد خلال ساعات العمل. يرجى ذكر تفاصيل طلبك للحصول على استجابة أسرع."}
        labels={labels}
      />
    </main>
  );
}
