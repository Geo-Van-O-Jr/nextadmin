"use client";
import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Link from "next/link";
import Image from "next/image";

const ProductsPage = () => {
  // Ideally, fetch product data from an API
  const products = [
    {
      id: "1",
      name: "Produto 1",
      description: "Descrição do Produto 1",
      price: 100,
      imageUrl: "/noavatar.png",
      createdAt: "2023-10-26T10:00:00.000Z",
      stock: 10,
    },
    {
      id: "2",
      name: "Produto 2",
      description: "Descrição do Produto 2",
      price: 200,
      imageUrl: "/noavatar.png",
      createdAt: "2023-10-27T12:00:00.000Z",
      stock: 5,
    },
    {
      id: "3",
      name: "Produto 3",
      description: "Descrição do Produto 3",
      price: 300,
      imageUrl: "/noavatar.png",
      createdAt: "2023-10-28T14:00:00.000Z",
      stock: 20,
    },
    // ... (product data remains the same)
  ];

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(); // Adjust formatting as needed
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Procurar Produtos" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Adicionar Produto</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            {/* Consider adding scope for better accessibility */}
            <th scope="col">Produto</th>
            <th scope="col">Descrição</th>
            <th scope="col">Preço</th>
            <th scope="col">Criado em</th>
            <th scope="col">Estoque</th>
            <th scope="col">Ações</th> 
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Link href={`/dashboard/products/${product.id}`} className={styles.products}> {/* Added className for styling links within table cells */}
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={50}
                    height={50}
                    className={styles.productImage}
                  />
                  <div>{product.name}</div>
                </Link>
              </td>
              <td>{product.description}</td>
              <td>R$ {product.price.toFixed(2)}</td> {/* Format price to two decimal places */}
              <td>{formatDate(product.createdAt)}</td> {/* Format date */}
              <td>{product.stock}</td>
              <td>
                <div className={styles.productActions}>
                  <Link href={`/dashboard/products/${product.id}/edit`}> {/* Assuming you have an edit route */}
                    <button className={styles.editButton}>Editar</button>
                  </Link>
                  <button className={styles.deleteButton}>Excluir</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
