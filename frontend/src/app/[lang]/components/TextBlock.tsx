'use client'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { TextBlockInterface } from '../utils/interfaces'
import { ButtonInterface } from '../utils/interfaces'
import Button from './Button'

export default function TextBlock({
  data,
  headingTag,
  isModalOpen,
  setIsModalOpen,
}: TextBlockInterface) {
  const Tag: any = headingTag

  return (
    <>
      <p className="font-body text-xs tracking-[0.31em] text-gray-light">
        {data.kicker}
      </p>
      <Tag className="mt-3 font-display text-6xl  font-medium text-black">
        {data.heading}
      </Tag>
      <Markdown
        className="wysiwyg mt-8"
        children={data.description}
        remarkPlugins={[remarkGfm]}
      />
      {data.buttons.map((btn: ButtonInterface, index: number) => (
        <Button
          key={index}
          {...btn}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </>
  )
}
