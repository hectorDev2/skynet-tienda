import { Download } from '@/components/containers/Download'
import { Games } from '@/components/containers/Games'
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

interface HomeProps {
  tShirts: TShirt[]
}

export default function Home({ tShirts }: HomeProps) {
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
        <Games tShirts={tShirts} />
        <Download />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data: TShirt[] = await tShirts
    console.log(data)

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
