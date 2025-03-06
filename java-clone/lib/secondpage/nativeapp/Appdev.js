"use client";
import { useState } from "react";

export default function Appdev({
  mainHeading,
  mainParagraph,
  mainParagraph1,
  mainHeading1,
  spancolor,
  firstColumnData, // First array of heading and paragraphs
  secondColumnData, // Second array of heading and paragraphs
}) {
  const [openIndex, setOpenIndex] = useState(null); // Keeps track of the open item index

  const toggleOpen = (index) => {
    // Toggle the index of the currently opened item
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const renderColumn = (data, colIndex) => (
    <div className="grid gap-4 lg:gap-6" style={{ gridAutoRows: "min-content" }}>
      {data.map(({ heading, paragraph }, index) => (
        <div
          key={index}
          style={{
            border: "1px solid transparent",
            borderImage: "linear-gradient(90deg, #0F53FF 0%, #EC0505 100%)",
            borderImageSlice: 1,
          }}
          className="relative rounded-md p-3 hover:bg-[#0F53FF] hover:text-white text-black"
        >
          <div
            className="flex justify-between items-center py-4 px-6 w-full cursor-pointer"
            onClick={() => toggleOpen(`${colIndex}-${index}`)} // Unique key per column + index
          >
            <div className="w-full page-text">
              <h3 className="flex justify-between">
                {heading}
                <span className="text-lg md:text-xl">
                  {openIndex === `${colIndex}-${index}` ? "-" : "+"}
                </span>
              </h3>
              {openIndex === `${colIndex}-${index}` && <p className="">{paragraph}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col xl:px-[100px] px-[24px] lg:py-[40px] py-[20px] gap-4 bg-[#ffffff]">
      <div className="max-w-screen-xl mx-auto text-center flex flex-col gap-4 lg:gap-6 child-text">
        <h2 className="font-bold ">
          {mainHeading}
          <span className={`text-[${spancolor}]`}>{mainHeading1}</span>
        </h2>
        <p className="">{mainParagraph}</p>
        <p className="">{mainParagraph1}</p>
      </div>

      <div
        className="grid lg:grid-cols-2 gap-4 lg:gap-6"
        style={{ gridAutoRows: "min-content" }} // Ensures each grid item takes its own height
      >
        {/* First column */}
        {renderColumn(firstColumnData, "col1")}

        {/* Second column */}
        {renderColumn(secondColumnData, "col2")}
      </div>
    </div>
  );
}
