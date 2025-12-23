import type { FC } from "react"
import {
  brainwaveSymbol,
  check,
  discord,
  figma,
  framer,
  notion,
  photoshop,
  protopie,
  raindrop,
  slack,
} from "../assets"
import Button from "./button"
import { LeftCurve, RightCurve } from "./design/Collaboration"
import SectionLayout from "./section"

const Colaboration: FC = () => {
  const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ]

  const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ]

  return (
    <SectionLayout id="colaboration" crosses>
      <div className=" max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight mb-4 md:mb-8">
            AI Chat App for seamless colaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} height={24} width={24} alt="Check" />
                  <h6 className="font-light text-[0.875rem] leading-6 md:text-base ml-5">
                    {item.title}
                  </h6>
                </div>
                {item.text && (
                  <p className="font-light text-[0.875rem] leading-6 md:text-base mt-3 text-n-4">
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <Button white={false}>Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem]">
          <p className="font-light text-[0.875rem] leading-6 md:text-base mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            With smart automation and top-notch security, it's the perfect
            solution for teams looking to work smarter.
          </p>

          <div className="flex relative left-1/2 w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] rounded-full bg-[conic-gradient(from_225deg,_#FFC876,_#79FFF7,_#9F53FF,_#FF98E2,_#FFC876)]">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <div>
                    <img
                      src={brainwaveSymbol}
                      height={48}
                      width={48}
                      alt="brainwave"
                    />
                  </div>
                </div>
              </div>

              <ul>
                {collabApps.map((item, index) => (
                  <li
                    key={item.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                      index * 45
                    } `}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                        index * 45
                      }`}
                    >
                      <img
                        src={item.icon}
                        className="m-auto"
                        height={item.height}
                        width={item.width}
                        alt={item.title}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Colaboration
