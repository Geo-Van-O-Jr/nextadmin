import React from "react";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";

const UsersPage = () => {
  // Sample user data (replace with your actual data fetching)
  const users = [
    {
      id: 1,
      name: "Geovano Amaro",
      email: "geovano@example.com",
      createdAt: "2023-10-26",
      role: "Administrador",
      status: "Ativo",
    },
    // ... more user data
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Procurar Usuários" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Adicionar Usuário</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Criado em</th>
            <th>Papel</th>
            <th>Status</th>
            <th>Ações</th> {/* Actions column */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt="User Avatar"
                    width={30}
                    height={30}
                    className={styles.userImage}
                  />
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td className={styles.userActions}>
                {" "}
                {/* Actions cell */}
                <Link href={`/dashboard/users/edit/${user.id}`}>
                  <button className={styles.editUser}>Editar</button>
                </Link>
                <Link href={`/dashboard/users/edit/${user.id}` }>
                  <button className={styles.deleteUser}>Excluir</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
