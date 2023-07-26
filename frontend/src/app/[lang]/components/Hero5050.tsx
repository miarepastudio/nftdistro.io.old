'use client'
import Image from 'next/image'
import { getStrapiMedia } from '../utils/api-helpers'
import { Hero5050 } from '../utils/interfaces'
import TextBlock from './TextBlock'

export default function Hero5050({ data }: Hero5050) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url) || ''
  const imgAlt = data.picture.data.attributes.url || 'missing alt text'

  return (
    <section className="pb-44 pt-10">
      <div className="container mx-auto grid grid-cols-12 px-6 sm:px-0">
        <div className="col-span-12 flex flex-col justify-center md:col-span-6">
          <TextBlock data={data} headingTag="h1" />
        </div>
        <div className="col-span-12 flex justify-center md:col-span-6 md:justify-end">
          <Image
            className="h-full w-auto object-contain"
            src={imgUrl}
            alt={imgAlt}
            width={580}
            height={74}
          />
        </div>
      </div>
    </section>
  )
}
