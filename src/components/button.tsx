import type { FC, ReactNode } from "react"
import ButtonSvg from "../assets/svg/ButtonSvg"

interface ButtonProps {
  extraStyle?: string
  href?: string
  onClick?: () => void
  children?: ReactNode
  px?: string
  white: boolean
}

const Button: FC<ButtonProps> = ({
  extraStyle,
  href,
  onClick,
  children,
  px,
  white,
}) => {
  const buttonClassName = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-main-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${extraStyle || ""}`

  const renderLink = () => (
    <a className={buttonClassName} href={href}>
      <span className="relative z-10">{children}</span>
      <ButtonSvg white={white} />
    </a>
  )

  const renderButton = () => (
    <button className={buttonClassName} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      <ButtonSvg white={white} />
    </button>
  )

  return href ? renderLink() : renderButton()
}

export default Button
