import Image from 'next/image'
import { HeroContainer } from '@/components/shared/HeroContainer'
import { Footer } from '@/components/shared/Footer'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { ContentPill } from '@/components/shared/ContentPill'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

import spaceSpotlight from '@/images/space-spotlight.png'
import UFOIcon from '@/icons/nucleo/ufo-18.svg'

export default function NotFound() {
  return (
    <HeroContainer bgGradientClassName='-top-56'>
      {/* Hero content */}
      <Container className='relative gap-16 py-20 lg:pt-28'>
        <Image
          src={spaceSpotlight}
          alt=''
          className='absolute -bottom-3/4 left-1/2 h-auto max-w-3xl -translate-x-1/2 object-contain opacity-90 sm:max-w-4xl md:-bottom-full lg:-bottom-[135%] lg:max-w-7xl'
          sizes='(max-width: 1024px) 100vw, 1280px'
          priority
        />

        {/* Text content */}
        <div className='relative z-10 flex flex-col items-center'>
          <ContentPill Icon={UFOIcon} text='Page not found' />
          <h1 className='mt-5 max-w-5xl text-center text-8xl font-bold tracking-wide text-violet-100 md:text-9xl'>
            4
            <span className='relative inline-block text-nowrap'>
              <span className='relative z-10 bg-gradient-to-b from-violet-400 via-violet-400 to-violet-500 bg-clip-text text-transparent'>
                0
              </span>
              <span className='absolute -top-0.5 left-0 -z-10 text-violet-300'>
                0
              </span>
            </span>
            4
          </h1>
          <p className='mt-5 max-w-xl text-center text-lg leading-8 text-zinc-200'>
            Looks like the page you are looking for does not exist or has been
            removed. Please check the URL and try again.
          </p>
          <div className='mt-8 flex items-center justify-center space-x-3 sm:space-x-5'>
            <Button
              href='/'
              id='top-cta'
              className='px-4 py-2.5 sm:px-5 sm:py-3'
            >
              <span>Go back home</span>
              <ChevronRightIcon className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </Container>

      <Footer cta={false} />
    </HeroContainer>
  )
}
