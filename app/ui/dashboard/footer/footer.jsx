import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Geovano Amaro</div>
      <div className={styles.text}>© Todos os Direitos Reservados</div>
    </div>
  );
};

export default Footer;
