import Head from 'next/head';
import { Login } from '../components';
import Slider from '../components/Slider/Slider';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ZPlay.uz</title>
        <meta
          name="description"
          content="Access the latest movies in Uzbekistan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider></Slider>
    </div>
  );
}
