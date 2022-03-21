import Head from 'next/head';
import { ErrorComponent } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>404 - PAGE NOT FOUND | ZPlay.uz</title>
        <meta
          name="description"
          content="PAGE NOT FOUND, PLEASE TRY AGAIN LATER"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorComponent status={404} title={'PAGE NOT FOUND'} />
    </div>
  );
}
