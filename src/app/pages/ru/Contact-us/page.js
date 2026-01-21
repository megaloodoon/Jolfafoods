import ContactPage from '@/app/components/ContactPage';

export default function Page() {
  const labels = {
    title: 'Связаться с нами',
    phoneLabel: 'Телефон',
    EmailAddressLabel: 'info@jolfafoods.com',
    addressLabel: 'Адрес завода',
    phonePlaceholder: 'НОМЕР_ТЕЛЕФОНА',
    addressPlaceholder: 'АДРЕС_ЗАВОДА',
  };

  return (
    <main className="min-h-screen p-8">
      <ContactPage
        phone={'+989134441269'}
        instagram={'https://www.instagram.com/jolfacheese'}
        telegram={'https://t.me/jolfacheese'}
        whatsapp={'https://wa.me/+989134441269'}
        address={'Iran - Isfahan - Razi Industrial Town - 4th Street'}
        description={'По вопросам продаж, сотрудничества или общим вопросам свяжитесь с нашим заводом или напишите в Telegram/Instagram. Мы отвечаем в рабочие часы. Укажите детали запроса для более быстрого ответа.'}
        labels={labels}
      />
    </main>
  );
}
