import Image from 'next/image'
import { ButtonInterface } from '../utils/interfaces'
import wallet from '../../../../public/walletIcon.svg'
import ethereum from '../../../../public/ethereumIcon.svg'
import clsx from 'clsx'

const icons: { [key: string]: any } = { wallet, ethereum }
const gradients: { [key: string]: any } = {
  pink: 'from-pink to-orange',
  blue: 'from-grape-dark to-grape-light',
  green: 'from-aqua-dark to-aqua-light',
}

export default function Button({
  type,
  label,
  color,
  url,
  showIcon,
  selectIcon,
  isModalOpen,
  setIsModalOpen,
}: ButtonInterface) {
  return (
    <>
      {url ? (
        <a
          className="mt-14 w-fit rounded-[1.25rem] bg-gradient-135 from-pink to-orange px-14 py-4 font-body text-lg font-bold text-white"
          href="#"
        >
          {label}
        </a>
      ) : (
        type === 'modal' && (
          <button
            className={clsx(
              'mt-14 flex w-fit items-center gap-4 rounded-[1.25rem] bg-gradient-135 px-14 py-4 font-body text-lg font-bold text-white',
              gradients[color],
            )}
            onClick={() => setIsModalOpen(true)}
          >
            {showIcon && (
              <Image
                src={icons[selectIcon]}
                alt="icon"
                width={17}
                height={17}
              />
            )}
            {label}
          </button>
        )
      )}
    </>
  )
}
