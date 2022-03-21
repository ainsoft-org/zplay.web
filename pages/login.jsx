import Head from 'next/head';
import { Login } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ZPlay.uz - Register</title>
        <meta
          name="description"
          content="Access the latest movies in Uzbekistan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}
