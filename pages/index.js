import Head from 'next/head';
import Header from '@components/Header';
import { getSession, useSession } from 'next-auth/client';
import Hero from '@components/Hero';
export default function Home() {
  const [session] = useSession();
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {!session ? <Hero /> : <main></main>}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
