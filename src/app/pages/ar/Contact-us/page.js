import ContactPage from "@/app/components/ContactPage";

export default function Page() {
  const labels = {
    title: "اتصل بنا",
    phoneLabel: "هاتف",
    addressLabel: "عنوان المصنع",
    phonePlaceholder: "رقم الهاتف",
    addressPlaceholder: "عنوان المصنع هنا",
  };

  return (
    <main dir="rtl" className="min-h-screen p-8">
      <ContactPage
        phone={"+989134441269"}
        instagram={"https://www.instagram.com/jolfacheese"}
        telegram={"https://t.me/jolfacheese"}
        whatsapp={"https://wa.me/+989134441269"}
        address={"إيران، أصفهان، مدينة رازي الصناعية، شارع الرابع."}
        description={
          "للاستفسارات والمبيعات والتعاون، يرجى التواصل عبر الهاتف أو عبر قنواتنا على إنستغرام وتلجرام. يتم الرد خلال ساعات العمل. يرجى ذكر تفاصيل طلبك للحصول على استجابة أسرع."
        }
        labels={labels}
      />
    </main>
  );
}
