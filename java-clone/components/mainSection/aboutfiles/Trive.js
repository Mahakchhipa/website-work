'use client'
import { useInView } from "react-intersection-observer";
import CustomImage from "../../BlogComponents/CustomeImage";

export default function Thrive() {
  const lists = [
    { image: "/assets/continuous-learning.webp", text: "Continuous Learning" },
    { image: "/assets/inclusive-culture.webp", text: "Inclusive Culture" },
    { image: "/assets/collaborative-environment.webp", text: "Collaborative Environment" },
    { image: "/assets/work-life-harmony.webp", text: "Work-Life Harmony" },
    { image: "/assets/innovation-hub.webp", text: "Innovation Hub" },
    { image: "/assets/employee-empowerment.webp", text: "Employee Empowerment" },
    { image: "/assets/recognition-rewards.webp", text: "Recognition and Rewards" },
    { image: "/assets/icons/strong-community-support-icon.png", text: "Community Engagement" },
    { image: "/assets/healthy-lifestyle.webp", text: "Healthy Lifestyle" },
  ];
  const animateClass = (inView) =>
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  return (
    <>
      <div className="w-full bg-[#F0F5FF] flex flex-col p-[20px] lg:py-[40px] xl:px-[100px] gap-4 lg:gap-6">
        <div className="max-w-[1280px] mx-auto text-center flex flex-col gap-[10px] lg:gap-6 child-text">
          <TextWithAnimation
            tag="h2"
            text="Thriving Together At Techanic InfoTech"
          />
          <TextWithAnimation
            tag="p"
            text="At Techanic Infotech, we pride ourselves on creating an environment
            that reflects 'Work Life at Its Best'. Here, every day is an
            opportunity to collaborate, innovate, and grow both personally and
            professionally. Our vibrant culture is shaped by the diversity of
            thoughts, a spirit of inclusivity, and a commitment to continuous
            learning."
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-[58px] mx-auto h-[400px] overflow-y-auto md:h-auto scrollbar-thin">
          {lists.map((list, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5,
              });
            return(
            <div
            ref={ref}
              key={index}
              className={`flex flex-col justify-between items-center text-center w-full gap-4 border-[1px] border-black page-text p-3 md:p-6 bg-white transform transition-all duration-700 ease-out ${animateClass(
                inView
              )}`}
            >
              <CustomImage publicImage={list.image} alt={list.text} width="100px" height="100px" />
              <h3>{list.text}</h3>
            </div>
          )})}
        </div>
      </div>
    </>
  );
}

function TextWithAnimation({ tag, text, image }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Ensure that `Tag` is set correctly (it could be h2, p, etc.)
  const Tag = tag;

  if (!Tag) {
    return null; 
  }

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 ease-out ${inView ? "transform translate-y-0 opacity-100" : "transform translate-y-10 opacity-0"}`}
      style={{
        transition: "transform 0.7s ease-out, opacity 0.7s ease-out",
      }}
    >
      {image && <img src={image} alt={text} className="w-[100px] h-[100px]" />}
      <Tag>{text}</Tag>
    </div>
  );
}
