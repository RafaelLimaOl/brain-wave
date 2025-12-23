import type { FC, ReactNode } from "react"
import Brackets from "../assets/svg/Brackets"

interface TagLineProps {
  children: ReactNode
  extraStyle?: string
}

const TagLine: FC<TagLineProps> = ({ extraStyle, children }) => {
  return (
    <div
      className={`font-grotesk font-light text-xs tracking-tagline uppercase flex items-center ${
        extraStyle || ""
      }`}
    >
      <Brackets position="right" />
      <div className="mx-3 text-n-3">{children}</div>
      <Brackets />
    </div>
  )
}

export default TagLine
