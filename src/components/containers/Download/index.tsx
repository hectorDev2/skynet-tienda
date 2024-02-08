/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Container, LeftSide, RightSide } from './style'
import Cards from '@/assets/icons/cards_group.svg'
import Dots from '@/assets/icons/dots_group.svg'
import Buy from '@/assets/icons/buy.svg'
import Download1 from '@/assets/images/download-1.png'
import Download2 from '@/assets/images/download-2.png'
import { Button } from '@/components/Button'

export function Download() {
  return (
    <Container>
      <div className="sub-container">
        <LeftSide>
          <img src="/logo-wow.png" />
          <h2>Juega ahora de nuestro servidor</h2>
          <div className="infos">
            <div className="info">
              <Image src={Cards} alt="" />
              <p>experiencia x5</p>
            </div>
            <div className="info">
              <Image src={Dots} alt="" />
              <p>Comunidad latinoamericana </p>
            </div>
            <div className="info">
              <Image src={Buy} alt="" />
              <p>Mantenimiento las 24H</p>
            </div>
          </div>
          <a target="_blank" rel="noreferrer" href="https://www.skynetwow.com/">
            <Button>Explorar Mundo</Button>
          </a>
        </LeftSide>
        <RightSide>
          <Image className="img1" src={Download1} alt="" />
          <Image className="img2" src={Download2} alt="" />
        </RightSide>
      </div>
    </Container>
  )
}
