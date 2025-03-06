"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import classNames from "classnames";
import "./colab.css";

export default function Collab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const section = document.getElementById("collab-section");
        if (!section) return;
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Trigger animation when section is within viewport
        setIsVisible(sectionPosition < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="collab-section"
      className="relative w-full h-auto xl:px-[100px] px-[10px] lg:py-[40px] py-[20px] overflow-hidden"
    >
      <Image
        src="backgroundImages/background-city.jpg"
        layout="fill"
        objectFit="cover"
        alt="Collaboration Image"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="flex flex-col gap-[10px] md:gap-4 w-full">
        <div className="child-text container mx-auto text-center relative z-10">
          <h2 className="text-white font-bold text-lg md:text-2xl lg:text-4xl">
            How it works
          </h2>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px] md:gap-4 mx-auto relative z-10 w-full">
          <AnimatedCard
            isVisible={isVisible}
            delay={300}
            index={0}
            image="icons/collaborate.svg"
            title="Collaboration"
            text="Techanic InfoTech is an IT service provider well known for seamless collaboration. That’s what empowers us to deliver digital brilliance."
          />
          <AnimatedCard
            isVisible={isVisible}
            delay={100}
            index={1}
            image="icons/business-ethics.svg"
            title="Transparency"
            text="Using agile development methodology in our projects, we deliver spotless transparency to clients, building trust and delivering success."
          />
          <AnimatedCard
            isVisible={isVisible}
            delay={100}
            index={2}
            image="icons/innovation.svg"
            title="Innovation"
            text="We are driven by the goal of delivering tech innovation to untouched parts of the industry, realizing a tech-driven future."
          />
          <AnimatedCard
            isVisible={isVisible}
            delay={200}
            index={3}
            image="icons/customer-focus.png"
            title="Customer Focus"
            text="At Techanic InfoTech, our priority is always our customers. By understanding their unique needs and delivering tailored solutions, we ensure exceptional client satisfaction and enduring partnerships."
          />
        </div>
      </div>
    </div>
  );
}

function AnimatedCard({ isVisible, delay, index, image, title, text }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimated(true);
      }, delay);
      return () => clearTimeout(timer); // Cleanup timeout on unmount
    } else {
      setAnimated(false);
    }
  }, [isVisible, delay]);

  const cardClasses = classNames(
    "flex flex-col gap-[10px] items-center p-5 lg:w-auto w-full h-auto bg-[#E5F4F2] shadow-md mx-auto opacity-75 rounded-2xl will-change-transform",
    { "animate-card": animated }
  );

  return (
    <div
      className={cardClasses}
      style={{
        transform: animated ? "translateX(0)" : index < 2 ? "translateX(-100%)" : "translateX(100%)",
        transition: "transform 1s ease", // Adjust duration as needed
        backfaceVisibility: "hidden",
      }}
    >
      <div className="w-[78px] h-[79px] flex items-center justify-center">
        <Image src={image} alt={title} height={64} width={64} objectFit="cover" />
      </div>
      <div className="page-text text-center flex flex-col justify-between gap-3">
        <h3 className="font-medium">{title}</h3>
        <p className="cardPara text-[#000000] font-normal text-center">{text}</p>
      </div>
    </div>
  );
}
