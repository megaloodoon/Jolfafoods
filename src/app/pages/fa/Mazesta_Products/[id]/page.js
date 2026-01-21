import Link from "next/link";
import styles from "@/app/styles/products.module.css";

async function fetchMazestaData(id) {
  const mazestaData = [
    {
      id: 1,
      name: "پنیر موزارلا مازستا",
      image: "/Image/Mazesta/Mazesta-Mozzarella.webp",
      Details: "پنیر قالبی موزارلا مازستا با منشاء چربی گیاهی، یکی از محبوب ترین پنیر های مازستا در بین مصرف کنندگان می باشد که در مصارف مختلف خانگی،صنعتی، رستوران و فست فود استفاده می شود.این محصول به صورت تکه ای،ورقه ای و رنده شده در انواع غذاهای پنیری کاربرد دارد.",
    },

    {
      id: 2,
      name: "خامه مازستا",
      image: "/Image/Mazesta/Mazesta-Cream.webp",
      Details:
        "خامه پاستوریزه مازستا، تهیه‌شده از شیر تازه و با کیفیت بالا، محصولی سالم و طبیعی است که با فرآیند پاستوریزه‌سازی تولید شده و از خطرات میکروبی جلوگیری می‌کند. این محصول دارای طعم غنی و چربی مناسب است و به دلیل استحکام و پایداری بالا، در مصارف گوناگونی مانند آشپزی، قنادی، پخت و پز و تهیه انواع غذاها و شیرینی‌ها به طور گسترده استفاده می‌شود.این محصول در بسته بندی های ۹۰۰ و ۱۵۰۰ گرمی قابل عرضه میباشد.",
    },

    {
      id: 3,
      name: "پنیر پیتزا مازستا",
      image: "/Image/Mazesta/Mazesta-2kg.webp",
      Details:
        "در پنیر موزارلا با چربی گیاهی مازستا، بخشی از  چربی اولیه  منشاء گیاهی دارد که این امر، سازگاری با رژیم‌های گیاهی، کاهش مصرف کلسترول و مناسب بودن برای مصرف‌کنندگانی که از چربی‌های حیوانی اجتناب می‌کنند، را فراهم می‌کند. پنیر موزارلا گیاهی با همان ویژگی‌های طعمی مشابه و کشسانی بالا ، قابلیت ادغام در غذاهای مختلف را دارد و در تهیه پیتزا، سالاد، انواع خوراک های پنیری مورد استفاده قرار می‌گیرد. این پنیر بدون گلوتن و مناسب برای افراد دارای حساسیت است و گزینه‌ای سالم و متعادل در رژیم غذایی مدرن به شمار می‌رود.این پنیر به صورت رنده شده و در چهار  بسته بندی مختلف ۲۰۰۰گرم،۱۰۰۰گرم،۴۰۰گرم و ۱۸۰ گرمی عرضه میشود.",
    },

    {
      id: 4,
      name: "کره مازستا",
      image: "/Image/Mazesta/Mazesta-Butter.webp",
      Details:
        "کره پاستوریزه حیوانی مازستا از چربی شیر پس از پاستوریزاسیون و کنترل‌های بهداشتی تولید می‌شود. این فرآیند بار میکروبی را کاهش داده و ایمنی محصول را تضمین می‌کند، در عین حال چربی، عطر طبیعی و ارزش تغذیه‌ای کره حفظ می‌گردد. درصد چربی استاندارد، رطوبت کنترل شده و پایداری اکسیداتیو مناسب از شاخص‌های اصلی کیفیت این محصول هستند.این محصول برای مصرف‌های گوناگون از جمله صبحانه، پخت و پز خانگی و رستورانی قابل استفاده است و در وزن‌های مختلف (مطابق با سفارش مشتری) عرضه می‌شود.",
    },
  ];

  return mazestaData.find((mazesta) => mazesta.id === parseInt(id));
}

export default async function MazestaDetail({ params }) {
  const mazesta = await fetchMazestaData(params.id);

  if (!mazesta) {
    return <div>Page not found</div>;
  }

  return (
    <section dir="rtl" className={styles.wrapper}>
      <div className={styles.detail}>
        <div className={styles.detailImageWrapper}>
          <img src={mazesta.image} alt={mazesta.name} />
        </div>

        <div className={styles.detailContent}>
          <h1>{mazesta.name}</h1>

          <p className={styles.detailDescription}>{mazesta.Details}</p>
          <Link className={styles.backLink} href="/pages/fa/Mazesta_Products">
            بازگشت به محصولات مازستا
          </Link>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}
