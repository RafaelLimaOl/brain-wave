import { useRef } from "react"
import { ScrollParallax } from "react-just-parallax"
import {
  curve,
  file02,
  heroBackground,
  homeSmile,
  plusSquare,
  robot,
  searchMd,
} from "../assets"
import Button from "./button"
import CompanyLogos from "./companyLogos"
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero"
import Generating from "./generation"
import Notification from "./Notification"
import SectionLayout from "./section"

const Hero = () => {
  const parallaxRef = useRef(null)
  const heroIcons = [homeSmile, file02, searchMd, plusSquare]
  return (
    <SectionLayout
      extraStyle="pt-[12rem] -mt-[5.25rem] "
      crosses={true}
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings=""
      id="hero"
    >
      <div className="relative max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="text-white font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6">
            Explore the Possibilites of&nbsp;AI&nbsp; Chatting with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                height={28}
                width={624}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 max-w-3xl mb-6 mx-auto text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-bg">
            <div className="relative bg-n-9 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  height={490}
                  width={1024}
                  alt="AI"
                />
                <Generating extraStyle="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] p-1 bg-n-9/40 backdrop-blur-2xl border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li key={index} className="p-5">
                        <img src={icon} height={25} width={24} alt="icon" />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    extraStyle="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              height={1800}
              width={1120}
              alt="hero"
            />
          </div>
          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
        <CompanyLogos extraStyle="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </SectionLayout>
  )
}

export default Hero
