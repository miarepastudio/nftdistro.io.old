import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'
import { getStrapiMedia, getStrapiURL } from './utils/api-helpers'
import { fetchAPI } from './utils/fetch-api'

import { i18n } from '../../../i18n-config'
import Header from './components/Header'
import Backdrop from './components/Backdrop'
import Footer from './components/Footer'
import NewFooter from './components/NewFooter'
import { FALLBACK_SEO } from '@/app/[lang]/utils/constants'

async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

  if (!token)
    throw new Error('The Strapi API Token environment variable is not set.')

  const path = `/global`
  const options = { headers: { Authorization: `Bearer ${token}` } }

  const urlParamsObject = {
    populate: [
      'metadata.shareImage',
      'favicon',
      'notificationBanner.link',
      'navbar.links',
      'navbar.navbarLogo.logoImg',
      'footer.footerLogo.logoImg',
      'footer.menuLinks',
      'footer.legalLinks',
      'footer.socialLinks',
      'footer.categories',
      'footer.companyLinks',
      'footer.creatorLinks',
    ],
  }
  return await fetchAPI(path, urlParamsObject, options)
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal()

  if (!meta.data) return FALLBACK_SEO

  const { metadata, favicon } = meta.data.attributes
  const { url } = favicon.data.attributes

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const global = await getGlobal()
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null

  const { notificationBanner, navbar, footer } = global.data.attributes

  const navbarLogoUrl = getStrapiMedia(
    navbar.navbarLogo.logoImg.data.attributes.url,
  )

  const footerLogoUrl = getStrapiMedia(
    footer.footerLogo.logoImg.data.attributes.url,
  )

  return (
    <html lang={params.lang}>
      <body className="   ">
        <Backdrop />

        <Header
          links={navbar.links}
          logoUrl={navbarLogoUrl}
          logoText={navbar.navbarLogo.logoText}
        />

        <main className="min-h-screen dark:bg-black dark:text-gray-100">
          {children}
        </main>

        <NewFooter
          logoUrl={footerLogoUrl}
          companyLinks={footer.companyLinks}
          creatorLinks={footer.creatorLinks}
        />

        {/* <Footer
          logoUrl={footerLogoUrl}
          logoText={footer.footerLogo.logoText}
          menuLinks={footer.menuLinks}
          categoryLinks={footer.categories.data}
          legalLinks={footer.legalLinks}
          socialLinks={footer.socialLinks}
        /> */}
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}
