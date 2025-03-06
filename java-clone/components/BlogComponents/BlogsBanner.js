"use client";
import Image from "next/image";
import CustomImage from "./CustomeImage";
import { useParams } from "next/navigation";

export default function BlogsBanner({ heading }) {
  const { slug } = useParams();
  console.log(slug, "previous slug");

  return (
    <div className="w-full h-[250px] md:h-fit relative">
      <div className="w-full h-fit">
        <CustomImage
          publicImage="/assets/blog-cards-banner-image.jpg"
          width="100%"
          // height="500px"
          alt="Blogs Banner"
          rounded="rounded-none"
          objectFit="cover"
          className="z-10 h-[250px] md:h-fit"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-35"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex justify-center items-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
          Category:{" "}
          {slug
            .replace(/-/g, " ")
            .split("")
            .map((char, index) => (index === 0 ? char.toUpperCase() : char))
            .join("")}
        </h1>
      </div>
    </div>
  );
}
