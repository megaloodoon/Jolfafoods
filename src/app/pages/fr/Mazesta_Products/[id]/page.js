import Link from "next/link";
import styles from "@/app/styles/products.module.css";

async function fetchMazestaData(id) {
  const mazestaData = [
    {
      id: 1,
      name: "Fromage à pâte molle Mazesta",
      image: "/Image/Mazesta/Mazesta-Mozzarella.webp",
      Details:
        "Le fromage mozzarella moulé avec de la matière grasse végétale est l'un des fromages les plus populaires de Mazesta auprès des consommateurs. Il est utilisé dans diverses applications domestiques, industrielles, dans les restaurants et les fast-foods. Ce produit est disponible en forme de bloc, de feuilles et râpé, adapté à divers plats au fromage.",
    },

    {
      id: 2,
      name: "Crème pasteurisée Mazesta",
      image: "/Image/Mazesta/Mazesta-Cream.webp",
      Details:
        "Le lait pasteurisé, fabriqué à partir de lait frais et de haute qualité, est un produit sain et naturel produit par un processus de pasteurisation, qui empêche les risques microbiens. Il a une saveur riche et une teneur en matières grasses appropriée, et grâce à sa grande résistance et stabilité, il est largement utilisé dans diverses applications telles que la cuisine, la pâtisserie, la boulangerie et la préparation de divers plats et douceurs. Ce produit est disponible en emballages de 900 et 1500 grammes.",
    },

    {
      id: 3,
      name: "Fromage pour pizza Mazesta",
      image: "/Image/Mazesta/Mazesta-2kg.webp",
      Details:
        "Ce fromage contient une partie de graisse végétale utilisée lors de sa fabrication, ce qui garantit sa compatibilité avec les régimes végétariens, réduit la consommation de cholestérol et le rend adapté aux personnes évitant les graisses d’origine animale. Le mozzarella fabriqué avec de l’huile végétale présente des caractéristiques gustatives similaires et une grande élasticité, permettant une bonne intégration dans divers plats. Il est largement utilisé dans les pizzas, les salades et les préparations à base de fromage. Ce fromage sans gluten convient aux personnes sensibles et constitue une option saine et équilibrée dans les régimes alimentaires modernes.Ce fromage est disponible râpé en quatre emballages différents : 2000g, 1000g , 400get 180g.",
    },

    {
      id: 4,
      name: "Beurre Mazesta",
      image: "/Image/Mazesta/Mazesta-Butter.webp",
      Details:
        "Le beurre pasteurisé Mazesta est produit à partir de matières grasses laitières après pasteurisation et contrôles sanitaires. Ce processus réduit la charge microbienne et garantit la sécurité du produit, tout en préservant la matière grasse, l'arôme naturel et la valeur nutritionnelle du beurre. La teneur en matière grasse standard, l'humidité contrôlée et la stabilité oxydative appropriée sont des indicateurs clés de la qualité du produit.Ce produit convient à diverses utilisations, notamment au petit-déjeuner, à la cuisine à domicile et en restaurant, et est disponible en différents poids (selon la commande du client).",
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
    <section className={styles.wrapper}>
      <div className={styles.detail}>
        <div className={styles.detailImageWrapper}>
          <img src={mazesta.image} alt={mazesta.name} />
        </div>

        <div className={styles.detailContent}>
          <h1>{mazesta.name}</h1>

          <p className={styles.detailDescription}>{mazesta.Details}</p>
          <Link className={styles.backLink} href="/pages/fr/Mazesta_Products">
            Retour aux produits Mazesta
          </Link>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}
