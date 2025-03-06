import CustomImage from "@/components/BlogComponents/CustomeImage";
import Link from "next/link";



export default function NativeCards({ cardData,heading, paragraph ,gridClass }) {
  return (
    <div className="flex flex-wrap justify-center bg-[#EBF1F6] px-[20px] lg:py-[40px] py-[20px] xl:px-[100px] gap-4 lg:gap-6">
      <div className="child-text flex flex-col text-center mx-auto gap-4">
        <h2 className={`font-bold`}>{heading}</h2>
        <p className={`font-normal`}>{paragraph}</p>
      </div>
      <div className={gridClass}>
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            {card.href ? ( // Check if href is defined
              <Link href={card.href}>
                <div className="rounded-full border-[1px] border-dashed border-black w-24 h-24 flex items-center justify-center">
                  <CustomImage
                    publicImage={card.icon}
                    alt={card.label}
                    width="50px"
                    height="50px"
                  />
                </div>
              </Link>
            ) : (
              <div className="rounded-full border-[1px] border-dashed border-black w-24 h-24 flex items-center justify-center p-2">
                <div className="bg-white rounded-full w-full h-full flex items-center justify-center p-2">
                <CustomImage
                  publicImage={card.icon}
                  alt={card.label}
                  width="50px"
                  height="50px"
                />
                </div>
              </div>
            )}
            <h3 className="mt-2 text-center font-bold text-lg">{card.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}