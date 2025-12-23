import type { FC } from "react"
import { yourlogo } from "../assets"

interface CompanyLogosProps {
  extraStyle: string
}

const CompanyLogos: FC<CompanyLogosProps> = ({ extraStyle }) => {
  const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo]
  return (
    <div className={extraStyle}>
      <h5 className=" font-grotesk font-light text-xs tracking-tagline uppercase mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img src={item} height={134} alt="Company Logo" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyLogos
