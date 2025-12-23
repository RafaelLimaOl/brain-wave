import type { FC } from "react"
import { discordBlack, facebook, instagram, telegram, twitter } from "../assets"
import SectionLayout from "./section"

const Footer: FC = () => {
  const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ]

  return (
    <SectionLayout id="footer" extraStyle="!px-0 !py-10" crosses>
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-sm text-n-4 lg:block">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center size-10 bg-n-7  rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} height={16} width={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </SectionLayout>
  )
}

export default Footer
