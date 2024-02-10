/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Container, GameCard, GamesList } from './style'

import Cubes from '@/assets/icons/cubes.svg'
import Blizzard from '@/assets/icons/icon-logo.svg'
import Playstation from '@/assets/icons/playstation.svg'
import Xbox from '@/assets/icons/xbox.svg'
import { useState } from 'react'
import { TShirt } from 'src/types'
import Link from 'next/link'

interface GamesProps {
  tShirts: TShirt[]
}

enum Platform {
  'BLIZZARD' = 'BLIZZARD',
  'PLAYSTATION' = 'PLAYSTATION',
  'NITENDO' = 'NITENDO',
  'XBOX' = 'XBOX',
}

export function Products({ tShirts }: GamesProps) {
  const [filter, setFilter] = useState<Platform | null>(null)
  const selectFilter = (selectedFilter: Platform) => {
    if (selectedFilter != filter) {
      setFilter(selectedFilter)
    } else {
      setFilter(null)
    }
  }

  return (
    <Container>
      <div className="flex justify-evenly">
        <div className="left">
          <p className="games-label">Merchandising</p>
          <h2>Modelos Exclusivos</h2>
        </div>
        <div className="right">
          <div className="platform">
            <button
              className={filter === Platform.BLIZZARD ? 'active' : ''}
              aria-label="Filtrar jogos Blizzard"
              onClick={() => selectFilter(Platform.BLIZZARD)}
            >
              Anime
              <Image src={Blizzard} alt="Blizzard" />
            </button>
            <button
              className={filter === Platform.NITENDO ? 'active' : ''}
              aria-label="Filtrar jogos Nitendo"
              onClick={() => selectFilter(Platform.NITENDO)}
            >
              Nintendo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z" />
                <path d="M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z" />
                <circle cx="17.5" cy="15.5" r="1" fill="currentColor" />
                <circle cx="6.5" cy="8.5" r="1" fill="currentColor" />
              </svg>
            </button>
            <button
              className={filter === Platform.XBOX ? 'active' : ''}
              aria-label="Filtrar jogos Xbox"
              onClick={() => selectFilter(Platform.XBOX)}
            >
              <Image src={Xbox} alt="Xbox" />
            </button>
            <button
              className={filter === Platform.PLAYSTATION ? 'active' : ''}
              aria-label="Filtrar jogos Playstation"
              onClick={() => selectFilter(Platform.PLAYSTATION)}
            >
              <Image src={Playstation} alt="Playstation" />
            </button>
          </div>
          <a href="#">
            <Image src={Cubes} alt="" />
            Ver Todo
          </a>
        </div>
      </div>
      <GamesList>
        {tShirts?.map((tShirt) => (
          <Link key={tShirt.name} href={`/productos/${tShirt.id}`}>
            <GameCard data-aos="fade-right">
              <div className="game-image-container">
                <img className="w-[400px]" src={`${tShirt.image[0]}`} alt="" />
                <div className="overlay"></div>
              </div>
              <p className="game-name">{tShirt.name}</p>
              <p className="game-category">{tShirt.price}</p>
            </GameCard>
          </Link>
        ))}
      </GamesList>
    </Container>
  )
}
