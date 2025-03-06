import Image from "next/image";

export default function AwardCards({ showAwards }) {
  const awards = [
    { image: "contentImages/appfutura.png" },
    { image: "contentImages/extract.webp" },
    { image: "contentImages/goodfirms.png" },
    { image: "contentImages/topcompanies.png" },
    { image: "contentImages/topdevcompanies.png" },
    { image: "contentImages/DevelopersCo.png" },
  ];

  const memberships = [
    { image: "contentImages/microsoft-partner-image.png" },
    { image: "contentImages/awspartner.png" },
    { image: "contentImages/iotalliance.png" },
    { image: "contentImages/iosQA.png" },
    { image: "contentImages/nasscom-c.webp" },
    { image: "contentImages/DMCA.png" },
  ];

  const items = showAwards ? awards : memberships;

  return (
    <div className="max-w-[1280px] h-[1600px] sm:h-[800px] lg:h-[600px] mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {items.map((card, index) => (
          <div
            key={index}
            className="flex flex-col h-[230px] items-center justify-center bg-[#eeeeee] p-[24px] gap-[24px] rounded-lg"
          >
            <Image
              src={card.image}
              width={140}
              height={140}
              className={`w-[${showAwards ? "200px" : "200px"}] h-[${
                showAwards ? "200px" : "200px"
              } ]`}
              alt={card.text}
              objectFit="cover"
               
            />
          </div>
        ))}
      </div>
    </div>
  );
}
