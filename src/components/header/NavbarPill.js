'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, Fragment } from 'react'
import { getOffsetTop, cn } from '@/lib/utils'
import { debounce, throttle } from 'lodash'
import { Button } from '@/components/shared/Button'
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HomeIcon,
  UsersIcon,
  CreditCardIcon,
  EnvelopeOpenIcon,
  UserCircleIcon,
  UserPlusIcon,
  LockOpenIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/16/solid'
import { usePathname } from 'next/navigation'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import logo from '@/images/logo.png'
import logoIcon from '@/images/logo-icon.png'

const pages = [
  { label: 'Home', href: '/', icon: HomeIcon },
  { label: 'About', href: '/about', icon: UsersIcon },
  {
    label: 'Pricing',
    href: '/pricing',
    icon: CreditCardIcon,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: EnvelopeOpenIcon,
  },
  {
    label: 'Sign in',
    href: '/signin',
    icon: UserCircleIcon,
  },
  { label: 'Sign up', href: '/signup', icon: UserPlusIcon },
  {
    label: 'Password reset',
    href: 'password-reset',
    icon: LockOpenIcon,
  },
  { label: '404', href: '/404', icon: ExclamationCircleIcon },
]

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

function Hamburger() {
  return (
    <PopoverButton
      className='group relative z-50 ml-4 h-3.5 w-5 rotate-0 transform cursor-pointer transition duration-500 ease-in-out focus:outline-none'
      aria-label='Toggle Navigation'
    >
      <span className='absolute left-0 top-0 block h-0.5 w-full rotate-0 transform rounded-full bg-violet-50/95 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-[open]:left-1/2 group-data-[open]:top-1 group-data-[open]:w-0'></span>
      <span className='absolute left-0 top-1.5 block h-0.5 w-full rotate-0 transform rounded-full bg-violet-50/95 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-[open]:rotate-45'></span>
      <span className='absolute left-0 top-1.5 block h-0.5 w-full rotate-0 transform rounded-full bg-violet-50/95 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-[open]:-rotate-45'></span>
      <span className='absolute left-0 top-3 block h-0.5 w-full rotate-0 transform rounded-full bg-violet-50/95 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-white group-data-[open]:left-1/2 group-data-[open]:top-1.5 group-data-[open]:w-0'></span>
    </PopoverButton>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <PopoverButton
      as={Link}
      href={href}
      className='px-1.5 pb-2 pt-4 text-[15px] font-medium text-violet-50 drop-shadow-[-4px_-4px_6px_rgba(237,233,254,0.2)] duration-200 ease-in-out hover:text-violet-400/95'
    >
      {children}
    </PopoverButton>
  )
}

function MobileNavigation() {
  return (
    <div className='absolute inset-x-0 top-[60px] z-30 mx-5 flex justify-center sm:mx-6 md:hidden'>
      <PopoverPanel
        transition
        className='w-full max-w-lg overflow-hidden rounded-xl bg-[#1F1F24]/80 px-5 pb-5 pt-4 shadow-inner-blur backdrop-blur-lg backdrop-brightness-[85%] transition-all duration-300 after:absolute after:inset-0 after:rounded-xl after:border after:border-violet-200/[.06] data-[closed]:-translate-y-16 data-[closed]:scale-90 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:left-6 sm:right-6 sm:mx-6'
      >
        <nav className='relative z-10 flex flex-col divide-y divide-violet-200/5'>
          {links.map((link, index) => (
            <MobileNavItem key={`mobile-navbar-link-${index}`} href={link.href}>
              {link.label}
            </MobileNavItem>
          ))}

          <Disclosure as='div' className='block w-full'>
            {/* Pages dropdown button */}
            <DisclosureButton className='group flex w-full items-center justify-between px-1.5 pb-2 pt-4 text-[15px] font-medium text-violet-50 drop-shadow-[-4px_-4px_6px_rgba(237,233,254,0.2)] duration-200 ease-in-out hover:text-violet-400/95 data-[open]:text-violet-400/95'>
              <span>Pages</span>

              <ChevronRightIcon className='ml-2 h-4.5 w-4.5 text-violet-100/80 duration-200 ease-in-out group-hover:text-violet-400/80 group-data-[open]:rotate-90 group-data-[open]:text-violet-400/90' />
            </DisclosureButton>
            <DisclosurePanel className='space-y-1 px-3 pt-0.5'>
              {pages.map((link) => (
                <Link
                  key={`mobile-navbar-dropdown-link-${link.href}`}
                  href={link.href}
                  className='group relative z-10 block text-nowrap py-2 text-sm font-medium text-violet-50 drop-shadow-[-4px_-4px_6px_rgba(237,233,254,0.2)] duration-200 ease-in-out hover:text-violet-400/95 hover:drop-shadow-[-4px_-4px_6px_rgba(196,181,253,0.2)]'
                >
                  <span className='flex items-center'>
                    {link.icon && (
                      <link.icon className='mr-2 h-4 w-4 text-violet-100/60 group-hover:text-violet-300/80' />
                    )}

                    {link.label}
                  </span>
                </Link>
              ))}
            </DisclosurePanel>
          </Disclosure>
        </nav>
      </PopoverPanel>
    </div>
  )
}

function DropDownMenu({ dropdownGap, dropdownPadding }) {
  return (
    <MenuItems
      className='fixed z-20 hidden w-48 space-y-0.5 rounded-lg bg-[#1F1F24]/70 py-2.5 shadow-inner-blur outline-none backdrop-blur-lg backdrop-brightness-[85%] transition-all ease-in-out after:absolute after:inset-0 after:rounded-lg after:border after:border-violet-200/[.06] focus:outline-none data-[closed]:-translate-y-2 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block'
      transition
      style={{
        top: `${dropdownGap}px`,
        left: `${dropdownPadding}px`,
      }}
      modal={false}
    >
      {pages.map((link) => (
        <MenuItem key={`pages-dropdiwn-link-${link.href}`}>
          <Link
            href={link.href}
            className='group relative z-10 block text-nowrap px-4 py-2 text-sm font-medium text-violet-50 drop-shadow-[-4px_-4px_6px_rgba(237,233,254,0.2)] duration-200 ease-in-out data-[focus]:text-violet-400/95 data-[focus]:shadow-inner-blur-light data-[focus]:drop-shadow-[-4px_-4px_6px_rgba(196,181,253,0.2)]'
          >
            <span className='flex items-center'>
              {link.icon && (
                <link.icon className='mr-2 h-4 w-4 text-violet-200/60 group-data-[focus]:text-violet-300/80' />
              )}

              {link.label}
            </span>
            <span className='absolute inset-y-0 left-0 w-px bg-gradient-to-b from-violet-400/0 via-violet-400/90 to-violet-400/0 opacity-0 duration-200 ease-in-out group-data-[focus]:opacity-100' />
          </Link>
        </MenuItem>
      ))}
    </MenuItems>
  )
}

export const NavbarPill = () => {
  const pathname = usePathname()
  // Initialize to true in order to dynamically get width of the cta button
  const [showButton, setShowButton] = useState(true)
  const [dropdownGap, setDropdownGap] = useState(0)
  const [dropdownPadding, setDropdownPadding] = useState(0)
  const mainCtaOffsetRef = useRef(80)
  const pillWidthRef = useRef(0)
  const pillExpandedWidthRef = useRef(0)
  const pillNavRef = useRef(null)
  const navCtaContainerRef = useRef(null)
  const navCtaWidthRef = useRef(0)
  const dropdownButtonRef = useRef(null)

  const isLargeScreen = () => window.innerWidth > 768

  const shouldShowNavCta = () =>
    window.scrollY > mainCtaOffsetRef.current && isLargeScreen()

  const setPillNavWidth = () => {
    if (pillNavRef.current) {
      pillNavRef.current.style.width = shouldShowNavCta()
        ? `${pillExpandedWidthRef.current}px`
        : `${pillWidthRef.current}px`
    }
  }

  const updateDimensions = () => {
    if (pillNavRef.current && navCtaContainerRef.current) {
      const topCta = document.getElementById('top-cta')
      if (topCta) {
        mainCtaOffsetRef.current = getOffsetTop(topCta) + topCta.offsetHeight
      }

      const pillWidth = pillNavRef.current.firstElementChild.offsetWidth

      if (navCtaContainerRef.current.childNodes.length > 0) {
        // When CTA button is showing
        pillExpandedWidthRef.current = pillWidth
        pillWidthRef.current =
          pillExpandedWidthRef.current - navCtaWidthRef.current
      } else {
        // When CTA button is not showing
        pillWidthRef.current = pillWidth
        pillExpandedWidthRef.current =
          navCtaWidthRef.current + pillWidthRef.current
      }
    }
  }

  const handleResize = debounce(() => {
    if (isLargeScreen()) {
      setTimeout(() => {
        updateDimensions()
        setShowButton(shouldShowNavCta())
        setPillNavWidth()
        updateDropdownPosition()
      }, 300)
    } else {
      setShowButton(false)
      if (pillNavRef.current) {
        pillNavRef.current.style.width = '100%'

        setTimeout(() => {
          updateDimensions()
          setPillNavWidth()
        }, 300)
      }
    }
  }, 50)

  const handleScroll = throttle(() => {
    if (window.innerWidth <= 768) return
    setShowButton(window.scrollY > mainCtaOffsetRef.current)
    setPillNavWidth()
  }, 100)

  const updateDropdownPosition = () => {
    const pillNav = pillNavRef.current
    const dropdownButton = dropdownButtonRef.current

    if (pillNav && dropdownButton) {
      const buttonRect = dropdownButton.getBoundingClientRect()
      const buttonStyle = window.getComputedStyle(dropdownButton)

      setDropdownGap(buttonRect.top + pillNav.offsetHeight + 8)
      setDropdownPadding(buttonRect.left + parseInt(buttonStyle.paddingLeft))
    }
  }

  useEffect(() => {
    if (!pillNavRef.current || !navCtaContainerRef.current) return

    const topCta = document.getElementById('top-cta')
    if (topCta) {
      mainCtaOffsetRef.current = getOffsetTop(topCta) + topCta.offsetHeight
    }

    pillWidthRef.current = pillNavRef.current.offsetWidth
    navCtaWidthRef.current = navCtaContainerRef.current.offsetWidth || 0
    pillExpandedWidthRef.current = navCtaWidthRef.current + pillWidthRef.current

    setShowButton(false)
    if (isLargeScreen()) {
      pillNavRef.current.style.width = `${pillWidthRef.current}px`
    }

    // Remove the invisible and absolute classes from the cta button
    navCtaContainerRef.current.classList.remove('invisible', 'absolute')

    if (shouldShowNavCta()) {
      setShowButton(true)
      setPillNavWidth()
    }

    updateDropdownPosition()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      updateDropdownPosition()
    }, 500)
  }, [showButton])

  return (
    <Popover className='fixed left-0 flex w-full justify-center px-5 sm:px-6 md:px-0'>
      <Menu as={Fragment}>
        <div
          id='pill-nav'
          ref={pillNavRef}
          className='relative z-40 flex w-full max-w-lg items-center overflow-hidden rounded-full bg-zinc-900/15 shadow-inner-blur backdrop-blur-lg backdrop-brightness-[85%] transition-[width] duration-500 ease-in-out after:absolute after:inset-0 after:z-10 after:rounded-full after:border after:border-violet-200/[.06] md:w-[unset] md:max-w-none'
        >
          <div className='flex h-full w-full items-center justify-between rounded-full pl-[18px] pr-5 text-violet-50 md:w-fit md:justify-normal md:px-1.5'>
            {/* Logo mobile */}
            <div className='relative z-20 flex shrink-0 items-center md:hidden'>
              <Link
                href='/'
                aria-label='Home'
                className='flex flex-shrink-0 items-center py-2'
              >
                <Image
                  src={logo}
                  alt='Nebula Logo'
                  className='hidden h-[26px] w-auto min-[402px]:block'
                />

                <Image
                  src={logoIcon}
                  alt='Nebula Logo Icon'
                  className='h-[26px] w-auto min-[402px]:hidden'
                />
              </Link>
            </div>

            {links.map((link, index) => (
              <Link
                key={`desktop-navbar-link-${index}`}
                href={link.href}
                className={clsx(
                  'relative z-40 hidden h-full items-center px-3 py-2.5 text-sm duration-200 ease-in-out md:inline-flex lg:px-4',
                  pathname === link.href
                    ? 'font-semibold text-violet-400 drop-shadow-[-4px_-4px_6px_rgba(196,181,253,0.2)]'
                    : 'font-medium text-violet-50 drop-shadow-[-4px_-4px_6px_rgba(237,233,254,0.2)] hover:text-violet-400/95'
                )}
              >
                {link.label}
                {pathname == link.href && (
                  <span className='absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-violet-400/0 via-violet-400/80 to-violet-400/0' />
                )}
              </Link>
            ))}

            {/* Pages dropdown button */}
            <MenuButton
              type='button'
              className='group relative z-40 hidden h-full items-center px-3 py-2.5 text-sm font-medium text-violet-50 outline-none drop-shadow-[-4px_-4px_6px_rgba(237,233,254,0.2)] duration-200 ease-in-out hover:text-violet-400/95 data-[open]:text-violet-400 data-[open]:drop-shadow-[-4px_-4px_6px_rgba(196,181,253,0.2)] md:inline-flex lg:px-4'
              ref={dropdownButtonRef}
            >
              <span>Pages</span>

              <ChevronDownIcon className='ml-1 h-4.5 w-4.5 text-violet-50/90 duration-300 group-hover:text-violet-400/80 group-data-[open]:rotate-180 group-data-[open]:text-violet-400/90' />
            </MenuButton>

            <div className='relative z-20 ml-1 flex items-center sm:ml-3 md:hidden'>
              <Button
                href='/signin'
                variant='tertiary'
                size='sm'
                className='overflow-hidden'
              >
                Sign in
              </Button>

              <Button
                className='-mr-px rounded-full after:rounded-full'
                href='/signup'
                size='sm'
              >
                Get started
              </Button>

              <Hamburger />
            </div>

            <div
              className='invisible absolute hidden md:block'
              ref={navCtaContainerRef}
            >
              <Transition show={showButton}>
                <Button
                  id='nav-cta'
                  className={cn(
                    'z-20 -mr-px ml-3 rounded-full transition-all duration-500 after:rounded-full data-[closed]:translate-x-full data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in'
                  )}
                  href='/signup'
                  size='sm'
                >
                  Get started
                </Button>
              </Transition>
            </div>
          </div>
        </div>

        {/* Pages dropdown */}
        <DropDownMenu
          dropdownGap={dropdownGap}
          dropdownPadding={dropdownPadding}
        />
      </Menu>

      <MobileNavigation />
    </Popover>
  )
}
