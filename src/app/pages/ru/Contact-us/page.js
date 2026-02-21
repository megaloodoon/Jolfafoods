import ContactPage from '@/app/components/ContactPage';

export default function Page() {
  const labels = {
    // اطلاعات تماس
    title: 'Связаться с нами',
    phoneLabel: 'Телефон',
    addressLabel: 'Адрес завода',
    phonePlaceholder: '+989134441269',
    addressPlaceholder: 'Iran - Isfahan - Razi Industrial Town - 4th Street',
    
    // فرم تماس
    formNameLabel: "Полное имя",
    formNamePlaceholder: "Введите ваше полное имя",
    formPhoneLabel: "Номер телефона",
    formPhonePlaceholder: "Введите ваш номер телефона",
    formMsgLabel: "Сообщение",
    formMsgPlaceholder: "Напишите ваше сообщение здесь...",
    submitBtn: "Отправить сообщение",
    submitting: "Отправка...",
    successTitle: "Сообщение успешно отправлено!",
    successMessage: "Спасибо за обращение. Наша команда рассмотрит ваше сообщение в ближайшее время.",
    newMsgBtn: "Отправить новое сообщение",
    emailSubject: "Новое сообщение с сайта (Русский)",
  };

  return (
    <main dir="ltr" className="min-h-screen p-8">
      <ContactPage
        phone={'+989134441269'}
        instagram={'https://www.instagram.com/jolfacheese'}
        telegram={'https://t.me/jolfacheese'}
        whatsapp={'https://wa.me/989134441269'}
        address={'Iran - Isfahan - Razi Industrial Town - 4th Street'}
        description={'По вопросам продаж, сотрудничества или общим вопросам свяжитесь с нашим заводом или напишите в Telegram/Instagram. Мы отвечаем в рабочие часы. Укажите детали запроса для более быстрого ответа.'}
        labels={labels}
      />
    </main>
  );
}
