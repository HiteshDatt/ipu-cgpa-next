import type { NextPage } from "next";
import Head from "next/head";
import Calculator from "../components/Calculator";

const Home: NextPage = () => {
  return (
    <div>
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
      </Head>

      <main>
        <Calculator />
      </main>
    </div>
  );
};

export default Home;
