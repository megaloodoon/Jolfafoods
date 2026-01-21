import Link from "next/link";
import styles from "@/app/styles/products.module.css";

async function fetchMazestaData(id) {
  const mazestaData = [
    {
      id: 1,
      name: "Mazesta Mozzarella Block Cheese",
      image: "/Image/Mazesta/Mazesta-Mozzarella.webp",
      Details: "Block-form mozzarella cheese with vegetable oil, is one of Mazesta's most popular cheeses among consumers. It is used in various home, industrial, restaurant, and fast-food applications. This product is available in block, sheet, and shredded forms, suitable for various cheese dishes.",
    },

    {
      id: 2,
      name: "Mazesta Pasteurized Cream",
      image: "/Image/Mazesta/Mazesta-Cream.webp",
      Details: "Pasteurized cream, made from fresh, high-quality milk, is a healthy and natural product produced through a pasteurization process, preventing microbial risks. It has a rich flavor and appropriate fat content, and due to its high strength and stability, it is widely used in various applications such as cooking, pastry making, baking, and preparing various dishes and sweets.This product is available in 900g and 1500g packages.",
    },

    {
      id: 3,
      name: "Mazesta Pizza Cheese",
      image: "/Image/Mazesta/Mazesta-2kg.webp",
      Details: "This cheese contains a portion of vegetable fat originally used in its production, which ensures compatibility with vegetarian diets, reduces cholesterol intake, and makes it suitable for individuals avoiding animal fats. Mozzarella cheese made with vegetable oil offers similar taste and high elasticity, enabling it to blend well in various dishes. It is widely used in pizza, salads, and other cheese-based foods. This gluten-free cheese is suitable for individuals with sensitivities and represents a healthy, balanced option in modern diets.This cheese is available grated in four different packages: 2000g,1000g, 400g and 180g.",
    },

    {
      id: 4,
      name: "Mazesta Butter",
      image: "/Image/Mazesta/Mazesta-Butter.webp",
      Details: "Mazesta pasteurized butter is produced from milk fat after pasteurization and health controls. This process reduces the microbial load and ensures product safety, while preserving the fat, natural flavor, and nutritional value of the butter. Standard fat content, controlled moisture, and suitable oxidative stability are key indicators of the product's quality.This product is suitable for various uses, including breakfast, home and restaurant cooking, and is available in different weights (according to customer order).",
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
          <Link className={styles.backLink} href="/pages/en/Mazesta_Products">
           Back to Mazesta Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}