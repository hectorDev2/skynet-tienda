import { Download } from '@/components/containers/Download'
import { Products } from '@/components/containers/Products'
import { Hero } from '@/components/containers/Hero'
import { Loading } from '@/components/containers/Loading'
import { Header } from '@/components/Header'
import Head from 'next/head'
import AOS from 'aos'
import { useEffect } from 'react'

import 'aos/dist/aos.css'
import { Footer } from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main>
        <Loading />
        <Header />
        <Hero />
        <Products />
        <Download />
        <Footer />
      </main>
    </>
  )
}
