"use client";
import styles from "./ProductCard.module.css";
import Button from "../ui/Button";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img className="h-[250px]" src={product.image} alt={product.name} />

      <h2 className={styles.title}>{product.name}</h2>
      <h2 className={styles.title}>{product.description}</h2>
      <p className={styles.price}>৳ {product.price}</p>

      <div className={styles.actions}>
        <Button>Add to Cart</Button>

        <Link href={`/products/${product.id}`}>
          <Button variant="secondary">Details</Button>
        </Link>
      </div>
    </div>
  );
}
