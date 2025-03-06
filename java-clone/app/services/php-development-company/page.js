import OurClients from "@/components/clients/page";

 
import Experts from "@/lib/secondpage/dev";
import Portfolio from "@/components/getStarted/portfolio/portfolio";
import HiringDevs from "@/lib/secondpage/hireDev";
import TechSuccess from "@/lib/colab/techSuccess";
import TechnologiesUsed from "@/components/getStarted/technologies";
import Appdev from "@/lib/secondpage/nativeapp/Appdev";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import OurBlogs from "@/lib/clientsReviews/blogs";
import ClientTestimonials from "@/lib/clientsReviews/clients";

import Startwithussection2 from "@/components/getStarted/startwithussection2";

import Banner from "@/lib/secondpage/Ewallet/Banner";
import LanguagesCards from "@/lib/secondpage/mobileApp/languageCards";
import Weblanguages from "@/components/weblanguages";
import VectorBanner from "@/components/VectorBanner";
import NativeApp1 from "@/lib/secondpage/nativeapp/nativeapp1";
import CTAButton from "@/components/getStarted/CTAButton";
import ServicePagesCards from "@/lib/secondpage/mobileApp/ServicePagesCards";
import ServiceCtaButton from "@/components/getStarted/ServicesCtaButtons";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
const firstColumnData = [
  {
    heading: "Expert Team",
    paragraph:
      "Techanic Infotech’s PHP developers are industry veterans, boasting a minimum of 5 years' experience. They bring a wealth of knowledge and a proven track record of delivering complex projects with finesse and precision.",
  },
  {
    heading: "Quality and Reliability",
    paragraph:
      "Our commitment to quality is unwavering. We employ rigorous testing and quality assurance practices to ensure that every PHP solution is reliable, secure, and ready to perform under any circumstances.",
  },
  {
    heading: "Tailored Solutions",
    paragraph:
      "Understanding that each business is unique, Techanic Infotech specializes in creating custom PHP solutions that are tailored to your specific business needs and goals, ensuring an optimal fit for your strategy.",
  },
];

const secondColumnData = [
  {
    heading: "Agile Methodology",
    paragraph:
      "By adopting an agile approach to PHP development, we guarantee a flexible and efficient workflow, allowing for rapid iteration and the ability to adapt to changes swiftly without sacrificing quality.",
  },
  {
    heading: "Competitive Pricing",
    paragraph:
      "Techanic Infotech offers competitive pricing without compromising on quality, ensuring that you get the best return on investment for your PHP development projects.",
  },
  {
    heading: "Ongoing Support",
    paragraph:
      "Beyond the initial development, our team at Techanic Infotech provides continuous support and maintenance, ensuring that your PHP applications remain up-to-date and continue to drive value for your business over time.",
  },
];
export const metadata = {
  contentLanguage: "en-us",
  title: "PHP Development Company | PHP Development",
  description:
    "Techanic Infotech is an award-winning PHP development company. Our developers have experience in PHP web development and PHP web app development.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/php-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "PHP Development Company | PHP Development",
    description:
      "Techanic Infotech is an award-winning PHP development company. Our developers have experience in PHP web development and PHP web app development.",
    url: "https://www.techanicinfotech.com/services/php-development-company",

    alt: "Techanic Infotech",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/php-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHP Development Company | PHP Development",
    description:
      "Techanic Infotech is an award-winning PHP development company. Our developers have experience in PHP web development and PHP web app development.",
    handle: "@Techanicinfo",

    url: "https://www.techanicinfotech.com/services/php-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/php-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

export default function PHPdev() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "http://schema.org",
              "@type": "ProfessionalService",
              "priceRange" : "$25-$50",
              "name": "PHP Development Company | PHP Development",
              "url": "https://www.techanicinfotech.com/services/php-development-company",
              "image": "https://www.techanicinfotech.com/OGI/services/php-development-og.webp",
              "description": "Techanic Infotech is an award-winning PHP development company. Our developers have experience in PHP web development and PHP web app development.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur, Rajasthan, India",
                  "addressLocality": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur",
                  "addressRegion": "Rajasthan",
                       "postalCode": "302026",
                  "addressCountry": "IN",
                  "telephone": "+91 7222001000"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "224 W 35th St Ste 500 #2215 New York, NY 10001",
                  "addressLocality": "224 W 35th St Ste 500 #2215 New York, NY 10001",
                  "addressRegion": "New York",
                  "postalCode": "10001",
                  "telephone": "+1 8053364021",
                  "addressCountry": {
                    "@type": "Country",
                    "name": "US"
                  }
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road, Dubai",
                 "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road, Dubai",

                  "addressRegion": "DUBAI",
                  "postalCode": "417213",
                  "telephone": "+971 524981077",
                  "addressCountry": {
                    "@type": "Country",
                    "name": "UAE"
                  }
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Via Giuseppe mazzini nu. 6, flat nu 107, MILANO 20123 ITALY",
                   "addressLocality": "Via Giuseppe mazzini nu. 6, flat nu 107 MILANO",
                  "addressRegion": "MILANO",
                  "postalCode": "20123",
                  "telephone": "+39 3517578120",
                  "addressCountry": {
                    "@type": "Country",
                    "name": "Italy"
                  }
                }
              ]
            }
          `,
        }}
      />
      {/* <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Techanic Infotech",
              "image": "https://www.techanicinfotech.com/OGI/services/php-development-og.webp",
              "@id": "https://www.techanicinfotech.com/services/php-development-company",
              "url": "https://www.techanicinfotech.com/services/php-development-company",
              "priceRange": "$25-$50",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur, Rajasthan, India",
                  "addressLocality": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur",
                  "addressRegion": "Rajasthan",
                       "postalCode": "302026",
                  "addressCountry": "IN",
                  "telephone": "+91 7222001000"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "224 W 35th St Ste 500 #2215 New York, NY 10001",
                  "addressLocality": "224 W 35th St Ste 500 #2215 New York, NY 10001",

                  "addressRegion": "New York",
                  "postalCode": "10001",
                  "telephone": "+1 8053364021",
                  "addressCountry": {
                    "@type": "Country",
                    "name": "US"
                  }
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road, Dubai",
                 "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road, Dubai",

                  "addressRegion": "DUBAI",
                  "postalCode": "417213",
                  "telephone": "+971 524981077",
                  "addressCountry": {
                    "@type": "Country",
                    "name": "UAE"
                  }
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Via Giuseppe mazzini nu. 6, flat nu 107, MILANO 20123 ITALY",
                   "addressLocality": "Via Giuseppe mazzini nu. 6, flat nu 107 MILANO",
                  "addressRegion": "MILANO",
                  "postalCode": "20123",
                  "telephone": "+39 3517578120",
                  "addressCountry": {
                    "@type": "Country",
                    "name": "Italy"
                  }
                }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/techanicinfotech/",
                "https://x.com/techanicinfo",
                "https://www.instagram.com/techanic_infotech_/",
                "https://www.linkedin.com/company/techanic-infotech/",
                "https://www.techanicinfotech.com/services/php-development-company"
              ]
            }
          `,
        }}
      /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Techanic Infotech",
              "alternateName": "Techanic Infotech",
              "url": "https://www.techanicinfotech.com/services/php-development-company",
              "logo": "https://www.techanicinfotech.com/OGI/services/php-development-og.webp",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91 7222001000",
                  "contactType": "sales",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+1 8053364021",
                  "contactType": "sales",
                  "areaServed": "US",
                  "availableLanguage": "en"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+971 525981077",
                  "contactType": "sales",
                  "areaServed": "AE",
                  "availableLanguage": "en"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+39 3517578120",
                  "contactType": "sales",
                  "areaServed": "IT",
                  "availableLanguage": "en"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/techanicinfotech/",
                "https://x.com/techanicinfo",
                "https://www.instagram.com/techanic_infotech_/",
                "https://www.linkedin.com/company/techanic-infotech/",
                "https://www.techanicinfotech.com/services/php-development-company"
              ]
            }
          `,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@id":"https://www.techanicinfotech.com/services/php-development-company",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can I hire a PHP developer for a short-term project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, at Techanic Infotech, we offer flexible hiring models. You can hire our expert PHP developers for short-term projects, ensuring you get the expertise you need without a long-term commitment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Techanic Infotech sign Non-Disclosure Agreements (NDAs)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We prioritize client confidentiality. Techanic Infotech signs NDAs to ensure that your project details and intellectual property remain secure and confidential at all times."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the experience level of your PHP developers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our PHP developers have a minimum of 5 years of experience. They possess extensive knowledge in PHP development, capable of handling complex projects and delivering innovative solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Techanic Infotech ensure the quality of the PHP development services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We employ best practices including peer reviews, rigorous testing, and quality assurance protocols to ensure the highest quality of our PHP development services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries has Techanic Infotech provided PHP development for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Techanic Infotech has a diverse portfolio, having provided PHP development services to industries ranging from e-commerce and healthcare to education and finance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Techanic Infotech manage project communication?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We believe in transparent and consistent communication. Our project managers use the latest tools to keep you updated and are always available to address your concerns and feedback."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What post-development support does Techanic Infotech offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer maintenance and support services post-development to ensure your PHP solutions remain up-to-date, secure, and efficient in the long run."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a dedicated project manager assigned to my project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, every project at Techanic Infotech is assigned a dedicated project manager to ensure a single point of contact for streamlined communication and project success."
                  }
                }
              ]
            }
          `,
        }}
      />
      <VectorBanner
        headingPart1="PHP "
        headingPart2="Development Company"
        spanColor="#0F53FF"
        paragraph={`Elevate your digital presence with Techanic Infotech's expert PHP development services. Choose the best PHP development company for innovation, 
        reliability, and excellence in Web solutions.Our seasoned PHP developers, with over 5 years of experience, craft custom web solutions that drive growth, enhance user experiences, and provide cost-effective solutions for businesses of all sizes. `}
        vectorImage='/assets/bannerimages/php-development-vector-banner.svg'
        image='/assets/bannerimages/php-development-banner-image.webp'
        btnContent="View More"
    imagewidth="400px"
    percentHeight="60%"
    percentWidth="60%"
    justifyimage="center"
    itemsposition="center"
    isGradient={true}
  btncolor="93.29deg, #2051CC -48.03%, #0F52FF 160.39%"
  btntext="white"
      />
      <OurClients
        headingpart1="We Work With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <NativeApp1
        headingPart1="Unlocking WWW "
        headingPart2='With PHP Development'
        paragraph1={`At Techanic Infotech, we understand that PHP is more than just a programming language; it's the backbone of many dynamic and robust web solutions. The importance of PHP in web development is undeniable. It powers a vast majority of websites on the internet, thanks to its extensive capabilities and flexibility. Techanic Infotech’s expertise in PHP web development services ensures that we leverage this powerful language to its full potential, delivering high-end, 
        scalable, and secure web applications that drive business success.`}
        paragraph2="Our dedicated PHP development team at Techanic Infotech specializes in crafting tailored solutions that meet the unique needs of each project. With a rich portfolio of PHP web development projects, our experienced PHP developers combine best practices with the latest technological advancements to create PHP web solutions that are not only efficient but also future-proof. Trust in Techanic Infotech's PHP development services to provide you with a 
        competitive edge in an ever-evolving digital landscape."
        image="/assets/php-developer-image.webp"
 
      />
      <CTAButton
        heading="Enter The World Of Web Backed By PHP Solutions "
        paragraph="Techanic InfoTech as a market leading PHP development company is here to help you. "
        backgroundImage='/assets/php-development-cta-banner-image.webp'
        btntext="Let’s Get Started"
        textColor="white"
        bgColor="white"
        text="black"
      />
      <ServicePagesCards
        headingPart1="PHP "
        headingPart2="Development Services"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        paragraph={` Techanic InfoTech is helping businesses and brands reach out to their potential customer powered with an range of PHP development services. We are here to help you convert idea to web solution that generate organic brilliance.`}
        techcard={[
          {
            image: "/assets/icons/servicesIcons/custom-php-development-icon.png",
            title: "Custom PHP Development",
            description:
              "Techanic Infotech thrives on customization. Our custom PHP development services are focused on creating bespoke solutions that align perfectly with your business objectives. We understand that one size does not fit all, and our PHP web development company deliver personalized applications.",
          },
          {
            image: "/assets/icons/servicesIcons/php-web-application-icon.png",
            title: "PHP Web Application Development",
            description:
              "With an emphasis on responsive design and user experience, our PHP web app development service is about building applications that work seamlessly across all devices. Techanic Infotech's team ensures that your web applications are intuitive, engaging.",
          },
          {
            image: "/assets/icons/servicesIcons/php-ecommerce-solution-icon.png",
            title: "PHP E-commerce Solutions",
            description:
              "As a PHP software development company, our team of developers specializes in e-commerce solutions that help businesses sell more. Leveraging powerful PHP frameworks, we create e-commerce platforms that are secure, fast, and optimized for high traffic.",
          },
          {
            image: "/assets/icons/servicesIcons/php-cms-development-icon.png",
            title: "PHP CMS Development",
            description:
              "Content is king, and our PHP website development services include sophisticated content management system (CMS) solutions. Techanic Infotech's developers are adept at utilizing PHP to create CMSs that are easy to manage, flexible, and tailored to the unique needs.",
          },
          {
            image: "/assets/icons/servicesIcons/full-stack-php-development-icon.png",
            title: "Full-stack PHP Development",
            description:
              "Techanic Infotech offers full-stack PHP development services, taking charge of both the front-end and back-end requirements of your project. Our dedicated PHP development team has the expertise to deliver comprehensive solutions that encapsulate the full breadth of PHP capabilities. ",
          },
          {
            image: "/assets/icons/servicesIcons/php-cloud-solutions-icon.png",
            title: "PHP Cloud Solutions",
            description:
              "Harness the power of cloud computing with Techanic Infotech's PHP consulting services. Our expert PHP developers are skilled in integrating cloud services with PHP applications, providing scalable, reliable, and that’s what makes us one of the best web development company. ",
          },
        ]}
        bgColor="F8F8F8"
        cardBG="ffffff"
        color="02569B"
        showExtraCards={false}
        radius="8"
        position="start"
        height="500px"
      />

      <ServiceCtaButton
        heading="Develop PHP Solutions"
        paragraph="Build PHP Web Solutions With Market Experts and Become The NEXT BOG."
        text="Talk To Us"
     isGradientPage={true}
     gradient="272.97deg, #2A69E4 -11.91%, #719DF4 112.54%"
     textColor="white"
     btnbg="#ffffff"
     btntext="black"
     image='/assets/php-development-cta-image.webp'
      />
      <ServicePagesCards
        headingPart1={`For Businesses & Users, `}
        headingPart2="Powered By PHP Web Development"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        paragraph={`We use the tested PHP technology and PHP frameworks to deliver solutions 
  that shine in ever so competitive market, helping businesses like yours generate value
  for self and the end users.`}
  cardType="false"
        techcard={[
          {
            image: "/assets/icons/cost-effective-solution-icon.png",
            title: "Cost Efficiency",
            description:
              "PHP is open-source and free to use, which significantly reduces development costs while providing robust web solutions for businesses of all sizes.",
          },
          {
            image: "/assets/icons/flexible-convenient.png",
            title: "Flexibility and Integration",
            description:
              "PHP offers unparalleled flexibility and integrates seamlessly with various databases and platforms, enhancing the accessibility of your web applications across different systems.",
          },
          {
            image: "/assets/icons/servicesIcons/high-performence-icon.png",
            title: "Speed and Performance Transactions",
            description:
              "PHP's fast processing speed, aided by its own memory, reduces the loading time and server workload, leading to a performance-efficient experience for users.",
          },
          {
            image: "/assets/icons/easy-maintenance-icon.png",
            title: "Ease of Maintenance",
            description:
              "With its straightforward and readable syntax, PHP allows for easy maintenance and updates of web applications, ensuring they remain efficient and secure over time.",
          },
          {
            image: "/assets/icons/scalable-solution-icon.png",
            title: "Scalability",
            description:
              "As your business grows, PHP's scalable nature makes it easy to expand your web applications' features and user base without compromising on performance.",
          },
          {
            image: "/assets/icons/strong-community-support-icon.png",
            title: "Strong Community Support",
            description:
              "A vast community of PHP developers ensures continuous improvements, readily available assistance, and a wealth of documentation, contributing to the stability and innovation of PHP applications.",
          },
        ]}
 
      />

      <HiringDevelopers
        headingPart1="Hire PHP "
        headingPart2="Developers In 24 Hours"
        paragraph1="In the fast-paced world of web development, 
        having immediate access to experienced talent can make 
        all the difference. Techanic Infotech stands out by offering
         the unique opportunity to hire PHP developers within 24 hours,
          ensuring that your project kickstarts without delay.
           Our developers are not just coders; they are problem 
           solvers and innovators with at least 5 years of hands-on 
           experience in PHP development. When you choose to work
            with our team, you're not just filling a gap in your
             project; you're embracing a partnership with seasoned 
             experts who are committed to excellence and innovation."
        paragraph2="Techanic Infotech takes pride in its rigorous selection
         process, ensuring that each developer is not only technically
          proficient but also well-versed in the latest industry standards
           and practices. Our PHP experts come equipped with a deep understanding
            of PHP web solutions, ready to tackle complex challenges and deliver 
            results that drive business growth. By hiring from Techanic Infotech, you benefit
             from streamlined communication, a steadfast commitment to your deadlines,
              and a quality of work that stands out in the digital landscape. Trust us to enhance your team's capabilities and take your PHP development project to new heights."
     image="/assets/hire-developers-service-page-image.webp"
        btntxt="white"
      />
      <TechSuccess
        headingPart1="Ready To Transform Your "
        headingPart2="Web Presence With PHP? Let's Get Started!"
        paragraph="At Techanic Infotech, we're passionate about helping businesses harness the full potential of PHP development. Whether you have a specific project in mind or need expert guidance, our dedicated PHP developers are here to assist you. Take the first step towards success by reaching out to us today."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="430"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#EFF3FF"
      />
      <Languages
        head="Tech Stack For PHP Development"
        para={`We use only the best technology stack for PHP development at Techanic InfoTech to ensure quality of solution and consistency in product. Delivering solutions that are future proof.`}
        bgColor="#EFF3FF"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          {
            image: "/assets/icons/php-frameworks-icon.svg",
            label: "PHP Frameworks",
    
          },
          {
            image: "/assets/icons/platforms-icon.svg",
            label: "Platforms",
       
          },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Database",
            flipIcon: "/assets/icons/database-icon.svg",
          },
          {
            image: "/assets/icons/cloud-environment-icon.png",
            label: "Clouds",
   
          },
          {
            image: "/assets/icons/ecommerce-platforms-icon.svg",
            label: "Ecommerce Platforms",
          
          },
        ]}
        languages={[
          {
            image: "/assets/icons/cakephp-icon.png",
            label: "CakePHP",
            section: "PHP Frameworks",
          },
          {
            image: "/assets/icons/symfony-icon.png",
            label: "Symfony",
            section: "PHP Frameworks",
          },
          { image: "/assets/icons/zend-icon.png", label: "Zend", section: "PHP Frameworks" },
          {
            image: "/assets/icons/laravel-icon.png",
            label: "Laravel",
            section: "PHP Frameworks",
          },

          {
            image: "/assets/icons/magento-icon.png",
            label: "Magento",
            section: "Platforms",
          },
          {
            image: "/assets/icons/wordpress-icon.png",
            label: "WordPress",
            section: "Platforms",
          },
          { image: "/assets/icons/joomla-icon.png", label: "Joomla", section: "Platforms" },
          {
            image: "/assets/icons/pimcore-icon.png",
            label: "PIMCore",
            section: "Platforms",
          },

          { image: "/assets/icons/oracle-icon.png", label: "Oracle", section: "Database" },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "PostgreSQL",
            section: "Database",
          },
          { image: "/assets/icons/mysql-icon.png", label: "MySQL", section: "Database" },
          {
            image: "/assets/icons/microsoft-sql-server.png",
            label: "Microsoft SQL Server",
            section: "Database",
          },
          {
            image: "/assets/icons/azure-server-icon.png",
            label: "Azure SQL Database",
            section: "Database",
          },

          {
            image: "/assets/icons/google-cloud-icon.png",
            label: "Google Cloud",
            section: "Clouds",
          },
          { image: "/assets/icons/aws-icon.png", label: "AWS", section: "Clouds" },
          {
            image: "/assets/icons/digital-ocean-icon.png",
            label: "DigitalOcean",
            section: "Clouds",
          },
          {
            image: "/assets/icons/rackspace-icon.png",
            label: "Rackspace",
            section: "Clouds",
          },
          {
            image: "/assets/icons/azure-icon.png",
            label: "Microsoft Azure",
            section: "Clouds",
          },

          {
            image: "/assets/icons/woo-commerce-icon.png",
            label: "WooCommerce",
            section: "Ecommerce Platforms",
          },
          {
            image: "/assets/icons/magento-icon.png",
            label: "Magento",
            section: "Ecommerce Platforms",
          },
          {
            image: "/assets/icons/prestashop-icon.png",
            label: "PrestaShop",
            section: "Ecommerce Platforms",
          },
          {
            image: "/assets/icons/drupal-icon.png",
            label: "Drupal Commerce",
            section: "Ecommerce Platforms",
          },
          {
            image: "/assets/icons/opencart-icon.png",
            label: "Opencart",
            section: "Ecommerce Platforms",
          },
        ]}
      />

      <Appdev
        mainHeading="Choose Techanic InfoTech For Your Next PHP Development Project"
        mainParagraph="Choosing Techanic Infotech for PHP development is opting for a partner that is as invested in your success as you are. With a track record of delivering cutting-edge PHP solutions, our team combines technical prowess with a deep understanding of business strategy to deliver applications that not only perform but also contribute to your bottom line. We don’t just build; we elevate your web presence with PHP."
        mainParagraph1="So, if you want to experience the digital brilliance powered by PHP development, one of the best web development companies in the market is here to help you. Reach out to us and generate online brilliance for your brand. We are here to help you, contact us."
        firstColumnData={firstColumnData}
        secondColumnData={secondColumnData}
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are some of the common FAQs about PHP development services."
        questions={[
          "Q1: Can I hire a PHP developer for a short-term project?",
          "Q2: Does Techanic Infotech sign Non-Disclosure Agreements (NDAs)?",
          "Q3: What is the experience level of your PHP developers?",
          "Q4: How does Techanic Infotech ensure the quality of the PHP development services?",
          "Q5: What industries has Techanic Infotech provided PHP development for?",
          "Q6: How does Techanic Infotech manage project communication?",
          "Q7: What post-development support does Techanic Infotech offer?",
          "Q8: Is there a dedicated project manager assigned to my project?",
        ]}
        answers={[
          "A1: Yes, at Techanic Infotech, we offer flexible hiring models. You can hire our expert PHP developers for short-term projects, ensuring you get the expertise you need without a long-term commitment.",
          "A2: Absolutely. We prioritize client confidentiality. Techanic Infotech signs NDAs to ensure that your project details and intellectual property remain secure and confidential at all times.",
          "A3: Our PHP developers have a minimum of 5 years of experience. They possess extensive knowledge in PHP development, capable of handling complex projects and delivering innovative solutions.",
          "A4: We employ best practices including peer reviews, rigorous testing, and quality assurance protocols to ensure the highest quality of our PHP development services.",
          "A5: Techanic Infotech has a diverse portfolio, having provided PHP development services to industries ranging from e-commerce and healthcare to education and finance.",
          "A6: We believe in transparent and consistent communication. Our project managers use the latest tools to keep you updated and are always available to address your concerns and feedback.",
          "A7: We offer maintenance and support services post-development to ensure your PHP solutions remain up-to-date, secure, and efficient in the long run.",
          "A8: Yes, every project at Techanic Infotech is assigned a dedicated project manager to ensure a single point of contact for streamlined communication and project success.",
        ]}
      />
      {/* <OurBlogs /> */}
      <ClientTestimonials
        heading="What Our Clients Say ?"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
        bgColor="F1F5F9"
      />
    </>
  );
}
