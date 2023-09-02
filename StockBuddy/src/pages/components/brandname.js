import { Space_Grotesk } from "next/font/google"

const font = Space_Grotesk({ subsets: ["latin"] });

const BrandName = () => <p className={`font-bold text-2xl ${font.className}`}>StockBuddy</p>

export default BrandName;