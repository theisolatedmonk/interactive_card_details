
import Image from "next/image"
import mobileBg from"@/images/bg-main-mobile.png"
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <div className="flex flex-col w-[375px] ">
        <Image src={mobileBg} alt="" />
       
      </div>
    </main>
  )
}
