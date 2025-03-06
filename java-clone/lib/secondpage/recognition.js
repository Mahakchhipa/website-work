"use client";
import { useState } from "react";
import AwardCards from "./awardcards";

export default function Recognition() {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(true); 
    setIsChecked2(false);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };

  return (
    <>
      <div className="w-full lg:p-[40px] p-[20px] h-auto gap-[32px]">
        <div className="flex flex-col gap-4 justify-center items-center max-w-[1280px] mx-auto text-center">
          <h2 className="lg:text-[48px] xl:text-[52px] 2xl:text-[56px] md:text-[30px] text-[24px] text-[#000000] font-bold">
            Our Awards & Recognitions
          </h2>
          <div className="flex flex-col md:flex-row gap-4 w-fit items-center">
            <div
              className={`flex items-center gap-3 border-2 p-4 w-fit rounded-lg cursor-pointer ${
                isChecked1 ? 'border-[#000000]' : 'border-gray-400'
              }`}
              onClick={handleCheckboxChange1}
            >
              <input
                type="checkbox"
                id="myCheckbox1"
                className="hidden"
                checked={isChecked1}
                readOnly
              />
              <label
                htmlFor="myCheckbox1"
                className="inline-block w-4 h-4 border-2 border-gray-400 rounded-full cursor-pointer relative"
              >
                <span
                  className="block w-2 h-2 rounded-full bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300"
                  style={{
                    background: isChecked1 ? "#000" : "transparent",
                  }}
                ></span>
              </label>
              <p className="lg:text-[16px] md:text-[14px] font-medium leading-[24px] tracking-[0.5px]">
                Awards
              </p>
            </div>
            <div
              className={`flex items-center gap-3 border-2 p-4 w-fit rounded-lg cursor-pointer ${
                isChecked2 ? 'border-[#000000]' : 'border-gray-400'
              }`}
              onClick={handleCheckboxChange2}
            >
              <input
                type="checkbox"
                id="myCheckbox2"
                className="hidden"
                checked={isChecked2}
                readOnly
              />
              <label
                htmlFor="myCheckbox2"
                className="inline-block w-[1rem] h-[1rem] border-2 border-gray-400 rounded-full cursor-pointer relative"
              >
                <span
                  className="block w-2 h-2 rounded-full bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300"
                  style={{
                    background: isChecked2 ? "#000" : "transparent",
                  }}
                ></span>
              </label>
              <p className="lg:text-[16px] md:text-[14px] font-medium leading-[24px] tracking-[0.5px]">
                Recognitions for Techanic Infotech
              </p>
            </div>
          </div>
        </div>

        <AwardCards showAwards={isChecked1} />
      </div>
    </>
  );
}
