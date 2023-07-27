'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { clsx } from 'clsx'
import { NavLinkInterface } from '../utils/interfaces'

export default function Nav({ links }: NavLinkInterface[]) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    window.addEventListener('resize', () => {
      // adjust width value to match tw breakpoint - in this case is "lg"
      window.innerWidth > 1024 && setIsMenuOpen(false)
    })

    document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setIsMenuOpen(false)
    })

    document.addEventListener(
      'click',
      (e) => {
        if (!navRef.current) {
          return
        }

        !navRef.current.contains(e.target) && setIsMenuOpen(false)
      },
      true,
    )

    return () => {
      window.removeEventListener('resize', () => {})
      document.removeEventListener('keydown', () => {})
      document.removeEventListener('click', () => {})
    }
  }, [])

  return (
    <nav ref={navRef} className="flex font-body md:text-lg">
      <NavButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* desktop */}
      <ul className="hidden gap-14 lg:flex">
        {links.map((item: NavLinkInterface) => (
          <NavItem key={item.id} {...item} prefetch={true} />
        ))}
      </ul>
      {/* mobile */}
      <ul
        className={clsx(
          'absolute left-0 right-0 top-0 -z-[1] mx-auto flex w-[90%] flex-col gap-14 rounded-md bg-white p-8 drop-shadow-lg transition-all duration-500 ease-in-out lg:hidden',
          isMenuOpen
            ? 'visible top-full flex opacity-100'
            : 'collapse top-0 opacity-0',
        )}
      >
        {links.map((item: NavLinkInterface) => (
          <NavItem key={item.id} {...item} prefetch={false} />
        ))}
      </ul>
    </nav>
  )
}

function NavItem({ url, text, emoji, prefetch }: NavLinkInterface) {
  const path = usePathname()

  const getActiveLink = () => {
    const language = path.split('/')[1]
    let pathWithLanguage = ''
    return (
      path === pathWithLanguage.concat(`/${language}`, url === '/' ? '' : url)
    )
  }

  return (
    <li className="flex w-full lg:w-auto">
      <Link
        href={url}
        prefetch={prefetch}
        className={`w-full text-gray-light transition-colors duration-200 ease-in  hover:text-black  focus:text-black  ${
          getActiveLink() && 'font-bold !text-black'
        }`}
      >
        {text} {emoji}
      </Link>
    </li>
  )
}

function NavButton({ isMenuOpen, setIsMenuOpen }: any) {
  return (
    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.414 12.0002L18.707 6.70725C19.098 6.31625 19.098 5.68425 18.707 5.29325C18.316 4.90225 17.684 4.90225 17.293 5.29325L12 10.5862L6.70701 5.29325C6.31601 4.90225 5.68401 4.90225 5.29301 5.29325C4.90201 5.68425 4.90201 6.31625 5.29301 6.70725L10.586 12.0002L5.29301 17.2933C4.90201 17.6842 4.90201 18.3162 5.29301 18.7072C5.48801 18.9022 5.74401 19.0002 6.00001 19.0002C6.25601 19.0002 6.51201 18.9022 6.70701 18.7072L12 13.4143L17.293 18.7072C17.488 18.9022 17.744 19.0002 18 19.0002C18.256 19.0002 18.512 18.9022 18.707 18.7072C19.098 18.3162 19.098 17.6842 18.707 17.2933L13.414 12.0002Z"
            fill="#000000"
          />
        </svg>
      ) : (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 20H4C3.448 20 3 19.553 3 19C3 18.447 3.448 18 4 18H20C20.552 18 21 18.447 21 19C21 19.553 20.552 20 20 20Z"
            fill="#000000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 6H4C3.448 6 3 5.553 3 5C3 4.447 3.448 4 4 4H20C20.552 4 21 4.447 21 5C21 5.553 20.552 6 20 6Z"
            fill="#000000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 13H4C3.448 13 3 12.553 3 12C3 11.447 3.448 11 4 11H20C20.552 11 21 11.447 21 12C21 12.553 20.552 13 20 13Z"
            fill="#000000"
          />
        </svg>
      )}
    </button>
  )
}
