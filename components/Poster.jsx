import styles from "../styles/Image.module.css";

export default function Poster({ movie }) {
  return (
    <figure className={styles.figure}>
      <img
        src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
        alt=""
        className={styles.image}
      />
    </figure>
  );
}
