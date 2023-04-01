import Head from 'next/head';
import Link from 'next/link';
import LineChart from '../components/linechart';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Teste</h1>
      <p>Paragrafo exemplo</p>
      <Link href='/posts/first-post'>Página do gráfico</Link>
      
    </div>
  )
}

