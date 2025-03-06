import CustomImage from "@/components/BlogComponents/CustomeImage";

export default function BusinessSuccess() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full 
      lg:py-[40px] p-[20px] gap-[10px]  lg:gap-6 xl:px-[100px] bg-[#D6E1FE]"
      >
        <div className="flex flex-col container mx-auto gap-[10px] lg:gap-4 text-center child-text">
          <p className="uppercase font-bold text-xl  text-[#475569]">
            Empowering
          </p>
          <h2 className="font-bold">
            Driving Business Success With Web Development
          </h2>
          <p className="">
            Techanic Infotech is driving business success, generating online
            presence and value for the users with web development services
            backed by experience and innovation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 items-center justify-center max-w-[1420px]  gap-24">
          <CardContainer
            image="/assets/icons/servicesIcons/collaboration-icon.png"
            title="Collaboration"
            text="Join hands with a team of experienced and professional web developers."
          />

          <CardContainer
            image="/assets/icons/servicesIcons/transparency-icon.png"
            title="Transparency"
            text="Generating crystal-clear transparency with agile development methodology."
          />

          <CardContainer
            image="/assets/icons/servicesIcons/innovation-icon.png"
            title="Innovation"
            text="Embedding innovation in web service development and designing solutions."
          />
        </div>
      </div>
    </>
  );
}

function CardContainer({ image, title, text }) {
  return (
    <div className="flex flex-col gap-4 items-center rounded-lg  h-auto w-auto">
      <div className="rounded-full border-[1px] border-black border-dashed p-3">
        <div className="bg-white p-4 rounded-full">
          {" "}
          <CustomImage
            publicImage={image}
            alt={title}
            width="80px"
            height="80px"
            // height={200}
            // width={200}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="text-center flex flex-col gap-3 page-text">
        <h3 className="font-bold">{title}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
}

// function DottedLine() {
//   return (
//     <div className="absolute top-1/2 right-[-95px] transform -translate-y-1/2 dottedline">
//       <Image
//         src="icons/line-web-development.png"
//         alt="Dotted Line"
//         width={174}
//         height={12}
//       />
//     </div>
//   );
// }
