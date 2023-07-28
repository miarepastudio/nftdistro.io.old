'use client'
import Image from 'next/image'

import { getStrapiMedia } from '../utils/api-helpers'
import { FeatureUsersInterface } from '../utils/interfaces'
import { UserInterface } from '../utils/interfaces'

export default function FeatureUsers({ data }: FeatureUsersInterface) {
  return (
    <section className="container relative mx-auto mb-10 mt-10 md:my-20">
      <div className="absolute mx-[calc(50%-50vw)] h-full w-screen bg-black"></div>
      <div className="relative flex flex-col gap-[6rem] px-6 pb-36 pt-20 sm:px-0">
        <h2 className="text-center font-body text-2xl font-bold text-white md:text-4xl">
          {data.heading}
        </h2>
        <ul className="flex flex-wrap justify-center gap-[5rem]">
          {data.users.map((user, index) => (
            <FeatureUser key={index} {...user} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function FeatureUser({ ...user }: UserInterface) {
  return (
    <li>
      <div className="relative">
        <span className="absolute left-0 right-0 top-0 mx-auto flex h-[30px] w-[30px] -translate-y-2/4 items-center justify-center rounded-full bg-white px-2 py-1 text-sm font-bold text-black">
          #{user.rank}
        </span>
        <Image
          src={getStrapiMedia(user.picture.data.attributes.url) || ''}
          alt={user.picture.data.attributes.alternativeText}
          width={157}
          height={157}
        />
      </div>
      <p className="mt-5 text-center font-body text-white">{user.name}</p>
      <div className="flex items-center justify-center gap-1 font-body">
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
              fill="white"
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
        <p className="text-white">{user.bid}</p>
      </div>
    </li>
  )
}
