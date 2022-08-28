import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>APPUN COMPUTERS</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" className={styles.link} passHref>
            <>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image
                // src={"/img/link.png"}
                src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          GOHPUR TOWN <br /> ASSAM
        </div>
        <div className={styles.cardItem}>
          mrig@gmail.com <br /> 1234567890
        </div>
      </div>
      <div className={styles.carS}>
        <div className={styles.cardItem}>
          <div className={styles.cardItem}>
            Follow Us <br /> __FB __YT
          </div>
          @ 2022 APPUN COMPUTERS
          <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
