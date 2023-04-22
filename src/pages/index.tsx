import Image from "next/image";
import mobileBg from "@/images/bg-main-mobile.png";
import cardBack from "@/images/bg-card-back.png";
import cardFront from "@/images/bg-card-front.png";
import cardLogo from "@/images/bg-card-logo.svg";
import iconComplete from "@/images/bg-card-logo.svg";
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-black`}
    > <Image className="z-20 mr-12 mt-32 w-72 h-44 absolute " src={cardFront} alt="" />
    <div className="absolute z-40 ">
    {/* <Image className=" mr-12 mt-32 w-72 h-44 absolute " src={cardLogo} alt="" /> */}

    </div>
      <div className="flex flex-col justify-center items-center bg-white w-[375px]">
          <Image className="z-0  relative" src={mobileBg} alt=""/>
          <Image className="z-10 mb-[375px] ml-12 absolute w-72 h-44" src={cardBack} alt="" />
          <div className="absolute z-30 h-6  mb-[378px] bg-yellow-200 text-center w-20 ml-48 ">111</div>
        <div className="mt-20 w-[375px] flex outline-none gap-4 flex-col p-4">
          <div>
            <p>CARDHOLDER NAME</p>
            <input
              className="h-8 rounded-md p-2  w-full"
              type="text"
              placeholder="e.g. Jane Appleseed"
            />
          </div>
          <div className=" flex flex-col">
            <p>CARD Number</p>
            <input
              className="h-8 rounded-md p-2  w-full"
              type="number"
              placeholder="e.g 1234 5678 9123 0000"
            />
          </div>
          <div className="flex justify-between items-center w-full ">
            <div className="flex flex-col">
              <p>EXP. DATE(MM/YY)</p>
              <div className="flex gap-2">
                <input
                  className="h-8 rounded-md p-2 text-center w-16"
                  type="number"
                  placeholder="MM"
                />
                <input
                  className="h-8 rounded-md p-2 text-center w-16"
                  type="number"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p>CVC</p>
              <input
                className="h-8 rounded-md p-2 text-center w-32"
                type="number"
                placeholder="e.g. 123"
              />
            </div>
          </div>

          <div className="flex flex-col bg-amber-950 items-center p-2 w-full rounded-md">
            Confirm
          </div>
        </div>
      </div>
    </main>
  );
}
