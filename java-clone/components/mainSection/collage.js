import Image from "next/image";

export default function ImageCollage() {
  return (
    <>
      <div className="second-div flex w-auto h-auto gap-[16px]">
        <div className="flex flex-col justify-end items-end w-auto h-auto gap-[16px] pt-[80px] px-[0px] pb-[0px] my-auto">
          <Image
            className="shadow-xl transition-transform duration-300 transform hover:scale-105 hover:opacity-80 "
            src="collageImages/Image.jpg"
            alt="pic1"
             
            width={1200}
            height={1200}
          />
          <Image
            className="shadow-xl  transition-transform duration-300 transform hover:scale-105 hover:opacity-80 "
            src="collageImages/Image1.jpg"
            alt="pic2"
             
            width={1200}
            height={1200}
          />
        </div>
        <div className="flex flex-col gap-[16px] pt-[32px] px-[0px] pb-[0px] w-auto h-auto justify-end ">
          <Image
            className="shadow-xl  transition-transform duration-300 transform hover:scale-105 hover:opacity-80 "
            src="collageImages/Image2.jpg"
            alt="pic3"
            width={1200}
            height={1200}
          
             
          />
          <Image
            className="shadow-xl  transition-transform duration-300 transform hover:scale-105 hover:opacity-80"
            src="collageImages/Image3.jpg"
            alt="pic4"
            width={1200}
            height={1200}
             
          />
          <Image
            className="shadow-xl transition-transform duration-300 transform hover:scale-105 hover:opacity-80"
            src="collageImages/Image4.jpg"
            alt="pic5"
            // width={128}
            // height={160}
            width={1200}
            height={1200}
             
          />
        </div>
        <div className="flex flex-col  gap-[16px] pt-[50px] w-auto h-auto my-auto ">
          <Image
            className="shadow-xl  transition-transform duration-300 transform hover:scale-105 hover:opacity-80"
            src="collageImages/Image5.jpg"
            alt="pic6"
            width={1200}
            height={1200}
             
          />
          <Image
            className="shadow-xl  transition-transform duration-300 transform hover:scale-105 hover:opacity-80 "
            src="collageImages/Image6.jpg"
            alt="pic7"
            width={1200}
            height={1200}
             
          />
          <Image
            className="shadow-xl  transition-transform duration-300 transform hover:scale-105 hover:opacity-80"
            src="collageImages/Image7.jpg"
            alt="pic8"
            width={1200}
            height={1200}
             
          />
        </div>
        <div className="flex flex-col  gap-[16px] w-auto h-auto my-auto justify-end">
          <Image
            className="shadow-xl transition-transform duration-300 transform hover:scale-105 hover:opacity-80"
            src="collageImages/Image8.jpg"
            alt="pic9"
            width={1200}
            height={1200}
             
          />
          <Image
            className="shadow-xl  transition-transform duration-300 transform hover:scale-105 hover:opacity-80"
            src="collageImages/Image9.jpg"
            alt="pic10"
            width={1200}
            height={1200}
             
          />
        </div>
      </div>

    </>
  );
}

