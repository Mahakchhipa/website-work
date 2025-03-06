
import CustomImage from "@/components/BlogComponents/CustomeImage";
import StartWithUS from "@/components/getStarted/startWithus";
import Image from "next/image";

export default function NativeApp1({
  heading,
  headingPart1,
  headingPart2,
  paragraph1,
  paragraph2,
  image,
  width,
  height,
  isGradient,
  bgcolor,
  solidColor
}) {
  return (
    <>
      <div className="grid  gap-[10px] lg:gap-6 lg:py-[40px] py-[20px] px-[20px] xl:px-[100px]" 
            style={{
                  background: isGradient
                    ? `linear-gradient(${bgcolor})`
                    : solidColor,
                }}>
        {" "}
        <div className="child-text text-center ">
          <h2 className="">
            {headingPart1}
            <span className="text-[#0F53FF]">{headingPart2}</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 justify-between w-[100%] h-auto  gap-6 ">
          <div className="max-w-[500px] h-auto flex items-center justify-center">
            <CustomImage
              publicImage={image}
              alt="contentImage"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </div>
          <div className="child-text flex flex-col items-center justify-center gap-3">
            {" "}
            <p className="font-normal  text-black">{paragraph1}</p>
            <p className="font-normal   text-black">{paragraph2}</p>
          </div>
        </div>
      </div>

      {/* {showStartWithUS && <StartWithUS heading={changeHeading} paragraph={changeParagraph} />} */}
    </>
  );
}

{
  /* <div className="relative">
  <div className="flex items-center justify-start">
    <Image src={icons} className="mb-[80px]" />
    <Image src={shape1} className="ml-[70px]" />
  </div>
  <div className="absolute top-0 right-0" style={{ zIndex: 10, right: '350px', top: '120px' }}>
    <Image src={pic} />
  </div>
  <div className="absolute top-0 right-0" style={{ zIndex: 10, right: '10px', top: '50px' }}>
    <Image src={pic1} />
  </div> */
}

{
  /* </div> */
}

{
  /* <div className="relative" style={{ width: '200px', height: '200px' }}>
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="relative" style={{ zIndex: '4' }}>
      <Image src={ut4} height={48} width={48} objectFit="cover" />
    </div>
    <div className="relative" style={{ zIndex: '3', marginLeft: '-15px' }}>
      <Image src={ut5} height={48} width={48} objectFit="cover" />
    </div>
    <div className="relative" style={{ zIndex: '2', marginLeft: '-15px' }}>
      <Image src={ut6} height={48} width={48} objectFit="cover" />
    </div>
    <div className="relative" style={{ zIndex: '1', marginLeft: '-15px' }}>
      <Image src={ut7} height={48} width={48} objectFit="cover" />
    </div>
    <div className="relative" style={{ marginLeft: '-15px' }}>
      <Image src={ut8} height={48} width={48} objectFit="cover" />
    </div>
  </div>
</div> */
}
