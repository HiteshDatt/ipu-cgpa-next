import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Calculator from "../components/Calculator";
const Description = dynamic(() => import("../components/Description"));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <title>IPU CGPA Calculator [ONLINE]</title>

        <meta
          key="description"
          name="description"
          content="Online CGPA Calculator according to the IPUniversity's cgpa calculation algorithm. How to calculate CGPA for IPUniversity? Use the online ipu cgpa calculator."
        />
        <meta
          key="keywords"
          name="keywords"
          content="IPU CGPA Calculator,IPU Results"
        />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          key="google-site-verification"
          name="google-site-verification"
          content="-MTFZIbmEywYnQ2btT27H5PpEaW_1yMGIjJW1TdgDvc"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        <script
          defer
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9283785102142211"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <main>
        <Calculator />
        <Description />
      </main>
    </>
  );
};

export default Home;
