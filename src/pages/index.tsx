import { Download } from '@/components/containers/Download'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'
import { Products } from '@/components/containers/Products'
import { Hero } from '@/components/containers/Hero'
import { Loading } from '@/components/containers/Loading'
import { Header } from '@/components/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { Footer } from '@/components/Footer'
import { Layout } from 'src/layout/Layout'

export default function Home () {
  // const supabase = createServerComponentClient({ cookies })
  // const { data: tshirts } = await supabase.from('tshirts').select('*')
  // console.log(tshirts)

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <Layout>
      <Loading />
      <Header />
      <Hero />
      <Products />
      <Download />
      <Footer />
    </Layout>
  )
}
