/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Download } from '@/components/containers/Download'
import { Loading } from '@/components/containers/Loading'
import { Header } from '@/components/Header'
import Head from 'next/head'
import 'aos/dist/aos.css'

import { Footer } from '@/components/Footer'
import { useEffect } from 'react'
import AOS from 'aos'

export default function Products() {
  const products = [
    {
      id: '1',
      name: 'Polos Anime',
      category: 'anime',
      price: 25,
      colors: [
        { id: 1, name: 'black' },
        { id: 2, name: 'blue' },
        { id: 3, name: 'red' },
      ],
      description:
        'Sumérgete en el fascinante mundo del anime con nuestra colección de polos inspirados en tus series y personajes favoritos. Desde clásicos atemporales hasta los últimos éxitos de la animación japonesa, encontrarás diseños únicos que reflejan tu pasión por el anime.',
      image: [
        '/polos/anime/1.png',
        '/polos/anime/2.png',
        '/polos/anime/3.png',
        '/polos/anime/4.png',
      ],
    },
    {
      id: '2',
      name: 'Counter Strike',
      category: 'counter',
      price: 20,
      colors: [
        { id: 1, name: 'blue' },
        { id: 2, name: 'white' },
        { id: 3, name: 'red' },
      ],
      description:
        'Únete a la acción trepidante y la estrategia táctica con nuestra colección de polos inspirados en el legendario juego Counter-Strike. Desde la emblemática insignia del Counter-Terrorist hasta el icónico logo del Terrorist, nuestros diseños capturan la esencia de este juego de disparos en primera persona que ha cautivado a millones de jugadores en todo el mundo.',
      image: [
        '/polos/counter/1.png',
        '/polos/counter/2.png',
        '/polos/counter/3.png',
      ],
    },
    {
      id: '3',
      name: 'Polos Doteros',
      category: 'dota',
      price: 18,
      colors: [
        { id: 1, name: 'green' },
        { id: 2, name: 'yellow' },
        { id: 3, name: 'black' },
      ],
      description:
        'Sumérgete en el emocionante mundo de Dota con nuestra colección de polos inspirados en este popular juego de estrategia en tiempo real. Desde los héroes más icónicos hasta los diseños emblemáticos del mapa, nuestros polos capturan la esencia del combate épico y la competencia estratégica que define a Dota',
      image: [
        '/polos/dota2/1.png',
        '/polos/dota2/2.png',
        '/polos/dota2/3.png',
        '/polos/dota2/4.png',
      ],
    },
    {
      id: '4',
      name: 'God Of War',
      category: 'god-of-war',
      price: 30,
      colors: [
        { id: 1, name: 'red' },
        { id: 2, name: 'black' },
        { id: 3, name: 'blue' },
      ],
      description:
        'Embárcate en una aventura épica inspirada en la mitología griega con nuestra colección de polos de God of War. Con diseños que rinden homenaje al valiente guerrero espartano, Kratos, y a las criaturas míticas que pueblan su mundo, nuestros polos capturan la intensidad y la grandeza de esta aclamada serie de videojuegos. ',
      image: [
        '/polos/gow/1.png',
        '/polos/gow/2.png',
        '/polos/gow/3.png',
        '/polos/gow/4.png',
        '/polos/gow/5.png',
      ],
    },
    {
      id: '5',
      name: 'Half life',
      category: 'Half_life',
      price: 35,
      colors: [
        { id: 1, name: 'black' },
        { id: 2, name: 'green' },
        { id: 3, name: 'white' },
      ],
      description:
        ' Sumérgete en el mundo innovador y lleno de suspense de Half-Life con nuestra colección de polos inspirados en esta icónica serie de videojuegos. Desde el emblemático logotipo hasta diseños que rinden homenaje a personajes como Gordon Freeman y criaturas como los headcrabs, nuestros polos capturan la esencia de la revolucionaria franquicia de Valve.',
      image: ['/polos/half_life/1.png', '/polos/half_life/2.png'],
    },
    {
      id: '6',
      name: 'metal slug',
      category: 'metal_slug',
      price: 40,
      colors: [
        { id: 1, name: 'red' },
        { id: 2, name: 'black' },
        { id: 3, name: 'gold' },
      ],
      description:
        ' Únete a la batalla contra el malvado General Morden y su ejército rebelde con nuestra colección de polos inspirados en la clásica serie de videojuegos Metal Slug. Con diseños que capturan la acción explosiva, los icónicos vehículos y los valientes héroes de la Resistencia, nuestros polos son el complemento perfecto para los fanáticos de la intensa acción arcade.',
      image: ['/polos/metal_slug/1.png'],
    },
    {
      id: '7',
      name: 'star craft',
      category: 'star_craft',
      price: 22,
      colors: [
        { id: 1, name: 'blue' },
        { id: 2, name: 'white' },
        { id: 3, name: 'red' },
      ],
      description:
        'Demuestra tu lealtad a la legendaria saga de videojuegos con nuestra selección de polos inspirados en el universo de StarCraft. Ya sea que te alinees con los terran, zerg o protoss, nuestros diseños te permitirán llevar tu amor por el juego a otro nivel.',
      image: [
        '/polos/starcraft/1.png',
        '/polos/starcraft/2.png',
        '/polos/starcraft/3.png',
      ],
    },
    {
      id: '8',
      name: 'Nintendo',
      category: 'nintendo',
      price: 28,
      colors: [
        { id: 1, name: 'black' },
        { id: 2, name: 'blue' },
        { id: 3, name: 'green' },
      ],
      description:
        ': Revive la nostalgia y la emoción de tus juegos favoritos de Nintendo con nuestra línea de polos dedicada a esta icónica compañía de videojuegos. Desde Mario y Zelda hasta Pokémon y Splatoon, nuestra colección ofrece una amplia gama de opciones para los fans de todas las edades.',
      image: [
        '/polos/nintendo/1.png',
        '/polos/nintendo/2.png',
        '/polos/nintendo/3.png',
      ],
    },
  ]

  const data = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      images: product.image,
    }
  })
  console.log(data, 'images')
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main className="pt-[100px] md:pt-[150px]">
        <div className="px-[10px] md:px-[100px]">
          {products.map(({ image, name, id }) => {
            return (
              <div key={id} className="py-[50px] relative">
                <img
                  className="absolute z-[-1] w-[200px] top-[0] filter  opacity-10 right-[-20px]  md:right-[-50px]"
                  src={`/categories/${id}.png`}
                />

                <h2 className="text-2xl text-[#04ADFF] uppercase">{name}</h2>
                <div className="flex  overflow-x-auto gap-5 md:gap-2" key={id}>
                  <div className="flex gap-4">
                    {image.map((image, i) => (
                      <div
                        style={{
                          background:
                            'linear-gradient(100.71deg, rgb(2, 2, 3) 2.26%, rgba(2, 2, 3, 0) 73.74%);',
                        }}
                        className=" w-[200px]  md:w-[300px] "
                        data-aos="fade-right "
                        key={i}
                      >
                        <img src={image} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <Loading />
        <Header />
        <Download />
        <Footer />
      </main>
    </>
  )
}
