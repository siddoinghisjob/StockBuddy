import Image from "next/image"
import { Space_Grotesk } from "next/font/google"
import BrandName from "./brandname";

const font = Space_Grotesk({ subsets: ["latin"] });

export default function Header() {
  return (
    <div className="p-3 w-full shadow-2xl bg-purple-950 text-white">
          <span>
            <span className="w-fit flex items-center gap-3 px-4 py-2 rounded-xl">
              <p className="rounded-full gap-3 flex justify-center items-center">
                <Image
                  src="/images/favicon.svg"
                  width={40}
                  height={40}
                  alt="favicon"
                  className="text-purple-950"
                />
              </p>
              <BrandName/>
            </span>
          </span>
        </div>
  )
}
