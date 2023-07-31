import Image from 'next/image'
import { getStrapiMedia } from '../utils/api-helpers'
import { CardInterface } from '../utils/interfaces'

interface FeatureCard {
  attributes: {
    heading: string
    bid: number
    picture: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
    creator: {
      data: {
        attributes: {
          name: string
          avatar: {
            data: {
              attributes: {
                url: string
                alternativeText: string
              }
            }
          }
        }
      }
    }
  }
}

export default function FeatureCard({ ...card }: FeatureCard) {
  return (
    <li className="rounded-md bg-white p-3 pb-5 drop-shadow-2xl">
      <div className="relative h-[277px] w-full overflow-hidden rounded-md">
        <Image
          src={
            getStrapiMedia(card.attributes.picture.data.attributes.url) || ''
          }
          alt={card.attributes.picture.data.attributes.alternativeText}
          width={267}
          height={277}
          className="absolute h-full w-full object-cover object-center"
        />
      </div>
      <p className="mt-4 font-body text-lg font-bold text-black">
        {card.attributes.heading}
      </p>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src={
              getStrapiMedia(
                card.attributes.creator.data.attributes.avatar.data.attributes
                  .url,
              ) || ''
            }
            alt={
              card.attributes.creator.data.attributes.avatar.data.attributes
                .alternativeText
            }
            width={40}
            height={38}
          />
          <p className="font-body font-bold text-black">
            {card.attributes.creator.data.attributes.name}
          </p>
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
              {card.attributes.bid}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}
