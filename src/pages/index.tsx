import { Download } from '@/components/containers/Download'
import { Products } from '@/components/containers/Products'
import { Hero } from '@/components/containers/Hero'
import { Loading } from '@/components/containers/Loading'
import { Header } from '@/components/Header'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import AOS from 'aos'
import { useEffect } from 'react'

import 'aos/dist/aos.css'
import { TShirt } from 'src/types'
import { tShirts } from 'src/db/database'
import RootLayout from 'src/layout/layout'

interface HomeProps {
  tShirts: TShirt[]
}

export default function Home({ tShirts }: HomeProps) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <RootLayout>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main>
        <Loading />
        <Header />
        <Hero />
        <Products tShirts={tShirts} />
        <Download />
      </main>
    </RootLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await tShirts
    console.log(data, 'polos')

    return {
      props: {
        tShirts: data,
      },
    }
  } catch (error) {
    return {
      props: {
        tShirts: [],
      },
    }
  }
}
