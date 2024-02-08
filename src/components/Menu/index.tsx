/* eslint-disable @next/next/no-img-element */
import * as Styled from './styles'

import diablo_3 from '@/assets/game_icons/diablo_3.png'
import hearthstone from '@/assets/game_icons/hearthstone.png'
import overwatch_2 from '@/assets/game_icons/overwatch_2.png'
import wow from '@/assets/game_icons/wow.png'

import starcraftWcs from '@/assets/game_logos/star_craft.png'

import cubes from '@/assets/icons/cubes.svg'
import iconLogo from '@/assets/icons/icon-logo.svg'
import iconDownload from '@/assets/icons/icon-downloads.svg'
import iconChat from '@/assets/icons/icon-chat.svg'
import trophy from '@/assets/icons/trophy.svg'

import { Fragment, ReactElement, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IGames {
  image: ReactElement
  href: string
  name: string
}

interface MenuProps {
  show: boolean
  selectedMenu: 'games' | 'varios' | null
}

export function Menu({ show, selectedMenu }: MenuProps) {
  const games = useMemo<IGames[]>(
    () => [
      {
        image: <Image src={diablo_3} alt="" />,
        href: '/category/anime',
        name: 'Diablo® II ressurected',
      },
      {
        image: <Image src={overwatch_2} alt="" />,
        href: '#',
        name: 'Overwatch® 2',
      },
      {
        image: <Image src={wow} alt="" />,
        href: '#',
        name: 'World of Warcraft®',
      },
      {
        image: <Image src={hearthstone} alt="" />,
        href: '#',
        name: 'Hearthstone®',
      },
    ],
    []
  )

  const varios = useMemo<IGames[]>(
    () => [
      {
        name: 'Mugs',
        href: '#',
        image: (
          <img
            src={`https://www.nespresso.com/static/us/solutions/product/pdp/porcelainmugs/nesp-festive-le-mug-set-2000x2000.png`}
            alt=""
          />
        ),
      },
      {
        name: 'Escultura',
        href: '#',
        image: (
          <img
            src={`https://alitools.io/es/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH0b5939bc62974af29101b4aef8392ec5y.png_480x480.jpg`}
            alt=""
          />
        ),
      },
      {
        name: 'Posters',
        href: '#',
        image: (
          <img
            src={`https://www.chitrakalaart.in/wp-content/uploads/2023/08/Group-4.png`}
            alt=""
          />
        ),
      },
    ],
    []
  )

  return (
    <>
      <Styled.Container show={show} selected={selectedMenu || 'null'}>
        <Styled.GamesContainer selected={selectedMenu || 'games'}>
          {selectedMenu === 'games' && (
            <>
              {games.map((game) => (
                <Fragment key={game.name}>
                  <a href={`${game.href}`}>
                    <Styled.Game>
                      {game.image}
                      <p>{game.name}</p>
                    </Styled.Game>
                  </a>
                </Fragment>
              ))}
            </>
          )}
          {selectedMenu === 'varios' && (
            <>
              {varios.map((game) => (
                <span key={game.name}>
                  <Styled.Game>
                    {game.image}
                    <p>{game.name}</p>
                  </Styled.Game>
                </span>
              ))}
            </>
          )}
        </Styled.GamesContainer>
        <Styled.Footer>
          {selectedMenu === 'games' && (
            <>
              <Link href={'#'}>
                <Image src={cubes} alt="" /> Ver todos jogos
              </Link>
              <Link href={'#'}>
                <Image src={iconLogo} alt="" /> Aplicativo Battle.net
              </Link>
              <Link href={'#'}>
                <Image src={iconDownload} alt="" /> Downloads
              </Link>
              <Link href={'#'}>
                <Image src={iconChat} alt="" /> Fóruns dos jogos
              </Link>
            </>
          )}
          {selectedMenu === 'varios' && (
            <Link href={'#'}>
              <Image src={trophy} alt="" /> Torneios da comunidade
            </Link>
          )}
        </Styled.Footer>
      </Styled.Container>
    </>
  )
}
