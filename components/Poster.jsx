import styles from "../styles/Image.module.css";
import Image from "next/image";

export default function Poster({ movie }) {
  return (
    <figure className={styles.figure}>
      <Image
        src={`https://www.themoviedb.org/t/p/original/${movie.poster_path}`}
        alt=""
        className={styles.image}
      />
    </figure>
  );
}
