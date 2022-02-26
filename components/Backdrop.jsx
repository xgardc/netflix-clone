import styles from "../styles/Image.module.css";

export default function Backdrop({ movie }) {
  return (
    <figure className={styles.figure}>
      <img
        src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`}
        alt=""
        className={styles.image}
      />
      <figcaption className={styles.caption}>{movie.title}</figcaption>
    </figure>
  );
}
