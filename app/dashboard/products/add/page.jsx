// import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type="text" placeholder="Nome do produto" name="Nome do produto" required />
        <select name="Categoria" id="Categoria">
          <option value="geral">Escolha uma categoria</option>
          <option value="Cozonha">Cozinha</option>
          <option value="Celulares">Celulares</option>
          <option value="Informática">Informática</option>
        </select>
        <input type="number" placeholder="preço" name="preço" required />
        <input type="number" placeholder="Estoque" name="Estoque" required />
        <input type="text" placeholder="Cor" name="Cor" />
        <input type="text" placeholder="Tamaho" name="Tamaho" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Descrição"
        ></textarea>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default AddProductPage;
