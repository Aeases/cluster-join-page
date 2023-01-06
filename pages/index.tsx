import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
  
        <div className={styles.center}>
          <a href="steam://connect/58.169.7.212:27015/e">
          <div className={styles.thirteen}>
            <p>Join Quartex - Scorched</p>
          </div>
          </a>

        </div>


      </main>
    </>
  )
}
