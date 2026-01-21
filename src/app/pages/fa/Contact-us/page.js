import ContactPage from "@/app/components/ContactPage";

export default function Page() {
  const labels = {
    title: "تماس با ما",
    phoneLabel: "تلفن",
    addressLabel: "آدرس کارخانه",
    phonePlaceholder: "+989134441269",
    addressPlaceholder: "ایران - اصفهان - شهرک صنعتی رازی - خیابان چهارم",
  };

  return (
    <main dir="rtl" className="min-h-screen p-8">
      <ContactPage
        phone={"09134441269"}
        instagram={"https://www.instagram.com/jolfacheese"}
        telegram={"https://t.me/jolfacheese"}
        whatsapp={"https://wa.me/09134441269"}
        address={"ایران - اصفهان - شهرک صنعتی رازی - خیابان چهارم"}
        description={
          "برای ارتباط با واحد فروش، همکاری یا سوالات عمومی می‌توانید از طریق شماره تلفن یا شبکه‌های اجتماعی با ما در تماس باشید. پیام‌ها در ساعات اداری پاسخ داده می‌شوند. لطفاً جزئیات درخواست خود را ذکر کنید تا سریع‌تر راهنمایی شوید."
        }
        labels={labels}
      />
    </main>
  );
}
