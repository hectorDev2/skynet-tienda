/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Container, GameCard, GamesList } from './style'
import { useStore } from '../../../db/useStore'
import Link from 'next/link'

export function Products() {
  const tShirts = useStore((state: { tShirts: any }) => state?.tShirts)

  return (
    <Container>
      <div className="flex text-center justify-evenly">
        <div className="text-center">
          <p className="games-label">Merchandising</p>
          <h2 className="text-4xl">Modelos Exclusivos</h2>
        </div>
      </div>
      <GamesList>
        {tShirts?.map((tShirt: any) => (
          <Link key={tShirt.name} href={`/productos/${tShirt.id}`}>
            <GameCard data-aos="fade-right ">
              <div className="game-image-container transition-transform ease-in  hover:scale-110">
                <img className="w-[400px]" src={`${tShirt.image[0]}`} alt="" />
                <div className="overlay"></div>
              </div>
              <p className="game-name">{tShirt.name}</p>
              <p className="game-category">S ./{tShirt.price}</p>
            </GameCard>
          </Link>
        ))}
      </GamesList>
      <div className="w-full my-20 flex justify-center ">
        <Link href="/productos">
          <button>
            VER MAS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon mx-auto hover:scale-150  icon-tabler icon-tabler-caret-down"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 10l6 6l6 -6h-12" />
            </svg>
          </button>
        </Link>
      </div>
    </Container>
  )
}
