import OurClients from "@/components/clients/page";

import Content from "@/lib/secondpage/Ewallet/content";
import StartWithUS from "@/components/getStarted/startWithus";
import Portfolio from "@/components/getStarted/portfolio/portfolio";
import Experts from "@/lib/secondpage/dev";
import HiringDevs from "@/lib/secondpage/hireDev";
import TechSuccess from "@/lib/colab/techSuccess";

import ClientTestimonials from "@/lib/clientsReviews/clients";

import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import EwalletCards from "@/lib/secondpage/Ewallet/ewalletcards";

import Feature from "@/lib/secondpage/features";

import FoodDeliveryBanner from "@/components/FoodDeliveryBanner";

import Opportunity from "@/lib/secondpage/devProcess/opportunity";
import Weblanguages from "@/components/weblanguages";
import Head from "next/head";
import ContactInfo from "@/components/formSection/contactInfo";
import Panel from "@/lib/secondpage/Panel";
import CloneApp from "@/lib/secondpage/cloneapp";
import ExpertsDev from "@/lib/secondpage/ExpertsDev";
import CardSection from "@/lib/secondpage/cardssection";
import Panels from "@/lib/secondpage/Panels";
import Icons from "@/lib/secondpage/Icons";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";

import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import SolutionPagesCards from "@/lib/secondpage/devProcess/SolutionPagesCards";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
const cards = [
  {
    id: 1,
    image: "/assets/portfolioImages/pikit-portfolio-image.webp",
    heading: "Pikit Food Delivery",
    para: "Pikit is a user-friendly food delivery app designed to connect customers with a wide variety of local restaurants.",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=in.pikit.app&pcampaignid=web_share",
    appleLink:
      "https://apps.apple.com/in/app/pikit-food-grocery-delivery/id1536007416",
    webLink:
      "https://apps.apple.com/in/app/pikit-food-grocery-delivery/id1536007416",
  },
  {
    id: 2,
    image: "/assets/portfolioImages/msosi-drop-portfolio-image.webp",
    heading: "MSOSI drop Food Delivery",
    para: "The MSOSI drop food delivery app is designed to streamline the food ordering and delivery process. ",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=tz.co.dukaapp.food&pcampaignid=web_share",
    appleLink:
      "https://apps.apple.com/am/app/msosidrop-food-delivery/id1669215594",
    webLink: "https://msosidrop.co.tz/",
  },
  {
    id: 3,
    image: "/assets/portfolioImages/glovo-portfolio-image.webp",
    heading: "Glovo Food Delivery",
    para: "Glovo offers flexible ordering for groceries, meals, and more.",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.glovo&pcampaignid=web_share",
    appleLink:
      "https://apps.apple.com/us/app/glovo-food-delivery-and-more/id951812684",
    webLink: "https://glovoapp.com/pl/pl/",
  },
  {
    id: 4,
    image: "/assets/portfolioImages/wellserved-portfolio-image.webp",
    heading: "WellServed Food Delivery",
    para: "WellServed offers a curated selection of local restaurants with secure payment methods and real-time tracking. ",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.teonite.wellserved&pcampaignid=web_share",
    appleLink: "https://apps.apple.com/pl/app/wellserved/id874376551",
    webLink: "https://wellserved.co/en/",
  },
  {
    id: 5,
    image: "/assets/portfolioImages/menuam-portfolio-image.webp",
    heading: "Menu.am Food Delivery",
    para: "Menu.am provides a convenient way to order from a wide selection of local restaurants. ",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=am.menu.app&pcampaignid=web_share",
    appleLink:
      "https://apps.apple.com/us/app/menu-am-food-more-delivery/id991535987",
    webLink: "https://menu.am/",
  },
  {
    id: 6,
    image: "/assets/portfolioImages/doordash-portfolio-image.webp",
    heading: "DoorDash Food Delivery",
    para: "DoorDash connects users with the best local restaurants for easy food delivery. ",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.dd.doordash&hl=en&gl=US",
    appleLink:
      "https://apps.apple.com/us/app/doordash-food-delivery/id719972451",
    webLink: "https://www.doordash.com/",
  },
  {
    id: 7,
    image: "/assets/portfolioImages/foodora-portfolio-image.webp",
    heading: "Foodora Food Delivery",
    para: "Foodora offers food delivery from top local restaurants. With a sleek design, real-time order updates, and options for scheduled deliveries, it makes dining from home easy and enjoyable.",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.foodora.android",
    appleLink: "https://apps.apple.com/us/app/foodora/id706231881",
    webLink: "https://www.foodora.com/",
  },
  {
    id: 8,
    image: "/assets/portfolioImages/bolt-food-portfolio-image.webp",
    heading: "Bolt Food Delivery",
    para: "Bolt Food offers a fast and reliable food delivery service from local restaurants. ",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.bolt.android.food",
    appleLink: "https://apps.apple.com/us/app/bolt-food/id1478183347",
    webLink: "https://bolt.eu/en/food/",
  },
];

export const metadata = {
  contentLanguage: "en-us",
  title: "Food Delivery App Development Company- Techanic Infotech",
  description:
    "Techanic Infotech is a top food delivery app development company that provides food delivery app development services. Hire food delivery app developers.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/solutions/food-delivery-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Food Delivery App Development Company- Techanic Infotech",
    description:
      "Techanic Infotech is a top food delivery app development company that provides food delivery app development services. Hire food delivery app developers.",
    url: "https://www.techanicinfotech.com/solutions/food-delivery-app-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/solutions/food-delivery-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "Food Delivery App Development Company- Techanic Infotech",
    description:
      "Techanic Infotech is a top food delivery app development company that provides food delivery app development services. Hire food delivery app developers.",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/solutions/food-delivery-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};
export default function FoodDelivery() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ProfessionalService",
            priceRange: "$25-$50",
            name: "Food Delivery App Development Company - Techanic Infotech",
            url: "https://www.techanicinfotech.com/solutions/food-delivery-app-development-company",
            image:
              "https://www.techanicinfotech.com/OGI/solutions/food-delivery-app-development-og.webp",
            description:
              "Techanic Infotech is a top food delivery app development company that provides food delivery app development services. Hire food delivery app developers.",
            address: [
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur  Rajasthan, India",
                addressLocality:
                  "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302026",
                addressCountry: "IN",
                telephone: "+91 7222001000",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "224 W 35th St Ste 500 #2215 New York, NY 10001",
                addressLocality:
                  "224 W 35th St Ste 500 #2215 New York, NY 10001",
                addressRegion: "New York",
                postalCode: "10001",
                telephone: "+1 8053364021",
                addressCountry: {
                  "@type": "Country",
                  name: "US",
                },
              },
              {
                "@type": "PostalAddress",
                streetAddress:
                  "404-F Aspin Commercial Tower, Sheikh Zayed Road, Dubai",
                addressLocality:
                  "404-F Aspin Commercial Tower, Sheikh Zayed Road",
                addressRegion: "DUBAI",
                postalCode: "417213",
                telephone: "+971 524981077",
                addressCountry: {
                  "@type": "Country",
                  name: "AE",
                },
              },
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Via Giuseppe Mazzini nu. 6, Flat nu 107, MILANO 20123, ITALY",
                addressLocality:
                  "Via Giuseppe Mazzini nu. 6, Flat nu 107, MILANO",
                addressRegion: "MILANO",
                postalCode: "20123",
                telephone: "+39 3517578120",
                addressCountry: {
                  "@type": "Country",
                  name: "IT",
                },
              },
            ],
          }),
        }}
      />
      {/* LocalBusiness Schema */}
      {/* <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Techanic Infotech",
            image: "https://www.techanicinfotech.com/OGI/solutions/food-delivery-app-development-og.webp",
            "@id":
              "https://www.techanicinfotech.com/solutions/food-delivery-app-development-company",
            url: "https://www.techanicinfotech.com/solutions/food-delivery-app-development-company",
            priceRange: "$25-$50",
            address: [
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur  Rajasthan, India",
                addressLocality:
                  "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302026",
                addressCountry: "IN",
                telephone: "+91 7222001000",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "224 W 35th St Ste 500 #2215 New York, NY 10001",
                addressLocality:
                  "224 W 35th St Ste 500 #2215 New York, NY 10001",
                addressRegion: "New York",
                postalCode: "10001",
                telephone: "+1 8053364021",
                addressCountry: {
                  "@type": "Country",
                  name: "US",
                },
              },
              {
                "@type": "PostalAddress",
                streetAddress:
                  "404-F Aspin Commercial Tower, Sheikh Zayed Road, Dubai",
                addressLocality:
                  "404-F Aspin Commercial Tower, Sheikh Zayed Road",
                addressRegion: "DUBAI",
                postalCode: "417213",
                telephone: "+971 524981077",
                addressCountry: {
                  "@type": "Country",
                  name: "AE",
                },
              },
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Via Giuseppe Mazzini nu. 6, Flat nu 107, MILANO 20123, ITALY",
                addressLocality:
                  "Via Giuseppe Mazzini nu. 6, Flat nu 107, MILANO",
                addressRegion: "MILANO",
                postalCode: "20123",
                telephone: "+39 3517578120",
                addressCountry: {
                  "@type": "Country",
                  name: "IT",
                },
              },
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.facebook.com/techanicinfotech/",
              "https://x.com/techanicinfo",
              "https://www.instagram.com/techanic_infotech_/",
              "https://www.linkedin.com/company/techanic-infotech/",
              "https://www.techanicinfotech.com/solutions/food-delivery-app-development-company",
            ],
          }),
        }}
      /> */}
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Techanic Infotech",
            alternateName: "Techanic Infotech",
            url: "https://www.techanicinfotech.com/solutions/food-delivery-app-development-company",
            logo: "https://www.techanicinfotech.com/OGI/solutions/food-delivery-app-development-og.webp",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91 7222001000",
                contactType: "sales",
                areaServed: "IN",
                availableLanguage: "en",
              },
              {
                "@type": "ContactPoint",
                telephone: "+1 8053364021",
                contactType: "sales",
                areaServed: "US",
                availableLanguage: "en",
              },
              {
                "@type": "ContactPoint",
                telephone: "+971 525981077",
                contactType: "sales",
                areaServed: "AE",
                availableLanguage: "en",
              },
              {
                "@type": "ContactPoint",
                telephone: "+39 3517578120",
                contactType: "sales",
                areaServed: "IT",
                availableLanguage: "en",
              },
            ],
            sameAs: [
              "https://www.facebook.com/techanicinfotech/",
              "https://x.com/techanicinfo",
              "https://www.instagram.com/techanic_infotech_/",
              "https://www.linkedin.com/company/techanic-infotech/",
              "https://www.techanicinfotech.com/solutions/food-delivery-app-development-company",
            ],
          }),
        }}
      />
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@id":
              "https://www.techanicinfotech.com/solutions/food-delivery-app-development-company",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How user-friendly are Techanic InfoTech's food delivery apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Techanic InfoTech's food delivery app development prioritizes a user-centric design, ensuring an intuitive interface that makes navigating menus, placing orders, and tracking deliveries effortless for users.",
                },
              },
              {
                "@type": "Question",
                name: "What security measures are in place for Techanic InfoTech's food delivery applications?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our food delivery application development includes the latest encryption and secure payment gateways, safeguarding user data and transactions against unauthorized access.",
                },
              },
              {
                "@type": "Question",
                name: "Can Techanic InfoTech's food delivery platforms manage high-volume orders?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our food delivery platform development is engineered to handle high traffic and large volumes of orders smoothly, ensuring reliability during peak hours.",
                },
              },
              {
                "@type": "Question",
                name: "Are the food delivery app development services from Techanic InfoTech cost-effective?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Techanic InfoTech offers competitive pricing for our food delivery app development solutions, providing affordable options without compromising on quality or functionality.",
                },
              },
              {
                "@type": "Question",
                name: "How does Techanic InfoTech ensure its food delivery apps stay competitive?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We continuously integrate the latest market trends and technological advancements into our food delivery app development services to keep your app ahead of the curve.",
                },
              },
              {
                "@type": "Question",
                name: "What features are included to boost user engagement in Techanic InfoTech's food delivery apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our food delivery app solution includes features like loyalty programs, personalized offers, and interactive UI elements to keep users engaged and encourage repeat usage.",
                },
              },
              {
                "@type": "Question",
                name: "Does Techanic InfoTech adhere to confidentiality with food delivery app development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely, we respect client privacy and are committed to signing Non-Disclosure Agreements (NDAs) for all our food delivery app development projects.",
                },
              },
              {
                "@type": "Question",
                name: "Why should I choose Techanic InfoTech for my food delivery app development needs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Choosing Techanic InfoTech means partnering with a food delivery app development company that brings expertise, innovation, and a track record of successful app launches to the table.",
                },
              },
              {
                "@type": "Question",
                name: "In what ways does Techanic InfoTech contribute to the success of my food delivery app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our dedicated food delivery app developers and designers work meticulously to ensure that your app is not only market-ready but also equipped with features that drive user satisfaction and business growth.",
                },
              },
              {
                "@type": "Question",
                name: "Can Techanic InfoTech develop food delivery apps that cater to various regions and cuisines?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we specialize in creating food delivery apps that support multiple cuisines and are adaptable to different regional preferences, enhancing the app's market appeal.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can I onboard a team from Techanic InfoTech for my food delivery app project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Techanic InfoTech offers a streamlined hiring process, enabling you to quickly bring our expert food delivery app developers on board to kickstart your project wwithin24 hours, supercharging food ordering app development.",
                },
              },
              {
                "@type": "Question",
                name: "Does Techanic InfoTech provide white-label solutions for food delivery apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer white-label food delivery app development services that allow you to launch your app swiftly with a customizable framework suited to your brand identity.",
                },
              },
            ],
          }),
        }}
      />
      <FoodDeliveryBanner
        headingPart1="Food Delivery"
        headingPart2="App Development Company"
        heading="Food Delivery App Development Company"
        paragraph={`Embark on a journey to digital excellence with Techanic InfoTech – A Leading Food Delivery App Development Company. This is where innovative food delivery app development meets business acumen.
        Elevate your culinary venture with our cutting-edge, user-centric app solutions designed for success in the bustling food delivery landscape. Let's craft your success story, one order at a time. `}
        gif="/assets/bannerimages/food-delivery-banner-mini-image.webp"
        showGif={true}
        gradient="262.96deg, #FF4D4D 0%, #F9D1D1 125.44%"
        image="/assets/food-delivery-banner-vector-image.png"
        width="500px"
        spanColor="white"
        showBorder={false}
        paracolor="white"
        btnbg="93.29deg, #ffffff -48.03%, #ffffff 160.39%"
        paddingBottom="40px"
        fillcolor="white"
        btnContent="Contact Us"
      />
      <OurClients
        headingpart1="Working With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <CloneApp
        id="grad-6"
        headingPart1="Develop Food"
        headingPart2="Delivery Clone Apps"
        paragraph="Are you planning to develop a food delivery app like Zomato, UberEats,
       or FoodPanda? Our clone app development for food delivery has got you covered.
       Use our expertise-driven food order app development services to build a food delivery clone app."
        cloneData={[
          {
            id: 0,
            label: "Zomato Clone App Development",
            content:
              "Craft a Zomato-like experience with our Zomato clone app development, offering robust features like curated lists of top-rated restaurants, in-depth reviews, and culinary collections. This service is tailored for entrepreneurs who wish to enrich the dining journey with insights and community-driven recommendations.",
            image: "/assets/cloneappImages/zomato-clone-image.webp",
          },
          {
            id: 1,
            label: "Food Panda Clone App Development",
            content:
              "Build a hyper-local food ordering service with our Food Panda clone app development, focusing on connecting users with the best nearby eateries and instant delivery options. This is perfect for those looking to dominate the local food delivery scene with a community-focused approach.",
            image: "/assets/cloneappImages/food-panda-clone-image.webp",
          },
          {
            id: 2,
            label: "UberEats Clone App Development",
            content:
              "Create an app that's all about speed and convenience with our UberEats clone app development, featuring lightning-fast delivery services, an easy reorder function, and a seamless reward system. Ideal for businesses aiming to deliver a top-tier service where speed is as critical as the quality of the food.",
            image: "/assets/cloneappImages/uber-eats-clone-image.webp",
          },
          {
            id: 3,
            label: "Grubhub Clone App Development",
            content:
              "Our Grubhub clone app development emphasizes a comprehensive solution for varied dining preferences, featuring integrated loyalty programs, custom meal combos, and group ordering capabilities. It's designed for businesses that want to offer a collective and inclusive dining and delivery experience.",
            image: "/assets/cloneappImages/grubhub-clone-image.webp",
          },
          {
            id: 4,
            label: "DoorDash Clone App Development",
            content:
              "With our DoorDash clone app development, emphasize a feature-rich dashboard for real-time analytics, targeted promotions, and a customer-first approach that includes delivery personalization options. This service is for entities focused on creating customer-centric delivery experiences.",
            image: "/assets/cloneappImages/doordash-clone-image.webp",
          },
          {
            id: 5,
            label: "Deliveroo Clone App Development",
            content:
              "Our Deliveroo clone app development stands out by promoting an environmentally conscious ordering system with features like carbon footprint tracking for each order and support for local sustainable restaurants. It's ideal for markets where eco-conscious dining is not just a preference but a lifestyle.",
            image: "/assets/cloneappImages/deliveroo-clone-image.webp",
          },
          // Dating Clone Apps
        ]}
      />
      <ExpertsDev
        heading="Enter The Food Delivery Market With A Bang"
        paragraph="Our food-ordering app developers are here to help you disrupt the industry."
        text=" Customize Now"
        gradient="93.21deg, #FF2222 -12.79%, #DBBFBF 107.02%"
        justifyImage="center"
        btntext="white"
        hovertext="black"
        textColor="white"
        isGradientPage={true}
        useGif={true}
        gifSrc="/assets/food-delivery-cta-image-1.png"
        image="/assets/food-delivery-cta-image-1.webp"
        showBorder={true}
        hovercolor="#ffffff"
        border="white"
        initialcolor="white"
      />
      <CardSection
        color="0F53FF"
        heading={`Food Delivery App Developers Services, Got You Covered.`}
        headingPart1="Food Delivery App "
        headingPart2="Developers Services,Got You Covered."
        mobileheadingPart1="Food Delivery App "
        mobileheadingPart2="Developers Services,Got You Covered."
        paragraph="Techanic InfoTech understands the changing needs of businesses and the ambitious nature of startups. 
 As a food order app development company, we offer a range of services, covering every client’s diverse needs."
        cardItems={[
          {
            image: "/assets/icons/custom-food-delivery-app-icon.png",
            title: "Custom Food Delivery App Development",
            description:
              "As a leading food delivery app development company, Techanic Infotech specializes in delivering custom food delivery app development services. Our food delivery mobile app development process ensures your app stands out in the market.",
          },
          {
            image: "/assets/icons/restaurent-app-development-icon.png",
            title: "Restaurant App Development",
            description:
              "Our food app development company is adept at creating robust restaurant apps that enhance the dining experience. We focus on food delivery application development that streamlines order placement, management, and delivery.",
          },
          {
            image: "/assets/icons/cloud-kitchen-food-delivery-app-icon.png",
            title: "Cloud Kitchen Food Delivery App Development",
            description:
              "With our on-demand food delivery app development company expertise, we craft solutions that serve cloud kitchen models, providing a seamless interface for order management and delivery operations. Our online food delivery app development ensures efficiency.",
          },
          {
            image: "/assets/icons/aggregator-food-delivery-app-icon.png",
            title: "Aggregator App for Food Delivery",
            description:
              "Techanic Infotech offers comprehensive food delivery app development solutions, including aggregator app development. Our food delivery app developers build platforms that connect customers with restaurants, delivering a complete on-demand food delivery app experience.",
          },
          {
            image: "/assets/icons/classified-maintenance-icon.png",
            title: "Food Delivery Platform Development",
            description:
              "As a seasoned food app development company, Techanic Infotech understands the intricacies of creating a successful platform. We offer white-label food delivery app development, allowing businesses to quickly launch with a scalable food delivery app solution seamlessly.",
          },
          {
            image: "/assets/icons/food-delivery-website-development-icon.png",
            title: "Food Delivery Website Development",
            description:
              "Extend your reach beyond mobile devices with our food delivery website development services. Our team of expert food delivery web developers ensures your online presence is strong, with a user-friendly interface and all the functionalities of your food delivery mobile app.",
          },
        ]}
        bgColor="#ffffff"
      />

      <Panels
        headingPart1="Feature Rich "
        headingPart2="Food Delivery App Solutions"
        paragraph="Enabling our clients to capture their users’ attention and spellbound them with feature-filled and meaningful food delivery applications. We are here to convert your audience’s requirements to robust features."
        userPanelCards={[
          {
            icon1: Icons.EasySignUp,
            h1: "Easy Sign-Up/Login",
            p1: "A streamlined sign-up process ensuring quick and easy access to the food delivery mobile app.",
            icon2: Icons.HealthRecords,
            h2: "Multiple Payment Options",
            p2: "Secure and diverse payment methods are included for user convenience in the food delivery application.",
          },
          {
            icon1: Icons.AdvanceMatchFilters,
            h1: "Advanced Search Filters",
            p1: "Users can effortlessly find their favorite cuisines or restaurants with customizable search options.",
            icon2: Icons.OrderHistory,
            h2: "Order History",
            p2: "Users can view their past orders to easily repeat orders, enhancing the food ordering app development's usability",
          },
          {
            icon1: Icons.RealTimeAlerts,
            h1: "Real-Time Order Tracking",
            p1: "Our food delivery app developers integrate GPS tracking for users to follow their orders in real time.",
            icon2: Icons.Rating,
            h2: "Ratings and Reviews",
            p2: "A feature allowing users to rate and review restaurants and dishes, contributing to community-driven quality assurance",
          },
        ]}
        adminPanelCards={[
          {
            icon1: Icons.Dashboard,
            h1: "Dashboard Analytics",
            p1: "A powerful dashboard for admins to oversee the entire operation of the on-demand food delivery app.",
            icon2: Icons.UserManagement,
            h2: "User Management",
            p2: "Admins can manage customer profiles, preferences, and app access with ease, a testament to our food delivery app solutions robustness.",
          },
          {
            icon1: Icons.RestaurentManagement,
            h1: "Restaurant Management",
            p1: "This feature allows for the addition, approval, and management of restaurants listed on the platform.",
            icon2: Icons.UserManagement,
            h2: "Analytics and Reporting",
            p2: "The admin panel includes advanced reporting tools for data-driven decision-making, a highlight of our food app development services.",
          },
          {
            icon1: Icons.HealthRecords,
            h1: "Revenue Management",
            p1: "Our dedicated food delivery app developers enable admins to track earnings, commissions, and payouts within the app.",
            icon2: Icons.MarketingTools,
            h2: "Marketing Tools",
            p2: "Integrated marketing tools in the admin panel help in creating and managing promotional campaigns and discounts, driving the business forward.",
          },
        ]}
        managenentPanelCards={[
          {
            icon1: Icons.MenuManagement,
            h1: "Menu Management",
            p1: "Restaurants can update their menus, prices, and items in real time, showcasing the flexibility of our food delivery platform development.",
            icon2: Icons.OrderManagement,
            h2: "Order Management",
            p2: "A comprehensive system for restaurants to manage incoming orders efficiently and ensure timely food delivery.",
          },
          {
            icon1: Icons.SalesAnalytics,
            h1: "Sales Analytics",
            p1: "Detailed analytics provided by the food delivery app development company to help restaurants understand customer preferences and sales trends.",
            icon2: Icons.Notifications,
            h2: "Push Notifications",
            p2: " An essential tool for engagement, allowing restaurants to send out alerts and promotional offers to customers.",
          },
          {
            icon1: Icons.LoyaltyPrograms,
            h1: "Loyalty Program Integration",
            p1: "Our food delivery app development services facilitate the creation of custom loyalty programs to reward repeat customers.",
            icon2: Icons.UserFeedback,
            h2: "Feedback Management",
            p2: "Restaurants receive direct feedback from customers, which is crucial for service improvement and customer satisfaction.",
          },
        ]}
        li1=" User Panel Features"
        li2="Admin Panel Features"
        li4="Restaurant Panel Features"
        li1Small1="User"
        li1Small2="Admin"
        li1Small4="Restaurant"
        panelImage="/assets/icons/restaurent-panel-icon.png"
        showLi3={false}
        showLi4={true}
        bgColor="F3F3FA"
        textColor1="white"

        // showLi4={true}
      />

      <HiringDevelopers
        headingPart1="Hire Food Delivery "
        headingPart2="App Developers In 24 Hours"
        paragraph1="When you choose to hire food delivery app developers from Techanic InfoTech, you are selecting a partnership with a leader in the app development space. Our team is not just a group of developers; they are innovators and problem-solvers who are dedicated to crafting a food delivery app development solution that will place you at the forefront of the food delivery market. Our bespoke food app development is designed to cater to the specific needs of your business model, ensuring that your app is not only functional 
        but also stands out for its user experience and reliability."
        paragraph2="Techanic InfoTech prides itself on the speed and efficiency of its services. Recognizing the importance of time in the fast-paced food delivery industry, we guarantee to assign a dedicated team of food delivery app developers within 24 hours. This commitment to rapid deployment, combined with our food delivery platform development expertise, allows us to build a food delivery 
        or food ordering website that is tailored to your requirements."
        // bgColor="f3edc8"
        textcolor="#cb202d"
        divBtn="red"
        direction="right"
        color1="#D2042D"
        color2="#CE4D49"
        btntxt="white"
        image="/assets/hiring-developers-image.webp"
      />
      <TechSuccess
        headingPart1="Choose The Best "
        headingPart2="Food Delivery Development Company"
        heading="Choose The Best Food Delivery Development Company"
        paragraph="Choosing the best food delivery app development company is pivotal for capturing the essence of
         your brand and the efficiency of service in a digital platform."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#F3F3FA"
      />
      <Languages
        head="Food Delivery App Development – Tech Stack"
        para="Using only the best and most industrial-recognized tech stack in food delivery app development to deliver solutions that don’t only perform but also stand the test of market trends and changing user demands."
        bgColor="#ffffff"
        iconheight="60px"
        iconwidth="60px"
        sections={[
          {
            image: "/assets/icons/front-end-icon.svg",
            label: "Frontend",
            flipIcon: "icons/front-end-icon.svg",
          },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Database",
          },
          { image: "/assets/icons/backend-icon.svg", label: "Backend" },
          {
            image: "/assets/icons/ui-ux-label-icon.svg",
            label: "UI/UX",
          },

          {
            image: "/assets/icons/payment-icon.svg",
            label: "Payment Gateway",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/flutter-icon.png",
            label: "Flutter",
            section: "Frontend",
          },
          {
            image: "/assets/icons/swift-icon.png",
            label: "Swift",
            section: "Frontend",
          },
          {
            image: "/assets/icons/kotlin-icon.png",
            label: "Kotlin",
            section: "Frontend",
          },
          {
            image: "/assets/icons/angular-icon.png",
            label: "Angular",
            section: "Frontend",
          },
          {
            image: "/assets/icons/xamarin-icon.png",
            label: "Xamarin",
            section: "Frontend",
          },
          {
            image: "/assets/icons/next-js-icon.png",
            label: "Next.js",
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

          // Back-end
          {
            image: "/assets/icons/ruby-on-rails-icon.png",
            label: "Ruby On Rails",
            section: "Backend",
          },
          {
            image: "/assets/icons/php-development-icon.png",
            label: "PHP",
            section: "Backend",
          },
          {
            image: "/assets/icons/python-icon.png",
            label: "Python",
            section: "Backend",
          },
          {
            image: "/assets/icons/node-js-icon.png",
            label: "Node.js",
            section: "Backend",
          },
          {
            image: "/assets/icons/django-icon.png",
            label: "Django",
            section: "Backend",
          },
          {
            image: "/assets/icons/java-icon.png",
            label: "Java",
            section: "Backend",
          },
          {
            image: "/assets/icons/express-js-icon.png",
            label: "Express.js",
            section: "Backend",
          },

          // Database
          {
            image: "/assets/icons/firebase-icon.png",
            label: "Firebase",
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
            image: "/assets/icons/sqlite-icon.png",
            label: "SQLite",
            section: "Database",
          },
          {
            image: "/assets/icons/mysql-icon.png",
            label: "MySQL",
            section: "Database",
          },
          {
            image: "/assets/icons/oracle-icon.png",
            label: "Oracle",
            section: "Database",
          },

          // UI/UX
          {
            image: "/assets/icons/adobe-xd-icon.png",
            label: "Adobe XD",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/figma-icon.png",
            label: "Figma",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/photoshop-icon.png",
            label: "Photoshop",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/illustrator-icon.png",
            label: "Illustrator",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/sketch-icon.png",
            label: "Sketch",
            section: "UI/UX",
          },

          // Payment Gateways
          {
            image: "/assets/icons/paypal-icon.png",
            label: "PayPal",
            section: "Payment Gateway",
          },
          {
            image: "/assets/icons/alipay-icon.png",
            label: "Alipay",
            section: "Payment Gateway",
          },
          {
            image: "/assets/icons/stripe-icon.png",
            label: "Stripe",
            section: "Payment Gateway",
          },
          {
            image: "/assets/icons/square-icon.png",
            label: "Square",
            section: "Payment Gateway",
          },
          {
            image: "/assets/icons/adyen-icon.png",
            label: "Adyen",
            section: "Payment Gateway",
          },
        ]}
      />

      <AppDevelop
        headingPart1="Food Delivery App Development "
        headingPart2="Process At Techanic InfoTech"
        heading="Food Delivery App Development Process At Techanic InfoTech"
        paragraph=" We follow a planned-out food delivery app development process, ensuring our clients 
        get what they ask for, without any delay or hidden cost of development.  "
        image1="/assets/icons/requirement-analysis-icon.png"
        h1="Conceptualization and Strategy"
        p1="We begin by aligning our food delivery app development services with your business goals to conceptualize a strategy."
        image2="/assets/icons/design-prototype-icon.png"
        h2="UI/UX Design"
        p2="Our food delivery app designers craft intuitive and engaging user interfaces, ensuring an optimal user experience aligned with the latest trends."
        image3="/assets/icons/development-testing-icon.png"
        h3="Technical Development"
        p3="Dedicated food delivery app developers engineer the core functionality, integrating cutting-edge features for a seamless ordering process."
        image4="/assets/icons/quality-assurance-icon.png"
        h4="Quality Assurance"
        p4="Rigorous testing is conducted by our food delivery app development company to ensure a glitch-free, secure, and responsive application."
        image5="/assets/icons/deployment-icon.png"
        h5="Launch and Deployment"
        p5="We deploy your on-demand food delivery app across platforms, ensuring smooth operation and compliance with app store regulations."
        image6="/assets/icons/maintenance-updates-icon.png"
        h6="Support and Scaling"
        p6="Our food delivery app development solution includes ongoing support and updates, ensuring your app evolves with your
              growing customer base."
        cards={[
          {
            image: "/assets/icons/requirement-analysis-icon.png",
            title: "Conceptualization and Strategy",
            description:
              "We begin by aligning our food delivery app development services with your business goals to conceptualize a strategy.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "UI/UX Design",
            description:
              "Our food delivery app designers craft intuitive and engaging user interfaces, ensuring an optimal user experience aligned with the latest trends.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "Technical Development",
            description:
              "Dedicated food delivery app developers engineer the core functionality, integrating cutting-edge features for a seamless ordering process.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
            title: "Quality Assurance",
            description:
              "Rigorous testing is conducted by our food delivery app development company to ensure a glitch-free, secure, and responsive application.",
          },
          {
            image: "/assets/icons/deployment-icon.png",
            title: "Launch and Deployment",
            description:
              "We deploy your on-demand food delivery app across platforms, ensuring smooth operation and compliance with app store regulations.",
          },
          {
            image: "/assets/icons/maintenance-updates-icon.png",
            title: "Support and Scaling",
            description:
              "Our food delivery app development solution includes ongoing support and updates, ensuring your app evolves with your growing customer base.",
          },
        ]}
        align="center"
      />
      <ExpertsDev
        heading="Build Your Food Delivery App, Right Now!"
        paragraph="Developing a food delivery app is faster and easier than ever.
         Get a team of Dedicated Developers within 24 hours."
        isGradientPage={false}
        backColor="#EF4444"
        color="FDBEC0"
        image="/assets/food-delivery-cta-image-2.webp"
        text="Customize Now"
        btnbg=""
        btntext="#ffffff"
        justifyImage="center"
        // color2="FDBEC0"
        // color3="FDBEC0"
        // color4="FDBEC0"
        textColor="white"
        showBorder={true}
        hovercolor="#ffffff"
        hovertext="black"
        border="white"
        initialcolor="white"
      />

      <SolutionPagesCards
        headingPart1="Ending The Hunger Of Users "
        headingPart2="& Businesses With Food Delivery App Solutions"
        heading="Ending The Hunger Of Users & Businesses With Food Delivery App Solutions"
        paragraph="As a team of expert food delivery app developers, we deliver solutions that aren’t only robust and aesthetically appealing, but also solve the users’ problems and streamline your business processes."
        backImgCards="backgroundImages/food-delivery-cards-banner-2.png"
        headingColor="white"
        paragraphColor="white"
        cardItems={[
          {
            image: "/assets/icons/increased-market-research-icon.png",
            title: "Increased Market Reach",
            description:
              "Partnering with Techanic Infotech for food delivery app development opens up a digital avenue to reach more customers, expanding your business beyond local boundaries.",
          },
          {
            image: "/assets/icons/enhance-customer-conveneince-icon.png",
            title: "Enhanced Customer Convenience",
            description:
              "Our food delivery app solution simplifies the ordering process, allowing users to enjoy their favorite meals with just a few taps, enhancing user satisfaction and encouraging repeat business.",
          },
          {
            image: "/assets/icons/data-driven-insights-icon.png",
            title: "Data-Driven Insights",
            description:
              "With our food app development services, businesses gain access to valuable customer data, enabling tailored marketing strategies and personalized customer experiences that drive sales.",
          },
          {
            image: "/assets/icons/operational-efficiency-icon.png",
            title: "Operational Efficiency",
            description:
              "Utilizing our online food delivery app development expertise can streamline your business operations, reduce wait times, and increase the efficiency of order processing and delivery.",
          },
          {
            image: "/assets/icons/brand-strengthening-icon.png",
            title: "Brand Loyalty and Retention",
            description:
              "Techanic Infotech’s food ordering app development fosters brand loyalty by incorporating loyalty programs and personalized offers, incentivizing users to continue using your app.",
          },
          {
            image: "/assets/icons/competetive-edge-icon.png",
            title: "Competitive Edge",
            description:
              "By leveraging our food delivery application development services, you gain a competitive edge with a technologically advanced platform, keeping you ahead in the fast-paced food delivery industry.",
          },
        ]}
        color="0F53FF"
      />

      <Portfolio
        heading="Portfolio"
        headingpart1="Our"
        headingpart2="Portfolio"
        bgColor="F3F3FA"
        paragraph="Techanic InfoTech is the best team of digital wallet app developers out there and our work speaks for itself"
        cards={cards}
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are answers to some of the most frequently asked questions about Food delivery mobile application development."
        questions={[
          "Q1: How user-friendly are Techanic InfoTech's food delivery apps?",
          "Q2: What security measures are in place for Techanic InfoTech's food delivery applications?",
          "Q3: Can Techanic InfoTech's food delivery platforms manage high-volume orders?",
          "Q4: Are the food delivery app development services from Techanic InfoTech cost-effective?",
          "Q5: How does Techanic InfoTech ensure its food delivery apps stay competitive?",
          "Q6: What features are included to boost user engagement in Techanic InfoTech's food delivery apps?",
          "Q7: Does Techanic InfoTech adhere to confidentiality with food delivery app development?",
          "Q8: Why should I choose Techanic InfoTech for my food delivery app development needs?",
          "Q9: In what ways does Techanic InfoTech contribute to the success of my food delivery app?",
          "Q10: Can Techanic InfoTech develop food delivery apps that cater to various regions and cuisines?",
          "Q11: How quickly can I onboard a team from Techanic InfoTech for my food delivery app project?",
          "Q12: Does Techanic InfoTech provide white-label solutions for food delivery apps?",
        ]}
        answers={[
          "A1: Techanic InfoTech's food delivery app development prioritizes a user-centric design, ensuring an intuitive interface that makes navigating menus, placing orders, and tracking deliveries effortless for users.",
          "A2: Our food delivery application development includes the latest encryption and secure payment gateways, safeguarding user data and transactions against unauthorized access.",
          "A3: Yes, our food delivery platform development is engineered to handle high traffic and large volumes of orders smoothly, ensuring reliability during peak hours.",
          "A4: Techanic InfoTech offers competitive pricing for our food delivery app development solutions, providing affordable options without compromising on quality or functionality.",
          "A5: We continuously integrate the latest market trends and technological advancements into our food delivery app development services to keep your app ahead of the curve.",
          "A6: Our food delivery app solution includes features like loyalty programs, personalized offers, and interactive UI elements to keep users engaged and encourage repeat usage.",
          "A7: Absolutely, we respect client privacy and are committed to signing Non-Disclosure Agreements (NDAs) for all our food delivery app development projects.",
          "A8: Choosing Techanic InfoTech means partnering with a food delivery app development company that brings expertise, innovation, and a track record of successful app launches to the table.",
          "A9: Our dedicated food delivery app developers and designers work meticulously to ensure that your app is not only market-ready but also equipped with features that drive user satisfaction and business growth.",
          "A10: Yes, we specialize in creating food delivery apps that support multiple cuisines and are adaptable to different regional preferences, enhancing the app's market appeal.",
          "A11: Techanic InfoTech offers a streamlined hiring process, enabling you to quickly bring our expert food delivery app developers on board to kickstart your project wwithin24 hours, supercharging food ordering app development",
          "A12: Yes, we offer white-label food delivery app development services that allow you to launch your app swiftly with a customizable framework suited to your brand identity.",
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
