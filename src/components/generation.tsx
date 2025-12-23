import type { FC } from "react"
import { loading } from "../assets"

interface GeneratingProps {
  extraStyle: string
}

const Generating: FC<GeneratingProps> = ({ extraStyle }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        extraStyle || ""
      } text-base`}
    >
      <img className="size-5 mr-4" src={loading} alt="Loading" />
      AI is generating
    </div>
  )
}

export default Generating
