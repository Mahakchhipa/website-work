"use client";
import { useState } from "react";
import Image from "next/image";
import CustomImage from "@/components/BlogComponents/CustomeImage";

export default function Vision() {
  const [activeSection, setActiveSection] = useState("mission");

  // Array to hold section data
  const sections = [
    {
      key: "mission",
      title: "Mission",

      heading: "Empowering Innovation and Excellence",
      description: `At Techanic Infotech, we strive tirelessly to empower businesses by providing top-tier technology solutions that catalyze growth and enhance efficiency. Our commitment is to embody excellence and ingenuity in every project, ensuring that our clients not only keep pace but lead in the dynamic digital arena.`,
    },
    {
      key: "vision",
      title: "Vision",

      heading: "Shaping the Future of Technology",
      description:
        "Our vision at Techanic Infotech is to establish ourselves as the preeminent partner in technology services across the globe. By transforming the future of business through unmatched expertise and a steadfast commitment to surpassing client expectations, we aim to chart the course of technological innovation.",
    },
    {
      key: "values",
      title: "Values",

      heading: "The Cornerstones of Our Craft",
      description:
        "At the heart of Techanic Infotech are our core values: unwavering Integrity, an unwavering Client Focus, and relentless Innovation. These values are the bedrock upon which we build our enterprise, ensuring that every step we take is marked by ethical decision-making, prioritizing our clients' success, and continuously pursuing revolutionary ideas and solutions.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-between w-full h-auto  p-[20px] lg:py-[40px] xl:px-[100px] gap-4  lg:gap-6 ">
        <div>
          <ul className="mx-auto grid grid-cols-3 gap-3 lg:gap-[50px] items-center">
            {/* Mission Section */}
            <li
              className={`flex justify-center items-center md:p-4 p-2 md:gap-4 gap-2 list-none text-center text-[18px] text-[#000000] rounded-full relative group cursor-pointer flex-grow ${
                activeSection === sections[0].key
                  ? "bg-[#0F53FF] text-white"
                  : "bg-[#F3EDED]"
              }`}
              onClick={() => setActiveSection(sections[0].key)}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.3182 26.6147C58.692 26.6147 60.9686 25.6717 62.6471 23.9931M56.3182 26.6147C53.9443 26.6147 51.6677 25.6717 49.9892 23.9931M56.3182 26.6147V33.3283M62.6471 23.9931C64.3257 22.3146 65.2687 20.038 65.2687 17.6642M62.6471 23.9931L67.3959 28.7387M65.2687 17.6642C65.2687 15.2903 64.3257 13.0137 62.6471 11.3352M65.2687 17.6642H71.9823M62.6471 11.3352C60.9686 9.65666 58.692 8.71366 56.3182 8.71366M62.6471 11.3352L67.3959 6.58647M56.3182 8.71366C53.9443 8.71366 51.6677 9.65666 49.9892 11.3352M56.3182 8.71366V2M49.9892 11.3352C48.3107 13.0137 47.3677 15.2903 47.3677 17.6642M49.9892 11.3352L45.2405 6.58647M47.3677 17.6642C47.3677 20.038 48.3107 22.3146 49.9892 23.9931M47.3677 17.6642H40.654M49.9892 23.9931L45.2405 28.7387M54.8269 2H57.8094M66.3401 5.53384L68.4485 7.64223M71.9823 16.1729V19.1554M68.4485 27.6861L66.3401 29.7945M57.8094 33.3283H54.8269M46.2962 29.7945L44.1878 27.6861M40.654 19.1554V16.1729M44.1878 7.64223L46.2962 5.53384M49.9992 61.9374L36.6252 64.6128M37.9472 49.4405L31.6377 52.1065C31.1397 52.3116 30.6053 52.4135 30.0668 52.406C29.5283 52.3984 28.9969 52.2816 28.5049 52.0627C28.0037 51.8404 27.5517 51.5207 27.1753 51.1222C26.7988 50.7237 26.5053 50.2542 26.3119 49.7412C25.9346 48.7688 25.9272 47.6918 26.2909 46.7143C26.6547 45.7367 27.3644 44.9266 28.2856 44.4374L34.5951 41.2857C35.2777 40.932 36.0271 40.7257 36.7946 40.6804C37.562 40.635 38.3305 40.7516 39.05 41.0226L52.0136 46.1322"
                  stroke={`     ${
                    activeSection === sections[0].key ? "white" : "black"
                  }`}
                  strokeWidth="3"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                />
                <path
                  d="M12.1203 64.7223H16.5846L25.1028 71.2198C25.5021 71.6686 26.06 71.945 26.659 71.9905C27.258 72.0361 27.8513 71.8474 28.3139 71.4641L40.2187 61.6333C40.6896 61.2444 40.9906 60.6874 41.0578 60.0804C41.1251 59.4733 40.9533 58.864 40.579 58.3814L34.0188 51.1007M27.6028 44.8852L26.9136 44.3181C26.2307 43.811 25.4294 43.4872 24.586 43.3775C23.7425 43.2678 22.8851 43.376 22.0953 43.6916L12.1172 47.9491"
                  stroke={`     ${
                    activeSection === sections[0].key ? "white" : "black"
                  }`}
                  strokeWidth="3"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                />
                <path
                  d="M1.5 66.8151H8.93108C9.77164 66.858 10.5952 66.5675 11.2228 66.0067C11.8504 65.4459 12.2315 64.6602 12.2832 63.8202V48.8515C12.2307 48.012 11.8493 47.227 11.2218 46.6669C10.5942 46.1068 9.77113 45.8167 8.93108 45.8596H1.5M60.7889 66.8151H53.3484C52.5078 66.858 51.6843 66.5675 51.0567 66.0067C50.429 65.4459 50.048 64.6602 49.9963 63.8202V48.8515C50.0488 48.012 50.4302 47.227 51.0577 46.6669C51.6853 46.1068 52.5083 45.8167 53.3484 45.8596H60.7795M31.3434 17.6641p.14787M3.14787 17.6641L12.5464 8.26562M3.14787 17.6641L12.5464 27.0626"
                  stroke={`     ${
                    activeSection === sections[0].key ? "white" : "black"
                  }`}
                  strokeWidth="3"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                />
              </svg>

              <p className="md:text-lg text-base font-bold">Mission</p>
            </li>

            {/* Vision Section */}
            <li
              className={`flex justify-center items-center md:p-4 p-2 md:gap-4 gap-2 list-none text-center text-[18px] text-[#000000] rounded-full relative group cursor-pointer flex-grow ${
                activeSection === sections[1].key
                  ? "bg-[#0F53FF] text-white"
                  : "bg-[#F3EDED]"
              }`}
              onClick={() => setActiveSection(sections[1].key)}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 85 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.1448 10.5C24.0552 10.5 18.0104 10.5 14.2568 14.2504C10.5032 18.0008 10.5 24.0328 10.5 36.1C10.5 48.1672 10.5 54.2024 14.2568 57.9496C18.0136 61.6968 24.0552 61.7 36.1448 61.7H48.9672C61.0568 61.7 67.1016 61.7 70.8552 57.9496C73.4472 55.364 74.2504 51.6904 74.5 45.7M42.5 61.7V74.5M29.7 74.5H55.3M39.3 52.1H45.7"
                  stroke={`     ${
                    activeSection === sections[1].key ? "white" : "black"
                  }`}
                  strokeWidth="3"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                />
                <path
                  d="M53.7 36.1V42.5M63.3 36.1V42.5M53.7 10.5V16.9M63.3 10.5V16.9M48.9 21.7H42.5M48.9 31.3H42.5M74.5 21.7H68.1M74.5 31.3H68.1M61.7 16.9H55.3C52.2824 16.9 50.7752 16.9 49.8376 17.8376C48.9 18.7752 48.9 20.2824 48.9 23.3V29.7C48.9 32.7176 48.9 34.2248 49.8376 35.1624C50.7752 36.1 52.2824 36.1 55.3 36.1H61.7C64.7176 36.1 66.2248 36.1 67.1624 35.1624C68.1 34.2248 68.1 32.7176 68.1 29.7V23.3C68.1 20.2824 68.1 18.7752 67.1624 17.8376C66.2248 16.9 64.7176 16.9 61.7 16.9Z"
                  stroke={`     ${
                    activeSection === sections[1].key ? "white" : "black"
                  }`}
                  strokeWidth="3"
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                />
              </svg>

              <p className="md:text-lg text-base font-bold">Vision</p>
            </li>

            {/* Values Section */}
            <li
              className={`flex justify-center items-center md:p-4 p-2 md:gap-4 gap-2 list-none text-center text-[18px] text-[#000000] rounded-full relative group cursor-pointer flex-grow ${
                activeSection === sections[2].key
                  ? "bg-[#0F53FF] text-white"
                  : "bg-[#F3EDED]"
              }`}
              onClick={() => setActiveSection(sections[2].key)}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 60 61"
                fill={`     ${
                  activeSection === sections[2].key ? "white" : "black"
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.82353 40.6667V37.2778H0V30.5H17.6471V23.7222H0V3.38889H8.82353V0H15.8824V3.38889H24.7059V10.1667H7.05882V16.9444H24.7059V37.2778H15.8824V40.6667H8.82353ZM35.1176 61L20.1176 46.5972L25.0588 41.8528L35.1176 51.5111L55.0588 32.3639L60 37.1083L35.1176 61Z"
                  fill={`     ${
                    activeSection === sections[2].key ? "white" : "black"
                  }`}
                />
              </svg>

              <p className="md:text-lg text-base font-bold">Values</p>
            </li>
          </ul>
        </div>

        {/* Render the active section */}
        {sections.map(
          (section) =>
            activeSection === section.key && (
              <div
                key={section.key}
                className="mx-auto grid md:grid-cols-2 md:gap-4 gap-2 lg:gap-8"
              >
                <div className="w-full flex flex-col justify-center items-start md:gap-4 gap-2 lg:gap-6 child-text">
                  <h2 className="font-bold ">{section.heading}</h2>
                  <p className="font-normal ">{section.description}</p>
                </div>
                <div className="w-full  h-auto bg-inherit">
                  {activeSection === "mission" ? (
                    <CustomImage
                      publicImage="/assets/mission-image.webp"
                      alt="missionImage"
                      layout="responsive"
                      objectFit="cover"
                    />
                  ) : activeSection === "vision" ? (
                    <CustomImage
                      publicImage="/assets/vision-image.webp"
                      alt="visionImage"
                      layout="responsive"
                      objectFit="cover"
                    />
                  ) : (
                    <CustomImage
                      publicImage="/assets/value-image.webp"
                      alt="values"
                      layout="responsive"
                      objectFit="cover"
                    />
                  )}
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
}
