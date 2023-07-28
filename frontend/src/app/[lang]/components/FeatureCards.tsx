'use client'

import Image from 'next/image'
import { getStrapiMedia } from '../utils/api-helpers'
import { FeatureCardsInterface } from '../utils/interfaces'
import Link from 'next/link'

export default function FeatureCards({ data }: FeatureCardsInterface) {
  console.log('DATA', { data })
  return (
    <section className="container mx-auto px-6 pb-8 pt-8 sm:px-0 md:pt-0">
      <div className="flex items-center justify-between">
        <h2 className="font-body text-2xl font-bold text-black md:text-4xl">
          {data.heading}
        </h2>
        <Link
          href={data.link.url}
          target={data.link.newTab ? '_blank' : ''}
          className="font-body font-bold lg:text-xs"
        >
          {data.link.label}
        </Link>
      </div>
      <ul className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        {data.cards.map((card, index) => (
          <li
            key={index}
            className="rounded-md bg-white p-3 pb-5 drop-shadow-2xl"
          >
            <div className="relative h-[277px] w-full overflow-hidden rounded-md">
              <Image
                src={getStrapiMedia(card.picture.data.attributes.url) || ''}
                alt={card.picture.data.attributes.alternativeText}
                width={267}
                height={277}
                className="absolute h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 font-body text-lg font-bold text-black">
              {card.title}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Image
                  src={
                    getStrapiMedia(card.profilePicture.data.attributes.url) ||
                    ''
                  }
                  alt={card.profilePicture.data.attributes.alternativeText}
                  width={40}
                  height={38}
                />
                <p className="font-body font-bold text-black">{card.author}</p>
              </div>
              <div className="text-center">
                <p className="font-body text-xs text-gray-light">Current Bid</p>
                <div className="flex items-center justify-center gap-1">
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_14_283)">
                      <path
                        d="M9.54367 7.93455L4.90813 10.6879L0.269531 7.93455L4.90813 0.196777L9.54367 7.93455ZM4.90813 11.572L0.269531 8.8187L4.90813 15.3875L9.54673 8.8187L4.90813 11.572Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_283">
                        <rect
                          width="9.76547"
                          height="15.1907"
                          fill="white"
                          transform="translate(0.0253906 0.196777)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="font-body font-bold text-black">
                    {card.amount}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
