import Image from 'next/image'
import bgBackground from '../../../../public/bg-template.svg'

export default function Backdrop() {
  return (
    <div className="absolute inset-0 -z-10 mx-auto h-[800px] max-h-[800px] w-screen max-w-[2000px]">
      <Image
        className="h-full max-h-[800px] w-full overflow-y-visible object-cover"
        src={bgBackground}
        alt="background color image template"
        aria-hidden={true}
      />
    </div>
  )
}
