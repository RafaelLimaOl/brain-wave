import type { FC } from "react"
import TagLine from "./Tagline"

interface HeadingProps {
  title: string
  extraStyle?: string
  text?: string
  tag?: string
}

const Heading: FC<HeadingProps> = ({ extraStyle, title, text, tag }) => {
  return (
    <div
      className={`${extraStyle} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine extraStyle="mb-4 md:justify-center">{tag}</TagLine>}
      {title && (
        <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight">
          {title}
        </h2>
      )}
      {text && (
        <p className="font-light text-[0.875rem] leading-6 md:text-base mt-4 text-n-4">
          {text}
        </p>
      )}
    </div>
  )
}

export default Heading
