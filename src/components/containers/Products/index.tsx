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
    </Container>
  )
}
