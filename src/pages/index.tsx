
import Image from "next/image"
import mobileBg from"@/images/bg-main-mobile.png"
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between `}
    >
      <div className="flex flex-col justify-center items-center w-[375px]">
        <Image src={mobileBg} alt="" />
        <div className="justify-center items-center  w-[375px] flex bg-green-200 gap-4 flex-col">
          <div>
          <p>CARDHOLDER NAME</p>
          <input type="text"  placeholder="e.g. Jane Appleseed"/>
          </div>
          <div className=" flex flex-col">
          <p>CARD Number</p>
          <input type="number" placeholder="e.g 1234 5678 9123 0000"/>
          </div>
          <div className="flex justify-between items-center w-full ">
            <div className="flex flex-col">
            <p>EXP. DATE(MM/YY)</p>
            <div className="flex">
            <input className="h-8 rounded-sm" type="number" placeholder="MM" />
            <input type="number" placeholder="YY" />
            </div>
            </div>
            <div className="flex flex-col">
            <p>CVC</p>
            <input type="number" placeholder="e.g. 123" />
            </div>
          </div>
       
        <div className="flex flex-col bg-amber-950 items-center p-2 w-72">
          Confirm
        </div>

      </div>

      </div>
    </main>
  )
}
