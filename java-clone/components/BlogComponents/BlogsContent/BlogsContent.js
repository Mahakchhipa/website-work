import Image from "next/image";

export default function BlogsContent() {
  return (
    <div className="w-full h-[650px] relative">
      <Image 
        src="blogImages/blogs-banner-image.jpg" 
        alt="Blogs Banner" 
        layout="fill"
        objectFit="cover"
        className="z-10" 
      />
    </div>
  );
}
