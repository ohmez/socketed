import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Socketed: Game Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Socketed
        </h1>

        <div className={styles.grid}>
          <p className={styles.description}>
            New User
         </p>
        </div>
        <div className={styles.grid}>
          <p className={styles.description}>
            <Link href="/rooms/open-rooms"><a>Search by Rooms</a></Link>
          </p>
        </div>
        <div className={styles.grid}>
          <p className={styles.description}>
            Search by Game
         </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/about" >Our Info</a>
      </footer>
    </div>
  )
}
