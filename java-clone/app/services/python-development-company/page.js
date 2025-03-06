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
import ServiceCtaButton from "@/components/getStarted/ServicesCtaButtons";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
const firstColumnData = [
  {
    heading: "Proven Expertise",
    paragraph:
      "Our Python developers possess deep expertise in Python's vast ecosystem, ensuring they can tackle projects of any complexity. Their proficiency translates into high-quality, efficient solutions tailored to your specific needs.",
  },
  {
    heading: "Customized Solutions",
    paragraph:
      "We understand that every business is unique. That's why we offer custom Python development services, ensuring that the solutions we provide align perfectly with your business objectives and operational requirements.",
  },
  {
    heading: "Agile Development Process",
    paragraph:
      "Our Python development process is agile and flexible, allowing for continuous improvements and iterations. This approach ensures your project remains on track, adaptable to changes, and aligned with your vision.",
  },
];

const secondColumnData = [
  {
    heading: "Seamless Communication",
    paragraph:
      "At Techanic Infotech, we prioritize clear and continuous communication with our clients. This ensures transparency throughout the development process and that your feedback is incorporated every step of the way.",
  },
  {
    heading: "Competitive Pricing",
    paragraph:
      "We offer competitive pricing without compromising on quality or functionality. Our goal is to provide you with cost-effective Python development services that deliver maximum value for your investment.",
  },
  {
    heading: "Post-Deployment Support",
    paragraph:
      "Our relationship with clients doesn't end at deployment. We offer comprehensive Python app support and maintenance to ensure your applications remain up-to-date, secure, and efficient in the long term.",
  },
];
export const metadata = {
  contentLanguage: "en-us",
  title: "Python Development Company | Python Development Services",
  description:
    "Techanic Infotech is a leading Python Development Company. We provide top-rated python development services to build custom web and desktop apps.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/python-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Python Development Company | Python Development Services",
    description:
      "Techanic Infotech is a leading Python Development Company. We provide top-rated python development services to build custom web and desktop apps.",
    url: "https://www.techanicinfotech.com/services/python-development-company",

    alt: "Techanic Infotech",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/python-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Development Company | Python Development Services",
    description:
      "Techanic Infotech is a leading Python Development Company. We provide top-rated python development services to build custom web and desktop apps.",
    handle: "@Techanicinfo",
    image:
      "https://www.techanicinfotech.com/OGI/services/python-development-og.webp",
    url: "https://www.techanicinfotech.com/services/python-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/python-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

export default function PythonDev() {
  return (
    <>
      <script
        id="json-ld-professional-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "http://schema.org",
              "@type": "ProfessionalService",
              "priceRange" : "$25-$50",
              "name": "Python Development Company | Python Development Services",
              "url": "https://www.techanicinfotech.com/services/python-development-company",
              "image": "https://www.techanicinfotech.com/OGI/services/python-development-og.webp",
              "description": "Techanic Infotech is a leading Python Development Company. We provide top-rated python development services to build custom web and desktop apps.",
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
            "image": "https://www.techanicinfotech.com/OGI/services/python-development-og.webp",
            "@id": "https://www.techanicinfotech.com/services/python-development-company",
            "url": "https://www.techanicinfotech.com/services/python-development-company",
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
              "https://www.techanicinfotech.com/services/python-development-company"
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
            "url": "https://www.techanicinfotech.com/services/python-development-company",
            "logo": "https://www.techanicinfotech.com/OGI/services/python-development-og.webp",
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
              "https://www.techanicinfotech.com/services/python-development-company"
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
            "@id":"https://www.techanicinfotech.com/services/python-development-company",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does Python development cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of Python development varies based on several factors, including project complexity, development time, and specific requirements. At Techanic Infotech, we offer transparent pricing and can provide a customized quote after understanding your project needs."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to complete a Python development project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The timeline for a Python development project depends on its scope, features, and complexity. We follow an agile development process to ensure timely delivery, and we'll work with you to establish a realistic timeline that meets your goals."
                }
              },
              {
                "@type": "Question",
                "name": "Do you sign a Non-Disclosure Agreement (NDA)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we take client confidentiality seriously. We're willing to sign a Non-Disclosure Agreement (NDA) before any project discussions to ensure your project ideas and intellectual property are protected."
                }
              },
              {
                "@type": "Question",
                "name": "Can I hire a dedicated Python developer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can! Techanic Infotech provides a range of hiring models, including the option to hire dedicated Python developers who will work exclusively on your project. This ensures dedicated focus and faster turnaround times."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you serve with your Python development services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Techanic Infotech provides Python development services across various industries, including healthcare, finance, education, retail, and more. Our versatile Python developers are adept at crafting solutions that meet industry-specific challenges."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure the quality of the Python projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality is our top priority. We have thorough quality assurance processes in place, including code reviews, testing at multiple stages, and performance benchmarking, to ensure the final product is of the highest standard."
                }
              }
            ]
          }
        `,
        }}
      />
      <BannerImage
        headingPart1="Python Development Company "
        paragraph="Welcome to Techanic Infotech, your go-to Python development company, where innovative Python development services meet excellence. Our expertise spans from crafting dynamic web applications to robust software solutions, ensuring your business leverages the full potential of Python's versatility and power."
        bgImage="/assets/bannerimages/python-development-banner-image.webp"
        mobileBackground="/assets/bannerimages/python-development-banner-image.webp"
        btnContent="Contact Us "
        btnbg="#ffffff"
        textColor1="white"
      />
      <OurClients
        headingpart1="We Work With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <NativeApp1
        headingPart1="Python: "
        headingPart2="The Language Of Innovation"
        paragraph1={`Python stands at the forefront of innovation, renowned for its simplicity, versatility, and dynamic capabilities. As a leading programming language, it empowers developers to craft solutions that are both efficient and scalable, making it an ideal choice for businesses across various sectors. From Python web development to Python app development, its wide array of frameworks and libraries enables the creation of cutting-edge solutions that can drive businesses forward.`}
        paragraph2="At Techanic Infotech, we harness the full potential of Python to deliver exceptional Python development services that cater to your specific business needs. Our expert Python developers are skilled in leveraging Python's robust features to create bespoke solutions, from  web applications to comprehensive Python software development. By choosing our Python development company, you're not just getting services; you're investing in a partnership that values innovation, quality, and your business's growth."
        image="/assets/python-development-section-image.webp"
      />
      <CTAButton
        btntext="Let’s Get Started"
        heading="Get Started with Python Development"
        paragraph="Dive into the world of Python with Techanic Infotech. Our Python development services are designed to bring your ideas to life, ensuring scalability and performance."
        backgroundImage="/assets/python-development-cta-vector-image.svg"
        bgColor="#ffffff"
      />

      <ServicePagesCards
        headingPart1="Comprehensive Python "
        headingPart2="Development Services"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        paragraph={`Dive into the world of possibilities with Techanic Infotech's Python development services. We offer a wide range of solutions tailored to meet your unique business challenges and drive digital transformation.`}
        techcard={[
          {
            image: "/assets/icons/python-web-development-icon.png",
            title: "Python Web Development Services",
            description:
              "Leverage our Python web development expertise to create scalable, secure, and high-performing web applications. Our Python web developers specialize in delivering custom web solutions that align with your business objectives, ensuring a seamless user experience.",
          },
          {
            image: "/assets/icons/python-app-development-icon.png",
            title: "Python App Development Services",
            description:
              "Transform your mobile app vision into reality with our Python app development services. We build intuitive, feature-rich Python mobile apps that provide a seamless experience across various devices, enhancing engagement and customer satisfaction.",
          },
          {
            image: "/assets/icons/python-icon.png",
            title: "Python Software Development Services",
            description:
              "Our Python software development company crafts bespoke software solutions that cater to your business's intricate needs. From workflow automation to data analysis tools, we ensure your software is robust, scalable, and aligned with your strategic goals.",
          },
          {
            image: "/assets/icons/python-django-web-icon.png",
            title: "Python Django Web Development",
            description:
              "Utilize the power of Python's Django framework for your web development projects. Our team excels in Python Django web development, creating secure, scalable, and maintainable web applications that stand the test of time.",
          },
          {
            image: "/assets/icons/python-consulting-services-icon.png",
            title: "Python Consulting Service",
            description:
              "Discover end-to-end Python Consulting Service with Techanic Infotech. From initial concept to deployment, our Python Consulting Service ensures your web project harnesses the latest Python frameworks and technologies for optimal performance.",
          },
          {
            image: "/assets/icons/enterprise-python-development-icon.png",
            title: "Enterprise Python Development Services",
            description:
              "Get tailored Python solutions with our Enterprise Python Development services. Whether you need a unique web application, a sophisticated software tool, or an innovative mobile app, our team delivers custom solutions that perfectly fit your requirements.",
          },
        ]}
      />

      <ServiceCtaButton
        heading="Explore Our Python Solutions"
        paragraph="Discover the breadth of our Python expertise. From Python web development services to Python app development, we offer comprehensive solutions tailored to your needs."
        text="Talk To Us "
        btnbg="#ffffff"
        btntext="black"
        isGradientPage={true}
        gradient="131.18deg, #3976A6 -47.01%, #FCDB4F 56.91%"
        image="/assets/python-development-cta-image.webp"
      />
      <ServicePagesCards
        headingPart1="Why Choose Python "
        headingPart2="For Your Next Project"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        cardType={false}
        paragraph={`Embrace the power of Python to fuel your next project with innovation, efficiency, and scalability. Python's simplicity, coupled with its extensive libraries and frameworks, makes it the ideal choice for diverse development needs.`}
        techcard={[
          {
            image: "/assets/icons/customizability-flexibility-icon.png",
            title: "Versatility and Flexibility",
            description:
              "It’s versatility allows it to adapt to any project requirement, from web development to data science applications. Its flexibility enables developers to use different programming paradigms, ensuring that your project is built with the most effective approach.",
          },
          {
            image: "/assets/icons/rapid-development-cycle-icon.png",
            title: "Rapid Development Cycle",
            description:
              "Thanks to Python's concise syntax and readability, development cycles are significantly shorter. This rapid development capability means your project moves from concept to completion quicker, allowing for faster market entry and iterative updates.",
          },
          {
            image: "/assets/icons/extensive-libraries-icon.png",
            title: "Extensive Libraries and Frameworks",
            description:
              "This language boasts a rich ecosystem of libraries and frameworks, reducing the need to build from scratch and accelerating development. Whether it's web development with Django or Flask, or data analysis with Pandas and NumPy, Python has you covered.",
          },
          {
            image: "/assets/icons/strong-community-support-icon.png",
            title: "Strong Community Support",
            description:
              "Global community of python is one of its greatest strengths, offering vast resources, documentation, and forums for developers. This strong support network ensures continuous learning and easy troubleshooting, enhancing development efficiency.",
          },
          {
            image: "/assets/icons/scalable-solution-icon.png",
            title: "Scalability and Performance",
            description:
              "Python's ability to scale makes it suitable for startups and large enterprises alike. Its performance, especially when integrated with other languages and technologies, ensures that your application can grow seamlessly with your business.",
          },
          {
            image: "/assets/icons/readability-maintainability-icon.png",
            title: "Readability and Maintainability",
            description:
              "Python's syntax is designed to be easy to read and understand, making code maintenance and updates more straightforward. This readability not only accelerates development but also facilitates collaboration among developers, enhancing overall productivity.",
          },
        ]}
      />

      <HiringDevelopers
        headingPart1="Hire Expert "
        headingPart2="Python Developers"
        paragraph1="Elevate your project with our team of skilled Python developers at Techanic Infotech. Our professionals are not just coders; they are problem solvers and innovators trained to deliver high-quality Python development services. With a deep understanding of Python frameworks and tools, they are equipped to tackle complex challenges and transform your ideas into reality."
        paragraph2="By choosing to hire dedicated Python developers from our pool, you gain access to a wealth of knowledge and experience that can significantly enhance your project's success. Our developers are committed to adopting best practices and leveraging the latest Python advancements, ensuring your project is not only current but also future-proof. Join hands with Techanic Infotech for a partnership that prioritizes your vision, quality, and efficiency. "
        image="/assets/hire-developers-service-page-image.webp"
        btntxt="white"
      />
      <TechSuccess
        headingPart1="Defining the Python "
        headingPart2="Success With Expert Developers "
        paragraph="At Techanic Infotech, we pride ourselves on being a leading Python web development company and Python app development company, offering a wide array of Python development services. Our team of seasoned Python developers and consultants are adept in the latest Python frameworks and technologies. Whether you're looking for Python web development, Python app development, or Python software development, we have the expertise to deliver high-quality, scalable, and secure solutions.  "
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3=" Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#EFF3FF"
      />
      <Languages
        head="Cutting-Edge Python Tech Stack"
        para="Our Python development services leverage the most advanced Python frameworks and tools to build efficient and scalable applications. We stay at the forefront of technology to ensure your projects are powered by the best in class."
        bgColor="#EFF3FF"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          {
            image: "/assets/icons/web-servers.png",
            label: "Web Frameworks",
          
          },
          {
            image: "/assets/icons/testing-icon.svg",
            label: "Testing",
           
          },
          {
            image: "/assets/icons/technologies-label-icon.svg",
            label: "Development Tools",
       
          },
          {
            image: "/assets/icons/cms-label-icon.png",
            label: "CMS",
       
          },
          {
            image: "/assets/icons/database-icon.svg",
            label: "DATABASES",
          
          },
        ]}
        languages={[
          // Web Frameworks
          {
            image: "/assets/icons/django-icon.png",
            label: "Django",
            section: "Web Frameworks",
          },
          {
            image: "/assets/icons/flask-icon.png",
            label: "Flask",
            section: "Web Frameworks",
          },
          {
            image: "/assets/icons/pyramid-icon.png",
            label: "Pyramid",
            section: "Web Frameworks",
          },
          {
            image: "/assets/icons/bottle-icon.png",
            label: "Bottle",
            section: "Web Frameworks",
          },

          // Testing
          { image: "/assets/icons/doctest-icon.png", label: "doctest", section: "Testing" },
          { image: "/assets/icons/pytest-icon.png", label: "pytest", section: "Testing" },
          {
            image: "/assets/icons/hypothesis-icon.png",
            label: "Hypothesis",
            section: "Testing",
          },

          // Development Tools
          {
            image: "/assets/icons/pycharm-icon.png",
            label: "PyCharm",
            section: "Development Tools",
          },
          {
            image: "/assets/icons/jupyter-notebook-icon.png",
            label: "Jupyter Notebook",
            section: "Development Tools",
          },
          {
            image: "/assets/icons/docker-icon.png",
            label: "Docker",
            section: "Development Tools",
          },
          {
            image: "/assets/icons/poetry-icon.png",
            label: "Poetry",
            section: "Development Tools",
          },

          // CMS
          { image: "/assets/icons/plone-icon.png", label: "Plone", section: "CMS" },
          { image: "/assets/icons/ikaaro-icon.png", label: "Ikaaro", section: "CMS" },
          {
            image: "/assets/icons/django-cms-icon.png",
            label: "Django CMS",
            section: "CMS",
          },
          { image: "/assets/icons/pinax-icon.png", label: "Pinax", section: "CMS" },

          // Databases
          { image: "/assets/icons/oracle-icon.png", label: "Oracle", section: "DATABASES" },
          { image: "/assets/icons/redis-icon.png", label: "Redis", section: "DATABASES" },
          { image: "/assets/icons/mysql-icon.png", label: "MySQL", section: "DATABASES" },
          {
            image: "/assets/icons/coach-db-icon.png",
            label: "CouchDB",
            section: "DATABASES",
          },
          {
            image: "/assets/icons/cassandra-icon.png",
            label: "Cassandra",
            section: "DATABASES",
          },
        ]}
      />
      <Appdev
        mainHeading="Why Choose Techanic Infotech For Python Development"
        mainParagraph="At Techanic Infotech, we stand out as your ideal Python development partner, offering unparalleled expertise, commitment, and tailored solutions. Our dedication to quality and innovation ensures your projects not only meet but exceed expectations."
        firstColumnData={firstColumnData}
        secondColumnData={secondColumnData}
      />

      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are some of the common FAQs about Python development services."
        questions={[
          "Q1: How much does Python development cost?",
          "Q2: How long does it take to complete a Python development project?",
          "Q3: Do you sign a Non-Disclosure Agreement (NDA)?",
          "Q4: Can I hire a dedicated Python developer?",
          "Q5: What industries do you serve with your Python development services?",
          "Q6: How do you ensure the quality of the Python projects?",
        ]}
        answers={[
          "A1: The cost of Python development varies based on several factors, including project complexity, development time, and specific requirements. At Techanic Infotech, we offer transparent pricing and can provide a customized quote after understanding your project needs.",
          "A2: The timeline for a Python development project depends on its scope, features, and complexity. We follow an agile development process to ensure timely delivery, and we'll work with you to establish a realistic timeline that meets your goals.",
          "A3: Yes, we take client confidentiality seriously. We're willing to sign a Non-Disclosure Agreement (NDA) before any project discussions to ensure your project ideas and intellectual property are protected.",
          "A4: Yes, you can! Techanic Infotech provides a range of hiring models, including the option to hire dedicated Python developers who will work exclusively on your project. This ensures dedicated focus and faster turnaround times.",
          "A5: Techanic Infotech provides Python development services across various industries, including healthcare, finance, education, retail, and more. Our versatile Python developers are adept at crafting solutions that meet industry-specific challenges.",
          "A6: Quality is our top priority. We have thorough quality assurance processes in place, including code reviews, testing at multiple stages, and performance benchmarking, to ensure the final product is of the highest standard.",
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
