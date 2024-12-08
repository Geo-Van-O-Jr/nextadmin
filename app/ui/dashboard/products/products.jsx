import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Link from "next/link";
import Image from "next/image";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Procurar Produtos" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Adicionar Produto</button>
        </Link>
      </div>

      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={50}
              height={50}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>R$ {product.price}</p>
            </div>
            <div className={styles.productActions}>
              <Link href={`/dashboard/products/edit/${product.id}`}>
                <button className={styles.editProduct}>Editar</button>
              </Link>
              <Link href={`/dashboard/products/edit/${product.id}`}>
                <button className={styles.deleteProduct}>Excluir</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
