/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { CardSeeMore, Container, GameCard, GamesList, Header } from './style'

import Cubes from '@/assets/icons/cubes.svg'
import Blizzard from '@/assets/icons/icon-logo.svg'
import Playstation from '@/assets/icons/playstation.svg'
import Nitendo from '@/assets/icons/nitendo.svg'
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

export function Games({ tShirts }: GamesProps) {
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
      <Header>
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
              <Image src={Blizzard} alt="Blizzard" />
            </button>
            <button
              className={filter === Platform.NITENDO ? 'active' : ''}
              aria-label="Filtrar jogos Nitendo"
              onClick={() => selectFilter(Platform.NITENDO)}
            >
              <Image src={Nitendo} alt="Nitendo" />
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
      </Header>
      <GamesList>
        {tShirts?.map((tShirt) => (
          <Link key={tShirt.name} href={`/productos/${tShirt.id}`}>
            <GameCard data-aos="fade-right">
              <div className="game-image-container">
                <img className="w-[400px]" src={`${tShirt.image[0]}`} alt="" />
                <div className="overlay"></div>
              </div>
              <p className="game-name">{tShirt.name}</p>
              <p className="game-category">{tShirt.category}</p>
            </GameCard>
          </Link>
        ))}
        <CardSeeMore data-aos="fade-right">
          <div>
            <svg
              width="87"
              height="41"
              viewBox="0 0 87 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5508 33.1467C22.5508 33.1467 22.7327 33.9468 23.1811 33.6453C23.6296 33.3442 23.8114 32.8924 24.2599 32.8924C24.7084 32.8924 26.578 32.541 27.0265 32.8924C27.4749 33.2439 27.5199 32.9423 27.7441 32.9423C27.9683 32.9423 28.6271 33.0593 28.6271 33.0593C29.2005 32.9995 29.0836 32.0881 28.6692 31.8214C28.071 31.3529 27.2657 31.0519 26.6677 30.5829C26.6078 30.1311 26.5481 29.6793 26.4883 29.2275C26.6527 28.9935 26.8171 28.759 26.9817 28.5245C26.9817 27.7718 26.9817 27.0187 26.9817 26.2657C26.8919 26.0648 26.8022 25.864 26.7125 25.6632C26.6826 25.0943 26.6527 24.5255 26.6228 23.9564C26.5481 23.8559 26.4733 23.7555 26.3985 23.6551C26.3985 23.4377 26.3985 23.2201 26.3985 23.0025C26.5481 22.7851 26.8509 22.5675 27.0006 22.3499C27.0454 21.9315 26.8449 21.6363 26.8898 21.2179C26.785 20.6825 26.7723 20.0239 26.6677 19.4884C26.6677 18.8358 26.6677 18.1831 26.6677 17.5305C27.1015 17.4012 27.2067 17.2089 27.2376 17.0144C27.2775 16.764 27.1548 16.4692 27.0265 15.8738C26.9667 12.7446 26.9376 9.49221 26.8778 6.3629C27.1164 5.98891 27.4024 5.79545 27.4084 5.51838C27.4131 5.30267 27.1815 5.12283 26.892 4.87956C26.892 4.66202 26.892 4.4446 26.892 4.22691C26.892 4.22691 27.3854 3.22282 27.7889 3.22282C28.1926 3.22282 28.4618 2.92168 28.4618 2.62049C28.8301 1.88869 28.0581 1.81721 28.0581 1.81721C27.2037 1.79948 26.2361 1.84321 25.4027 1.82564C24.6675 1.80999 24.0641 1.73256 23.3487 1.71681C23.0347 1.73365 22.7208 1.75024 22.4068 1.76698C21.6352 2.00131 21.7973 2.42032 22.0928 2.65439C22.4516 2.88025 22.7578 3.13895 23.1692 3.14758C23.6714 3.15803 24.0711 3.32259 24.2457 3.82525C24.2906 5.83335 24.3354 7.84151 24.3802 9.84956C24.3952 11.3306 24.4409 12.8117 24.4557 14.2924C24.4707 15.7733 24.4552 17.2544 24.4699 18.7353C24.4998 20.4758 24.5297 22.2161 24.5597 23.9564C24.5597 23.9564 24.4699 24.609 24.3354 24.7597C24.2009 24.9102 24.2457 26.2154 24.2457 26.2154C24.7424 26.6482 24.6368 26.5876 24.2906 27.1694C24.2606 28.458 24.2307 29.7464 24.2009 31.0347C24.0812 31.2692 23.9616 31.5037 23.842 31.7377C23.842 31.7377 22.5508 32.4942 22.5508 33.1467ZM0.830002 39.3873C0.164926 39.2506 0.0402241 38.9287 0.276457 38.739C0.418219 38.6251 0.797183 38.6292 0.967551 38.5497C1.21687 38.4322 1.47153 38.2783 1.62163 38.0927C1.87816 37.775 1.72255 37.0399 2.02868 36.4409C2.32285 33.9141 2.41098 30.5663 2.11696 29.4401C1.94044 27.7045 2.12164 21.9393 2.12164 21.2086C2.31698 20.8576 2.39028 20.8289 2.39179 20.2138C2.39231 19.9734 2.55406 19.5993 2.38176 19.3019C2.13183 19.0166 2.20737 17.901 2.18782 17.2722C2.15891 16.3361 2.2276 16.3438 2.48808 15.4957C2.58614 15.1766 2.61936 14.7971 2.48808 14.4911C2.27585 13.9967 1.96899 14.5679 1.98942 13.575C2.03949 11.1654 2.12934 8.74119 2.06596 6.33259C2.07969 6.11797 2.43713 6.07877 2.50711 5.8759C2.59607 5.61796 2.62555 5.29894 2.50711 5.05395C2.44004 4.91508 2.06465 5.0957 1.95453 4.99046C1.28154 4.34742 0.43587 3.94349 0.0458959 3.08551C-0.105261 2.75276 0.138528 2.01639 0.458972 1.85725C0.989846 1.59349 1.97731 1.86614 2.55817 1.76595C2.87054 1.71214 3.06821 1.52627 3.38464 1.51233C5.85266 1.40362 8.39234 1.1569 10.8515 1.40054C11.2452 1.43953 11.3749 2.134 11.7337 2.3064C12.2256 2.54276 12.9448 2.49212 13.3218 2.89547C13.9261 3.54174 14.3597 4.07415 14.4363 4.97003C14.5305 6.06946 14.7194 7.31473 14.7101 8.15924C14.7023 8.86644 14.4898 9.50474 14.1745 10.113C13.7427 10.9466 13.2286 11.7246 12.6719 12.5481C12.351 13.0227 11.7799 13.4633 11.6455 14.0046C11.5066 14.5641 12.9521 14.1533 13.2478 14.6432C13.5321 15.1141 13.0054 15.6659 13.1642 16.1966C13.3061 16.6699 14.1257 16.716 14.223 17.2012C14.474 18.4535 13.9201 19.7778 14.1348 21.0372C14.2034 21.4404 14.8432 21.4548 14.9054 21.8592C14.9809 22.7331 14.9539 23.6582 14.9607 24.5866C14.9679 25.5748 15.0062 26.5675 14.9935 27.5068C14.9693 27.861 14.5056 28.0681 14.4643 28.42C14.3538 29.3575 14.6759 30.416 14.4689 31.3353C14.2508 32.3034 13.4725 32.987 13.1689 33.9302C12.9059 34.747 12.9805 35.9397 12.5561 36.4518C11.8542 36.6723 10.9805 37.1662 10.4276 37.578C9.61972 38.179 9.10323 38.8679 8.85486 38.8897C8.53927 39.1705 7.87163 38.9828 7.48034 39.1289C7.11951 39.263 7.0855 39.5656 6.70502 39.5162C6.40456 39.4778 6.49821 39.2282 6.26388 39.0301C6.12745 38.9142 5.8651 38.9069 5.73454 39.0301C4.9426 39.6675 5.53328 39.5006 4.63402 39.4175C3.72052 39.3332 1.94205 39.615 0.830002 39.3873ZM5.9476 35.7213C6.15349 35.3257 6.35939 34.93 6.56533 34.5338C6.50637 33.2252 6.44762 31.916 6.38876 30.6068C6.56533 30.363 6.74173 30.1197 6.91814 29.8758C6.91814 28.5573 6.91814 27.2388 6.91814 25.9201C6.91814 25.3206 6.83459 24.7212 6.83459 24.122C6.21526 23.6097 6.5114 23.6171 7.011 23.026C7.011 22.4477 7.1505 21.981 7.1505 21.4025C7.09154 20.9155 7.03279 20.4283 6.97393 19.9412C7.06227 19.6977 7.15049 19.4542 7.23867 19.2106C7.23867 18.4781 7.32222 17.8853 7.32222 17.1527C7.32222 16.4648 7.34214 16.2344 7.46791 16.2775C7.59368 16.3205 7.82546 16.6374 8.24862 17.0443C8.57014 17.3535 8.89188 17.6628 9.2135 17.9719C9.80762 18.5428 10.3861 18.5948 10.1454 19.5303C9.92033 20.4055 10.5671 20.6483 10.3661 21.5167C10.2125 22.1801 10.0107 22.5857 10.0554 22.997C10.0821 23.2437 10.1977 23.4925 10.4653 23.8002C10.7126 24.0844 10.795 24.0667 10.6472 24.4166C10.418 24.9589 10.2226 25.2751 10.1996 25.6006C10.1701 26.0189 10.398 26.2111 10.5978 26.9501C10.7614 27.5545 10.7461 27.9552 10.5947 28.5615C10.4155 29.2805 10.2363 29.9996 10.057 30.7186C10.0369 31.2624 9.9873 31.8068 9.94867 32.3512C9.89023 33.1805 9.77969 33.2018 9.20304 33.7945C8.67917 34.3331 8.00494 34.7938 7.49952 35.2752C6.94081 35.4884 6.50637 35.5081 5.9476 35.7213ZM7.29742 12.6446C7.74503 12.6578 7.94521 12.7021 8.08397 12.6449C8.22279 12.5876 8.3003 12.4288 8.50276 12.0361C8.76423 11.5283 9.15152 10.8938 9.47273 10.8461C10.0139 10.7658 10.2962 10.6852 10.2962 10.6852C10.2962 10.6852 10.5794 10.6316 10.4825 9.93369C10.3856 9.2358 10.1859 8.56467 10.3619 8.37682C10.5377 8.18897 10.5749 7.65216 10.3876 7.43738C10.2006 7.22276 10.0227 7.00792 10.325 6.71271C10.6272 6.41745 10.8356 5.92315 10.1134 6.00373C9.39121 6.08427 9.40016 5.77169 9.31671 5.55686C9.23316 5.34219 8.44542 5.39121 8.03353 5.36755C7.62207 5.44809 7.27607 5.42122 7.28792 5.85062C7.29993 6.28002 7.23073 8.35005 7.23665 8.56478C7.24258 8.77951 7.29742 12.6446 7.29742 12.6446ZM30.1417 31.4871C30.1095 31.6696 29.6906 31.6706 29.7228 31.8536C29.7679 32.1089 29.7846 32.5077 30.0418 32.5409C30.7879 32.6376 31.8107 32.3408 32.5505 32.4775C32.8426 32.5316 32.8586 33.0297 33.1264 33.1581C33.3465 33.1545 33.6852 33.1623 33.9643 33.1581C34.1791 33.0463 34.1214 32.6522 34.3309 32.53C34.5888 32.3792 34.9406 32.3221 35.221 32.425C35.3719 32.4807 35.166 32.8773 35.3257 32.8966C36.6308 32.8472 37.7968 32.9902 39.0316 32.8966C39.2782 32.856 39.0269 32.503 39.229 32.3564C39.4586 32.1895 40.028 32.4806 40.0667 32.1994C40.2673 30.7451 39.9543 29.1214 40.0908 27.6602C40.1346 27.1923 40.5834 26.915 40.6838 26.4558C40.7172 26.3029 40.9005 26.3002 40.9151 26.1496C40.9659 25.6252 40.9566 24.9892 40.8239 24.4728C40.648 24.2924 40.1102 24.2267 39.9338 24.3089C39.735 24.4553 39.9157 24.9749 39.7823 25.1824C39.7162 25.2852 39.4812 25.0794 39.4157 25.1824C39.3514 25.2837 39.4345 25.4499 39.464 25.5813C39.4817 25.66 39.4801 25.7264 39.4157 25.7585C39.0723 25.9301 38.5667 25.5228 38.2637 25.7585C37.9664 25.9897 38.3002 26.4372 38.0487 26.7176C37.6409 27.1721 36.7671 27.4383 36.3609 27.8943C35.878 28.4362 35.9211 28.9894 35.3661 29.4573C34.9317 29.8233 34.1935 29.8618 33.6671 30.0755C33.0568 30.3235 32.7654 30.7805 32.1316 30.9588C31.94 31.0129 31.7064 30.6781 31.765 30.4878C32.2399 28.9483 32.8571 27.4005 33.3698 25.8731C33.6987 24.8932 33.8531 24.275 34.2084 23.3041C34.5761 22.2995 35.0565 21.0577 35.6569 20.1722C35.7751 19.9977 36.1696 20.1116 36.2329 19.9103C36.3899 19.4109 36.0961 18.8448 36.2329 18.3395C36.334 17.9654 36.7278 17.6065 37.0538 17.3969C37.2739 17.2554 37.6253 17.4526 37.7225 17.2095C37.9494 16.6422 37.7374 16.0412 37.8803 15.4471C37.9767 15.0469 38.2515 14.8016 38.4266 14.4288C38.6586 13.934 38.6417 13.5045 38.8978 13.0216C39.1063 12.6288 39.545 12.0789 39.6713 11.6523C39.8448 11.0665 39.7026 10.779 39.7591 10.1706C39.7742 10.0068 40.0142 9.91612 40.0209 9.75167C40.1022 7.78115 40.2065 5.80367 40.0908 3.83466C40.0815 3.67421 39.7211 3.68114 39.7243 3.52048C39.7368 2.91878 39.8098 2.38715 39.7766 1.84487C39.7703 1.73891 39.8069 1.65213 39.701 1.64771C38.0613 1.57892 36.4429 1.61626 34.8021 1.6354C33.4582 1.65094 32.1108 1.54321 30.7701 1.6354C30.5672 1.64933 30.3854 1.68421 30.2464 1.83254C30.1131 1.97484 30.047 2.27854 30.0547 2.4732C30.09 3.34828 30.0371 4.30099 30.0547 5.35321C30.0578 5.54818 30.442 5.43151 30.5083 5.61505C30.6929 6.12623 30.707 6.69654 30.6654 7.2383C30.6521 7.41237 30.4405 7.64675 30.4446 7.82102C30.5287 8.42679 30.6072 8.85489 30.7178 9.43757C30.7813 9.6629 30.9752 9.8389 31.0319 10.066C31.0996 10.3374 30.8522 10.8856 31.131 10.9038C31.2237 10.9097 31.5469 10.9637 31.7126 10.9038C31.9257 10.8265 31.6343 10.4359 31.7126 10.223C31.7682 10.0721 32.0537 10.0676 32.0792 9.90889C32.2176 9.04665 31.9771 8.03627 32.1138 7.17361C32.1555 6.91074 32.3062 6.63306 32.5327 6.49294C32.7255 6.37362 33.0742 6.67195 33.2135 6.49294C33.4065 6.24457 33.2166 5.95846 33.3359 5.66741C33.5068 5.25089 33.7848 4.86682 34.1214 4.56776C34.4305 4.29298 34.7397 3.96413 35.1509 3.92134C36.0704 3.82583 37.1702 3.91156 38.4152 3.85795C38.5319 3.85276 38.5633 4.03224 38.5723 4.14886C38.6163 4.72311 38.7209 5.50331 38.5723 5.87688C38.3567 6.41906 37.8689 7.0242 37.3737 7.58727C37.0349 7.97228 36.6924 8.31303 36.431 8.69897C36.1177 9.16165 36.5858 9.79258 36.4254 10.3278C36.2612 10.8753 35.8127 11.4572 35.4651 11.911C35.18 12.2833 34.7609 12.4738 34.4936 12.859C34.1599 13.34 33.9656 13.8137 33.7548 14.3598C33.5796 14.8139 33.4667 15.2932 33.3883 15.7736C33.3264 16.153 33.5077 16.582 33.3359 16.9256C33.21 17.1774 32.9261 17.1309 32.743 17.3445C32.489 17.6409 32.3403 18.0208 32.2193 18.3918C32.0761 18.8312 32.0643 19.0915 31.8407 19.4959C31.5898 19.9494 31.0861 20.3875 30.8579 20.8529C30.6089 21.3604 30.5804 21.9771 30.4559 22.5285C30.3356 23.0618 30.2349 23.564 30.1248 24.0994C29.9899 24.7547 29.8492 25.4205 29.8629 26.0893C29.8671 26.2928 30.0824 26.4329 30.1771 26.6129C30.2572 26.7649 30.4409 26.9212 30.3866 27.0842C30.3124 27.3069 29.8961 27.323 29.8629 27.5555C29.8287 27.7955 29.8898 28.0171 30.066 28.184C30.2192 28.3285 30.532 28.2656 30.6421 28.4455C30.7604 28.6395 30.7391 28.9212 30.6421 29.1261C30.5613 29.2971 30.2778 29.2555 30.2408 29.4406C30.0903 30.194 30.2751 30.7306 30.1417 31.4871ZM75.5427 38.9079C75.4444 38.596 75.6898 38.5351 75.8531 38.3724C76.0918 38.1343 76.3226 37.9019 76.4172 37.4329C76.4531 37.2551 76.6351 36.9676 76.6772 36.6827C76.7391 36.2667 76.6444 35.8331 76.5311 35.5643C76.3824 35.2123 76.1385 35.0288 76.2269 34.6929C76.2581 34.4782 76.7437 34.4517 77.1264 34.2817C77.3271 34.1928 77.4992 34.0186 77.5631 33.8548C77.6468 33.639 77.3682 33.6759 77.2262 33.4019C77.0749 33.1103 77.0526 32.6735 76.9361 32.4562C76.7328 32.0777 76.3611 31.5697 76.3475 31.1397C76.3111 29.9928 76.6434 28.8349 76.686 27.7314C76.7219 26.806 76.9408 26.5855 76.8701 25.6373C76.8352 25.1652 76.5815 24.8216 76.3195 24.3396C76.1027 23.9401 75.8177 23.5447 75.7086 23.1679C75.5146 22.4973 75.7096 21.7025 75.5921 21.0144C75.5692 20.8795 75.2313 20.7146 75.2188 20.5782C75.1314 19.6336 75.238 18.6663 75.1772 17.732C75.146 17.5562 75.0035 17.5228 74.9869 17.345C74.9375 16.8213 74.9864 16.3113 74.9848 15.8586C74.9833 15.4591 74.9282 15.1177 74.9282 14.6534C74.9282 14.4804 74.7847 14.3618 74.7789 14.1887C74.7441 13.1672 74.7867 12.0392 74.7732 11.016C74.7587 9.92667 74.6921 8.94204 74.7789 7.85737C74.794 7.67452 75.1637 7.67893 75.1564 7.49571C75.1221 6.66456 75.0503 6.334 75.0696 5.49801C75.0717 5.40157 75.2692 5.17742 75.277 5.08124C75.3347 4.38574 75.421 3.68956 75.2438 3.09435C75.1159 2.66323 74.7925 2.52893 74.4212 2.25082C74.0937 2.00516 73.7282 1.60581 73.425 1.38199C73.0372 1.09535 72.7788 0.864812 72.485 0.435563C72.3083 0.177213 72.5999 0.154652 72.9254 0.145137C73.3434 0.132919 73.7999 0.16942 74.1977 0.231707C74.3323 0.252763 74.5855 0.484803 74.7129 0.534144C75.0197 0.653102 75.2204 0.498638 75.5344 0.596643C75.7741 0.671564 76.7749 1.19336 77.0442 1.34856C77.4123 1.56058 77.5314 1.86869 77.9156 2.04879C77.9848 2.08118 79.1718 2.42094 79.3096 2.45541C79.6309 2.53563 79.8305 2.30069 80.1518 2.38091C80.5251 2.47398 81.1891 2.66203 81.6081 2.78748C81.8442 2.85809 81.9934 3.13709 82.2352 3.18523C83.4076 3.4192 83.1981 3.02838 84.1266 3.95681C84.4001 4.23039 84.8519 4.4501 85.0558 4.77885C85.3438 5.24278 85.3739 5.81141 85.557 6.31704C85.6994 6.71015 86.0176 7.03308 86.093 7.45079C86.2963 8.57491 86.0842 9.74385 86.2219 10.8779C86.2641 11.2242 86.6202 11.5896 86.6576 11.9366C86.7996 13.265 86.8235 14.5767 86.6618 15.9028C86.6072 16.3498 86.2308 16.5316 86.1637 16.9769C86.0519 17.7238 86.275 18.4887 86.2219 19.2422C86.197 19.6031 85.9963 19.9797 85.807 20.2878C85.6687 20.512 85.3526 20.5929 85.2512 20.8357C84.9845 21.4731 85.0516 22.3446 84.9279 23.0353C84.8894 24.3536 84.9164 25.3763 84.9731 26.6937C85.0131 27.6224 85.1083 28.4559 84.9897 29.3777C84.9481 29.697 84.6809 29.8722 84.633 30.1909C84.501 31.0717 84.6143 31.9763 84.5291 32.8628C84.5145 33.0136 84.2909 33.1883 84.2592 33.3364C84.2 34.1465 84.1433 35.3288 83.7903 36.2407C83.5578 36.8423 82.9927 37.4485 82.4499 37.7969C81.9242 38.1343 81.3591 38.2071 80.7534 38.3615C80.3707 38.4587 79.9423 38.4119 79.5919 38.5934C79.3818 38.7026 79.5227 38.7041 79.3309 38.8414C79.2201 38.9199 79.0288 38.9267 78.9243 38.8414C78.7766 38.7203 78.8224 38.6708 78.6503 38.5892C78.3877 38.465 78.0456 38.4748 77.7789 38.5892C77.5865 38.6719 77.6567 38.8221 77.4508 38.8622C77.0354 38.9433 76.5488 39.0483 76.0995 39.0364C75.8307 39.0296 75.6186 39.1507 75.5427 38.9079ZM79.4416 9.07883C80.025 9.04795 80.1394 9.01628 80.6588 9.29527C81.1958 9.58326 81.3081 9.77324 81.6362 10.2936C81.8057 10.4569 81.9747 10.6202 82.1437 10.7834C82.8336 11.4493 83.1591 12.3892 83.4409 13.2699C83.4871 14.226 83.6925 15.9011 83.2152 16.7687C82.9771 17.2018 82.883 17.5361 82.8424 17.9035C82.7296 18.9317 82.4379 18.7712 82.1411 19.5498C82.0605 19.761 82.0781 20.0238 82.0709 20.5251C82.0449 22.315 82.0183 24.1052 81.9924 25.8951C81.9757 27.0388 81.7605 27.5845 81.2983 28.6405C81.0269 29.1453 80.8844 29.4708 80.8844 30.0438C80.8844 30.7228 80.7456 31.0358 80.4757 31.6545C80.3114 32.0309 80.1466 32.4078 79.9823 32.7848C79.7874 33.2314 79.6085 33.3915 79.479 33.3317C79.3496 33.2725 79.2695 32.9922 79.2716 32.5586C79.283 30.3734 79.2945 28.1887 79.3059 26.0034C79.3309 23.6802 79.3558 21.357 79.3808 19.0339C79.3517 18.5349 79.3704 18.4244 79.0428 18.0544C79.0122 17.3023 78.8671 16.9621 78.629 16.2461C78.3285 15.6815 78.3628 15.2696 78.3555 14.6242C78.3368 13.0095 78.3175 11.3947 78.2988 9.78005C78.2874 8.78923 78.5115 9.12797 79.4416 9.07883ZM41.3644 36.8579C41.1847 35.9792 41.3104 35.281 41.3575 34.6201C41.38 34.4626 41.6978 34.6097 41.7842 34.4766C41.913 34.2775 42.0294 34.0045 41.9442 33.7831C41.8932 33.6505 41.8028 33.8335 41.7265 33.7134C41.6211 33.548 41.6581 33.2808 41.7797 33.1269C41.9572 32.9018 42.3124 32.96 42.4336 32.7001C42.599 32.3455 42.3152 31.8994 42.4336 31.5266C42.4713 31.408 42.7777 31.6477 42.807 31.5266C42.9452 30.9562 42.7733 30.3469 42.8603 29.7666C42.883 29.6153 43.0165 29.5452 43.0341 29.3933C43.1081 28.7575 43.1466 28.1034 43.0341 27.4731C42.9643 27.0819 42.6481 26.8002 42.5936 26.4065C42.3957 24.9784 42.3358 23.4235 42.5196 21.9934C42.6623 20.8832 43.3701 19.1664 43.7858 18.1271C44.0458 17.4769 44.1733 17.6797 44.407 17.0194C44.4784 16.8176 44.528 16.5825 44.4604 16.3794C44.3761 16.1264 44.0776 15.9331 44.1196 15.6697C44.1711 15.3471 44.5679 15.3552 44.6737 15.046C44.8175 14.6256 44.5281 14.1325 44.6737 13.7126C44.8451 13.2187 45.4355 12.935 45.5804 12.4326C45.7187 11.9532 45.5705 11.1874 45.7058 10.7071C45.9735 9.75816 46.295 9.14522 46.7538 8.27242C47.0247 7.75707 47.4954 7.32165 47.7069 6.779C47.9109 6.25617 47.89 5.56398 47.9805 5.12563C47.6472 4.70897 46.8823 5.2905 46.3805 5.10931C46.1258 5.01744 46.1267 4.60115 45.8747 4.50189C45.335 4.46519 44.8189 4.45275 44.4347 4.74094C43.9192 5.12745 43.9151 5.58057 43.7137 6.19231C43.4126 7.10639 43.6421 8.13334 43.2663 9.01908C43.1177 9.36935 42.5114 9.46783 42.2203 9.71246C42.0662 9.84182 41.9946 9.97669 41.7936 9.97669C41.5924 9.97669 41.4171 9.90722 41.3669 9.71246C41.2648 9.31664 41.3868 8.8942 41.3669 8.48575C41.3512 8.16423 41.179 7.8372 41.2602 7.52571C41.3026 7.36344 41.6739 7.4263 41.6869 7.25904C41.8464 5.42651 41.6272 3.60579 41.6552 1.85469C41.665 1.23988 41.8282 1.33103 42.4334 1.3249C43.4528 1.3144 45.0685 1.32229 46.2403 1.31636C48.2961 1.30607 50.3571 1.22933 52.4071 1.28548C52.7123 1.30758 53.1096 1.42087 53.1309 1.72596C53.174 2.3429 52.7607 2.93779 52.4747 3.48605C52.3234 3.77581 51.9855 3.96522 51.8742 4.27224C51.685 4.79263 51.8903 5.40925 51.6907 5.92564C51.5685 6.24253 50.9472 6.30114 50.8281 6.61902C50.6592 7.0687 50.9508 7.61217 50.7746 8.05904C50.6872 8.28094 50.2141 8.15419 50.1346 8.37906C49.8663 9.14012 50.0238 9.99977 49.8148 10.7792C49.6989 11.2094 49.3729 11.5111 49.3141 11.9526C49.154 13.1509 49.4181 14.375 49.3141 15.5794C49.2912 15.8409 49.0152 16.0213 48.9403 16.2727C48.7646 16.8642 48.6538 17.5033 48.451 18.0861C48.3637 18.3379 48.0393 18.4684 47.9711 18.7262C47.871 19.1043 48.1219 19.5388 47.9711 19.8995C47.7813 20.3531 47.1131 20.5386 47.0111 21.0196C46.7231 22.3771 47.1791 23.8084 46.9671 25.1797C46.8723 25.7934 46.3314 26.2756 46.2204 26.8865C46.0774 27.6735 46.3238 28.6041 46.1276 29.3793C45.9383 30.128 45.3957 30.7769 45.1236 31.499C45.0599 32.2077 44.2108 32.8581 44.6737 33.3936C45.2322 33.4675 46.159 33.5813 46.8071 33.2865C47.1054 33.1513 46.7599 32.5254 47.0205 32.3267C47.8168 31.7184 48.7308 31.499 49.6245 31.0467C50.1356 30.7878 50.7782 30.5408 51.2342 30.1935C51.4656 30.0167 51.4921 29.5971 51.7671 29.4999C51.933 29.4412 51.9673 29.8436 52.1404 29.8732C52.7363 29.9746 53.2531 29.7198 53.838 29.8732C54.0719 29.9346 54.0647 30.2491 54.1255 30.4831C54.1801 30.6926 54.2747 30.9183 54.1583 31.0997C54.0881 31.2089 53.8338 31.0872 53.7844 31.2068C53.683 31.4533 53.7225 31.7476 53.7844 32.0065C53.8333 32.2082 54.0179 32.3335 54.035 32.5399C54.1265 33.6208 54.1567 34.7158 54.035 35.7936C54.0096 36.0198 53.8811 36.2568 53.655 36.2802C52.1165 36.2095 50.6945 36.3224 49.154 36.327C48.9954 36.313 49.0864 36.0322 48.9403 35.9699C48.5431 35.7993 47.8268 35.7759 47.4052 35.8726C46.9148 35.9849 46.8738 36.3884 46.3805 36.4866C45.4914 36.6645 44.4639 36.4903 43.5675 36.626C43.2506 36.6738 43.0086 36.9426 42.6978 37.0201C42.2666 37.1277 41.5866 37.2426 41.3644 36.8579ZM17.6069 39.3629C16.9419 39.5963 16.1659 39.3634 15.461 39.3785C15.2437 39.3831 14.8901 39.5537 14.6814 39.4923C14.4535 39.4258 14.0945 38.974 14.2369 38.7837C14.7933 38.0417 15.8902 37.9492 16.3981 37.174C16.6969 36.718 16.417 36.104 16.5454 35.5742C16.5848 35.4115 16.87 35.4265 16.9543 35.282C17.0228 35.1645 17.0429 34.9768 16.9543 34.8733C16.7517 34.6368 16.6235 35.1328 16.5435 34.4246C16.472 33.7914 16.457 33.1482 16.5157 32.5155C16.5526 32.1125 16.8456 32.1978 16.9009 31.9852C17.004 31.5895 16.7895 31.2962 16.8957 30.9011C16.9434 30.7238 17.272 30.7685 17.363 30.6089C17.4498 30.4571 17.4601 30.2294 17.363 30.0833C17.1641 29.7848 16.6233 29.7895 16.563 29.436C16.4521 28.7855 16.5115 28.0873 16.523 27.442C16.5352 26.7547 16.488 26.0654 16.5453 25.3651C16.5559 25.2352 16.85 25.2408 16.8957 25.1186C16.9845 24.8818 16.9283 24.6103 16.8957 24.3593C16.8696 24.158 16.9315 23.7461 16.9161 23.5436C16.8924 23.2326 16.7587 23.117 16.9033 22.8406C17.0041 22.648 17.3328 22.764 17.363 22.5486C17.5228 21.4111 17.1817 20.2447 17.3046 19.1024C17.3255 18.9089 17.6301 18.9397 17.6813 18.752C17.7638 18.4491 17.7893 18.101 17.6551 17.8174C17.5918 17.6835 17.2933 17.683 17.2817 17.5353C17.1506 15.8661 17.3788 14.2881 17.2462 12.6189C17.2338 12.4626 16.8499 12.6818 16.8428 12.0035C16.8349 11.2926 16.7694 10.6299 16.779 10.1073C16.7864 9.70632 17.6515 9.69551 17.6423 9.29454C17.6284 8.68353 17.7247 7.99395 17.5839 7.36703C17.5387 7.16545 17.2757 7.19879 17.1878 7.01156C17.1051 6.83572 17.1831 6.66035 17.2588 6.48093C17.3497 6.265 17.5967 6.12872 17.6551 5.90177C17.762 5.48719 17.7513 5.03418 17.6551 4.61679C17.6236 4.4802 17.3878 4.34675 17.3223 4.2228C17.201 3.99341 17.2558 3.79094 17.0938 3.58817C16.9818 3.44826 16.6511 3.53421 16.5148 3.4179C16.1641 3.11843 15.962 2.78546 15.6678 2.5127C15.3913 2.25654 15.0187 2.0635 14.8056 1.68634C14.6688 1.44406 14.8282 1.02495 15.0494 0.855764C15.2194 0.725887 15.4855 0.755263 15.6742 0.855764C15.8277 0.9376 15.8246 1.26354 15.9967 1.2874C16.7496 1.39227 17.4968 1.06088 18.2392 1.22403C18.5628 1.29521 18.58 1.70397 18.8817 1.84087C19.0835 1.93253 19.4472 1.75534 19.6309 1.8794C19.9004 2.06152 20.129 2.44901 20.3415 2.66541C20.6146 2.94362 20.8501 3.06747 20.9896 3.46141C21.1656 3.95882 21.0885 4.46918 21.0808 4.98656C21.074 5.44305 21.1482 5.90536 21.1063 6.36908C21.0923 6.52506 20.7927 6.45165 20.7508 6.60269C20.6773 6.86785 20.7299 7.16468 20.8676 7.40265C20.9678 7.57594 21.2392 7.48771 21.3045 7.67686C21.4567 8.1189 21.4761 8.66076 21.3629 9.11434C21.3208 9.28321 20.9948 9.1744 20.9845 9.348C20.8533 11.5443 20.8205 13.7596 21.0429 15.9483C21.0806 16.3203 21.6687 16.4528 21.7082 16.8244C21.9287 18.8961 21.728 20.9929 21.6423 23.0743C21.6302 23.3703 21.4835 23.7424 21.3629 23.9633C21.2279 24.2102 21.3118 24.4569 21.3169 24.7294C21.3235 25.0798 21.2816 25.4619 21.3349 25.8195C21.3654 26.0238 21.7809 26.2183 21.7666 26.4244C21.7273 26.9922 21.808 27.2606 21.8428 27.8204C21.8595 28.0899 21.3687 28.2583 21.213 28.4788C21.101 28.6374 21.0329 28.9446 21.1242 29.1162C21.2102 29.2779 21.3648 29.1958 21.4137 29.3725C21.4829 29.6226 21.4887 29.8337 21.3629 30.0609C21.2817 30.207 20.9824 30.1878 20.954 30.3526C20.8745 30.8148 21.1369 31.2905 21.0708 31.7548C21.0511 31.8937 20.7411 31.8495 20.7203 31.9883C20.6165 32.6813 20.8379 33.3999 20.7203 34.0908C20.676 34.3518 20.2718 34.4694 20.2531 34.7335C20.2426 34.8811 20.5922 34.7782 20.662 34.9087C20.7722 35.1156 20.4955 35.544 20.7203 35.6096C21.4677 35.8284 22.3925 35.7718 23.1456 35.5742C23.5722 35.4619 23.7527 34.864 24.1919 34.8224C24.7211 34.7725 25.1115 35.1219 25.6345 35.2155C26.324 35.3397 27.0784 35.362 27.7549 35.1801C28.1542 35.0724 28.3861 34.6487 28.7962 34.5941C30.5712 34.3555 32.2186 34.5021 34.0096 34.4927C35.7032 34.4834 37.8698 34.3981 39.1271 34.5354C39.8441 34.5593 39.0666 37.096 39.3251 38.4358C39.3814 38.7275 39.6306 38.8908 39.7803 39.1606C40.0192 39.5911 40.1118 39.81 39.4916 39.8074C38.3251 39.8017 37.1447 39.8916 35.879 39.8381C35.6303 39.8277 35.6423 39.3483 35.4117 39.2537C35.1589 39.1502 34.8594 39.3764 34.5939 39.3124C34.1962 39.2162 33.7479 38.8351 33.342 38.7868C32.2595 38.6568 31.1686 38.9282 30.0888 38.779C29.8438 38.7452 29.81 38.271 29.5632 38.2528C27.039 38.0683 24.6203 38.3334 22.0937 38.1957C21.5524 38.166 21.5031 37.9773 21.1596 37.8775C20.6735 37.7371 19.8042 37.6809 19.3464 37.8956C18.4931 38.2949 18.4959 39.0504 17.6069 39.3629ZM47.9925 29.4937C47.4652 29.4781 47.4301 28.6311 47.472 28.1117C47.5148 27.5804 48.2088 27.6082 48.4562 27.1363C48.6367 26.7927 48.3663 26.1886 48.5722 25.8594C48.7937 25.5049 49.3942 25.5181 49.6157 25.1636C49.7425 24.9611 49.5533 24.5726 49.559 24.3337C49.573 23.7682 49.6999 23.3516 49.6739 22.7866C49.6604 22.4927 49.5382 21.9618 49.5938 21.6729C49.6703 21.2783 49.9053 21.374 50.0217 20.9892C50.1668 20.5079 49.9256 19.9603 50.0795 19.4818C50.1408 19.2926 50.6368 19.3876 50.6015 19.1919C50.5583 18.9538 50.1242 19.082 50.081 18.844C49.9495 18.1195 49.9422 17.2669 50.1377 16.557C50.2599 16.1129 50.7637 15.7732 50.8916 15.3304C51.0252 14.8665 50.7423 14.3403 50.8916 13.8809C50.9924 13.569 51.5077 13.5032 51.5872 13.1852C51.7744 12.4351 51.6075 11.5151 51.8025 10.7671C51.9049 10.3745 52.1098 9.92958 52.3609 9.68355C52.5117 9.53584 52.6473 9.42853 52.7181 9.19576C52.8148 8.87694 52.5772 8.60881 52.6318 8.28007C52.6801 7.98922 52.9021 7.80252 53.043 7.54386C53.2213 7.21725 53.2957 6.80344 53.4667 6.47339C53.7163 5.99085 54.0522 5.58717 54.231 5.0738C54.3647 4.69103 54.0777 4.0667 54.2487 3.69886C54.491 3.178 55.117 3.19084 55.3556 2.66821C55.5485 2.24604 55.2111 1.69424 55.4139 1.27674C55.561 0.972587 55.8932 0.838301 56.2307 0.824887C56.4781 0.815061 56.7787 0.986311 56.8629 1.21872C57.0288 1.67412 56.879 2.22134 57.0667 2.66821C57.3958 3.45408 57.9667 3.91728 58.2833 4.70845C58.4481 5.12095 58.2698 5.71414 58.3707 6.14687C58.5079 6.73516 58.6041 7.32845 58.7986 7.90136C59.0398 8.6148 59.3856 9.30682 59.5883 10.0314C59.7677 10.6731 59.8109 11.3693 59.9492 12.0224C60.0505 12.499 60.2356 12.9366 60.3999 13.3941C60.4701 13.5906 60.7077 13.5408 60.7644 13.742C60.8637 14.0974 60.5653 14.4839 60.6485 14.8436C60.7472 15.2733 61.21 15.7087 61.2859 16.1431C61.4096 16.8473 61.2807 17.5209 61.2978 18.2358C61.3134 18.8891 61.3826 19.4958 61.4684 20.1221C61.5214 20.5075 61.7346 21.057 61.7444 21.3371C61.7803 22.3806 61.8266 23.4079 61.838 24.4526C61.8557 25.9794 61.8557 27.6116 61.7793 29.1355C61.7705 29.3133 61.5583 29.4043 61.4959 29.5712C61.2594 30.2029 61.0613 30.5522 60.9095 31.2099C60.8294 31.5567 60.8268 31.93 60.6776 32.2534C60.5861 32.452 60.1779 32.6148 60.1088 32.8222C59.9554 33.2839 60.1436 33.7482 60.1098 34.3243C60.0812 34.8203 59.8758 35.1052 59.6694 35.5664C59.528 35.8815 59.2982 36.3728 59.2109 36.7014C59.1157 37.058 59.2868 37.449 59.1823 37.8031C59.1272 37.9882 58.8745 38.0776 58.8344 38.2669C58.7341 38.7395 58.9213 39.2552 58.7762 39.7159C58.6946 39.9769 58.6379 39.9389 58.3889 40.0512C58.2121 40.1303 57.7483 40.2202 57.7218 40.0279C57.6095 39.2209 57.8367 38.6604 57.7088 37.8551C57.5591 36.913 57.165 36.34 56.9274 35.4156C56.8119 34.9669 57.0183 34.1558 56.8052 33.7446C56.4215 33.0037 55.1929 32.7042 55.2464 31.8718C55.2979 31.0664 55.7794 30.5424 56.2696 29.8873C56.6045 29.4386 56.8223 28.706 57.0308 28.1949C57.1842 27.818 57.2736 27.3765 57.2804 27.0048C57.2908 26.4499 57.1405 26.2084 56.7204 25.8634C55.8428 25.1422 54.4244 24.4827 53.3321 23.9516C53.1719 23.8738 52.9843 24.1793 52.9843 24.3574C52.9843 24.5356 53.1927 24.6742 53.2135 24.8508C53.2744 25.3703 52.9598 25.9094 53.185 26.3812C53.4226 26.8797 54.36 27.0249 54.2211 27.5592C54.1276 27.917 54.0397 28.0431 53.7361 28.2178C53.552 28.3238 53.3477 28.3166 53.1324 28.3265C52.4867 28.3561 51.8228 28.1273 51.1988 28.2594C50.5214 28.4029 49.9151 28.7159 49.2892 29.0278C48.8748 29.2348 48.451 29.5077 47.9925 29.4937ZM53.7033 21.388C53.6976 20.8765 53.6851 20.3732 53.6862 19.8702C53.6872 19.426 53.6981 18.9819 53.7329 18.5324C53.7558 18.2404 54.0231 18.0176 54.0574 17.7268C54.1151 17.246 53.8198 16.6691 53.9544 16.2068C54.0085 16.0191 54.4842 16.2073 54.5919 16.0496C54.6272 15.9979 54.6995 15.6969 54.8196 15.4403C54.8919 15.2863 55.0421 15.1482 55.0421 15.0892C55.0421 15.0033 55.0364 14.3929 55.1009 13.8641C55.1383 13.5571 55.1856 13.2979 55.2324 13.2959C55.2787 13.2938 55.3255 13.5483 55.4882 13.76C55.6754 14.0036 55.7388 14.2452 55.9026 14.5028C55.9993 14.6548 56.1033 14.8339 56.2629 14.8958C56.4662 14.9749 56.7095 14.8637 56.9118 14.9453C57.0631 15.0063 57.1 15.2437 57.2362 15.3383C57.3282 15.4023 57.5393 15.2804 57.5606 15.3973C57.6568 15.9237 57.5736 16.6282 57.6573 17.157C57.6776 17.2837 57.9578 17.2248 57.9641 17.3535C58.0067 18.2744 58.028 19.1968 58.0249 20.1192C58.0223 20.9332 58.001 21.7474 57.9589 22.5607C57.9475 22.7925 57.335 22.8087 57.1639 22.6786C56.8332 22.4266 56.6237 22.1342 56.1911 22.0301C56.0107 21.9869 56.0196 21.7012 55.8485 21.6442C55.469 21.5177 54.9901 21.4862 54.5934 21.4862C54.3345 21.4862 53.9607 21.5776 53.7033 21.5451C53.656 21.5392 53.7038 21.44 53.7033 21.388ZM66.0161 5.51454C66.0172 6.0444 66.0739 6.6185 66.0754 7.17331C66.078 7.88732 66.026 8.52697 66.0286 9.2467C66.0312 10.0131 66.0884 10.8597 66.0884 11.6092C66.0884 12.2185 65.9772 13.3896 66.0245 13.8956C66.0848 14.5462 66.1207 14.659 67.0102 14.659C67.4407 14.659 68.0241 14.2174 68.4541 13.7711C68.7483 13.4657 68.7042 12.9384 68.817 12.7103C68.9834 12.375 69.2677 12.0684 69.327 11.6792C69.4029 11.1785 69.2199 10.7653 69.5537 10.445C69.6852 10.3184 69.8095 8.8809 69.8095 8.56457C69.8095 8.1137 69.3359 7.44507 68.7915 6.84685C68.4192 6.43751 67.9726 6.07013 67.7823 5.78974C67.4335 5.27637 67.1725 5.05113 66.7591 4.95879C66.0042 4.79018 66.0156 4.85949 66.0161 5.51454ZM62.0304 33.729C61.8895 34.2853 62.3179 34.5125 62.8248 34.84C63.3307 35.1676 63.9162 35.596 64.4673 36.0478C65.4 36.8121 66.0349 38.2071 66.6416 39.5807C66.9541 39.2485 66.7336 37.7002 66.9089 36.7726C66.9463 36.574 67.1605 36.4305 67.1808 36.2293C67.2525 35.5081 67.2702 34.7745 67.1808 34.0555C67.147 33.7872 66.8875 33.5912 66.8184 33.3307C66.7638 33.1264 66.7768 32.9033 66.8184 32.6964C66.8688 32.4437 67.0669 32.2285 67.0898 31.9716C67.1584 31.2198 67.2031 30.4534 67.0898 29.7074C67.0471 29.4256 66.6156 29.2665 66.6369 28.9826C66.6551 28.7476 67.1631 28.7648 67.1808 28.5298C67.2302 27.8563 66.9967 27.2065 66.9135 26.5368C66.7253 25.0312 66.6156 23.5167 66.4602 22.0076C66.4045 21.4637 66.1872 20.916 66.2792 20.3771C66.5626 19.6419 66.8215 18.8867 67.0945 18.2936C67.2276 18.1188 67.4033 18.4603 67.5385 18.6334C67.9799 19.1971 68.5664 19.8947 68.6932 20.5991C68.8487 21.4629 68.3808 22.2271 68.4806 23.0991C68.5097 23.3536 68.9017 23.3079 68.9922 23.5475C69.4248 24.6921 69.7762 25.8754 69.9889 27.0803C70.2312 28.4533 70.3092 29.8535 70.3513 31.2474C70.3695 31.8536 70.3435 32.4775 70.1698 33.0588C69.9223 33.8891 69.4066 34.551 69.1508 35.3532C68.883 36.1924 68.7967 36.443 69.6847 36.4425C70.0362 36.4419 70.4464 36.456 70.7178 36.5917C71.4447 36.9551 71.7447 37.7932 72.4346 38.2221C72.5838 38.3147 72.7788 38.4431 72.9842 38.558C73.9627 39.106 74.0703 38.7275 74.2741 37.8707C74.5429 36.7378 74.611 35.7161 74.7852 34.5988C74.8741 34.0321 74.8554 33.4508 74.8803 32.8779C74.9157 32.0611 74.977 31.2484 74.9349 30.4316C74.9157 30.0505 74.9178 29.6335 74.6677 29.345C74.48 29.1282 73.9263 29.3497 73.8524 29.0731C73.7511 28.694 74.298 28.3784 74.3053 27.9859C74.1556 26.9269 74.0183 25.9792 74.0006 24.9353C73.9803 23.7047 73.7167 24.3241 73.3086 23.8418C73.0621 23.5503 72.9852 23.2933 72.9467 22.9134C72.8329 21.8016 72.994 20.5712 72.824 19.4667C72.7481 18.9728 72.5173 18.4856 72.1902 18.1079C72.0717 17.971 71.8544 18.1747 71.7733 18.0127C71.6376 17.7414 72.0545 17.5556 71.8954 17.2972C71.5258 16.6969 70.7521 16.2387 70.1657 15.8479C69.9899 15.7307 69.6806 15.9973 69.5314 15.8479C69.3821 15.6984 69.3858 15.2397 69.5314 15.0869C70.5759 14.9357 71.1135 14.4439 71.6235 13.855C72.3155 13.0568 72.654 12.167 73.0008 11.1693C73.1609 10.7094 72.9561 10.172 73.0096 9.68818C73.1089 8.79293 73.5784 7.97992 73.4219 7.09288C73.1947 5.8029 72.5589 4.6469 71.8279 3.5601C71.4218 2.95678 70.7911 2.42204 70.1339 2.11077C69.5854 1.85101 69.1263 2.06834 68.544 1.89796C67.8697 1.7007 67.3295 1.3235 66.6416 1.18249C66.1061 1.07269 65.5441 1.29615 65.0111 1.17329C64.6784 1.09655 64.6243 0.722503 64.2864 0.670614C64.0534 0.63474 63.8153 0.972278 63.5803 0.992139C61.9555 1.12976 60.6219 0.815054 59.005 1.02838C58.7637 1.06025 58.8324 1.32931 59.0325 1.46772C59.3315 1.67459 59.7859 1.57243 60.1197 1.71681C60.7186 1.97635 61.1793 2.32527 61.6233 2.80381C61.9909 3.19958 62.1406 3.6398 62.4744 4.25315C62.6117 4.50458 63.0063 4.02178 63.2902 3.98138C63.6484 3.93022 63.8975 3.9206 64.1236 4.20339C64.3269 4.45706 63.9063 4.79513 63.6666 5.01396C63.1815 5.45611 62.8514 5.69027 62.4224 5.98382C62.1292 6.18477 61.6098 6.36518 61.3919 6.75773C60.9084 7.6286 61.4819 8.619 61.668 9.5976C61.7361 9.95453 61.8141 10.3035 61.8952 10.6575C62.1583 11.8085 62.0699 12.7665 62.2301 13.9364C62.2821 14.3146 62.5503 14.644 62.5924 15.0234C62.6424 15.4744 62.5613 15.8066 62.6288 16.2553C62.6569 16.4463 62.8134 16.6489 62.8644 16.8351C63.09 17.6634 63.2886 18.7038 63.3172 19.5618C63.4098 22.3685 63.2434 25.1181 63.3848 27.923C63.3978 28.1783 63.781 28.2791 63.8335 28.5298C63.9151 28.9181 63.6562 29.3642 63.5257 29.7391C62.9897 31.2739 62.3611 32.4224 62.0304 33.729Z"
                fill="white"
              />
            </svg>
            <a href="#">
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-3.05176e-05"
                  y="0.642822"
                  width="3"
                  height="3"
                  fill="#C4C4C4"
                />
                <rect
                  x="-3.05176e-05"
                  y="6.64282"
                  width="3"
                  height="3"
                  fill="#C4C4C4"
                />
                <rect
                  x="5.99997"
                  y="0.642822"
                  width="3"
                  height="3"
                  fill="#C4C4C4"
                />
                <rect
                  x="5.99997"
                  y="6.64282"
                  width="3"
                  height="3"
                  fill="#C4C4C4"
                />
              </svg>
              Ver todos
            </a>
          </div>
        </CardSeeMore>
      </GamesList>
    </Container>
  )
}
