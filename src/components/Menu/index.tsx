/* eslint-disable @next/next/no-img-element */
import * as Styled from './styles'

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
        image: (
          <img
            src={`https://p325k7wa.twic.pics/high/one-piece/one-piece-odyssey/00-page-setup/OPOD_character_gallery/OPOD_luffy.png?twic=v1/resize=370/step=10/quality=80`}
            alt="categoria anime image"
          />
        ),
        href: '/category/anime',
        name: 'Polos anime',
      },
      {
        image: (
          <img
            className="w-[250px]"
            src={`https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-40/512/Starcraft-2-1-icon.png`}
            alt="categoria anime image"
          />
        ),
        href: '/category/anime',
        name: 'Polos star craft',
      },
      {
        image: (
          <img
            className="w-[250px]"
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WoW_icon.svg/2048px-WoW_icon.svg.png`}
            alt="categoria anime image"
          />
        ),
        href: '/category/anime',
        name: 'Polos wow',
      },
      {
        image: (
          <img
            className="w-[250px]"
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Half-Life_lambda_logo.svg/2048px-Half-Life_lambda_logo.svg.png`}
            alt="categoria anime image"
          />
        ),
        href: '/category/anime',
        name: 'Polos Half Life',
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
            src={`https://www.figurasmranime.cl/wp-content/uploads/2022/05/Fashion-anime-japanese-Naruto-action-figure.png_350x350-copia.png`}
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
                      <p className="text-sm">{game.name}</p>
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
                    <p className="text-sm">{game.name}</p>
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
