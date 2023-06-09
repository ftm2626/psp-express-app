import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    // <div className="h-full">
      <Head>
        <title>PSP</title>
        <meta name="description" content="PSP Express App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    //   <div className="h-full flex items-center">
    //     <Link href="/list">
    //       <span className=" underline text-3xl hover:text-gray-700">
    //         Go To Posts List
    //       </span>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Home;
