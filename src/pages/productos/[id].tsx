import { Loading } from '@/components/containers/Loading'
import { Header } from '@/components/Header'
import Head from 'next/head'
import AOS from 'aos'
import { useEffect } from 'react'

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
        <h2>lista de productos</h2>
      </main>
    </>
  )
}
