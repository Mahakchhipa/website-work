import CustomImage from "@/components/BlogComponents/CustomeImage";
import Image from "next/image";
import Link from "next/link";

const TechCard = ({ image, heading, paragraph, li1, li2, li3, href }) => (
<div className="flex flex-col w-full h-auto rounded-lg p-8 gap-4 bg-[#ffffff] mx-auto items-center justify-center lg:hover:bg-[#5B89FF] lg:hover:text-white group">
  <div className="w-[80px] h-[80px]">
    <CustomImage publicImage={image} alt="web development image" />
  </div>
  <div className="flex flex-col justify-between items-center h-full gap-6">
    <div className="text-center flex flex-col gap-4 page-text">
      <h3 className="font-bold">{heading}</h3>
      <p className="font-normal">{paragraph}</p>
    </div>
    <div>
      <ListItem>{li1}</ListItem>
      <ListItem>{li2}</ListItem>
      <ListItem>{li3}</ListItem>
    </div>
  </div>
  <div className="text-[#4F46E5] gap-4">
    {href ? (
      <Link href={href} passHref>
        {/* The group-hover class ensures that the text changes color when the card is hovered */}
        <span className="font-medium text-base lg:group-hover:text-white">Read More</span>
      </Link>
    ) : (
      <span className="font-medium text-base cursor-not-allowed">
        Read More
      </span>
    )}
  </div>
</div>

);

const ListItem = ({ children }) => (
  <div className="font-normal text-base  flex flex-col gap-4 ">
    <li className="">{children}</li>
  </div>
);

export default function Technologies() {
  return (
    <div>
      <div className="flex flex-col gap-4 w-full lg:py-[40px] py-[20px] px-[24px] xl:px-[100px] bg-[#f8f8f8]">
        <div className="mx-auto flex flex-col gap-4 child-text">
          <h2 className="font-bold  text-center">
            Technologies We Use In <span className="text-[#0F53FF]">Web Development Solutions</span>
          </h2>
          <p className="font-normaltext-center">
            Techanic InfoTech uses only the best and most renowned web
            development technologies for your web development and design
            projects, that’s what makes us stand out.
          </p>
          <div className="grid gap-6 lg:gap-[75px]">
            {" "}
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 lg:gap-[75px] mx-auto w-full">
              {/* First three cards */}
              <TechCard
                image="/assets/icons/php-development-icon.png"
                heading="PHP"
                paragraph="PHP, a server-side scripting language, is essential for creating dynamic and interactive web apps. Our expertise in PHP enables us to deliver robust and scalable solutions tailored to your business needs."
                li1="Custom PHP Development"
                li2="PHP E-commerce Solutions"
                li3="PHP-based CMS Solutions"
                href="/services/php-development-company"
              />
              <TechCard
                image="/assets/icons/wordpress-icon.png"
                heading="WordPress"
                paragraph="WordPress, the world's most popular content management system, is our tool of choice for building versatile and SEO-friendly websites as a market-leading web development firm."
                li1="Custom WordPress Themes"
                li2="WordPress Plugin Development"
                li3="WordPress Maintenance and Support"
                href="/services/wordpress-development-company"
              />
              <TechCard
                image="/assets/icons/react-icon.png"
                heading="ReactJS"
                paragraph="ReactJS, a powerful JavaScript library for building user interfaces, is our go-to for creating responsive and dynamic web applications. It’s part of our preferred tech stack as a leading website development."
                li1="Single Page Applications (SPA)"
                li2="ReactJS for E-commerce"
                li3="ReactJS Consulting and Strategy"
                href="/services/reactjs-development-company"
              />
            </div>
            {/* Center last two cards */}
            <div className="lg:max-w-[1000px] mx-auto gap-6 lg:gap-[75px] flex lg:flex-row flex-col">
              <TechCard
                image="/assets/icons/node-js-icon.png"
                heading="NodeJS"
                paragraph="NodeJS, known for its efficiency in building scalable network applications, is a core part of our technology stack. We utilize it to deliver unmatched website development services."
                li1="Real-time Applications"
                li2="API Development and Integration"
                li3="NodeJS Consulting and Strategy"
                href="/services/nodejs-development-company"
              />
              <TechCard
                image="/assets/icons/python-icon.png"
                heading="Python"
                paragraph="Python's simplicity and versatility make it ideal for a wide range of web applications, from simple scripts to complex machine-learning algorithms. As a top website development firm."
                li1="Django and Flask Development"
                li2="Data Analysis and Machine Learning"
                li3="Custom Python Solutions"
                href="/services/python-development-company"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
