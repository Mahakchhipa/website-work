import Image from "next/image";

import OurClients from "@/components/clients/page";
import BusinessSuccess from "@/lib/secondpage/WebDevleopmentpage/Success";
import Technologies from "@/lib/secondpage/WebDevleopmentpage/technologies";

import Portfolio from "@/components/getStarted/portfolio/portfolio";
import Ratings from "@/lib/reviews/reviews";

import Experts from "@/lib/secondpage/dev";

import WebPages from "@/lib/webFields/webpages";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import OurBlogs from "@/lib/clientsReviews/blogs";
import WebTeam from "@/lib/secondpage/WebDevleopmentpage/webTeam";
import ViewFirstSection from "@/lib/secondpage/development/frontSection";
import TechSuccess from "@/lib/colab/techSuccess";

import Weblanguages from "@/components/weblanguages";
import VectorBanner from "@/components/VectorBanner";
import Startwithussection2 from "@/components/getStarted/startwithussection2";
import ClientTestimonials from "@/lib/clientsReviews/clients";
import ContactInfo from "@/components/formSection/contactInfo";
import ServicePagesCards from "@/lib/secondpage/mobileApp/ServicePagesCards";
import CTABannerImage from "@/lib/secondpage/CTABannerImage";
import CTAButtonDevelopment from "@/components/getStarted/CTABUttonDevelopment";
import CTAButton from "@/components/getStarted/CTAButton";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
export const metadata = {
  contentLanguage: "en-us",
  title: "Website Development Company | Web Development Services",
  description:
    "Looking for a leading website development company? Our team of expert web developers will provide web development services as per your business needs.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/web-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Website Development Company | Web Development Services",
    description:
      "Looking for a leading website development company? Our team of expert web developers will provide web development services as per your business needs.",
    url: "https://www.techanicinfotech.com/services/web-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/web-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "Website Development Company | Web Development Services",
    description:
      "Looking for a leading website development company? Our team of expert web developers will provide web development services as per your business needs.",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/web-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

export default function WebDevelopmentPage() {
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
          "name": "Website Development Company | Web Development Service",
          "url": "https://www.techanicinfotech.com/services/web-development-company",
          "image": "https://www.techanicinfotech.com/OGI/services/web-development-og.webp",
          "description": "Looking for a leading website development company? Our team of expert web developers will provide web development services as per your business needs.",
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
              "telephone": "+1 8053364021",
              "addressCountry": {
                "@type": "Country",
                "name": "US"
              }
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road. Dubai",
              "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road",
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
              "streetAddress": "Via Giuseppe mazzini nu. 6 ,flat nu 107 MILANO 20123 ITALY",
              "addressLocality": "Via Giuseppe mazzini nu. 6 ,flat nu 107 MILANO",
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
          "image": "https://www.techanicinfotech.com/OGI/services/web-development-og.webp",
          "@id": "https://www.techanicinfotech.com/services/web-development-company",
          "url": "https://www.techanicinfotech.com/services/web-development-company",
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
              "telephone": "+1 8053364021",
              "addressCountry": {
                "@type": "Country",
                "name": "US"
              }
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road. Dubai",
              "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road",
              "addressRegion": "DUBAI",
              "postalCode": "417213",
              "telephone": "+971 524981077",
              "addressCountry": {
                "@type": "Country",
                "name": "AE"
              }
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "Via Giuseppe mazzini nu. 6 ,flat nu 107 MILANO 20123 ITALY",
              "addressLocality": "Via Giuseppe mazzini nu. 6 ,flat nu 107 MILANO",
              "addressRegion": "MILANO",
              "postalCode": "20123",
              "telephone": "+39 3517578120",
              "addressCountry": {
                "@type": "Country",
                "name": "IT"
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
            "https://www.techanicinfotech.com/services/web-development-company"
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
          "url": "https://www.techanicinfotech.com/services/web-development-company",
          "logo": "https://www.techanicinfotech.com/OGI/services/web-development-og.webp",
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
            "https://www.techanicinfotech.com/services/web-development-company"
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
          "@id":"https://www.techanicinfotech.com/services/web-development-company",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What web development services does Techanic InfoTech offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Techanic InfoTech offers comprehensive web development services including front-end development, back-end development, web designing, e-commerce development, CMS development, and web portal development."
              }
            },
            {
              "@type": "Question",
              "name": "Which technologies are used by Techanic InfoTech in web development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We specialize in a variety of technologies including PHP, WordPress, ReactJS, NodeJS, Python, and Ruby on Rails (ROR), ensuring versatile and innovative web solutions for our clients."
              }
            },
            {
              "@type": "Question",
              "name": "What makes Techanic InfoTech stand out in web development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Techanic InfoTech is known for its experienced team, innovative approach, and commitment to transparency and collaboration. We embed innovation in every web service, from development to design, ensuring future-ready and high-performing web solutions."
              }
            },
            {
              "@type": "Question",
              "name": "Does Techanic InfoTech provide support for e-commerce development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer custom e-commerce development services. Our solutions are tailored to the unique needs of your business, ensuring a successful online presence."
              }
            },
            {
              "@type": "Question",
              "name": "How does Techanic InfoTech ensure the quality of its web development projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our team of expert web designers and developers follow a rigorous development process, utilizing the latest technologies and best practices. We focus on creating high-quality, maintainable code, and deliver comprehensive support and maintenance."
              }
            },
            {
              "@type": "Question",
              "name": "Can Techanic InfoTech help with CMS development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We assist companies in managing their web content more efficiently with our CMS development solutions, tailoring our services to your specific needs."
              }
            },
            {
              "@type": "Question",
              "name": "What industries does Techanic InfoTech cater to with its web app development solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Techanic InfoTech provides web app development solutions for a diverse range of industries, ensuring that each solution is customized to meet the unique challenges and opportunities of that industry."
              }
            },
            {
              "@type": "Question",
              "name": "Why should I choose Techanic InfoTech for my next web development project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Choosing Techanic InfoTech means partnering with a team that combines years of experience, technical expertise, and a creative approach to deliver innovative web apps, designs, and projects."
              }
            },
            {
              "@type": "Question",
              "name": "Do You Sign NDA For Web Development Projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, to ensure security of your idea and total privacy we always sign an NDA before starting the project before starting on any project. That’s what makes us best web development company."
              }
            }
          ]
        }
      `,
        }}
      />
      <VectorBanner
        headingPart1="Web Development Company"
        paragraph=" In the world of the internet, we are empowering companies with
           the unlocked power of WWW,enabling explosive growth. Work with the market-leading web development company,
           Techanic InfoTech, and supercharge
           business growth."
        showGif={false}
        image="/assets/bannerimages/web-development.webp"
        vectorImage="/assets/bannerimages/web-development-vector.svg"
        imagewidth="600px"
        isGradient={true}
        btncolor="93.29deg, #0F53FF -48.03%, #4C4C4C 160.39%"
        btnContent="Contact Us"
        btntext="white"
      />

      <OurClients
        headingpart1="Working With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <BusinessSuccess />
      <ServicePagesCards
        headingPart1="Versatile Mobile "
        headingPart2="App Development Services"
        gridStyles="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8"
        paragraph="Discover a spectrum of mobile app development services designed to empower your business. At Techanic InfoTech, we blend innovation with functionality to deliver outstanding mobile applications."
        techcard={[
          {
            image: "/assets/icons/servicesIcons/front-end-icon.png",
            title: "Front-end Development",
            description:
              "Techanic InfoTech is known as one of the best web development solutions empowering it with unmatched front-end development solutions. Keep the organic flows going with our solutions.",
          },
          {
            image: "/assets/icons/servicesIcons/back-end-icon.png",
            title: "Back-end Development",
            description:
              "To back the aesthetically appealing and capturing front-end, we also offer back-end web development services, creating a robust platform that can carry the weight of the business success.",
          },
          {
            image: "/assets/icons/servicesIcons/web-design-icon.png",
            title: "Web Designing",
            description:
              "Designing web solutions that capture leads and help businesses deliver value, via innovation-driven web designing and development services. That’s what makes us stand out and above the rest.",
          },
          {
            image: "/assets/icons/servicesIcons/ecommerce-icon.png",
            title: "E-commerce Development",
            description:
              "Realize the true power of custom website development services and build your own eCommerce platform. Our e-commerce development solutions are known throughout the market for success.",
          },
          {
            image: "/assets/icons/servicesIcons/cms-icon.png",
            title: "CMS Development",
            description:
              "Building a website? Tap into the true potential of online platforms with content management system integration. We help companies manage web content more easily with CMS development solutions.",
          },
          {
            image: "/assets/icons/servicesIcons/web-portal-icon.png",
            title: "Web Portal Development",
            description:
              "One of the most in-demand website designing and development services is web portal development. Bring your creative idea to reality with the help of our web development team of developers.",
          },
        ]}
      />
      <CTAButtonDevelopment
        heading="Build Your Next Web Platform "
        paragraph="Start your journey with tailor-made web applications. Our dedicated website developers bring precision, innovation, and performance to every project."
        useBackgroundImage={true}
        backimage="/assets/web-development-cta-banner.png"
        image="/assets/web-development-cta-image-1.webp"
        textColor="black"
        buttonColor="#ffffff"
        showBorder={true}
        btntextColor="#ffffff"
        hovercolor="#000000"
        hovertext="white"
      />

      <Technologies />
      <TechSuccess
        headingPart1="Why"
        headingPart2="Choose Us?"
        paragraph="Wondering Why to Choose Techanic InfoTech for your next
         web development project? Apart from years’ worth of experience and technical prowess,
          we have the right skill set as well as the creative approach required to deliver the 
          innovation in form of web apps, web design, and web projects."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#ffffff"
      />

      <Ratings
        heading="Web Development Company, Recognized By The Best"
         paragraph="Techanic InfoTech is recognized as one of the best web and app development companies in the industry by top tech critiques and platforms."
        items={[
          {
            src: "/assets/clutch-image.webp",

            alt: "clutchImg",
            para: "Clutch.co has recognized Techanic InfoTech as one of the best in the market. We have earned a 4.7 Star rating.",
          },
          {
            src: "/assets/good-firms-image.webp",

            alt: "firmsImg",
            para: "Techanic InfoTech is among the top names in GoodFirm's list of top mobile app development and web development firms.",
          },
          {
            src: "/assets/designrush-image.webp",

            alt: "designofrushImg",
            para: "With our software development and designing capacities, we have earned 4.8-star rating with a rank among top names.",
          },
          {
            src: "/assets/business-of-apps-image.webp",

            alt: "businessImg",
            para: "A top platform in the world of tech and app development, BusinessofApps gives Techanic InfoTech a 4.8-star rating.",
          },
          {
            src: "/assets/g2-image.webp",

            alt: "g2Img",
            para: "The well-known tech critique and review platform, G2 awards Techanic InfoTech with near perfect 4.9 star rating.",
          },
        ]}
        textcolor="#00008B"
      />
      <WebTeam
        headingPart1="Our Team of Expert"
        headingPart2=" Web Designers and Web Developers"
        paragraph="At Techanic InfoTech you get full-stack development solutions for your
          web projects. You can handpick your own team and hire web app
          developers that best fit your project needs. Choose From our pool of
          talented and expert web app developers."
        teamList={[
          {
            text: "1. Business Analysts",
            paragraph:
              "Our business analysts are adept at bridging the gap between your business needs and technological solutions. They excel in market analysis, ensuring your web solution is not only technically sound but also commercially viable and ahead of the curve.",
          },
          {
            text: "2. Project Managers",
            paragraph:
              "As a leading web development agency, we have a team of project managers, who are the orchestrators of your web development project. With a keen eye for detail and outstanding organizational skills, they ensure timely delivery while maintaining the highest quality standards.",
          },
          {
            text: "3. Solution Architect",
            paragraph:
              "The solution architects are the masterminds behind the technical design of your web development solutions. They bring a blend of expert technical knowledge and creative problem-solving to ensure robust, scalable, and innovative web solutions.",
          },
          {
            text: "4. UI/UX Designers",
            paragraph:
              "The UX/UI designers at Techanic InfoTech - leading web development company - are artists and psychologists rolled into one. They craft intuitive and visually appealing designs, prioritizing user experience to create engaging and user-friendly web applications.",
          },
          {
            text: "5. Full-Stack Developers",
            paragraph:
              "Our full-stack developers are proficient in both front-end and back-end development. They are adept at handling the entire spectrum of web development, ensuring a seamless, fully integrated, and fully functioning end product.",
          },
          {
            text: "6. Frontend Developers",
            paragraph:
              "The front-end team at our top website development company specializes in bringing designs to life. With a focus on responsiveness and interactivity, they ensure that your web app looks great and works flawlessly on every device.",
          },
          {
            text: "7. Backend Developers",
            paragraph:
              "Our backend developers are skilled in creating the core computational logic of your application. They focus on server-side development, database management, and application integration, ensuring a solid and reliable foundation for your web platforms.",
          },
          {
            text: "8. QA Specialists",
            paragraph:
              "Our QA specialists are the final gatekeepers ensuring the highest quality of your product. With meticulous testing and a keen eye for detail, they make sure that your web application is free from bugs and performs optimally across all platforms and conditions.",
          },
        ]}
      />
      <CTAButton
        heading="Hire Web Developers"
        paragraph="Hire web app developers at Techanic InfoTech in 24 hours, reach out to us now."
        btntext="Hire Developers"
        backgroundImage="/assets/web-development-cta-image-2.webp"
        textColor="white"
        bgColor="#ffffff"
        text="black"
      />
      {/* <Experts
        heading="Hire Web Developers"
        paragraph="Hire web app developers at Techanic InfoTech in 24 hours, reach out to us now."
        text="Hire Developers "
        media="image"
        imageSrc="backgroundImages/services-experts-back.jpg"
        divBtn="#0000ff "
        direction="right"
        color1="#0000ff"
        color2="#001289"
        btntext="white"
        showImage={true}
        justify="start"
        TextColor="white"
      /> */}
      <Languages
        head="Web Development Tech Stack"
        para="From Programming Languages to web development frameworks, we only use the best and industrially approved tech stack for our custom web app development solutions."
        bgColor="#ffffff"
        sections={[
          {
            image: "/assets/icons/front-end-icon.svg",
            label: "Frontend",
            flipIcon: "/assets/icons/front-end-icon.svg",
          },
          {
            image: "/assets/icons/backend-icon.svg",
            label: "Backend",
            flipIcon: "/assets/icons/backend-icon.svg",
          },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Database",
            flipIcon: "/assets/icons/database-icon.svg",
          },
          {
            image: "/assets/icons/web-servers.png",
            label: "Web Servers",
            flipIcon: "/assets/icons/web-servers.png",
          },

          {
            image: "/assets/icons/ui-ux-label-icon.svg",
            label: "Design",
            flipIcon: "/assets/icons/ui-kit-icon.png",
          },
        ]}
        languages={[
          { image: "/assets/icons/html-icon.png", label: "HTML", section: "Frontend" },
          { image: "/assets/icons/css-icon.png", label: "CSS", section: "Frontend" },
          {
            image: "/assets/icons/javascript-icon.png",
            label: "JavaScript",
            section: "Frontend",
          },
          {
            image: "/assets/icons/angular-icon.png",
            label: "Angular",
            section: "Frontend",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "React",
            section: "Frontend",
          },
          { image: "/assets/icons/vue-js-icon.png", label: "Vue.js", section: "Frontend" },
          {
            image: "/assets/icons/python-icon.png",
            label: "Python",
            section: "Backend",
          },
          { image: "/assets/icons/ruby-on-rails-icon.png", label: "Ruby", section: "Backend" },
          { image: "/assets/icons/php-development-icon.png", label: "PHP", section: "Backend" },
          { image: "/assets/icons/java-icon.png", label: "Java", section: "Backend" },
          { image: "/assets/icons/dot-net-icon.png", label: ".NET", section: "Backend" },
          { image: "/assets/icons/mysql-icon.png", label: "MySQL", section: "Database" },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "PostgreSQL",
            section: "Database",
          },
          { image: "/assets/icons/mongodb-icon.png", label: "MongoDB", section: "Database" },
          { image: "/assets/icons/oracle-icon.png", label: "Oracle", section: "Database" },
          {
            image: "/assets/icons/microsoft-sql-server.png",
            label: "Microsoft SQL Server",
            section: "Database",
          },
          {
            image: "/assets/icons/apache-jmeter-icon.png",
            label: "Apache",
            section: "Web Servers",
          },
          { image: "/assets/icons/nginx-icon.png", label: "Nginx", section: "Web Servers" },
          {
            image: "/assets/icons/litespeed-icon.png",
            label: "LiteSpeed",
            section: "Web Servers",
          },
          { image: "/assets/icons/aws-icon.png", label: "AWS", section: "Web Servers" },
          {
            image: "/assets/icons/adobe-xd-icon.png",
            label: "Adobe XD",
            section: "Design",
          },
          {
            image: "/assets/icons/illustrator-icon.png",
            label: "Adobe Illustrator",
            section: "Design",
          },
          {
            image: "/assets/icons/photoshop-icon.png",
            label: "Photoshop",
            section: "Design",
          },
          { image: "/assets/icons/figma-icon.png", label: "Figma", section: "Design" },
        ]}
      />

      <AppDevelop
        headingPart1="Our Streamlined App"
        headingPart2=" Development Process"
        paragraph="Techanic InfoTech achieves quality and consistency in 
       web application development with a well-planned web app development process."
        image1="/assets/icons/market-research-icon.png"
        h1=" Requirement Analysis"
        p1="This initial step involves gathering and analyzing the client's requirements to fully understand their needs."
        image2="/assets/icons/idea-validation-icon.png"
        h2="Planning and Strategy"
        p2="Here, we develop a project plan outlining the web app's structure, technologies to be used, and timeline."
        image3="/assets/icons/design-prototype-icon.png"
        h3="Design and Prototyping"
        p3=" During this phase, we focus on designing the user interface, creating wireframes, and developing prototypes."
        image4="/assets/icons/development-testing-icon.png"
        h4="Development"
        p4="Our developers code the application, building its front-end and back-end components while ensuring seamless integration."
        image5="/assets/icons/launch-deployment-icon.png"
        h5="Testing and Quality Assurance"
        p5="Rigorous testing is conducted to identify and fix bugs, verify functionality, and ensure the application meets standards."
        image6="/assets/icons/post-launch-support-icon.png"
        h6="Deployment and Maintenance"
        p6="After deploying the web app, we provide ongoing support and maintenance, including updates and optimizations."
        cards={[
          {
            image: "/assets/icons/market-research-icon.png",
            title: "Requirement Analysis",
            description:
              "This initial step involves gathering and analyzing the client's requirements to fully understand their needs.",
          },
          {
            image: "/assets/icons/idea-validation-icon.png",
            title: "Planning and Strategy",
            description:
              "Here, we develop a project plan outlining the web app's structure, technologies to be used, and timeline.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "Design and Prototyping",
            description:
              "During this phase, we focus on designing the user interface, creating wireframes, and developing prototypes.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "Development",
            description:
              "Our developers code the application, building its front-end and back-end components while ensuring seamless integration.",
          },
          {
            image: "/assets/icons/launch-deployment-icon.png",
            title: "Testing and Quality Assurance",
            description:
              "Rigorous testing is conducted to identify and fix bugs, verify functionality, and ensure the application meets standards.",
          },
          {
            image: "/assets/icons/post-launch-support-icon.png",
            title: "Deployment and Maintenance",
            description:
              "After deploying the web app, we provide ongoing support and maintenance, including updates and optimizations.",
          },
        ]}
        textcolor="black"
        align="center"
        color="black"
        borderColor="ffffff"
      />
      <WebPages
        heading="Web App Development Solutions For Diverse Industries "
        paragraph="At Techanic InfoTech, as a leading web app development company - we offer innovative web development services for business needs across industries."
        p1="Our eCommerce solutions are well known. We develop visually appealing, functionally robust e-commerce websites."
        p2="Our expertise in developing web solutions for the hospitality industry focuses on online booking systems, virtual tours, and more."
        p3="We assist companies in captivating their audience with dynamic, content-rich, and user-friendly websites and portals."
        p4="We provide sophisticated web solutions for real estate, featuring property showcases, virtual tours, and efficient buying/selling processes."
        p5="Our healthcare solutions focus on patient portals, appointment systems, and telemedicine platforms."
        p6="We create advanced school management and learning systems for the EdTech sector, enabling remote education."
        p7="Our automotive industry expertise help us create platforms for vehicle showcases, online bookings, and customer engagement."
        p8="We specialize in developing bespoke web solutions for retail businesses, enhancing online shopping experiences."
        p9="Our team develops intuitive travel and hospitality websites, offering easy booking solutions, and travel guides."
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are common FAQs about web app development services. "
        questions={[
          "Q1: What web development services does Techanic InfoTech offer?",
          "Q2: Which technologies are used by Techanic InfoTech in web development?",
          "Q3: What makes Techanic InfoTech stand out in web development?",
          "Q4: Does Techanic InfoTech provide support for e-commerce development?",
          "Q5: How does Techanic InfoTech ensure the quality of its web development projects?",
          "Q6: Can Techanic InfoTech help with CMS development?",
          "Q7: What industries does Techanic InfoTech cater to with its web app development solutions?",
          "Q8: Why should I choose Techanic InfoTech for my next web development project?",
          "Q9: Do You Sign NDA For Web Development Projects?",
        ]}
        answers={[
          "A1: Techanic InfoTech offers comprehensive web development services including front-end development, back-end development, web designing, e-commerce development, CMS development, and web portal development.",
          "A2: We specialize in a variety of technologies including PHP, WordPress, ReactJS, NodeJS, Python, and Ruby on Rails (ROR), ensuring versatile and innovative web solutions for our clients.",
          "A3: Techanic InfoTech is known for its experienced team, innovative approach, and commitment to transparency and collaboration. We embed innovation in every web service, from development to design, ensuring future-ready and high-performing web solutions.",
          "A4: Yes, we offer custom e-commerce development services. Our solutions are tailored to the unique needs of your business, ensuring a successful online presence.",
          "A5: Our team of expert web designers and developers follow a rigorous development process, utilizing the latest technologies and best practices. We focus on creating high-quality, maintainable code, and deliver comprehensive support and maintenance.",
          "A6: Absolutely! We assist companies in managing their web content more efficiently with our CMS development solutions, tailoring our services to your specific needs.",
          "A7: Techanic InfoTech provides web app development solutions for a diverse range of industries, ensuring that each solution is customized to meet the unique challenges and opportunities of that industry.",
          "A8: Choosing Techanic InfoTech means partnering with a team that combines years of experience, technical expertise, and a creative approach to deliver innovative web apps, designs, and projects.",
          "A9:  Yes, to ensure security of your idea and total privacy we always sign an NDA before starting the project before starting on any project. That’s what make us best web development company.",
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
