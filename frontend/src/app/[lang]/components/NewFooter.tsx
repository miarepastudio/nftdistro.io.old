import Image from 'next/image'
import Link from 'next/link'

interface FooterLink {
  id: number
  url: string
  newTab: boolean
  text: string
  social?: string
}

export default function NewFooter({
  logoUrl,
  companyLinks,
  creatorLinks,
}: {
  logoUrl: string | null
  companyLinks: Array<FooterLink>
  creatorLinks: Array<FooterLink>
}) {
  return (
    <footer className="container relative z-10 mx-auto grid grid-cols-12 gap-y-8 px-6 pb-16 pt-5 sm:px-0 lg:pb-24">
      <div className="col-span-12 lg:col-span-4">
        <Image src={logoUrl} alt="alt" width={107} height={33} />
        <p className="mt-8 font-display text-4xl font-medium text-black">
          NFT Distro
        </p>
        <p className="mt-2 font-body text-gray-light">
          Experience the Revolutionary World of Non-Fungible Tokens on Our
          Exclusive NFT Marketplace
        </p>
      </div>
      <div className="col-span-12 flex flex-wrap gap-8 lg:col-span-7 lg:col-start-6 lg:justify-between">
        <div>
          <p className="font-body text-lg font-bold text-black">Company</p>
          <ul className="mt-5 flex flex-col gap-4">
            {companyLinks.map((link: FooterLink) => (
              <FooterLink key={link.id} {...link} />
            ))}
          </ul>
        </div>
        <div>
          <p className="font-body text-lg font-bold text-black">Creator</p>
          <ul className="mt-5 flex flex-col gap-4">
            {creatorLinks.map((link: FooterLink) => (
              <FooterLink key={link.id} {...link} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-body text-lg font-bold text-black">
            Join our community
          </p>
          <div className="w-[300px] max-w-full"></div>
        </div>
      </div>
      <small className="col-span-12 flex items-center gap-3 font-body text-xs text-gray-light">
        <span className="text-lg text-black">©</span>
        {new Date().getFullYear()} Copyright NFT Distro 2023
      </small>
    </footer>
  )
}

function FooterLink({ url, text }: FooterLink) {
  return (
    <li className="font-body text-gray-light">
      <Link href={url}>{text}</Link>
    </li>
  )
}
