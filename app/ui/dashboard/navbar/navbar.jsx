"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const traducoes = {
  "users": "Usuários",
  "dashboard": "Visão Geral",
  "products": "Produtos",
  "orders": "Pedidos",
  "settings": "Configurações",
  "add": "Adicionar",
  "edit": "Editar",
  "users/add": "Adicionar Usuário",
  "users/edit": "Editar Usuário",
  "products/add": "Adicionar Produto",
  "products/edit": "Editar Produto",
  "orders/add": "Adicionar Pedido",
  "orders/edit": "Editar Pedido",
  "settings/add": "Adicionar Configuração",
  "settings/edit": "Editar Configuração",
  
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{traducoes[pathname.split("/").pop()] || [pathname.split("/").pop()] }</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Buscar..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
