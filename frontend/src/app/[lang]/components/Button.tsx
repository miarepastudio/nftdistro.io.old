import { ButtonInterface } from '../utils/interfaces'

export default function Button({ label, type, url }: ButtonInterface) {
  const Tag = url ? 'a' : 'button'

  return (
    <Tag
      className="mt-14 w-fit rounded-[1.25rem] bg-gradient-135 from-pink to-orange px-14 py-4 font-body text-lg font-bold text-white"
      href="#"
    >
      {label}
    </Tag>
  )
}
