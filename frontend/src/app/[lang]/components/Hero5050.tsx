'use client'
import { useState } from 'react'
import Image from 'next/image'
import { getStrapiMedia } from '../utils/api-helpers'
import { Hero5050 } from '../utils/interfaces'
import TextBlock from './TextBlock'
import Modal from './Modal'

export default function Hero5050({ data, modalTest }: Hero5050) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url) || ''
  const imgAlt =
    data.picture.data.attributes.alternativeText || 'missing alt text'

  // manage modal state
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="pb-10 pt-10 md:pb-44">
        <div className="container mx-auto grid grid-cols-12 gap-y-12 px-6 sm:px-0">
          <div className="col-span-12 flex flex-col justify-center md:col-span-6">
            <TextBlock
              data={data}
              headingTag="h1"
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
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
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalTest={modalTest}
      />
    </>
  )
}
