import { useState, type FC } from "react"
import { disablePageScroll, enablePageScroll } from "scroll-lock"
import brainwave from "../assets/brainwave.svg"
// import menuSvg from "../assets/svg/MenuSvg.svg"
//import { useLocation } from "react-router-dom"
import MenuSvg from "../assets/svg/MenuSvg"
import Button from "./button"
import { HamburgerMenu } from "./design/Header"

interface HeaderProps {
  isMobile?: boolean
}

//  ${
// item.url === pathname.hash
//   ? "z-2 lg:text-n-1"
//   : "lg:text-n-1/50"
//}
const Header: FC<HeaderProps> = ({ isMobile }) => {
  // const pathname = useLocation()

  const navigationItems = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "2",
      title: "How to use",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ]
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  const linkClassName = `block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-main-1 ${
    isMobile ? "lg:hidden" : ""
  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`

  const handleToggleMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu)
    if (isOpenMobileMenu) disablePageScroll()
    else enablePageScroll()
  }

  const handleLinkClick = () => {
    setIsOpenMobileMenu(false)
    enablePageScroll()
  }
  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        isOpenMobileMenu ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Logo" height={40} width={190} />
        </a>

        <nav
          className={`${
            isOpenMobileMenu ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleLinkClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold 

                  lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#register"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button extraStyle="hidden lg:flex" href="#login" white={false}>
          Sign In
        </Button>

        <Button
          extraStyle="ml-auto lg:hidden"
          px="px-3"
          onClick={handleToggleMobileMenu}
          white={false}
        >
          <MenuSvg openNavigation={isOpenMobileMenu} />
        </Button>
      </div>
    </div>
  )
}

export default Header
