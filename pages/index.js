import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
         Welcome to looking to game
        </p>

        <div className={styles.grid}>
          <h3>New User</h3>

          <h3>Search by game</h3>

          <h3>Search by theme</h3>
                        
        </div>
      </main>

      <footer className={styles.footer}>
      <a href="/" >Our Info</a>
      </footer>
    </div>
  )
}
