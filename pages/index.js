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

      <Layout>
        <div>
          <Cards />
        </div>
      </Layout>
    </div>
  );
}
