import React from "react";
import Image from "next/image";
import dateimg1 from '@/assets/dateImg1.jpg';
import dateimg2 from '@/assets/dateImg2.jpg';
import dateimg3 from '@/assets/dateimg3.jpg';
import dateimg4 from '@/assets/dateImg4.jpg';

const Datingcollage = () => {
  return (
    <section className="flex flex-wrap">
      <div className="w-full">
        <Image src={dateimg1} alt="Image 1"  />
      </div>
      <div className="w-full">
        <Image src={dateimg2} alt="Image 2"  />
      </div>
      <div className="w-full">
        <Image src={dateimg3} alt="Image 3"   />
      </div>
      <div className="w-full">
        <Image src={dateimg4} alt="Image 4"  />
      </div>
    </section>
  );
};

export default Datingcollage;
