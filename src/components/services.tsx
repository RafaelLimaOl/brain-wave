import type { FC } from "react"
import {
  check,
  chromecast,
  disc02,
  recording01,
  recording03,
  service1,
  service2,
  service3,
  sliders04,
} from "../assets"
import { PhotoChatMessage, VideoBar, VideoChatMessage } from "./design/Services"
import Generating from "./generation"
import Heading from "./heading"
import SectionLayout from "./section"

const Services: FC = () => {
  const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ]
  const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ]

  return (
    <SectionLayout id="how-to-use">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <Heading
          text="Brainwave unlocks the potential of AI-powered applications"
          title="Generative AI made for creators"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 size-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                className="size-full object-cover md:object-right"
                height={730}
                width={800}
                alt="Smartest AI"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="text-[2rem] leading-normal mb-4">Smartest AI</h4>
              <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>

              <ul className="font-light text-[0.875rem] leading-6 md:text-base">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} height={24} width={24} alt={item} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating extraStyle="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 gap-5 grid lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="size-full object-cover"
                  height={750}
                  width={630}
                  alt="robot"
                />{" "}
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="text-[2rem] leading-normal mb-4">
                  Photo editing
                </h4>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-[2rem] leading-normal mb-4">
                  Video generation
                </h4>
                <p className=" font-light text-[0.875rem] leading-6 md:text-base mb-[2rem] text-n-3">
                  The world most powerfull AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? "size-[3rem] p-0.25 bg-conic-bg rounded-2xl md:size-[4.5rem]"
                          : "flex size-10 bg-n-6 md:size-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center size-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} height={24} width={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="size-full object-cover"
                  height={400}
                  width={520}
                  alt="Scary robot"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          {/* <Gradient /> */}
        </div>
      </div>
    </SectionLayout>
  )
}

export default Services
