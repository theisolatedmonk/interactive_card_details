import Image from "next/image";
import mobileBg from "@/images/bg-main-mobile.png";
import cardBack from "@/images/bg-card-back.png";
import cardFront from "@/images/bg-card-front.png";
import cardLogo from "@/images/card-logo.svg";
import iconComplete from "@/images/icon-complete.svg";
import React, { ChangeEvent, useState } from "react";

interface FormValues {
  name: string;
  cardNumber: number;
  month: number;
  year: number;
  cvc: number;
}

export default function PaymentForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    cardNumber: 0,
    month: 0,
    year: 0,
    cvc: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between font-space-grotesk bg-black `}
    >
      <div className="w-[375px]">
        <Image
          className="z-20 ml-4 mt-32 w-72 h-44 absolute "
          src={cardFront}
          alt=""
        />
        <div className="absolute w-72 h-44 ml-4 mt-32 flex flex-col z-40 p-4 gap-4  text-white">
          <Image className="  w-12 absolute " src={cardLogo} alt="" />
          <div className=" mt-16"> {formValues.cardNumber}</div>
          <div className="flex justify-between">
            <p>{formValues.name}</p>
            <p>
              {formValues.month}
              <span>/</span>
              {formValues.year}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white w-[375px] ">
          <Image className="z-0  relative" src={mobileBg} alt="" />
          <Image
            className="z-10 mb-[400px] ml-12 absolute w-72 h-44"
            src={cardBack}
            alt=""
          />
          <div className="absolute z-30 h-6  mb-[400px] text-center w-20 ml-60  text-white ">
            {formValues.cvc}
          </div>
          <div className="bothstat flex">
            <div className="mt-20 w-[375px] flex outline-none gap-4 text-[hsl(278,68%,11%)]  flex-col p-6">
              <div className="flex flex-col">
                <p>CARDHOLDER NAME</p>
                <input
                  className="h-8 border rounded-md p-2  w-full"
                  type="text"
                  placeholder="e.g. Jane Appleseed"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className=" flex flex-col">
                <p>CARD Number</p>
                <input
                  className="h-8 border rounded-md p-2  w-full focus:border-[hsl(278,68%,11%)] "
                  type="number"
                  placeholder="e.g 1234 5678 9123 0000"
                  name="cardNumber"
                  value={formValues.cardNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-between items-center w-full ">
                <div className="flex flex-col">
                  <p>EXP. DATE (MM/YY)</p>
                  <div className="flex gap-2">
                    <input
                      className="h-8 border rounded-md p-2 text-center w-16"
                      type="number"
                      placeholder="MM"
                      name="month"
                      value={formValues.month}
                      onChange={handleInputChange}
                    />
                    <input
                      className="h-8 border rounded-md p-2 text-center w-16"
                      type="number"
                      placeholder="YY"
                      name="year"
                      value={formValues.year}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p>CVC</p>
                  <input
                    className="h-8 border rounded-md p-2 text-center w-32"
                    type="number"
                    placeholder="e.g. 123"
                    name="cvc"
                    value={formValues.cvc}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-col bg-[hsl(278,68%,11%)] items-center p-3 text-white w-full rounded-md">
                Confirm
              </div>
            </div>
            <div className="mt-20 w-[375px] flex outline-none gap-6 text-[hsl(278,68%,11%)]  flex-col p-6 items-center justify-center my-6 hidden ">
              <Image className="z-50 relative" src={iconComplete} alt="" />
              <div className="flex flex-col items-center gap-2">
                <p className="text-3xl">THANK YOU!</p>
                <p>We've added your card details</p>
              </div>
              <p className="flex flex-col bg-[hsl(278,68%,11%)] items-center p-3 text-white w-full rounded-md">
                Continue
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
