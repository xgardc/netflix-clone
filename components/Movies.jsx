import Poster from "./Poster";
import Backdrop from "./Backdrop";
import styles from "../styles/Movies.module.css";
import { Info, Play, TopNumber } from "./Icons";

export default function Movies({ popularMovies, topMovies }) {
  const topMovie = popularMovies[0];
  const topMovieName = topMovie.title.split(":");
  return (
    <>
      <main
        className={styles["top-container"]}
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original/${topMovie.backdrop_path})`,
        }}
      >
        <div className={styles.names}>
          <h1 className={styles["serie-name"]}>{topMovieName[0]}</h1>
          <h1 className={styles["movie-name"]}>{topMovieName[1]}</h1>
        </div>
        <div className={styles.state}>
          <TopNumber />
          Türkiyede bugün 10 numara
        </div>
        <div className={styles.description}>{topMovie.overview}</div>
        <div className={styles.buttons}>
          <button>
            <Play />
            Oynat
          </button>
          <button className={styles["darker-button"]}>
            <Info />
            Daha Fazla Bilgi
          </button>
        </div>
      </main>
      <section className={styles.container}>
        <h1 className={styles.title}>Netflixte Popüler</h1>
        <div className={styles.movies}>
          {popularMovies.map(
            (movie, index) =>
              index !== 0 && <Backdrop movie={movie} key={index} />
          )}
        </div>
        <h1 className={styles.title}>Gündemdekiler</h1>
        <div className={styles.movies}>
          {topMovies.map((movie, index) => (
            <Poster movie={movie} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
