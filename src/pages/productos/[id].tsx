/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loading } from '@/components/containers/Loading'
import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Content } from '@/components/productId/Content'
import { tShirts } from 'src/db/database'
import { useStore } from 'src/db/useStore'
interface HomeProps {
  productId: string
}

export default function Home({ productId }: HomeProps) {
  const getById = useStore((state: any) => state.getById)
  const tShirt = getById(productId)
  const router = useRouter()

  if (router.isFallback) {
    return <div>Cargando...</div>
  }
  console.log(tShirt)

  return (
    <>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main>
        <Loading />
        <Header />
        <div className="text-center mt-[100px] md:mt-[200px]">
          <Content tShirt={tShirt} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id
  try {
    return {
      props: {
        productId,
      },
    }
  } catch (error) {
    return {
      props: {
        productId: '1',
      },
    }
  }
}

export async function getStaticPaths() {
  const data = await tShirts

  // Mapea los datos de los productos para obtener un array de objetos con los IDs de los productos
  const productIds = data.map((product) => ({
    params: { id: product.id.toString() }, // Convertimos el ID a string ya que los parámetros de ruta deben ser strings
  }))

  const paths = productIds
  return {
    paths,
    fallback: true,
  }
}
