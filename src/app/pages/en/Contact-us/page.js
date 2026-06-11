import ContactPage from "@/app/components/ContactPage";

export default function Page() {
  const labels = {
    // اطلاعات تماس
    title: "Contact Us",
    phoneLabel: "Phone",
    addressLabel: "Address",
    phonePlaceholder: "+989134441269",
    addressPlaceholder: "Iran - Isfahan - Razi Industrial Town - 4th Street",

    // فرم تماس
    formNameLabel: "Full Name",
    formNamePlaceholder: "Enter your full name",
    formPhoneLabel: "Phone Number",
    formPhonePlaceholder: "Enter your phone number",
    formMsgLabel: "Message",
    formMsgPlaceholder: "Write your message or request here...",
    submitBtn: "Send Message",
    submitting: "Sending...",
    successTitle: "Message Sent Successfully!",
    successMessage:
      "Thank you for reaching out. Our team will review your message shortly.",
    newMsgBtn: "Send New Message",
    emailSubject: "New Message from Website (English)",
    formEmailLabel: "Email",
    formEmailPlaceholder: "info@example.com",
    formSocialLabel: "Social Media ID",
    formSocialPlaceholder: "Enter your ID...",
    formCountryLabel: "Country",
    formCountryPlaceholder: "e.g., Iran",
    formCityLabel: "City",
    formCityPlaceholder: "e.g., Isfahan",
  };

  return (
    <main dir="ltr" className="min-h-screen">
      <ContactPage
        phone={"+989134441269"}
        instagram={"https://www.instagram.com/jolfacheese"}
        telegram={"https://t.me/jolfacheese"}
        whatsapp={"https://wa.me/989134441269"}
        address={"Iran - Isfahan - Razi Industrial Town - 4th Street"}
        description={
          "For sales, partnership or general inquiries, contact our factory or message us on Telegram or Instagram. We reply during business hours. For faster response, include your order details."
        }
        labels={labels}
      />
    </main>
  );
}
