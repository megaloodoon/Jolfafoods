
import ContactPage from "@/app/components/ContactPage";

export default function Page() {
  const labels = {
    // اطلاعات تماس
    title: "تماس با ما",
    phoneLabel: "تلفن",
    addressLabel: "آدرس کارخانه",
    phonePlaceholder: "+989134441269",
    addressPlaceholder: "ایران - اصفهان - شهرک صنعتی رازی - خیابان چهارم",
    
    // فرم تماس
    formNameLabel: "نام و نام خانوادگی",
    formNamePlaceholder: "نام خود را وارد کنید",
    formPhoneLabel: "شماره تماس",
    formPhonePlaceholder: "09123456789",
    formMsgLabel: "متن پیام",
    formMsgPlaceholder: "پیام یا درخواست خود را بنویسید...",
    submitBtn: "ارسال پیام",
    submitting: "در حال ارسال...",
    successTitle: "پیام شما ارسال شد!",
    successMessage: "از ارتباط شما سپاسگزاریم. همکاران ما به زودی پیام شما را بررسی خواهند کرد.",
    newMsgBtn: "ارسال پیام جدید",
    emailSubject: "پیام جدید از سایت جلفا فودز (فارسی)",
  };

  return (
    <main dir="rtl" className="min-h-screen p-8">
      <ContactPage
        phone={"09134441269"}
        instagram={"https://www.instagram.com/jolfacheese"}
        telegram={"https://t.me/jolfacheese"}
        whatsapp={"https://wa.me/989134441269"}
        address={"ایران - اصفهان - شهرک صنعتی رازی - خیابان چهارم"}
        description={"برای ارتباط با واحد فروش، همکاری یا سوالات عمومی می‌توانید از طریق شماره تلفن یا شبکه‌های اجتماعی با ما در تماس باشید. پیام‌ها در ساعات اداری پاسخ داده می‌شوند. لطفاً جزئیات درخواست خود را ذکر کنید تا سریع‌تر راهنمایی شوید."}
        labels={labels}   
      />
      
   
    </main>
  );
}
