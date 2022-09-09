import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ErrorBoundary from "../components/ErrorBoundary";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Head>
        <meta name="application-name" content="IPU CGPA Calculator" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="IPU CGPA Calculator" />
        <meta
          name="description"
          content="Online CGPA Calculator according to the IPUniversity's cgpa calculation algorithm. How to calculate CGPA for IPUniversity? Use the online ipu cgpa calculator."
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
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
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta
          name="twitter:card"
          content="Online CGPA Calculator according to the IPUniversity's cgpa calculation algorithm. How to calculate CGPA for IPUniversity? Use the online ipu cgpa calculator."
        />
        <meta
          name="twitter:url"
          content="https://ipucgpacalculator.netlify.app"
        />
        <meta name="twitter:title" content="IPU CGPA Calculator" />
        <meta
          name="twitter:description"
          content="Online CGPA Calculator according to the IPUniversity's cgpa calculation algorithm. How to calculate CGPA for IPUniversity? Use the online ipu cgpa calculator."
        />
        <meta
          name="twitter:image"
          content="https://ipucgpacalculator.netlify.app/favicon_io/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@Hit3shDatt" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IPU CGPA Calculator" />
        <meta
          property="og:description"
          content="Online CGPA Calculator according to the IPUniversity's cgpa calculation algorithm. How to calculate CGPA for IPUniversity? Use the online ipu cgpa calculator."
        />
        <meta property="og:site_name" content="IPU CGPA Calculator" />
        <meta
          property="og:url"
          content="https://ipucgpacalculator.netlify.app"
        />
        <meta
          property="og:image"
          content="https://ipucgpacalculator.netlify.app/favicon_io/android-chrome-192x192.png"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RHF4V5MQYP"
        strategy="afterInteractive"
        id="gtm-script"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-RHF4V5MQYP');
        `}
      </Script>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9283785102142211"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        id="google-adsense-script"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;
