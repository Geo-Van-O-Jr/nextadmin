import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Últimas Transações</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Status</td>
            <td>Data</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Geovano Amaro
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pago
              </span>
            </td>
            <td>15.10.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Lucas Oliveira
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Pago</span>
            </td>
            <td>14.10.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jefferson Francisco
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Pago
              </span>
            </td>
            <td>14.10.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
               Welvert Física
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pago
              </span>
            </td>
            <td>14.10.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
