import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/layout'

export default function OpenRooms() {
    return (

        <Layout>
            <Head>
                <title>Open Rooms</title>
            </Head>
        <h1>See All Available Game Rooms</h1>
        <Link href="/"><a>Home</a></Link>
        </Layout>
    )
}