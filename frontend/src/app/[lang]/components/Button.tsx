import { ButtonInterface } from '../utils/interfaces'

export default function Button({
  label,
  type,
  url,
  isModalOpen,
  setIsModalOpen,
}: ButtonInterface) {
  return url ? (
    <a
      className="mt-14 w-fit rounded-[1.25rem] bg-gradient-135 from-pink to-orange px-14 py-4 font-body text-lg font-bold text-white"
      href="#"
    >
      {label}
    </a>
  ) : (
    <button
      className="mt-14 w-fit rounded-[1.25rem] bg-gradient-135 from-pink to-orange px-14 py-4 font-body text-lg font-bold text-white"
      onClick={() => setIsModalOpen(true)}
    >
      {label}
    </button>
  )
}
