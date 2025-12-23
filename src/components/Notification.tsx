import type { FC } from "react"
import {
  notification1,
  notification2,
  notification3,
  notification4,
} from "../assets"

interface NotificationProps {
  extraStyle: string
  title: string
}

const Notification: FC<NotificationProps> = ({ extraStyle, title }) => {
  const notificationImages = [notification4, notification3, notification2]

  return (
    <div
      className={`flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl gap-5 ${
        extraStyle || ""
      }`}
    >
      <img
        src={notification1}
        height={62}
        width={62}
        alt="Image"
        className="rounded-xl"
      />
      <div className="flex-1 ">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex size-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  className="w-full"
                  src={item}
                  alt={item}
                  height={20}
                  width={20}
                />
              </li>
            ))}
          </ul>
          <div className="font-light text-[0.875rem] leading-6 md:text-base text-n-13">
            1m ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
