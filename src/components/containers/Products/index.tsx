/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Container, GameCard, GamesList } from './style'
import { useStore } from '../../../db/useStore'
import Link from 'next/link'

export function Products () {
  const tShirts = useStore((state: { tShirts: any }) => state?.tShirts)

  return (
    <Container>
      <div className='flex text-center justify-evenly'>
        <div className='text-center'>
          <p className='games-label'>Merchandising</p>
          <h2 className='text-4xl'>Modelos Exclusivos</h2>
        </div>
      </div>
      <GamesList>
        {tShirts?.map((tShirt: any) => (
          <Link key={tShirt.name} href={`/productos/${tShirt.id}`}>
            {/* <GameCard data-aos='fade-right '>
              <div className='game-image-container transition-transform ease-in  hover:scale-110'>
                <img className='w-[400px]' src={`${tShirt.image[0]}`} alt='' />
                <div className='overlay'></div>
              </div>
              <p className='game-name'>{tShirt.name}</p>
              <p className='game-category'>S ./{tShirt.price}</p>
            </GameCard> */}
            <a className='' href='/products/clmew27qx000hvk7k1wvvf2z8'>
              <div className='rounded-xl border bg-card text-card-foreground shadow h-full'>
                <div className='flex flex-col space-y-1.5 p-0'>
                  <div className='relative h-60 w-full'>
                    <img
                      alt='product image'
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      className='rounded-t-lg'
                    />
                  </div>
                </div>
                <div className='grid gap-1 p-4'>
                  <div className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-min text-neutral-500'>
                    Electronics
                  </div>
                  <h2 className='mt-2'>Bang and Olufsen Speaker</h2>
                  <p className='text-xs text-neutral-500 text-justify'>
                    Description of this product.
                  </p>
                </div>
                <div className='flex items-center p-6 pt-0'>
                  <div className='flex gap-2 items-center'>
                    <div className='items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80 flex gap-4'>
                      <div className='line-through'>$86.85</div>
                      <div>%13.82</div>
                    </div>
                    <h2 className=''>$74.85</h2>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </GamesList>
      <div className='w-full my-20 flex justify-center '>
        <Link href='/productos'>
          <button>
            VER MAS
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon mx-auto hover:scale-150 animate-ping icon-tabler icon-tabler-caret-down'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#ffffff'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M6 10l6 6l6 -6h-12' />
            </svg>
          </button>
        </Link>
      </div>
    </Container>
  )
}
