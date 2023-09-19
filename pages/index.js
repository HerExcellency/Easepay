// import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Faq from '../components/Faq'
// import Footer from '../components/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <Header />
      </Head>
      
      <main>
        <Banner />
        <Faq />
      </main>
    </div>
  )
};
