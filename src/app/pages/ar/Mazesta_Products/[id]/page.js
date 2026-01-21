import Link from "next/link";
import styles from "@/app/styles/products.module.css";

async function fetchMazestaData(id) {
  const mazestaData = [
    {
      id: 1,
      name: "جبنة موزاريلا مازستا",
      image: "/Image/Mazesta/Mazesta-Mozzarella.webp",
      Details:
        "جبنة موزاريلا مُشكّلة بالزبدة النباتية، هي واحدة من أشهر أنواع الجبن من مازيستا بين المستهلكين. وتُستخدم في تطبيقات متنوعة في المنزل والصناعة والمطاعم والوجبات السريعة. وهي متوفرة بأشكال مكعبة وشريحة ومبشورة، ومناسبة لمختلف أطباق الجبن.",
    },

    {
      id: 2,
      name: "حليب مازستا المبستر ",
      image: "/Image/Mazesta/Mazesta-Cream.webp",
      Details:
        "الحليب البستوري هو منتج صحي وطبيعي مصنوع من الحليب الطازج عالي الجودة، ويتم إنتاجه من خلال عملية البسترة، مما يمنع المخاطر الميكروبية. يتميز بنكهة غنية ومحتوى دهون مناسب، وبسبب قوته وثباته العاليين، يستخدم على نطاق واسع في تطبيقات متنوعة مثل الطهي وصناعة الحلويات والخبز وإعداد مختلف الأطباق والحلويات. يتوفر هذا المنتج في عبوات بوزن 900 جرام و 1500 جرام. ",
    },

    {
      id: 3,
      name: "جبنة بيتزا مازستا",
      image: "/Image/Mazesta/Mazesta-2kg.webp",
      Details:
        "يحتوي هذا الجبن على جزء من الدهون النباتية المستخدمة في إنتاجه، مما يضمن توافقه مع الأنظمة الغذائية النباتية، ويقلل من استهلاك الكوليسترول، ويجعله مناسبًا للأشخاص الذين يتجنبون الدهون الحيوانية. يُقدم جبن الموزاريلا المصنوع من زيت نباتي بخصائص طعم مشابهة وتمدد عالي، مما يتيح دمجه بسهولة في أطعمة متنوعة. ويُستخدم على نطاق واسع في البيتزا والسلطات والمنتجات المبنية على الجبن. هذا الجبن الخالي من الغلوتين مناسب للأشخاص الذين يعانون من الحساسية، ويعتبر خيارًا صحيًا متوازنًا في الأنظمة الغذائية الحديثة.يتوفر هذا الجبن مبشورًا في أربعة عبوات مختلفة: 2000 جرام،  1000 جرام، 400 جرام و 180 جرام.",
    },

    {
      id: 4,
      name: "زبدة مازستا",
      image: "/Image/Mazesta/Mazesta-Butter.webp",
      Details:
        "يُنتج زبدة مازستا المعبأة بالتعقيم من دهون الحليب بعد عملية التعقيم والضوابط الصحية. تقلل هذه العملية من الحمل الميكروبي وتضمن سلامة المنتج، مع الحفاظ على الدهون والنكهة الطبيعية والقيمة الغذائية للزبدة. يعتبر مستوى الدهون القياسي والرطوبة الخاضعة للرقابة والاستقرار التأكسدي المناسب من المؤشرات الرئيسية لجودة المنتج.هذا المنتج مناسب لمجموعة متنوعة من الاستخدامات، بما في ذلك وجبة الإفطار والطهي المنزلي والمطاعم، وهو متوفر بأوزان مختلفة (حسب طلب العميل).",
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
          <Link className={styles.backLink} href="/pages/ar/Mazesta_Products">
            العودة إلى منتجات مازستا
          </Link>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}
