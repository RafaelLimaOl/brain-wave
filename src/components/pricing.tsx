import type { FC } from "react"
import { check, smallSphere, stars } from "../assets"
import Button from "./button"
import { LeftLine, RightLine } from "./design/Pricing"
import Heading from "./heading"
import SectionLayout from "./section"

const Pricing: FC = () => {
  const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ]

  return (
    <SectionLayout id="pricing" extraStyle="overflow-hidden">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            height={255}
            width={255}
            alt="sphere"
          />

          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              height={400}
              width={950}
              alt="stars"
            />
          </div>
        </div>

        <Heading
          title="Pay once, use forever"
          tag="Get started with Brainwave"
        />

        <div className="relative">
          <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((item) => (
              <div
                key={item.id}
                className="w-[19rem] h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 max-lg:w-full [&>h4]:first:text-main-2 [&>h4]:even:text-main-1 [&>h4]:last:text-main-3"
              >
                <h4 className="text-[2rem] leading-normal mb-4">
                  {item.title}
                </h4>

                <p className="font-light text-[0.875rem] leading-6 md:text-base min-h-[4rem] mb-3 text-n-1/50">
                  {item.description}
                </p>

                <div className="flex items-center h-[5.5rem] mb-6">
                  {item.price && (
                    <>
                      <div className="text-[2rem] leading-normal md:text-[2.5rem]">
                        $
                      </div>
                      <div className="text-[5.5rem] leading-none font-bold">
                        {item.price}
                      </div>
                    </>
                  )}
                </div>
                <Button
                  extraStyle="w-full mb-6 "
                  href={item.price ? "/princing" : "/home"}
                  white={!!item.price}
                >
                  {item.price ? "Get started" : "Contact us"}
                </Button>

                <ul>
                  {item.features.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-5 border-t border-n-6"
                    >
                      <img src={check} height={24} width={24} alt="check" />{" "}
                      <p className="font-light text-[0.875rem] leading-6 md:text-base ml-4">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Pricing
