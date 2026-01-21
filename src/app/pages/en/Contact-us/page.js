import ContactPage from '@/app/components/ContactPage';

export default function Page() {
  const labels = {
    title: 'Contact Us',
    phoneLabel: 'Phone',
    addressLabel: 'Address',
    phonePlaceholder: 'PHONE_NUMBER_HERE',
    addressPlaceholder: 'FACTORY_ADDRESS_HERE',
  };

  return (
    <main className="min-h-screen p-8">
      <ContactPage
        phone={'+989134441269'}
        instagram={'https://www.instagram.com/jolfacheese'}
        telegram={'https://t.me/jolfacheese'}
        whatsapp={'https://wa.me/+989134441269'}
        address={'Iran - Isfahan - Razi Industrial Town - 4th Street'}
        description={'For sales, partnership or general inquiries, contact our factory or message us on Telegram or Instagram. We reply during business hours. For faster response, include your order details.'}
        labels={labels}
      />
    </main>
  );
}
