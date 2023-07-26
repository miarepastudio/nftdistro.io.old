'use client'
import Logo from './Logo'
import Nav from './Nav'

interface NavLink {
  id: number
  url: string
  newTab: boolean
  text: string
  emoji: string
}

export default function Header({
  links,
  logoUrl,
  logoText,
}: {
  links: Array<NavLink>
  logoUrl: string | null
  logoText: string | null
}) {
  return (
    <div className="container relative z-10 mx-auto grid grid-cols-12 bg-white px-6 py-5 sm:px-0">
      <div className="col-span-12 flex items-center justify-between text-black  md:col-span-10 md:col-start-2">
        <div className="flex items-center gap-4 md:gap-20">
          <Logo src={logoUrl} />
          <div>search</div>
        </div>
        <Nav links={links} />
      </div>
    </div>
  )
}
