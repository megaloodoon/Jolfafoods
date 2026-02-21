import ContactPage from "@/app/components/ContactPage";

export default function Page() {
  const labels = {
    // اطلاعات تماس
    title: "Contactez-nous",
    phoneLabel: "Téléphone",
    addressLabel: "Adresse de l'usine",
    phonePlaceholder: "+989134441269",
    addressPlaceholder: "Iran - Isfahan - Razi Industrial Town - 4th Street",
    
    // فرم تماس
    formNameLabel: "Nom complet",
    formNamePlaceholder: "Entrez votre nom complet",
    formPhoneLabel: "Numéro de téléphone",
    formPhonePlaceholder: "Entrez votre numéro",
    formMsgLabel: "Message",
    formMsgPlaceholder: "Écrivez votre message ici...",
    submitBtn: "Envoyer le message",
    submitting: "Envoi en cours...",
    successTitle: "Message envoyé avec succès !",
    successMessage: "Merci de nous avoir contactés. Notre équipe examinera votre message sous peu.",
    newMsgBtn: "Envoyer un nouveau message",
    emailSubject: "Nouveau message du site (Français)",
  };

  return (
    <main dir="ltr" className="min-h-screen p-8">
      <ContactPage
        phone={"+989134441269"}
        instagram={"https://www.instagram.com/jolfacheese"}
        telegram={"https://t.me/jolfacheese"}
        whatsapp={"https://wa.me/989134441269"}
        address={"Iran - Isfahan - Razi Industrial Town - 4th Street"}
        description={"Pour les ventes, partenariats ou questions générales, contactez notre usine ou envoyez-nous un message sur Telegram ou Instagram. Nous répondons pendant les heures d'ouverture. Veuillez indiquer les détails de votre demande pour une réponse plus rapide."}
        labels={labels}
      />
    </main>
  );
}

