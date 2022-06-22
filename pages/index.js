import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('FUCK U')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Zé Café</title>
        <meta name="description" content="Descubra caferias da sua região!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="Localizar Cafeteria" handleOnClick={handleOnBannerBtnClick}/>
      </main>
    </div>
  )
}
