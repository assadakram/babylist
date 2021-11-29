import Head from "next/head";
import { Cards } from "../components/Cards";
import { Layout } from "../components/layout/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
      <Layout></Layout>
    </>
=======

        <Layout>
          <div>
          <Cards />
          </div>
        </Layout>
    </div>
>>>>>>> 9a5e054dff89356591022dc97b9526d4da74cd3a
  );
}
