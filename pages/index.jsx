import Head from "next/head";
import Header from "../components/Header";
import Movies from "../components/Movies";

export default function Home({ popularMovies, topMovies }) {
  return (
    <>
      <Head>
        <title>Ana Sayfa</title>
        <meta name="description" content="Netflix Clone Home Page" />
      </Head>
      <Header />
      <Movies popularMovies={popularMovies} topMovies={topMovies} />
    </>
  );
}

export async function getServerSideProps() {
  const popularRes = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=8797bca34eb34606ca41cd1bf5607aa9&language=tr-TR&page=1"
  );
  const topRes = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=8797bca34eb34606ca41cd1bf5607aa9&language=tr-TR&page=1"
  );

  const populars = await popularRes.json();
  const tops = await topRes.json();

  return {
    props: {
      popularMovies: populars.results.splice(0, 6),
      topMovies: tops.results.splice(0, 5),
    },
  };
}
