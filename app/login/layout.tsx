import { HeroImage } from "@/components/Specific/HeroImage/HeroImage"
import Image from "next/image"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-screen grid-cols-3 items-center gap-4">
      <div className="flex flex-col px-8 text-center">
        <Image src="images/logo.svg" alt="Logo" width={200} height={200} />
        <h1 className="hover:items-center">Login</h1>
        {children}
      </div>
      <div className="col-span-2">
        <HeroImage />
      </div>
    </div>
  )
}
