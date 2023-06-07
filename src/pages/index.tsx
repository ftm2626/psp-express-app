import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PSP</title>
        <meta name="description" content="PSP Express App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline text-red-700">
          Hello world!
        </h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
