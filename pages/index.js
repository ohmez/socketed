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
         
        <h3>New User</h3>
         </p>
          </div>
        <div className={styles.grid}>
        <p className={styles.description}>
         
          <h3><Link href="/rooms/open-rooms"><a>Search by game</a></Link></h3>
         </p>
        </div>
        <div className={styles.grid}>
        <p className={styles.description}>
         
          <h3>Search by theme</h3>
         </p>
        </div>

      </main>

      <footer className={styles.footer}>
      <a href="/about" >Our Info</a>
      </footer>
    </div>
  )
}
