import Ewallet from "@/lib/secondpage/Ewallet/ewalletApp";

import OurClients from "@/components/clients/page";

 

import Experts from "@/lib/secondpage/dev";
import Portfolio from "@/components/getStarted/portfolio/portfolio";
import HiringDevs from "@/lib/secondpage/hireDev";
import TechSuccess from "@/lib/colab/techSuccess";
import TechStack from "@/lib/secondpage/development/techstack";
import Appdev from "@/lib/secondpage/nativeapp/Appdev";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import OurBlogs from "@/lib/clientsReviews/blogs";
import ClientTestimonials from "@/lib/clientsReviews/clients";
import Startwithussection2 from "@/components/getStarted/startwithussection2";
import LanguagesCards from "@/lib/secondpage/mobileApp/languageCards";
import Weblanguages from "@/components/weblanguages";

import BannerImage from "@/components/BannerImage";
import NativeApp1 from "@/lib/secondpage/nativeapp/nativeapp1";
import CTAButton from "@/components/getStarted/CTAButton";
import ServicePagesCards from "@/lib/secondpage/mobileApp/ServicePagesCards";
import CTAButtonDevelopment from "@/components/getStarted/CTABUttonDevelopment";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
// Sample Usage
const firstColumnData = [
  {
    heading: "Proven Expertise",
    paragraph:
      "With years of experience under our belt, Techanic InfoTech is home to some of the most knowledgeable ReactJS experts in the industry. Our team has a proven track record of delivering complex projects with finesse and precision.",
  },
  {
    heading: "Comprehensive Consultation",
    paragraph:
      "We believe in empowering our clients with knowledge. Our ReactJS consultation services are designed to give you a clear roadmap, aligning with your business goals and ensuring that you make informed decisions throughout the development process.",
  },
  {
    heading: "Agile and Adaptive",
    paragraph:
      "Our development methodology is rooted in agility and adaptability, allowing us to respond swiftly to changes without compromising on quality. This approach ensures that your project remains on track, regardless of the dynamic nature of the tech landscape.",
  },
];

const secondColumnData = [
  {
    heading: "Cutting-edge Solutions",
    paragraph:
      "At Techanic InfoTech, we are constantly evolving with technology. Our commitment to using the latest tools and practices in ReactJS development means your product will be at the forefront of innovation.",
  },
  {
    heading: "Customer-Centric Approach",
    paragraph:
      "Your vision is our mission. Our customer-centric approach ensures that we are not just service providers, but your technology partner. We listen, adapt, and deliver solutions that cater to your specific user base and market requirements.",
  },
  {
    heading: "End-to-End Services",
    paragraph:
      "From ideation to launch and beyond, we offer end-to-end ReactJS development services. Whether you need a single application or a full suite of software solutions, we have the bandwidth and expertise to cover all your development needs.",
  },
];
export const metadata = {
  contentLanguage: "en-us",
  title: "ReactJS Development Company | ReactJS Development Service",
  description:
    "Techanic Infotech is the best ReactJS development company offering ReactJS development services to build real-time, secure and scalable reactjs web apps.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/reactjs-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "ReactJS Development Company | ReactJS Development Service",
    description:
      "Techanic Infotech is the best ReactJS development company offering ReactJS development services to build real-time, secure and scalable reactjs web apps.",
    url: "https://www.techanicinfotech.com/services/reactjs-development-company",

    alt: "Techanic Infotech",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/reactjs-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "ReactJS Development Company | ReactJS Development Service",
    description:
      "Techanic Infotech is the best ReactJS development company offering ReactJS development services to build real-time, secure and scalable reactjs web apps.",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/reactjs-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

export default function ReactJS() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "http://schema.org",
              "@type": "ProfessionalService",
              "priceRange": "$25-$50",
              "name": "ReactJS Development Company | ReactJS Development Service",
              "url": "https://www.techanicinfotech.com/services/reactjs-development-company",
              "image": "https://www.techanicinfotech.com/OGI/services/reactjs-development-og.webp",
              "description": "Techanic Infotech is the best ReactJS development company offering ReactJS development services to build real-time, secure and scalable reactjs web apps.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur, Rajasthan, India",
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
                  "addressCountry": {
                    "@type": "Country",
                    "name": "US"
                  },
                  "telephone": "+1 8053364021"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road, Dubai",
                 "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road, Dubai",

                  "addressRegion": "DUBAI",
                  "postalCode": "417213",
                  "addressCountry": {
                    "@type": "Country",
                    "name": "UAE"
                  },
                  "telephone": "+971 524981077"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Via Giuseppe mazzini nu. 6, flat nu 107, MILANO 20123 ITALY",
                   "addressLocality": "Via Giuseppe mazzini nu. 6, flat nu 107 MILANO",
                  "addressRegion": "MILANO",
                  "postalCode": "20123",
                  "addressCountry": {
                    "@type": "Country",
                    "name": "Italy"
                  },
                  "telephone": "+39 3517578120"
                }
              ]
            }
          `,
        }}
      />
      {/* <script async type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Techanic Infotech",
              "image": "https://www.techanicinfotech.com/OGI/services/reactjs-development-og.webp",
              "@id": "https://www.techanicinfotech.com",
              "url": "https://www.techanicinfotech.com/services/reactjs-development-company",
              "priceRange": "$25-$50",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur, Rajasthan, India",
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
                  "addressCountry": {
                    "@type": "Country",
                    "name": "US"
                  },
                  "telephone": "+1 8053364021"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road, Dubai",
                 "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road, Dubai",

                  "addressRegion": "DUBAI",
                  "postalCode": "417213",
                  "addressCountry": {
                    "@type": "Country",
                    "name": "UAE"
                  },
                  "telephone": "+971 524981077"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Via Giuseppe mazzini nu. 6, flat nu 107, MILANO 20123 ITALY",
                   "addressLocality": "Via Giuseppe mazzini nu. 6, flat nu 107 MILANO",
                  "addressRegion": "MILANO",
                  "postalCode": "20123",
                  "addressCountry": {
                    "@type": "Country",
                    "name": "Italy"
                  },
                  "telephone": "+39 3517578120"
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
                "https://www.techanicinfotech.com/services/reactjs-development-company"
              ]
            }
          `
        }} /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Techanic Infotech",
              "alternateName": "Techanic Infotech",
              "url": "https://www.techanicinfotech.com/services/reactjs-development-company",
              "logo": "https://www.techanicinfotech.com/OGI/services/reactjs-development-og.webp",
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
                "https://www.techanicinfotech.com/services/reactjs-development-company"
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
              "@type": "FAQPage",
              "@id":"https://techanicinfotech.com/services/reactjs-development-company",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can I hire a ReactJS developer for a short-term project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Techanic InfoTech offers versatile hiring models tailored to your needs. You can hire our seasoned ReactJS developers for short-term projects, granting you access to specialized skills without the obligation of a lengthy contract."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Techanic Infotech enter into Non-Disclosure Agreements (NDAs) for ReactJS projects?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Client confidentiality is paramount at Techanic InfoTech. We are committed to your privacy and security, readily signing NDAs to protect all details and intellectual property related to your ReactJS project."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What level of experience do Techanic InfoTech's ReactJS developers have?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our ReactJS developers boast a rich experience, with at least 5 years in the field. They are well-versed in ReactJS development, adept at managing complex requirements, and delivering state-of-the-art solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Techanic InfoTech ensure top-quality ReactJS development services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Quality is at the core of Techanic InfoTech’s services. We implement stringent quality control measures, including peer code reviews, comprehensive testing, and adherence to quality assurance standards, to guarantee the highest quality in our ReactJS development services."
                  }
                },
                {
                  "@type": "Question",
                  "name": "In which industries have Techanic InfoTech provided ReactJS development services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Techanic InfoTech has an expansive industry footprint, delivering bespoke ReactJS development services to sectors such as e-commerce, healthcare, education, and finance, showcasing our versatility and adaptability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Techanic InfoTech handle project communication for ReactJS development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Open and ongoing communication is our ethos. Techanic InfoTech employs modern communication tools to keep you in the loop at every stage and our project managers are dedicated to addressing your queries and incorporating your input throughout the development process."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of post-development support does Techanic InfoTech provide for ReactJS applications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Post-launch, we offer comprehensive maintenance and support services to ensure your ReactJS applications remain contemporary, secure, and perform optimally."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will there be a dedicated project manager for my ReactJS development project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Every ReactJS project at Techanic InfoTech is entrusted to a dedicated project manager. This ensures you have a consistent point of contact for efficient communication and project oversight, leading to a smooth and successful project delivery."
                  }
                }
              ]
            }
          `,
        }}
      />
      <BannerImage
        headingPart1="ReactJS Development Company "
        paragraph="Unleash the power of ReactJS with Techanic InfoTech — where innovative design meets unparalleled functionality 
        As a market-leading ReactJS development company, we are here to help you with your next project, react out to us. "
        bgImage="/assets/bannerimages/reactjs-development-banner-image.webp"
        mobileBackground="/assets/bannerimages/reactjs-development-banner-mobile-image.webp"
        textColor1="white"
        btnContent="View More"
        btnbg="#ffffff"
      />
      <OurClients
        headingpart1="We Work With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <NativeApp1
        headingPart1="Innovation With "
        headingPart2="Expert ReactJS Development"
        paragraph1={`At Techanic InfoTech, we pride ourselves as a top ReactJS development company, equipped with a team of expert ReactJS developers dedicated to crafting high-performing web applications. Our commitment is to deliver cutting-edge solutions that drive success for your business. Harnessing the full potential of the ReactJS framework, we ensure that our React js development services not only meet but exceed your expectations.`}
        paragraph2="Understanding the importance of user interface and experience, our ReactJS web development company focuses on creating intuitive, scalable, and dynamic applications tailored to your unique needs. Whether you're looking to outsource React development or require custom ReactJS development services, our development process is designed to align with your strategic objectives, ensuring a seamless and efficient path to market for your web and app development projects."
        image="/assets/reactjs-development-section-image.webp"
        width="358"
        height="361"
        showStartWithUS={true}
      />
      <CTAButton
        btntext="Let’s Get Started"
        heading="Elevate With Expertise - Hire A ReactJS Developer Now"
        paragraph="Click to bring cutting-edge ReactJS development to your doorstep."
        backgroundImage="/assets/reactjs-cta-vector-image.svg"
        bgColor="#ffffff"
      />
      <ServicePagesCards
        headingPart1="Our Premier "
        headingPart2="ReactJS Development Services"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        paragraph={`At Techanic InfoTech, we specialize in a comprehensive suite of ReactJS development services designed to empower your business's digital presence. From pioneering front-end development to robust enterprise solutions, our offerings are meticulously structured to address every aspect of your technical and business needs.  `}
        techcard={[
          {
            image: "/assets/icons/custom-reactjs-development-icon.png",
            title: "Custom ReactJS Development Services",
            description:
              "Tailored to perfection, our custom ReactJS development services are designed to build solutions that fit your business like a glove. Our skilled ReactJS web developers harness the adaptability of React to create user interfaces that are not only visually appealing but also functionally rich.",
          },
          {
            image: "/assets/icons/enterprise-reactjs-development-icon.png",
            title: "Enterprise ReactJS Development",
            description:
              "Transform your large-scale business systems with our enterprise ReactJS development. We deliver secure, scalable, and high-performing applications that cater to the complex needs of enterprise operations, ensuring seamless integration and a future-proof digital ecosystem for your business.",
          },
          {
            image: "/assets/icons/reactjs-ui-ux-icon.png",
            title: "ReactJS UI/UX Design",
            description:
              "Elevate the user experience with our ReactJS UI/UX design services. Our team blends the interactive and intuitive capabilities of React with striking design aesthetics to craft engaging and user-friendly interfaces that keep your users coming back.",
          },
          {
            image: "/assets/icons/progressive-web-apps-icon.png",
            title: "Progressive Web Apps with React",
            description:
              "Leverage the power of progressive web apps with React to bridge the gap between web and mobile users. Our ReactJS web app development focuses on creating fast, reliable, and engaging PWAs that deliver a seamless, app-like user experience on any browser and device.",
          },
          {
            image: "/assets/icons/reactjs-web-app-development-icon.png",
            title: "ReactJS Web and App Development",
            description:
              "Our ReactJS web and app development services are the cornerstones of our offerings. We build responsive, fast, and seamless web applications that enhance your digital footprint and engage your audience effectively across all platforms.",
          },
          {
            image: "/assets/icons/frontend-development-with-react-icon.png",
            title: "Front-end Development with React",
            description:
              "As a leading ReactJS web development company, we understand the importance of front-end development. Our developers are proficient in the ReactJS framework, creating front-ends that are not just beautiful but are also robust, maintainable, and scalable.",
          },
        ]}
      />

      <CTAButtonDevelopment
     
        heading="Start Your ReactJS Project Today"
        paragraph="Connect with our experts and take the first step towards innovative web solutions."
        text="Talk To Us"
        useBackgroundImage={true}
    backimage='/assets/reactjs-cta-vector-image-2.svg'
     buttonColor='#ffffff'
     
     image='/assets/react-cta-image-1.webp'
     
      />
      <ServicePagesCards
        headingPart1="Advantages Of ReactJS "
        headingPart2="Development For Your Business"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        cardType={false}
        paragraph={`In the fast-paced digital world, ReactJS emerges as a game-changer for businesses aiming to establish a strong online presence. At Techanic InfoTech, we utilize this innovative JavaScript library to deliver web applications that are not only agile and responsive but also align with the strategic goals of your business. The benefits of ReactJS are manifold, offering a competitive edge in the digital arena. Here’s how your business can gain from our ReactJS development expertise:`}
        techcard={[
          {
            image: "/assets/icons/enhanced-operational-efficiency-icon.png",
            title: "Enhanced Performance with Virtual DOM",
            description:
              "ReactJS 's virtual DOM ensures optimum performance, making it easier for businesses to handle vast datasets without compromising on speed. This translates into smoother and faster user experiences, keeping you a step ahead in performance metrics.",
          },
          {
            image: "/assets/icons/customizability-flexibility-icon.png",
            title: "Reusable Components",
            description:
              "React’s component-based architecture allows for reusable code, which can significantly accelerate the development process. This leads to a consistent look and feel across your app, reduced development costs, and easier maintenance.",
          },
          {
            image: "/assets/icons/strong-community-support-icon.png",
            title: "Strong Community Support",
            description:
              "ReactJS is maintained by Facebook and a community of dedicated developers. This means businesses benefit from a vast pool of shared knowledge and resources, ensuring solutions are robust and up-to-date with the latest technological advancements.",
          },
          {
            image: "/assets/icons/seo-friendly-structure-icon.png",
            title: "SEO-Friendly",
            description:
              "ReactJS helps to combat the challenge of SEO-friendliness in JavaScript frameworks. It enables developers to create interfaces that can be easily navigated by search engine crawlers, improving your site's visibility and ranking.",
          },
          {
            image: "/assets/icons/scalable-solution-icon.png",
            title: "Flexible and Scalable",
            description:
              "The flexibility of ReactJS makes it an excellent choice for businesses looking to scale. Its modular structure means your application can grow with your business, and adapt to changing market demands without hefty rewrites or reconfigurations.",
          },
          {
            image: "/assets/icons/comprehensive-support-icon.png",
            title: "Rich User Interfaces",
            description:
              "The quality of the user interface often dictates the success or failure of an app. ReactJS provides the tools necessary to create high-quality, rich user interfaces that are appealing and intuitive, which can significantly improve user engagement and satisfaction.",
          },
        ]}
        position="center"
        cardBG="ffffff"
        bgColor="F1F5F9"
        color="1434A4"
        showExtraCards={false}
        radius="8"
        height="470px"
      />

      <HiringDevelopers
        headingPart1="Hire ReactJS "
        headingPart2='Developers Within 24 Hours'
        paragraph1="In the dynamic world of technology, time is of the essence. At Techanic InfoTech, we understand the urgency that comes with innovation and development. That’s why we offer a streamlined process to hire ReactJS developers within 24 hours, ensuring that your project kick-starts without delay. Our talent acquisition approach is designed for speed, efficiency, and alignment with your project requirements, enabling you to onboard expert ReactJS developers who are ready to dive into your project with minimal onboarding time."
        paragraph2="Hire ReactJS developers who are not just quick to onboard, but also bring with them the prowess of ReactJS frontend development, ready to tackle the unique challenges of your project. Whether you're looking for a single developer or a team to scale up your project, we have the flexibility and resources to meet your needs swiftly. With Techanic InfoTech, you gain access to top-tier talent that’s primed to help you achieve your development goals with precision and speed. "
           image="/assets/hire-developers-service-page-image.webp"
        btntxt="white"
      />
      <TechSuccess
        headingPart1="Experience Seamless "
        headingPart2="ReactJS Development Tailored To Your Business Needs."
        paragraph="Dive into a partnership with Techanic InfoTech and unlock the full potential of professional-grade ReactJS solutions. With us, innovation meets efficiency as we steer your project from concept to completion with skill, speed, and precision. Join hands with a top ReactJS development company and elevate your business today."
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
        head="Tech Stack For ReactJS Development"
        para="To power our ReactJS development, we use the best frontend technologies, JavaScript library, and other technologies to deliver robust solutions."
        bgColor="#EFF3FF"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          {
            image: "/assets/icons/frameworks-icon.png",
            label: "Frameworks",
         
          },
          {
            image: "/assets/icons/library-icon.png",
            label: "Libraries",
         
          },
          {
            image: "/assets/icons/ui-ux-label-icon.svg",
            label: "UI Toolkits",
          
          },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Database",
       
          },
          {
            image: "/assets/icons/devops-icon.svg",
            label: "Hosting",
        
          },
        ]}
        languages={[
          {
            image: "/assets/icons/next-js-icon.png",
            label: "Next.js",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/express-js-icon.png",
            label: "Express.js",
            section: "Frameworks",
          },
          { image: "/assets/icons/drupal-icon.png", label: "Drupal", section: "Frameworks" },
          {
            image: "/assets/icons/wordpress-icon.png",
            label: "WordPress",
            section: "Frameworks",
          },
          { image: "/assets/icons/gatsby-icon.png", label: "Gatsby", section: "Frameworks" },
          { image: "/assets/icons/soap-icon.png", label: "SOAP", section: "Frameworks" },
          {
            image: "/assets/icons/meteor-icon.png",
            label: "Meteor.js",
            section: "Frameworks",
          },

          // Libraries
          { image: "/assets/icons/canva-icon.png", label: "Canvas", section: "Libraries" },
          {
            image: "/assets/icons/velocity-js-icon.png",
            label: "Velocity.JS",
            section: "Libraries",
          },
          {
            image: "/assets/icons/redux-icon.png",
            label: "Redux",
            section: "Libraries",
          },
          {
            image: "/assets/icons/socket.io-icon.png",
            label: "Socket.IO",
            section: "Libraries",
          },
          {
            image: "/assets/icons/kendo-react-icon.png",
            label: "KendoReact",
            section: "Libraries",
          },

          // UI Toolkits
          {
            image: "/assets/icons/react-icon.png",
            label: "ReactStrap",
            section: "UI Toolkits",
          },
          {
            image: "/assets/icons/material-kit-icon.png",
            label: "Material kit",
            section: "UI Toolkits",
          },
          {
            image: "/assets/icons/blueprint-icon.png",
            label: "Blueprint",
            section: "UI Toolkits",
          },
          {
            image: "/assets/icons/rebass-icon.png",
            label: "Rebass",
            section: "UI Toolkits",
          },
          {
            image: "/assets/icons/bootstrap-icon.png",
            label: "React-bootstrap",
            section: "UI Toolkits",
          },

          // Database
          {
            image: "/assets/icons/dynamodb-icon.png",
            label: "DynamoDB",
            section: "Database",
          },
          {
            image: "/assets/icons/rethink-db-icon.png",
            label: "RethinkDB",
            section: "Database",
          },
          { image: "/assets/icons/sqlite-icon.png", label: "SQLite", section: "Database" },
          {
            image: "/assets/icons/coach-db-icon.png",
            label: "CouchDB",
            section: "Database",
          },
          { image: "/assets/icons/mongodb-icon.png", label: "MongoDB", section: "Database" },
          { image: "/assets/icons/mysql-icon.png", label: "MYSQL", section: "Database" },

          // Hosting
          { image: "/assets/icons/aws-icon.png", label: "AWS", section: "Hosting" },
          { image: "/assets/icons/azure-icon.png", label: "Azure", section: "Hosting" },
          {
            image: "/assets/icons/firebase-icon.png",
            label: "Firebase",
            section: "Hosting",
          },
          { image: "/assets/icons/kubernets-icon.png", label: "Kubernetes", section: "Hosting" },
          { image: "/assets/icons/dapr-icon.png", label: "Dapr", section: "Hosting" },
          { image: "/assets/icons/heroku-icon.png", label: "Heroku", section: "Hosting" },
        ]}
      />

      <Appdev
        mainHeading="Why Choose Techanic InfoTech For ReactJS Development?"
        mainParagraph="Selecting the right partner for ReactJS development is critical to your project’s success. At Techanic InfoTech, we stand apart as a leader in the realm of ReactJS solutions, providing unmatched expertise and a commitment to excellence. Our unique blend of innovation, technology, and customer service makes us the ideal choice for your development needs."
        mainParagraph1="Here’s why you should consider us:"
        firstColumnData={firstColumnData}
        secondColumnData={secondColumnData}
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are some of the common FAQs about ReactJS development services. "
        questions={[
          "Q1:  Can I hire a ReactJS developer for a short-term project?",
          "Q2: Does Techanic Infotech enter into Non-Disclosure Agreements (NDAs) for ReactJS projects?",
          "Q3: What level of experience do Techanic InfoTech's ReactJS developers have?",
          "Q4: How does Techanic InfoTech ensure top-quality ReactJS development services?",
          "Q5: In which industries have Techanic InfoTech provided ReactJS development services?",
          "Q6: How does Techanic InfoTech handle project communication for ReactJS development?",
          "Q7: What kind of post-development support does Techanic InfoTech provide for ReactJS applications?",
          "Q8: Will there be a dedicated project manager for my ReactJS development project?",
        ]}
        answers={[
          "A1: Yes, Techanic InfoTech offers versatile hiring models tailored to your needs. You can engage our seasoned ReactJS developers for short-term projects, granting you access to specialized skills without the obligation of a lengthy contract.",
          "A2: Client confidentiality is paramount at Techanic InfoTech. We are committed to your privacy and security, readily signing NDAs to protect all details and intellectual property related to your ReactJS project.",
          "A3: Our ReactJS developers boast a rich experience, with at least 5 years in the field. They are well-versed in ReactJS development, adept at managing complex requirements, and delivering state-of-the-art solutions.",
          "A4: Quality is at the core of Techanic InfoTech’s services. We implement stringent quality control measures, including peer code reviews, comprehensive testing, and adherence to quality assurance standards, to guarantee the highest quality in our ReactJS development services.",
          "A5: Techanic InfoTech has an expansive industry footprint, delivering bespoke ReactJS development services to sectors such as e-commerce, healthcare, education, and finance, showcasing our versatility and adaptability.",
          "A6: Open and ongoing communication is our ethos. Techanic InfoTech employs modern communication tools to keep you in the loop at every stage and our project managers are dedicated to addressing your queries and incorporating your input throughout the development process.",
          "A7: Post-launch, we offer comprehensive maintenance and support services to ensure your ReactJS applications remain contemporary, secure, and perform optimally.",
          "A8: Every ReactJS project at Techanic InfoTech is entrusted to a dedicated project manager. This ensures you have a consistent point of contact for efficient communication and project oversight, leading to a smooth and successful project delivery.",
        ]}
      />
      {/* <OurBlogs /> */}
      <ClientTestimonials
        heading="What Our Clients Say ?"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
        bgColor="F1F5F9"
      />
      {/* <ContactInfo/> */}
    </>
  );
}
