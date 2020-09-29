import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

export default function OpenRooms() {
    return (
        <div>
            <Navbar></Navbar>

        <Layout>
            <Head>
                <title>Open Rooms</title>
            </Head>

            <h1>See All Available Game Rooms</h1>
            <Link href="/"><a>Home</a></Link>
        </Layout>
        </div>
    )
}