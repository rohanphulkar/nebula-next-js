'use client'

import Image from 'next/image'
import { Stats } from '@/components/home/Stats'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { StarField } from '@/components/shared/StarField'
import { useEffect } from 'react'

import {
  GlobeAmericasIcon,
  ChatBubbleLeftRightIcon,
  CircleStackIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
} from '@heroicons/react/16/solid'

import globe from '@/images/globe.svg?url'
import globeGlow from '@/images/globe-glow.svg?url'
import binaryCodeBg from '@/images/binary-code-bg.svg?url'
import encryptionIcon from '@/images/encryption-icon.svg?url'

import spaceSpotlight from '@/images/space-spotlight-3.png'
import encryptionGradient from '@/images/encryption-gradient.png'
import teamIntegrations from '@/images/team-integrations.png'

export const BentoGridSection = () => {
  const handleCardMouseMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cards = document.querySelectorAll('.card')
      cards.forEach((card) => {
        card.addEventListener('mousemove', handleCardMouseMove)
      })

      return () => {
        cards.forEach((card) => {
          card.removeEventListener('mousemove', handleCardMouseMove)
        })
      }
    }
  }, [])

  return (
    <section className='relative overflow-hidden'>
      <Container className='py-20 sm:py-24'>
        {/* Text content */}
        <div className='relative z-10 flex flex-col items-center'>
          <h1 className='max-w-5xl overflow-hidden text-wrap text-center text-4xl font-bold leading-extratight text-violet-100 sm:text-5xl sm:leading-extratight'>
            Simplify Your Workflow with&nbsp;
            <span className='relative inline-block text-nowrap'>
              <span className='relative z-10 bg-gradient-to-b from-violet-400 via-violet-400 to-violet-500 bg-clip-text text-transparent'>
                Versatile Tools
              </span>
              <span className='absolute -top-px left-0 -z-10 text-violet-300'>
                Versatile Tools
              </span>
            </span>
          </h1>
          <p className='mt-5 max-w-xl text-center text-[17px] leading-8 text-zinc-200 sm:text-lg sm:leading-8'>
            Iced pumpkin mug in ut shop a doppio panna milk press americano cup
            bar fair, lait that galão irish redeye galão.
          </p>
        </div>

        {/* Bentro grid container */}
        <div className='relative mx-auto mt-14 max-w-2xl sm:mt-16 lg:mt-[70px] lg:max-w-none'>
          <div className='absolute -left-56 -right-56 -top-80 sm:-left-48 sm:-right-48 md:left-1/2 md:w-full md:max-w-6xl md:-translate-x-1/2 lg:-top-96'>
            <Image
              src={spaceSpotlight}
              alt=''
              className='h-full w-full object-contain'
              sizes='(max-width: 768px) 100vw, 1152px'
            />
          </div>

          {/* Stars */}
          <div
            className='absolute -top-48 left-1/2 -z-10 h-56 w-full max-w-3xl -translate-x-1/2'
            aria-hidden='true'
          >
            <StarField density='medium' maxRadius={2.5} minRadius={1.25} />
          </div>

          {/* Bento grid */}
          <div className='cards space-y-2 lg:grid lg:grid-cols-2 lg:gap-2 lg:space-y-0'>
            {/* Card 1 - full-width */}
            <div className="card relative col-span-2 overflow-hidden rounded-xl bg-violet-200/5 p-[1.5px] before:absolute before:left-0 before:top-0 before:z-30 before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-xl after:opacity-0 after:transition-opacity after:duration-500 after:content-[''] hover:before:opacity-100 hover:after:opacity-100">
              <div className='relative z-30 w-full overflow-hidden rounded-xl bg-white/[0.01] shadow-inner-blur-no-border backdrop-blur-lg backdrop-brightness-50'>
                <div className='absolute inset-0 -z-10 opacity-60'>
                  <Image src={globeGlow} alt='' className='h-full w-full' />
                </div>
                <div className='grid h-full w-full grid-cols-12 rounded-xl lg:gap-12 xl:grid-cols-2 xl:gap-20'>
                  {/* Card content */}
                  <div className='col-span-12 px-8 pb-4 pt-10 sm:px-10 sm:pt-12 lg:col-span-7 lg:py-12 lg:pr-0 xl:col-span-1 xl:py-16 xl:pl-12'>
                    <div>
                      <p className='text-sm font-bold text-violet-400'>
                        <span className='relative inline-block text-nowrap'>
                          <span className='relative z-10 bg-gradient-to-b from-violet-400 via-violet-400 to-violet-500 bg-clip-text leading-none text-transparent'>
                            Global Edge
                          </span>
                          <span className='absolute left-0 top-[-0.5px] -z-10 text-violet-300'>
                            Global Edge
                          </span>
                        </span>
                      </p>
                      <h3 className='mt-3 text-3xl font-bold text-violet-100 sm:mt-4'>
                        Connectivity at scale
                      </h3>
                      <p className='mt-2 text-base text-zinc-300 sm:mt-3'>
                        Flavour iced spice pumpkin filter coffee macchiato sugar
                        luwak affogato sugar java and. Brewed shop lungo in eu
                        robust milk medium caramelization robusta.
                      </p>

                      {/* Features */}
                      <div className='mt-6 grid gap-x-2 gap-y-4 sm:mt-7 sm:grid-cols-2 sm:gap-y-5'>
                        <div className='flex items-center space-x-2'>
                          <GlobeAmericasIcon className='h-4 w-4 text-violet-300/85' />
                          <p className='text-sm font-medium text-violet-100'>
                            A global community of workers
                          </p>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <ChatBubbleLeftRightIcon className='h-4 w-4 text-violet-300/85' />
                          <p className='text-sm font-medium text-violet-100'>
                            Stay connected with your team
                          </p>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <CircleStackIcon className='h-4 w-4 text-violet-300/85' />
                          <p className='text-sm font-medium text-violet-100'>
                            Over 30 distributed data centers
                          </p>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <CalendarDaysIcon className='h-4 w-4 text-violet-300/85' />
                          <p className='text-sm font-medium text-violet-100'>
                            Timezone synchronization
                          </p>
                        </div>
                      </div>

                      <div className='relative z-50 mt-9 sm:mt-10'>
                        <Button
                          href='#'
                          variant='secondary'
                          size='md'
                          className='relative z-50 cursor-pointer'
                        >
                          <span>Learn more</span>
                          <ChevronRightIcon className='h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Globe */}
                  <div className='relative col-span-12 h-64 lg:col-span-5 lg:h-auto xl:col-span-1'>
                    <div className='absolute -left-14 bottom-0 right-0 -z-10 sm:-top-20 sm:left-[unset] lg:-left-64 lg:top-[unset] xl:-bottom-12'>
                      <Image
                        src={globe}
                        alt=''
                        className='h-full w-full object-contain'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card relative col-span-1 overflow-hidden rounded-xl bg-violet-200/5 p-[1.5px] before:absolute before:left-0 before:top-0 before:z-30 before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-xl after:opacity-0 after:transition-opacity after:duration-500 after:content-[''] hover:before:opacity-100 hover:after:opacity-100">
              <div className='relative z-30 h-full w-full overflow-hidden rounded-xl bg-white/[0.01] shadow-inner-blur-no-border backdrop-blur-lg backdrop-brightness-50'>
                <div className='absolute inset-0 -z-10'>
                  <Image
                    src={encryptionGradient}
                    alt=''
                    className='h-full w-full opacity-80'
                    sizes='(max-width: 420px) 100vw'
                  />
                </div>

                <div className='flex h-full w-full flex-col rounded-xl'>
                  {/* Card content */}
                  <div className='px-8 pb-8 pt-10 sm:px-10 sm:pt-12 xl:px-12 xl:pt-16'>
                    <div>
                      <p className='text-sm font-bold text-violet-400'>
                        <span className='relative inline-block text-nowrap'>
                          <span className='relative z-10 bg-gradient-to-b from-violet-400 via-violet-400 to-violet-500 bg-clip-text leading-none text-transparent'>
                            Secure Data Handling
                          </span>
                          <span className='absolute left-0 top-[-0.5px] -z-10 text-violet-300'>
                            Secure Data Handling
                          </span>
                        </span>
                      </p>
                      <h3 className='mt-3 text-3xl font-bold text-violet-100 sm:mt-4'>
                        Advanced Encryption
                      </h3>
                      <p className='mt-2 text-base text-zinc-300 sm:mt-3'>
                        Flavour iced spice pumpkin filter coffee macchiato sugar
                        luwak affogato sugar java and. Brewed shop lungo in eu
                        robust milk medium caramelization robusta.
                      </p>

                      <div className='relative z-10 mt-8'>
                        <Button
                          href='#'
                          variant='secondary'
                          size='md'
                          className='relative z-10 cursor-pointer'
                        >
                          <span>Learn more</span>
                          <ChevronRightIcon className='h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Graphic */}
                  <div className='relative h-48 sm:h-56 md:h-60 lg:h-[unset] lg:flex-1'>
                    <div className='absolute inset-x-0 inset-y-0'>
                      <Image
                        src={binaryCodeBg}
                        alt=''
                        className='h-full w-full object-cover'
                      />
                    </div>
                    <div className='absolute -inset-x-12 bottom-0 min-[450px]:inset-x-0'>
                      <Image
                        src={encryptionIcon}
                        alt=''
                        className='h-full w-full object-cover'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card relative col-span-1 overflow-hidden rounded-xl bg-violet-200/5 p-[1.5px] before:absolute before:left-0 before:top-0 before:z-30 before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-xl after:opacity-0 after:transition-opacity after:duration-500 after:content-[''] hover:before:opacity-100 hover:after:opacity-100">
              <div className='relative z-30 w-full overflow-hidden rounded-xl bg-white/[0.01] shadow-inner-blur-no-border backdrop-blur-lg backdrop-brightness-50'>
                <div className='absolute inset-0 top-0 -z-10'>
                  <Image
                    src={teamIntegrations}
                    alt=''
                    className='h-auto w-full'
                    sizes='(max-width: 420px) 100vw'
                  />
                </div>

                <div className='flex w-full flex-col rounded-xl'>
                  {/* Graphic */}
                  <div className='h-56 max-[510px]:h-40'></div>

                  {/* Card content */}
                  <div className='px-8 pb-10 pt-8 sm:px-10 sm:pb-12 xl:px-12'>
                    <div>
                      <p className='text-sm font-bold text-violet-400'>
                        <span className='relative inline-block text-nowrap'>
                          <span className='relative z-10 bg-gradient-to-b from-violet-400 via-violet-400 to-violet-500 bg-clip-text leading-none text-transparent'>
                            Real-Time Collaboration
                          </span>
                          <span className='absolute left-0 top-[-0.5px] -z-10 text-violet-300'>
                            Real-Time Collaboration
                          </span>
                        </span>
                      </p>
                      <h3 className='mt-3 text-3xl font-bold text-violet-100 sm:mt-4'>
                        Seamless Team Integration
                      </h3>
                      <p className='mt-2 text-base text-zinc-300 sm:mt-3'>
                        Flavour iced spice pumpkin filter coffee macchiato sugar
                        luwak affogato sugar java and. Brewed shop lungo in eu
                        robust milk medium caramelization robusta.
                      </p>

                      <div className='relative z-10 mt-8'>
                        <Button
                          href='#'
                          variant='secondary'
                          size='md'
                          className='relative z-10 cursor-pointer'
                        >
                          <span>Learn more</span>
                          <ChevronRightIcon className='h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Stats />
      </Container>
    </section>
  )
}
