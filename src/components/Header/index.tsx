/* eslint-disable @next/next/no-img-element */
import * as Styled from './styles'

import Link from 'next/link'
import { Nav } from '../Nav'
import { Menu } from '../Menu'

import { useEffect, useRef, useState } from 'react'
import { LoginModal } from '../LoginModal'
import gsap from 'gsap'

export function Header() {
  const logoRef = useRef(null)
  const navRef = useRef(null)
  const buttonsRef = useRef(null)

  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState<'games' | 'varios' | null>(
    null
  )

  const reset = () => {
    setIsExpanded(false)
    setSelectedMenu(null)
  }

  useEffect(() => {
    const tl = gsap.timeline({ repeatDelay: 7500 })
    tl.fromTo(
      logoRef.current,
      {
        x: -10,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 3,
      }
    )
      .fromTo(
        navRef.current,
        {
          x: -10,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        buttonsRef.current,
        {
          x: -10,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
  }, [])

  return (
    <>
      <Styled.Container>
        <Styled.ContentContainer>
          <Styled.NavContainer>
            <Styled.Logo ref={logoRef}>
              <Link href="/">
                <img
                  className="max-w-[200px]"
                  alt="logo skynet"
                  src="/logo.png"
                />
              </Link>
            </Styled.Logo>

            <Nav
              handleExpandMenu={setIsExpanded}
              handleSelectMenu={setSelectedMenu}
              selectedMenu={selectedMenu}
              menuExpanded={isExpanded}
              ref={navRef}
            />
          </Styled.NavContainer>
          <Styled.ButtonsWrap ref={buttonsRef}>
            <LoginModal />
            <Styled.MenuHamburguer aria-label="Abrir menu">
              <div className="menu-hamburguer"></div>
            </Styled.MenuHamburguer>
          </Styled.ButtonsWrap>
        </Styled.ContentContainer>
      </Styled.Container>
      <Menu show={isExpanded} selectedMenu={selectedMenu} />
      {isExpanded && <Styled.Overlay onClick={reset} />}
    </>
  )
}
