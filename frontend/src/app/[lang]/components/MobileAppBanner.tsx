'use client'

import Link from 'next/link'
import Image from 'next/image'
import mobileAppImg from '../../../../public/mobile-app.png'
import blobImg from '../../../../public/blob.png'

export default function MobileAppBanner({ data }: any) {
  return (
    <section className="container relative mx-auto mb-40 mt-20 px-6 sm:px-0 lg:mt-[250px]">
      <Image
        src={blobImg}
        alt=""
        width={150}
        height={156}
        className="absolute left-0 top-0 z-10 translate-x-[-10%] translate-y-[-30%] sm:translate-x-[-30%]"
        aria-hidden={true}
      />
      <div className="relative flex flex-wrap justify-between rounded-[2rem] bg-black px-16 pb-20 pt-16 md:flex-nowrap md:px-24">
        <div className="flex flex-col gap-8">
          <h2 className="font-display text-4xl font-medium text-white  lg:text-6xl">
            {data.heading}
          </h2>
          <Link
            href={data.url}
            target="_blank"
            className="flex w-fit items-center gap-4 rounded-[1.25rem] border border-white bg-black px-8 py-4 font-body text-lg font-bold text-white md:px-14"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9755 10.1083L15.3855 10.108L15.3865 5.108C15.3866 4.558 14.9367 4.1079 14.3867 4.10779L10.3867 4.10698C9.83672 4.10686 9.38663 4.55677 9.38651 5.10677L9.3855 10.1068L7.7955 10.1064C6.9055 10.1063 6.45528 11.1862 7.08515 11.8163L11.6742 16.4072C12.0641 16.7973 12.6941 16.7974 13.0842 16.4075L17.6751 11.8185C18.3053 11.1886 17.8655 10.1085 16.9755 10.1083ZM5.38346 20.106C5.38334 20.656 5.83325 21.106 6.38325 21.1062L18.3833 21.1086C18.9333 21.1087 19.3833 20.6588 19.3835 20.1088C19.3836 19.5588 18.9337 19.1087 18.3837 19.1086L6.38366 19.1062C5.83366 19.106 5.38357 19.556 5.38346 20.106Z"
                fill="white"
              />
            </svg>
            {data.label}
          </Link>
        </div>
        <div className="h-inherit relative hidden w-full lg:flex">
          <Image
            src={mobileAppImg}
            alt="try our mobile app today!"
            width={422}
            height={500}
            className="absolute bottom-0 right-0 -mb-20 h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
