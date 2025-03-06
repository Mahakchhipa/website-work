import LocationOnIcon from "@mui/icons-material/LocationOn";
import RegisterForm from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import "./contactinfo.css";
import CustomImage from "../BlogComponents/CustomeImage";

export default function ContactInfo() {
  const images = [
    "/public/assets/clutch-image1.webp",
    "/public/assets/web-design-company2-image.webp",
    "/public/assets/designrush-image3.webp",
  ];
  return (
    <div
      id="formfields"
      className="contact-info-container px-[20px] lg:py-[40px] py-[20px] xl:px-[80px] bg-[#ECF1FF]"
    >
      <div className="flex flex-col lg:flex-row gap-6   mx-auto bg-white  rounded-lg px-[12px] py-[20px]">
        <div
          className=" sm:w-auto h-auto flex flex-col justify-start items-start rounded-lg gap-4 py-4 pl-4 md:pl-8 pr-2 basis-[55%] "
          style={{
            background: `linear-gradient(218.46deg, #0F53FF -2.06%, #151515 159.32%)`,
          }}
        >
          <div className="child-text flex flex-col gap-[10px] md:gap-4 w-[280px] sm:w-auto text-white">
            {" "}
            <h2 className=" font-bold  ">
              <span className="">Let’s Turn Your Idea</span> To Tech Reality
            </h2>
            <p className="font-normal  sm:w-auto ">
              Ready to turn your software or app idea into reality? Fill out the
              form below to get started with our expert development team.
            </p>
          </div>

          <ol className="progress-list flex flex-col w-full ">
            <li className="progress-item">
              <div className="progress-circle"></div>
              <div className="progress-content">
                <h4 className="text-base md:text-xl font-bold">
                  Initial Consultation
                </h4>
                <p className="text-sm md:text-base mb-6  sm:w-auto ">
                  We discuss your project requirements and goals.
                </p>
              </div>
            </li>
            <li className="progress-item">
              <div className="progress-circle"></div>
              <div className="progress-content">
                <h4 className="text-base md:text-xl  font-bold">
                  Custom Proposal
                </h4>
                <p className="text-sm md:text-base mb-6  sm:w-auto ">
                  Receive a tailored proposal with a detailed plan and cost
                  estimate.
                </p>
              </div>
            </li>
            <li className="progress-item">
              <div className="progress-circle"></div>
              <div className="progress-content">
                <h4 className="text-base md:text-xl  font-bold">
                  Project Kickoff
                </h4>
                <p className="text-sm md:text-base  sm:w-auto ">
                  Begin development with our dedicated team, keeping you updated
                  every step of the way.
                </p>
              </div>
            </li>
          </ol>
          <div className="grid md:grid-cols-2 gap-3 h-fit">
            <div className="flex flex-col justify-start items-start ml-2 md:ml-0  md:w-auto  gap-4 xl:overflow-x-hidden overflow-x-scroll h-fit">
              <div className="flex md:gap-4 items-start ">
                <div className="mr-2 md:text-2xl text-black bg-[#FF9F73] py-3 px-4 rounded-full">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className=" text-white w-[21px] h-[21px] "
                  />
                </div>
                <div>
                  <div className="flex flex-col gap-2 text-white">
                    {" "}
                    <p className="text-base md:text-2xl font-bold   md:w-auto">
                      Email
                    </p>
                    <span className="text-sm md:text-base  font-normal  max-w-[290px] md:w-auto">
                      <a href="mailto:info@techanicinfotech.com">
                        info@techanicinfotech.com
                      </a>
                    </span>
                    <span className="text-sm md:text-base  font-normal  max-w-[290px] md:w-auto">
                      <a href="mailto:sales@techanicinfotech.com">
                        sales@techanicinfotech.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="tel:+917222001000"
                className="link-contact-us-footer  text-sm md:text-base"
              >
                <div
                  id="formfields1"
                  className="mb-6 flex md:gap-4 text-white items-center w-[290px] md:w-auto"
                >
                  <div className="mr-2 md:text-2xl text-white bg-[#FF9F73] py-3 px-4 rounded-full">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className=" text-white w-[21px] h-[21px]"
                    />
                  </div>
                  +91 7222 001 000
                </div>
              </a>
            </div>
            <div className="border-[1px] border-white rounded-md flex items-center justify-center gap-2 px-5 py-3 h-fit">
              <div>
                <img src="/assets/clutch-image1.webp" />
              </div>
              <div>
                <img src="/assets/web-design-company-image.webp" />
              </div>
              <div>
                <img src="/assets/designrush-image3.webp" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className=""> */}
        <RegisterForm />
        {/* </div> */}
      </div>
    </div>
  );
}
