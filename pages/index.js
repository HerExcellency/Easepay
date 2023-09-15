import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Faq from '../components/Faq'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Faq />
    </div>
  )
};
