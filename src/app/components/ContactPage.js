export default function ContactPage({
  phone,
  instagram,
  telegram,
  whatsapp,
  address,
  labels,
  description = "",
  iconPathPrefix = "/Image/Logo",
}) {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-[radial-gradient(circle,rgba(0,0,48,1)_0%,rgba(9,0,56,1)_20%,rgba(0,28,74,1)_50%,rgba(4,17,51,1)_80%,rgba(1,1,59,1)_100%)] p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{labels.title}</h1>

      {description && (
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
      )}

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <img
            src="/Image/Logo/Address.png"
            alt="address"
            className="w-10 h-10 object-contain"
          />
          <div>
            <div className="text-sm text-gray-500 mb-1">
              {labels.addressLabel}
            </div>
            <div className="text-base">
              {address || labels.addressPlaceholder}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="/Image/Logo/Telephone.png"
            alt="phone"
            className="w-10 h-10 object-contain"
          />
          <div>
            <div className="text-sm text-gray-500 mb-1">
              {labels.phoneLabel}
            </div>
            <a
              href={phone ? `tel:${phone}` : "#"}
              className="text-lg text-blue-600"
            >
              {phone || labels.phonePlaceholder}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            src={`${iconPathPrefix}/Email.png`}
            alt="email"
            className="w-10 h-10 object-contain"
          />
          <a
            href="mailto:info@jolfafoods.com"
            className="text-lg text-blue-600"
          >
            info@jolfafoods.com
          </a>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <div className="flex items-center gap-2">
            <img
              src={`${iconPathPrefix}/instagram.png`}
              alt="instagram"
              className="w-10 h-10 object-contain"
            />
            <a
              href={instagram || "https://www.instagram.com/jolfacheese/"}
              target="_blank"
              rel="noreferrer"
              className="text-lg text-blue-600"
            >
              {instagram
                ? instagram
                    .replace("https://www.instagram.com/", "")
                    .replace("/", "")
                : "jolfacheese"}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={`${iconPathPrefix}/Telegram.png`}
              alt="telegram"
              className="w-10 h-10 object-contain"
            />
            <a
              href={telegram || "https://t.me/jolfacheese"}
              target="_blank"
              rel="noreferrer"
              className="text-lg text-blue-600"
            >
              {telegram
                ? telegram.replace("https://t.me/", "").replace("/", "")
                : "@jolfacheese"}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={`${iconPathPrefix}/whatsapp.png`}
              alt="whatsapp"
              className="w-10 h-10 object-contain"
            />
            <a
              href={whatsapp || "https://wa.me/+989134441269"}
              target="_blank"
              rel="noreferrer"
              className="text-lg text-blue-600"
            >
              {whatsapp
                ? whatsapp.replace("https://wa.me/", "").replace("/", "")
                : "09134441269"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
