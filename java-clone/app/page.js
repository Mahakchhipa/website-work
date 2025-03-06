//...................................................for top section.............................................
import dynamic from "next/dynamic";
import HomePage from "@/components/mainSection/HomePage";
import AboutUs from "@/components/mainSection/AboutUs";

// import Ratings from "@/lib/reviews/reviews";
const Ratings = dynamic(() => import("@/lib/reviews/reviews"), {
  ssr: false,
});
import TechSuccess from "@/lib/colab/techSuccess";
import ClientTestimonials from "@/lib/clientsReviews/clients";

import Collab from "@/lib/colab/colab";
import WebPages from "@/lib/webFields/webpages";
// import Portfolio from "@/components/getStarted/portfolio/portfolio";
const Portfolio = dynamic(
  () => import("@/components/getStarted/portfolio/portfolio"),
  {
    ssr: false,
  }
);
import OurClients from "@/components/clients/page";
import OurServices from "@/components/ourServices/page";
import HomepageBlogs from "@/components/BlogComponents/HomepageBlogs";
import Languages from "../components/getStarted/allTechLAnguages/languages";
const cards = [
  {
    id: 1,
    image: "/assets/portfolioImages/pikit-portfolio-image.webp",
    heading: "Pikit Food Delivery",
    para: "Pikit is a user-friendly food delivery app designed to connect customers with a wide variety of local restaurants. ",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=in.pikit.app&pcampaignid=web_share",
    appleLink:
      "https://apps.apple.com/in/app/pikit-food-grocery-delivery/id1536007416",
    webLink:
      "https://apps.apple.com/in/app/pikit-food-grocery-delivery/id1536007416",
  },
  {
    id: 2,
    image: "/assets/portfolioImages/brozo-portfolio-image.webp",
    heading: "Borzo Delivery",
    para: "Borzo is an on-demand delivery service app that connects users with couriers for fast and efficient delivery of goods.",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=global.dostavista.client&pcampaignid=web_share",
    appleLink:
      "https://apps.apple.com/us/app/borzo-courier-delivery-app/id1530403049",
    webLink: "https://borzodelivery.com/in/cities/home-delivery-bengaluru",
  },
  {
    id: 3,
    image: "/assets/portfolioImages/cabify-portfolio-image.webp",
    heading: "Cabify",
    para: "Cabify is a transportation network startup that provides ride-hailing services via its mobile app and is present in numerous European and Latin American countries.",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.cabify.rider&pcampaignid=web_share",
    appleLink: "https://apps.apple.com/es/app/cabify/id476087442",
    webLink: "https://cabify.com/en",
  },

  {
    id: 4,
    image: "/assets/portfolioImages/mirron-portfolio-image.webp",
    heading: "Mirron",
    para: "A variety of services are available on the beauty and wellness app Mirron to assist users in feeling and looking their best. ",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=me.mirron&hl=en&gl=US",
    appleLink:
      "https://apps.apple.com/us/app/mirron-explore-beauty-nearby/id1524426624?mt=8",
    webLink: "https://mirron.me",
  },
  {
    id: 5,
    image: "/assets/portfolioImages/yoomee-portfolio-image.webp",
    heading: "Yoomee",
    para: "Yoomee is a vibrant dating app with a largely African user base.Finding connections—whether romantic or platonic—is made easier with its user-friendly layout. ",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=de.mobiletrend.lovidoo&pcampaignid=web_share",
    appleLink:
      "https://apps.apple.com/us/app/yoomee-dating-meet-people/id904596206",
    webLink: "https://www.yoomee.love/",
  },

  {
    id: 6,
    image: "/assets/portfolioImages/doctor-on-demand-portfolio-image1.webp",
    heading: "Dr+ On Demand",
    para: "A telehealth program called Dr+ On Demand was created to offer easily available and convenient medical consultations.",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.doctorondemand.android.patient&pcampaignid=web_share",
    appleLink: "https://apps.apple.com/us/app/doctor-on-demand/id591981144",
    webLink: "https://doctorondemand.com",
  },
];

//     img1: "portfolioImages/pikit-food-delivery.jpg",
//     // img2: pikitImg2,
//     heading: "Pikit Food Delivery",

//     paragraph:
//       "Pikit is a user-friendly food delivery app designed to connect customers with a wide variety of local restaurants. It offers an extensive range of cuisines, allowing users to browse menus, customize orders, and make secure payments easily. Pikit features real-time order tracking, personalized recommendations, and exclusive deals to enhance the dining experience. With a focus on convenience and reliability, Pikit ensures that meals are delivered hot and fresh to your doorstep. The app also includes user reviews and ratings to help customers make informed choices, making it the ultimate solution for hassle-free food delivery.",
//     playstoreLink:
//       "https://play.google.com/store/apps/details?id=in.pikit.app&pcampaignid=web_share",
//     appleLink:
//       "https://apps.apple.com/in/app/pikit-food-grocery-delivery/id1536007416",
//     webLink:
//       "https://apps.apple.com/in/app/pikit-food-grocery-delivery/id1536007416",
//   },
//   {
//     img1: "portfolioImages/brozo-courier-delivery-app.jpg",
//     // img2: borzoImg2,
//     heading: "Borzo Delivery",
//     paragraph:
//       "Borzo is an on-demand delivery service app that connects users with couriers for fast and efficient delivery of goods. Formerly known as WeFast, Borzo operates in multiple countries, offering same-day, last-mile, and scheduled delivery services. It caters to both individuals and businesses, providing a reliable solution for transporting packages, documents, and other items. The app features real-time tracking, various delivery options, and competitive pricing, ensuring a seamless experience for users. With a focus on convenience and speed, Borzo is ideal for e-commerce, food delivery, and personal deliveries, making logistics hassle-free and efficient.",
//     playstoreLink:
//       "https://play.google.com/store/apps/details?id=global.dostavista.client&pcampaignid=web_share",
//     appleLink:
//       "https://apps.apple.com/us/app/borzo-courier-delivery-app/id1530403049",
//     webLink: "https://borzodelivery.com/in/cities/home-delivery-bengaluru",
//   },
//   {
//     img1: "portfolioImages/cabify-taxi-app.jpeg",
//     // img2: cabifyImg2,
//     heading: "Cabify ",
//     paragraph:
//       "Cabify is a transportation network startup that provides ride-hailing services via its mobile app and is present in numerous European and Latin American countries. Cabify lets users plan rides, monitor their driver's whereabouts in real time, and pay for their journeys online, just like other ride-hailing apps. Cabify is renowned for emphasizing safety and provides tools like ride tracking and background checks on drivers. Additionally, the app offers possibilities for various ride kinds, such as group transportation, executive automobiles, and regular cars. In an effort to rival other ride-hailing services like Uber and Lyft, Cabify seeks to offer consumers in urban regions a dependable and practical transportation option.",
//     appleLink: "https://apps.apple.com/es/app/cabify/id476087442",
//     webLink: "https://cabify.com/en",
//   },
//   {
//     img1: "portfolioImages/nepali-matrimony.png",
//     // img2: nepalImg2,
//     heading: "Nepali Matrimony",
//     paragraph:
//       "A portal called Nepali Matrimony was created to assist individuals in Nepal and the Nepali diaspora in finding compatible life partners. It serves people who are looking for partnerships in the Nepali community that would eventually lead to marriage. Users of the app can establish profiles with information about their age, education, occupation, and preferred partners. Based on these parameters, users can look for possible matches and message them using the app's messaging service. The goal of the Nepali Matrimony app is to give Nepali singles a quick, acceptable, and culturally relevant means to meet and choose a life mate.",
//     webLink: "https://www.nepal-matrimony.com/success",
//   },
//   {
//     img1: "portfolioImages/doctor-on-demand.jpg",
//     // img2: docondemandImg2,
//     heading: "Dr+ On Demand",
//     paragraph:
//       "A telehealth program called Dr+ On Demand was created to offer easily available and convenient medical consultations. Without having to physically visit a clinic, users can schedule virtual visits with credentialed healthcare specialists to receive medical advice, medications, and treatment plans. Real-time video consultations, encrypted communication, and an easy-to-use UI are all aspects of the app. The goal of Dr+ On Demand is to improve access to healthcare, particularly for people living in rural or disadvantaged areas. It also provides a wide range of services, such as mental health counseling, urgent care, and specialist consultations, making it a complete answer for contemporary healthcare requirements.",
//     playstoreLink:
//       "https://play.google.com/store/apps/details?id=com.doctorondemand.android.patient&pcampaignid=web_share",
//     appleLink: "https://apps.apple.com/us/app/doctor-on-demand/id591981144",
//     webLink: "https://doctorondemand.com",
//   },
// ];

// const canonicalUrl = `https://www.techanicinfotech.com/`;
// import TwoK from "@mui/icons-material";
// import logoImg from './tech.png'
export const metadata = {
  contentLanguage: "en-us",
  title: "Top Rated Mobile, Web, and Software Development Company",
  description: `Techanic Infotech is a leading software development company. We offer services tailored to meet clients' unique needs and transform their visions into reality.`,

  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Top Rated Mobile, Web, and Software Development Company",
    description: `Techanic Infotech is a leading software development company. We offer services tailored to meet clients' unique needs and transform their visions into reality.`,
    url: "https://www.techanicinfotech.com/",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Rated Mobile, Web, and Software Development Company",
    description: `Techanic Infotech is a leading software development company. We offer services tailored to meet clients' unique needs and transform their visions into reality.`,
    site: "@Techanicinfo",
    creator: "@Techanicinfo",
    url: "https://www.techanicinfotech.com",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },

  alternates: {
    canonical: new URL("https://www.techanicinfotech.com"),
  },
  robots: "index, follow",
};

export default function Header() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Techanic Infotech",
              "url": "https://www.techanicinfotech.com/"
            }`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "http://schema.org",
          "@type": "ProfessionalService",
          "priceRange": "$25-$50",
          "name": "Top Rated Mobile, Web, and Software Development Company",
          "url": "https://www.techanicinfotech.com/",
          "image": "https://www.techanicinfotech.com/OGI/og-image.png",
          "description": "Techanic Infotech is a leading software development company. We offer services tailored to meet clients' unique needs and transform their visions into reality.",
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur , Rajasthan, India",
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
              "streetAddress": "Via Giuseppe mazzini nu. 6, flat nu 107 MILANO 20123 ITALY",
              "addressLocality": "Via Giuseppe mazzini nu. 6, flat nu 107 MILANO",
              "addressRegion": "MILANO",
              "postalCode": "20123",
              "telephone": "+39 3517578120",
              "addressCountry": {
                "@type": "Country",
                "name": "IT"
              }
            }
          ]
        }
      `,
        }}
      />

      {/* LocalBusiness JSON-LD */}
      {/* <script
        type="application/ld+json"
        async
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Techanic Infotech",
          "image": "https://www.techanicinfotech.com/OGI/og-image.png",
          "@id": "https://www.techanicinfotech.com/",
          "url": "https://www.techanicinfotech.com/",
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
              "streetAddress": "Via Giuseppe mazzini nu. 6, flat nu 107 MILANO 20123 ITALY",
              "addressLocality": "Via Giuseppe mazzini nu. 6, flat nu 107 MILANO",
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
            "https://www.techanicinfotech.com/"
          ]
        }
      `,
        }}
      /> */}

      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Techanic Infotech",
          "alternateName": "Techanic Infotech",
          "url": "https://www.techanicinfotech.com/",
          "logo": "https://www.techanicinfotech.com/OGI/og-image.png",
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
            "https://www.techanicinfotech.com/"
          ]
        }
      `,
        }}
      />

      <HomePage />
      <OurClients
        headingpart1="Driving Trust, "
        headingpart2="Delivering Success"
        paragraphText="Our Clients"
      />
      <AboutUs />
      <OurServices color="0F53FF" height="600px" />
      <Languages
        head="Tech Savvy, IT Services"
        iconheight="60px"
        iconwidth="60px"
        para="It’s our choice of using only the best technologies in app and web development services that makes Techanic Infotech an innovation-defining IT consulting company."
        sections={[
          { image: "/assets/icons/front-end-icon.svg", label: "Front-end" },
          { image: "/assets/icons/backend-icon.svg", label: "Back-end" },
          { image: "/assets/icons/app-dev-icon.svg", label: "Mobile App" },
          { image: "/assets/icons/devops-icon.svg", label: "DevOps & Hosting" },
          { image: "/assets/icons/database-icon.svg", label: "Database" },
        ]}
        languages={[
          {
            image: "/assets/icons/html-icon.png",
            label: "HTML5",
            section: "Front-end",
          },
          {
            image: "/assets/icons/css-icon.png",
            label: "CSS3",
            section: "Front-end",
          },
          {
            image: "/assets/icons/javascript-icon.png",
            label: "JavaScript",
            section: "Front-end",
          },
          {
            image: "/assets/icons/angular-icon.png",
            label: "Angular",
            section: "Front-end",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "React",
            section: "Front-end",
          },
          {
            image: "/assets/icons/vue-js-icon.png",
            label: "Vue.js",
            section: "Front-end",
          },
          {
            image: "/assets/icons/next-js-icon.png",
            label: "Next.js",
            section: "Front-end",
          },
          {
            image: "/assets/icons/node-js-icon.png",
            label: "Node.js",
            section: "Back-end",
          },
          {
            image: "/assets/icons/python-icon.png",
            label: "Python",
            section: "Back-end",
          },
          {
            image: "/assets/icons/php-development-icon.png",
            label: "PHP",
            section: "Back-end",
          },
          {
            image: "/assets/icons/java-icon.png",
            label: "Java",
            section: "Back-end",
          },
          {
            image: "/assets/icons/dot-net-icon.png",
            label: ".NET",
            section: "Back-end",
          },
          {
            image: "/assets/icons/c-plus-plus-icon.png",
            label: "C++",
            section: "Back-end",
          },
          {
            image: "/assets/icons/ruby-on-rails-icon.png",
            label: "Ruby on Rails",
            section: "Back-end",
          },
          {
            image: "/assets/icons/swift-icon.png",
            label: "Swift",
            section: "Mobile App",
          },
          {
            image: "/assets/icons/kotlin-icon.png",
            label: "Kotlin",
            section: "Mobile App",
          },
          {
            image: "/assets/icons/flutter-icon.png",
            label: "Flutter",
            section: "Mobile App",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "React Native",
            section: "Mobile App",
          },
          {
            image: "/assets/icons/ios-icon.png",
            label: "iOS",
            section: "Mobile App",
          },
          {
            image: "/assets/icons/android-icon.png",
            label: "Android",
            section: "Mobile App",
          },
          {
            image: "/assets/icons/xamarin-icon.png",
            label: "Xamarin",
            section: "Mobile App",
          },
          {
            image: "/assets/icons/docker-icon.png",
            label: "Docker",
            section: "DevOps & Hosting",
          },
          {
            image: "/assets/icons/kubernets-icon.png",
            label: "Kubernetes",
            section: "DevOps & Hosting",
          },
          {
            image: "/assets/icons/ansible-icon.png",
            label: "Ansible",
            section: "DevOps & Hosting",
          },
          {
            image: "/assets/icons/terraform-icon.png",
            label: "Terraform",
            section: "DevOps & Hosting",
          },
          {
            image: "/assets/icons/jenkins-icon.png",
            label: "Jenkins",
            section: "DevOps & Hosting",
          },
          {
            image: "/assets/icons/aws-icon.png",
            label: "AWS",
            section: "DevOps & Hosting",
          },
          {
            image: "/assets/icons/azure-icon.png",
            label: "Azure",
            section: "DevOps & Hosting",
          },
          {
            image: "/assets/icons/cassandra-icon.png",
            label: "Cassandra",
            section: "Database",
          },
          {
            image: "/assets/icons/scylladb-icon.png",
            label: "ScyllaDB",
            section: "Database",
          },
          {
            image: "/assets/icons/mongodb-icon.png",
            label: "MongoDB",
            section: "Database",
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
            image: "/assets/icons/redis-icon.png",
            label: "Redis",
            section: "Database",
          },
          {
            image: "/assets/icons/firestore-icon.webp",
            label: "Firestore",
            section: "Database",
          },
          {
            image: "/assets/icons/selenium-icon.png",
            label: "Selenium",
            section: "Test-Automation",
          },
          {
            image: "/assets/icons/jmeter-icon.png",
            label: "Apache JMeter",
            section: "Test-Automation",
          },
          {
            image: "/assets/icons/appium-icon.png",
            label: "Appium",
            section: "Test-Automation",
          },
          {
            image: "/assets/icons/jest-icon.png",
            label: "Jest",
            section: "Test-Automation",
          },
          {
            image: "/assets/icons/cypress-icon.png",
            label: "Cypress",
            section: "Test-Automation",
          },
          {
            image: "/assets/icons/postman-icon.png",
            label: "Postman",
            section: "Test-Automation",
          },
          {
            image: "/assets/icons/ranorex-icon.png",
            label: "Ranorex",
            section: "Test-Automation",
          },
        ]}
      />

      <WebPages
        heading="Future Ready Solution Across Industries"
        paragraph="To help the business deliver more value to its end-users and streamline business operations with digital solutions, we offer IT development services covering every industry and niche."
        p1="Develop an ecommerce app like Amazon or something unique. In either case, we are here to help you."
        p2="Enabling restaurant and food delivering business with digital solutions that streamline their business."
        p3="Helping ambitious companies deliver new-age entertainment to their user, with media and entertainment solutions."
        p4="Techanic InfoTech is equipping agents and companies with digital solutions, via Real Estate App development."
        p5="Healthcare App Development services from experienced and professional mobile app developers are at your fingertips."
        p6="Enter the Edtech future with School Management and an advanced learning management system from a tech-savvy brand."
        p7="Tap into the real potential of the modern supply chain with our data-driven logistics and transport app development services."
        p8="Fintech is the future and the future is now. Avail renowned fintech app development services and build your own digital solution."
        p9="Develop travel and hospitality solutions with experienced team of developers and designers at Techanic Infotech."
      />
      <Portfolio
        heading="Our Portfolio"
        headingpart1="Our"
        headingpart2="Portfolio"
        paragraph="At Techanic InfoTech, we let our work speak for itself. Here’s a glimpse into our technical prowess in the form of market-leading solutions."
        bgColor="F6FAFD"
        cards={cards}
        divBtn="#0000ff"
        direction="right"
        color1="#0000ff"
        color2="#001289"
        btntext="white"
      />
      <Ratings
        heading="Best Recognized By The Best"
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
      <Collab />
      <TechSuccess
        headingPart1="Ready For "
        headingPart2="Tech Success?"
        paragraph="Are you ready to experience the level of success that others can only dream of? We enable explosive market success with streamlined business operations while keeping end users happy. Techanic InfoTech with renowned web and mobile app development services is here to help you."
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
      <ClientTestimonials
        heading="Client Testimonials"
        cardBgColor="F1F5F9"
        paragraph="With a 93% Client Satisfaction Rate, Our Customer Has Nothing But Good Works and Praises To Say About Us. Here are some client testimonials."
        bgColor="ffffff"
      />

      <HomepageBlogs />
    </>
  );
}
