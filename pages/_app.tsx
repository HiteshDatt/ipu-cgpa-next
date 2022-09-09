import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ErrorBoundary from "../components/ErrorBoundary";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
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
