import ContactPage from "@/app/components/ContactPage";

export default function Page() {
  const labels = {
    title: "Contactez-nous",
    phoneLabel: "Téléphone",
    EmailAddressLabel: "Email:",
    addressLabel: "Adresse de l'usine",
    phonePlaceholder: "NUMÉRO_DE_TÉLÉPHONE",
    addressPlaceholder: "ADRESSE_DE_L'USINE",
  };

  return (
    <main className="min-h-screen p-8">
      <ContactPage
        phone={"+989134441269"}
        instagram={"https://www.instagram.com/jolfacheese"}
        telegram={"https://t.me/jolfacheese"}
        whatsapp={"https://wa.me/+989134441269"}
        address={"Iran - Isfahan - Razi Industrial Town - 4th Street"}
        description={
          "Pour les ventes, partenariats ou questions générales, contactez notre usine ou envoyez-nous un message sur Telegram ou Instagram. Nous répondons pendant les heures d'ouverture. Veuillez indiquer les détails de votre demande pour une réponse plus rapide."
        }
        labels={labels}
      />
    </main>
  );
}
