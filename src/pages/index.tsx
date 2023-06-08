import type { NextPage } from "next";
import Head from "next/head";
import Layout from "src/components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PSP</title>
        <meta name="description" content="PSP Express App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <></>
      </Layout>
    </div>
  );
};

export default Home;
