import "tailwindcss/tailwind.css";
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>Easy Registry</title>
        </Head>
        <div className="bg-gray-100 min-h-screen font-Josefin">
            <Component {...pageProps} />
        </div>
    </>
  );
}

export default MyApp;
