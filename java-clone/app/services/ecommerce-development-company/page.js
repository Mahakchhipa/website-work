import OurClients from "@/components/clients/page";
import NativeApp1 from "@/lib/secondpage/nativeapp/nativeapp1";

import GradientCards from "@/lib/secondpage/nativeapp/GradientCards";

import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import TechSuccess from "@/lib/colab/techSuccess";
import CTABannerImage from "@/lib/secondpage/CTABannerImage";
import ClientTestimonials from "@/lib/clientsReviews/clients";

import ServicesCtaButton from "@/components/getStarted/ServicesCtaButtons";

import ServicePagesCards from "@/lib/secondpage/mobileApp/ServicePagesCards";

import ThemeCards from "@/lib/secondpage/mobileApp/ThemeCards";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import VectorBanner from "@/components/VectorBanner";
import Portfolio from "@/components/getStarted/portfolio/portfolio";
const cards = [
  {
    id: 1, // Unique ID
    image: "/assets/portfolioImages/massimodutti.webp", // Replace with actual image path
    heading: "Massimo Dutti",
    para: "Massimo Dutti is a globally renowned fashion brand that offers elegant and contemporary clothing for men, women, and children.",
    webLink: "https://www.massimodutti.com",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.inditex.massimodutti&pcampaignid=web_share",
    appleLink:
      "https://apps.apple.com/in/app/massimo-dutti-clothing-store/id373282826",
  },
  {
    id: 2, // Unique ID
    image: "/assets/portfolioImages/woolworths.webp", // Replace with actual image path
    heading: "Woolworths",
    para: "Woolworths is a leading retail chain offering a wide variety of high-quality food, clothing, and home goods in South Africa.",
    webLink: "https://www.woolworths.co.za/",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.awfs.coordination&pcampaignid=web_share",
  },
  {
    id: 3, // Unique ID
    image: "/assets/portfolioImages/jumunona.webp", // Replace with actual image path
    heading: "Jumunona",
    para: "Jumunona offers a seamless shopping experience with a wide range of products from multiple sellers, secure checkout, and real-time order tracking. ",
    // webLink: "https://www.woolworths.co.za/",
    appleLink: "https://apps.apple.com/in/app/jumunona/id6476266952",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.app.jumunona&pcampaignid=web_share",
  },
];

export const metadata = {
  contentLanguage: "en-us",
  title: "Top Ecommerce Development Company - Techanic Infotech",
  description:
    "Techanic Infotech is a leading eCommerce development company. We offer ecommerce solution for Magento 2, Shopify, WooCommerce, Drupal, Joomla, etc.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/ecommerce-development-company"
    ),
  },

  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Top Ecommerce Development Company - Techanic Infotech",
    description:
      "Techanic Infotech is a leading eCommerce development company. We offer ecommerce solution for Magento 2, Shopify, WooCommerce, Drupal, Joomla, etc.",
    url: "https://www.techanicinfotech.com/services/ecommerce-development-company",

    alt: "Techanic Infotech",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/ecommerce-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "Top Ecommerce Development Company - Techanic Infotech",
    description:
      "Techanic Infotech is a leading eCommerce development company. We offer ecommerce solution for Magento 2, Shopify, WooCommerce, Drupal, Joomla, etc.",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/ecommerce-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

export default function ECommerce() {
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
            "name": "Top Ecommerce Development Company - Techanic Infotech",
            "url": "https://www.techanicinfotech.com/services/ecommerce-development-company",
            "image": "https://www.techanicinfotech.com/OGI/services/ecommerce-development-og.webp",
            "description": "Techanic Infotech is a leading eCommerce development company. We offer ecommerce solution for Magento 2, Shopify, WooCommerce, Drupal, Joomla, etc.",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Balaji Blessing – 01, D-125, Narayan Vihar, Jaipur , Rajasthan, India",
                "addressLocality": "Balaji Blessing – 01, D-125, Narayan Vihar, Jaipur",
                "addressRegion":"Rajasthan",
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
                "streetAddress": "404-F Aspin Commercial Tower, Sheikh Zayed Road, Dubai",
                "addressLocality": "404-F Aspin Commercial Tower, Sheikh Zayed Road",
                "addressRegion": "Dubai",
                "postalCode": "417213",
                "telephone": "+971 524981077",
                "addressCountry": {
                  "@type": "Country",
                  "name": "UAE"
                }
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Via Giuseppe Mazzini nu. 6, Flat nu 107, Milano, 20123, Italy",
                "addressLocality": "Via Giuseppe Mazzini nu. 6, Flat nu 107, Milano",
                "addressRegion": "Milano",
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
        type="application/ld+json"
        async
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Techanic Infotech",
          "image": "https://www.techanicinfotech.com/OGI/services/ecommerce-development-og.webp",
          "@id": "https://www.techanicinfotech.com/services/ecommerce-development-company",
          "url": "https://www.techanicinfotech.com/services/ecommerce-development-company",
          "priceRange": "$25-$50",
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur, Rajasthan, India",
              "addressLocality": "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur",
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
              "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road",
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
              "streetAddress": "Via Giuseppe mazzini nu. 6, flat nu 107",
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
            "https://www.techanicinfotech.com/services/ecommerce-development-company"
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
          "url": "https://www.techanicinfotech.com/services/ecommerce-development-company",
          "logo": "https://www.techanicinfotech.com/OGI/services/ecommerce-development-og.webp",
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
            "https://www.techanicinfotech.com/services/ecommerce-development-company"
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
          "@id":"https://www.techanicinfotech.com/services/ecommerce-development-company",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the cost of eCommerce website development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost of developing an eCommerce website can vary widely depending on several factors, including the complexity of the design, the number of products, custom features, and the platform used. At Techanic Infotech, we offer transparent pricing and work with you to create a solution that fits your budget and business goals."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to develop an eCommerce website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our eCommerce solutions come with user-friendly content management systems (CMS), allowing you to easily manage and update your website, including products, prices, content, and promotions, without needing technical expertise."
              }
            },
            {
              "@type": "Question",
              "name": "Will my eCommerce website be mobile-friendly?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We understand the importance of mobile commerce and ensure that all eCommerce websites we develop are fully responsive and optimized for mobile devices, providing a seamless shopping experience across all platforms."
              }
            },
            {
              "@type": "Question",
              "name": "Can I integrate third-party applications with my eCommerce website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we can integrate a wide range of third-party applications and services, including payment gateways, shipping providers, CRM systems, and more, to enhance the functionality of your eCommerce website and streamline operations."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure the security of my eCommerce website?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Security is paramount in eCommerce. We implement best practices and robust security measures, including SSL certificates, secure payment gateways, and regular security audits, to protect your website and customer data from potential threats."
              }
            },
            {
              "@type": "Question",
              "name": "Will I be able to manage my eCommerce website easily?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our eCommerce solutions come with user-friendly content management systems (CMS), allowing you to easily manage and update your website, including products, prices, content, and promotions, without needing technical expertise."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide support and maintenance after the website is launched?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer comprehensive post-launch support and maintenance services to ensure your eCommerce website continues to operate smoothly. From regular updates to troubleshooting and performance optimization, we're here to support your ongoing success."
              }
            },
            {
              "@type": "Question",
              "name": "Is it possible to sign a Non-Disclosure Agreement (NDA) for my project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We value your privacy and intellectual property, and we're happy to sign a Non-Disclosure Agreement (NDA) before starting your project. This ensures that all discussions and materials related to your project remain confidential."
              }
            }
          ]
        }
      `,
        }}
      />

      <VectorBanner
        headingPart1="E-Commerce "
        headingPart2="Development Company "
        heading="E-Commerce Development Company "
        paragraph="Welcome to Techanic Infotech, your trusted eCommerce development company, where innovation meets expertise. We specialize in transforming your business vision into reality with cutting-edge eCommerce solutions. Elevate your online presence and sales with our tailored eCommerce website development services, designed to cater to your unique business needs."
        bgImage="backgroundImages/ecommerce-app-banner.svg"
        showGif={false}
        image="/assets/bannerimages/ecommerce-app.webp"
        textposition="center"
        gradient="262.47deg, #755AFF 0.76%, #463699 101.95%"
        textcolor="white"
        itemsposition="end"
        fillcolor="white"
        btnContent="Contact Us"
        isGradient={false}
        vectorImage="/assets/bannerimages/ecommerce-vector.svg"
        solidColor="#ffffff"
        btntext="black"
      />
      <OurClients
        headingpart1="We Work With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <NativeApp1
        headingPart1="Elevating Businesses "
        headingPart2="In The Digital Marketplace "
        paragraph1={`The digital marketplace offers an unprecedented opportunity for businesses to reach a global audience, providing a platform that operates beyond the constraints of time and geography. eCommerce has revolutionized the way we shop, making it more convenient, personalized, and accessible than ever before. By embracing eCommerce, businesses can tap into new markets, understand consumer behavior with greater precision, and adapt quickly to evolving trends, ensuring they remain competitive in a rapidly changing landscape.`}
        paragraph2="At Techanic Infotech, we understand the transformative power of eCommerce. Our comprehensive eCommerce development services are designed to navigate the complexities of online retail, providing seamless, user-friendly shopping experiences that drive sales and foster brand loyalty. From custom eCommerce development to ongoing eCommerce support and optimization, we offer end-to-end solutions that empower businesses to thrive online. With our expertise, businesses can leverage the full potential of eCommerce to achieve sustainable growth and success."
        image="/assets/ecommerce-digital-market-image.webp"
        showStartWithUS={true}
      />
      <ServicesCtaButton
        isGradientPage={true}
        gradient="89.9deg, #5F49CF -14.71%, #302569 124.81%"
        text="Get Started"
        hovertext="black"
        image="/assets/ecommerce-cta-image.webp"
        // hovercolor=
        btnbg="#ffffff"
        textColor="white"
        heading="Get Started With E-Commerce Development"
        paragraph="Unlock the full potential of your online store with our expert eCommerce developers. Leverage their proficiency for a seamless, high-performing eCommerce experience that captivates and converts."
      />

      <ServicePagesCards
        headingPart1="Comprehensive E-Commerce"
        headingPart2="Development Services"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        textcolor="#0F53FF"
        paragraph={`Dive into the spectrum of eCommerce development services offered by Techanic Infotech, tailored to elevate your online business to new heights. Our expertise spans across various domains, ensuring your eCommerce venture thrives.`}
        techcard={[
          {
            image: "/assets/icons/ecommerce-web-icon.png",
            title: "eCommerce Web Development",
            description:
              "Experience bespoke eCommerce web development that combines aesthetics with functionality. Our solutions are designed to provide an intuitive shopping experience, ensuring your website stands out in the competitive digital marketplace.",
          },
          {
            image: "/assets/icons/ecommerce-app-icon.png",
            title: "eCommerce App Development",
            description:
              "Unlock the potential of mobile commerce with our cutting-edge eCommerce app development services. We create engaging, user-friendly apps that enhance customer engagement and drive sales, keeping you connected with your audience on the go.",
          },
          {
            image: "/assets/icons/ecommerce-web-design-icon.png",
            title: "eCommerce Website Design",
            description:
              "Elevate your online presence with our eCommerce web designing services. Our designs are not just visually appealing but also user-centric, ensuring a seamless shopping experience that translates into higher conversion rates.",
          },
          {
            image: "/assets/icons/custom-ecommerce-icon.png",
            title: "Custom eCommerce Solutions",
            description:
              "Tailor-made to fit your unique business needs, our custom eCommerce development services offer flexibility and scalability. We focus on creating solutions that align with your business goals, ensuring a competitive edge in your industry.",
          },
          {
            image: "/assets/icons/ecommerce-integration-icon.png",
            title: "eCommerce Integration Services",
            description:
              "Streamline your operations with our comprehensive eCommerce integration services. From payment gateways to inventory management systems, we ensure a seamless flow of information across all your eCommerce platforms.",
          },
          {
            image: "/assets/icons/ecommerce-support-icon.png",
            title: "eCommerce Optimization and Support",
            description:
              "Beyond development, we offer ongoing eCommerce support and optimization services to keep your platform at its peak performance. From regular updates to strategic enhancements, we ensure your eCommerce venture continues to grow and succeed.",
          },
        ]}
        position="start"
        // bgcolor=""
        cardBG="ffffff"
        color="001289"
        showExtraCards={false}
        radius="8"
        height="450px"
      />
      <CTABannerImage
        heading="Custom E-Commerce Development"
        paragraph="Dive into the realm of customization with our bespoke eCommerce development solutions. Tailored to fit your business like a glove, our services promise to elevate your digital storefront to new heights."
        text="Customize Now"
        bgColor="ffffff"
        media="image"
        // imageSrc="backgroundImages/dating-experts-back.svg"

        btnbg="#ffffff"
        btntext="#000000"
        mobileImage="/assets/ecommerce-cta-mobile-image.png"
        backColor="#290465"
        textColor="white"
        // backImage="/assets/background-mobile-image-expert-section.png"
        image="/assets/ecommerce-cta-image-2.webp"
      />

      <ThemeCards
        headingpart1="Why Develop An E-Commerce Website "
        headingpart2="For Your Business?"
        paragraph={` In today's digital era, developing an eCommerce website is not just an option but a strategic necessity for businesses aiming to capture the expansive online market. It's a gateway to unlimited growth opportunities and enhanced customer reach.`}
        cards={[
          {
            icon: "/assets/icons/servicesIcons/global-market-icon.png",
            iconbg: "bg-[#7DAEBD]",
            cardbg: "bg-[#AFD9E6]",

            title: "Global Market Access",
            description:
              "An eCommerce website opens your business to the world, allowing you to reach customers across the globe without the limitations of physical geography. This global access helps in expanding your customer base and increasing sales opportunities.",
          },
          {
            icon: "/assets/icons/servicesIcons/customer-convenience-icon.png",
            iconbg: "bg-[#FF8EA1]",
            cardbg: "bg-[#EFB5D4]",

            title: "Customer Convenience",
            description:
              "eCommerce websites provide customers with the convenience of shopping anytime, anywhere. This 24/7 accessibility leads to improved customer satisfaction and loyalty, as shoppers appreciate the flexibility and ease of online purchasing.",
          },
          {
            icon: "/assets/icons/servicesIcons/scalability-icon.png",
            iconbg: "bg-[#A69BD4]",
            cardbg: "bg-[#CEC3FF]",

            title: "Scalability",
            description:
              "With an eCommerce platform, scaling your business becomes more manageable. You can easily expand your product range, adjust pricing, and cater to increased demand without the need for a larger physical space or extensive inventory.",
          },
          {
            icon: "/assets/icons/servicesIcons/customer-insights-icon.png",
            iconbg: "bg-[#CE9DA2]",
            cardbg: "bg-[#FBC0C6]",

            title: "Enhanced Customer Insights",
            description:
              "eCommerce websites allow for the collection of valuable customer data and insights. Understanding customer preferences, buying habits, and feedback can help tailor your offerings, marketing strategies, and improve overall service.",
          },
          {
            icon: "/assets/icons/servicesIcons/cost-effective-icon.png",
            iconbg: "bg-[#DCB776]",
            cardbg: "bg-[#FFD384]",

            title: "Cost-Effective",
            description:
              "Launching and maintaining an eCommerce website is more cost-effective than running a physical store. Reduced overheads, such as rent, utilities, and staff, contribute to lower operational costs and higher profit margins.",
          },
          {
            icon: "/assets/icons/servicesIcons/competitive-advantage-icon.png",
            iconbg: "bg-[#A69BD4]",
            cardbg: "bg-[#DCDCFF]",

            title: "Competitive Advantage",
            description:
              "Having an eCommerce website is essential to stay competitive in today's market. It enables businesses to offer a wider range of products, better prices, and superior customer service, setting them apart from competitors who lack an online presence.",
          },
        ]}
      />

      <HiringDevelopers
        headingPart1="Hire Expert "
        headingPart2="E-Commerce Developers"
        paragraph1="Elevate your online business with our team of expert eCommerce developers at Techanic Infotech. Hire eCommerce web developers who are adept at crafting bespoke eCommerce solutions that are not only visually appealing but also functionally robust, ensuring a seamless and engaging shopping experience for your customers. With a deep understanding of the latest technologies and industry trends, our developers are equipped to bring your eCommerce vision to life."
        paragraph2="Choosing to hire eCommerce developers from Techanic Infotech means partnering with professionals who are committed to excellence and innovation. Our ecommerce website developers go beyond mere coding to understand your business goals, enabling them to create tailored solutions that drive growth and success. Whether you're looking to build a brand new eCommerce platform or enhance an existing one, our dedicated developers are here to transform your digital presence."
        bgColor="ffffff"
        textcolor1="white"
        // btntext="white"
        // divBtn="#0000ff "
        // direction="right"
        // color1="#0000ff"
        // color2="#001289"
        image="/assets/hiring-developers-image.webp"
        btntxt="white"
      />
      <TechSuccess
        headingPart1="Defining The E-Commerce "
        headingPart2="Success With Expert Developers "
        paragraph="In an era where the digital marketplace is constantly evolving, Techanic Infotech stands out as an eCommerce development agency committed to excellence. From eCommerce app development to intricate eCommerce integrations, our comprehensive services are designed to cover every aspect of your online business. With a keen eye for detail and a passion for perfection, we ensure your eCommerce platform is not just a store, but a destination for your customers."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3=" Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#F3F3FA"
      />

      <Languages
        head="Cutting-Edge Tech Stack"
        para={`Our eCommerce web development company is powered by the latest technologies and innovative tools. We leverage a diverse tech stack to build scalable, secure, and high-performing eCommerce platforms, ensuring your business stays ahead of the curve.`}
        bgColor="#F3F3FA"
        iconheight='60px'
        iconwidth='60px'
        sections={[
          { image: "/assets/icons/front-end-icon.svg", label: "Frontend" },
          { image: "/assets/icons/backend-icon.svg", label: "Backend" },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Database",
          },
          {
            image: "/assets/icons/web-servers.png",
            label: "Web Servers",
            flipIcon: "icons/web-servers.png",
          },

          {
            image: "/assets/icons/ui-ux-label-icon.svg",
            label: "Design",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/html-icon.png",
            label: "HTML",
            section: "Frontend",
          },
          {
            image: "/assets/icons/css-icon.png",
            label: "CSS",
            section: "Frontend",
          },
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
          {
            image: "/assets/icons/vue-js-icon.png",
            label: "Vue.js",
            section: "Frontend",
          },
          {
            image: "/assets/icons/python-icon.png",
            label: "Python",
            section: "Backend",
          },
          {
            image: "/assets/icons/ruby-on-rails-icon.png",
            label: "Ruby",
            section: "Backend",
          },
          {
            image: "/assets/icons/php-development-icon.png",
            label: "PHP",
            section: "Backend",
          },
          {
            image: "/assets/icons/java-icon.png",
            label: "Java",
            section: "Backend",
          },
          {
            image: "/assets/icons/dot-net-icon.png",
            label: ".NET",
            section: "Backend",
          },
          {
            image: "/assets/icons/mysql-icon.png",
            label: "MySQL",
            section: "Database",
          },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "PostgreSQL",
            section: "Database",
          },
          {
            image: "/assets/icons/mongodb-icon.png",
            label: "MongoDB",
            section: "Database",
          },
          {
            image: "/assets/icons/oracle-icon.png",
            label: "Oracle",
            section: "Database",
          },
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
          {
            image: "/assets/icons/nginx-icon.png",
            label: "Nginx",
            section: "Web Servers",
          },
          {
            image: "/assets/icons/litespeed-icon.png",
            label: "LiteSpeed",
            section: "Web Servers",
          },
          {
            image: "/assets/icons/aws-icon.png",
            label: "AWS",
            section: "Web Servers",
          },
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
          {
            image: "/assets/icons/figma-icon.png",
            label: "Figma",
            section: "Design",
          },
        ]}
      />
      <GradientCards
        headingpart1="Why Choose Techanic Infotech For "
        headingpart2="Your E-Commerce Needs"
        paragraph="Selecting Techanic Infotech as your eCommerce development partner guarantees you a blend of innovation, expertise, and unparalleled service. Our commitment to delivering bespoke eCommerce solutions sets us apart, ensuring your business not only meets but exceeds online retail expectations."
        cards={[
          {
            gradient: "359.61deg, #FFFFFF 4.84%, #E6EDFF 99.62%",
            icon: "/assets/icons/servicesIcons/tailored-solutions-icon.png",
            title: "Tailored Solutions",
            description:
              "At Techanic Infotech, we understand that every business is unique. Our approach to online store development is highly personalized, ensuring that each solution perfectly aligns with your business objectives, market demands, and customer expectations.",
          },
          {
            gradient: "359.61deg, #FFFFFF 4.84%, #FEE3C4 99.62%",
            icon: "/assets/icons/servicesIcons/cutting-edge-icon.png",
            title: "Cutting-Edge Technology",
            description:
              "We pride ourselves on leveraging the latest technology and trends in the eCommerce space. This commitment to innovation ensures your eCommerce platform is robust, scalable, and equipped with the latest features to keep you ahead in a competitive market.",
          },
          {
            gradient: "359.61deg, #FFFFFF 4.84%, #DCFFDD 99.62%",
            icon: "/assets/icons/servicesIcons/expert-team-icon.png",
            title: "Expert Team",
            description:
              "Our team comprises some of the industry's most talented and expert eCommerce developers, designers, and consultants. Their deep domain expertise and passion for excellence drive the success of your eCommerce project, from inception to launch and beyond.",
          },
          {
            gradient: "359.61deg, #FFFFFF 4.84%, #DCFFDD 99.62%",
            icon: "/assets/icons/servicesIcons/support-icon.png",
            title: "Comprehensive Support",
            description:
              "Choosing Techanic Infotech means gaining a partner who stands by you every step of the way. From initial consultation to post-launch support and maintenance, we ensure your eCommerce venture remains smooth and successful.",
          },
          {
            gradient: "359.61deg, #FFFFFF 4.84%, #DBF4FF 99.62%",
            icon: "/assets/icons/servicesIcons/track-record-icon.png",
            title: "Proven Track Record",
            description:
              "Our portfolio speaks volumes of our success in delivering complex eCommerce marketplace development projects across various industries. This proven track record gives you the confidence that your project is in capable hands, promising results that exceed expectations.",
          },
          {
            gradient: "1.2deg, #FFFFFF 1.08%, #FFAEAE 134.12%",
            icon: "/assets/icons/servicesIcons/platforms-icon.png",
            title: "Future-Ready Platforms",
            description:
              "As an eCommerce development firm, we aren’t only focused on current market needs but also anticipate future trends. Our eCommerce solutions are designed to be future-ready, ensuring your platform evolves with changing consumer behaviors, technology advancements, and market dynamics.",
          },
        ]}
        cards1={[
          {
            gradient: "359.61deg, #FFFFFF 4.84%, #E6EDFF 99.62%",
            icon: "/assets/icons/servicesIcons/tailored-solutions-icon.png",
            title: "Tailored Solutions",
            description:
              "At Techanic Infotech, we understand that every business is unique. Our approach to online store development is highly personalized, ensuring that each solution perfectly aligns with your business objectives, market demands, and customer expectations.",
          },
          {
            gradient: "359.61deg, #FFFFFF 4.84%, #DCFFDD 99.62%",
            icon: "/assets/icons/servicesIcons/support-icon.png",
            title: "Comprehensive Support",
            description:
              "Choosing Techanic Infotech means gaining a partner who stands by you every step of the way. From initial consultation to post-launch support and maintenance, we ensure your eCommerce venture remains smooth and successful.",
          },
        ]}
        cards2={[
          {
            gradient: "359.61deg, #FFFFFF 4.84%, #FEE3C4 99.62%",
            icon: "/assets/icons/servicesIcons/cutting-edge-icon.png",
            title: "Cutting-Edge Technology",
            description:
              "We pride ourselves on leveraging the latest technology and trends in the eCommerce space. This commitment to innovation ensures your eCommerce platform is robust, scalable, and equipped with the latest features to keep you ahead in a competitive market.",
          },
          {
            gradient: "359.61deg, #FFFFFF 4.84%, #DBF4FF 99.62%",
            icon: "/assets/icons/servicesIcons/track-record-icon.png",
            title: "Proven Track Record",
            description:
              "Our portfolio speaks volumes of our success in delivering complex eCommerce marketplace development projects across various industries. This proven track record gives you the confidence that your project is in capable hands, promising results that exceed expectations.",
          },
        ]}
        cards3={[
          {
            gradient: "359.61deg, #FFFFFF 4.84%, #DCFFDD 99.62%",
            icon: "/assets/icons/servicesIcons/expert-team-icon.png",
            title: "Expert Team",
            description:
              "Our team comprises some of the industry's most talented and expert eCommerce developers, designers, and consultants. Their deep domain expertise and passion for excellence drive the success of your eCommerce project, from inception to launch and beyond.",
          },

          {
            gradient: "1.2deg, #FFFFFF 1.08%, #FFAEAE 134.12%",
            icon: "/assets/icons/servicesIcons/platforms-icon.png",
            title: "Future-Ready Platforms",
            description:
              "As an eCommerce development firm, we aren’t only focused on current market needs but also anticipate future trends. Our eCommerce solutions are designed to be future-ready, ensuring your platform evolves with changing consumer behaviors, technology advancements, and market dynamics.",
          },
        ]}
      />
      <Portfolio
        headingpart1="Our Success "
        headingpart2="Stories"
        heading="Our Success Stories"
        bgColor="ffffff"
        paragraph="Discover our craftsmanship through our extensive portfolio. Each project showcases our commitment to excellence in eCommerce web design and development, highlighting the bespoke solutions we've provided to our valued clients."
        cards={cards}
        btntext="white"
        divBtn="#0000ff "
        direction="right"
        color1="#0000ff"
        color2="#001289"
      />
      {/* <Appdev
        mainHeading="Why Choose Techanic Infotech For Your E-Commerce Needs"
        mainParagraph="Selecting Techanic Infotech as your eCommerce development partner guarantees you a blend of innovation, expertise, and unparalleled service. Our commitment to delivering bespoke eCommerce solutions sets us apart, ensuring your business not only meets but exceeds online retail expectations."
        headings={[
          "Tailored Solutions",
          "Cutting-Edge Technology",
          "Expert Team",
          "Comprehensive Support",
          "Proven Track Record",
          "Future-Ready Platforms",
        ]}
        paragraphs={[
          "At Techanic Infotech, we understand that every business is unique. Our approach to online store development is highly personalized, ensuring that each solution perfectly aligns with your business objectives, market demands, and customer expectations.",
          "We pride ourselves on leveraging the latest technology and trends in the eCommerce space. This commitment to innovation ensures your eCommerce platform is robust, scalable, and equipped with the latest features to keep you ahead in a competitive market.",
          "Our team comprises some of the industry's most talented and expert eCommerce developers, designers, and consultants. Their deep domain expertise and passion for excellence drive the success of your eCommerce project, from inception to launch and beyond.",
          "Choosing Techanic Infotech means gaining a partner who stands by you every step of the way. From initial consultation to post-launch support and maintenance, we ensure your eCommerce venture remains smooth and successful.",
          "Our portfolio speaks volumes of our success in delivering complex eCommerce marketplace development projects across various industries. This proven track record gives you the confidence that your project is in capable hands, promising results that exceed expectations.",
          "As a eCommerce development firm, we aren’t only focus on current market needs but also anticipate future trends. Our eCommerce solutions are designed to be future-ready, ensuring your platform evolves with changing consumer behaviors, technology advancements, and market dynamics.",
        ]}
      /> */}
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are common FAQs about eCommerce development services. "
        questions={[
          "Q1: What is the cost of eCommerce website development?",
          "Q2: How long does it take to develop an eCommerce website?",
          "Q3: Will my eCommerce website be mobile-friendly?",
          "Q4: Can I integrate third-party applications with my eCommerce website?",
          "Q5: How do you ensure the security of my eCommerce website?",
          "Q6: Will I be able to manage my eCommerce website easily?",
          "Q7: Do you provide support and maintenance after the website is launched?",
          "Q8: Is it possible to sign a Non-Disclosure Agreement (NDA) for my project?",
        ]}
        answers={[
          "A1: The cost of developing an eCommerce website can vary widely depending on several factors, including the complexity of the design, the number of products, custom features, and the platform used. At Techanic Infotech, we offer transparent pricing and work with you to create a solution that fits your budget and business goals.",
          "A2: The timeline for eCommerce website development can range from a few weeks to several months, depending on the project's scope, complexity, and specific requirements. We prioritize efficient project management and clear communication to ensure timely delivery without compromising quality.",
          "A3: Absolutely. We understand the importance of mobile commerce and ensure that all eCommerce websites we develop are fully responsive and optimized for mobile devices, providing a seamless shopping experience across all platforms.",
          "A4: Yes, we can integrate a wide range of third-party applications and services, including payment gateways, shipping providers, CRM systems, and more, to enhance the functionality of your eCommerce website and streamline operations.",
          "A5: Security is paramount in eCommerce. We implement best practices and robust security measures, including SSL certificates, secure payment gateways, and regular security audits, to protect your website and customer data from potential threats.",
          "A6: Our eCommerce solutions come with user-friendly content management systems (CMS), allowing you to easily manage and update your website, including products, prices, content, and promotions, without needing technical expertise.",
          "A7: Yes, we offer comprehensive post-launch support and maintenance services to ensure your eCommerce website continues to operate smoothly. From regular updates to troubleshooting and performance optimization, we're here to support your ongoing success.",
          "A8: We value your privacy and intellectual property, and we're happy to sign a Non-Disclosure Agreement (NDA) before commencing your project. This ensures that all discussions and materials related to your project remain confidential.",
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
