import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";


export const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="red" right="30px" overflow="hidden"/>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>Appun</span> Website Design Point
        </h1>
        <p className={styles.desc}>
          Grow together to make the world more beautiful !
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          //src={"/img/AppunPegu.png"}
           src={process.env.NEXT_PUBLIC_URL + "/img/AppunPegu.png"}
          // width="100%"
          // height="110%"
          layout="fill"
          objectFit="cover"
          alt=""
          
        />
      </div>
    </div>
  );
};
