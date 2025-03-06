import PageBanner from "@/components/PageBanner";
import OurClients from "@/components/clients/page";
import ContactInfo from "@/components/formSection/contactInfo";
import GradientButton from "@/components/getStarted/GradientButton";
import CTAButton from "@/components/getStarted/CTAButton";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
import Portfolio from "@/components/getStarted/portfolio/portfolio";
import ClientTestimonials from "@/lib/clientsReviews/clients";

import TechSuccess from "@/lib/colab/techSuccess";
import ExpertsDev from "@/lib/secondpage/ExpertsDev";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import Panels from "@/lib/secondpage/Panels";
import CardSection from "@/lib/secondpage/cardssection";
import CloneApp from "@/lib/secondpage/cloneapp";
import AppBenefits from "@/lib/secondpage/devProcess/AppBenefits";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";

const cards = [
  {
    id: 1,
    image: "/assets/portfolioImages/mifinity-portfolio-image.png",
    heading: "Mifinity",
    para: "Mifinity is a global payments provider offering secure and fast eWallet services. ",
    webLink: "https://www.mifinity.com/",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.mifinity&pcampaignid=web_share",
    appleLink: "https://apps.apple.com/us/app/mifinity/id1440262293",
  },
  {
    id: 2,
    image: "/assets/portfolioImages/sonali-ewallet-portfolio-image.png",
    heading: "Sonali eWallet",
    para: "Sonali eWallet is a digital wallet by Sonali Bank for easy financial management. ",
    webLink: "https://www.sonalibank.com.bd/",
    // playstoreLink: "https://play.google.com/store/apps/details?id=com.sonalibank.ewallet",
    // appleLink: "https://apps.apple.com/us/app/sonali-ewallet/id1454980761",
  },
  {
    id: 3,
    image: "/assets/portfolioImages/touch-go-portfolio-image.png",
    heading: "Touch 'n Go",
    para: "Touch 'n Go is a Malaysian eWallet service for fast and convenient payments.",
    webLink: "https://www.touchngo.com.my/",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=my.com.tngdigital.ewallet&pcampaignid=web_share",
    appleLink: "https://apps.apple.com/np/app/touch-n-go-ewallet/id1344696702",
  },
];
// export const metadata ={
//   title: 'eWallet App Development Comapany',
//   robots: 'noindex, nofollow',
// }
export const metadata = {
  contentLanguage: "en-us",
  title: "eWallet App Development Company | eWallet App Developers",
  description:
    "Techanic Infotech is a leading eWallet app development company. We provide custom eWallet app solutions with expert team of eWallet app developers.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/solutions/ewallet-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "eWallet App Development Company | eWallet App Developers",
    description:
      "Techanic Infotech is a leading eWallet app development company. We provide custom eWallet app solutions with expert team of eWallet app developers.",
    url: "https://www.techanicinfotech.com/solutions/ewallet-app-development-company",
    image: "https://www.techanicinfotech.com/OGI/solutions/ewallet-app-development-og.webp",

    alt: "Techanic Infotech",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/solutions/ewallet-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "eWallet App Development Company | eWallet App Developers",
    description:
      "Techanic Infotech is a leading eWallet app development company. We provide custom eWallet app solutions with expert team of eWallet app developers.",
      images: [
        {
          url: "https://www.techanicinfotech.com/OGI/solutions/ewallet-app-development-og.webp", // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ],
  },
  robots: "index, follow",
};
export default function eWalllet() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ProfessionalService",
            priceRange: "$25-$50",
            name: "ewallet App Development Company | Hire ewallet App Developers",
            url: "https://www.techanicinfotech.com/solutions/ewallet-app-development-company",
            image: "https://www.techanicinfotech.com/OGI/solutions/ewallet-app-development-og.webp",
            description:
              "Techanic Infotech is a leading eWallet app development company. We provide custom eWallet app solutions with expert team of eWallet app developers.",
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
            image: "https://www.techanicinfotech.com/OGI/solutions/ewallet-app-development-og.webp",
            "@id":
              "https://www.techanicinfotech.com/solutions/ewallet-app-development-company",
            url: "https://www.techanicinfotech.com/solutions/ewallet-app-development-company",
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
              "https://www.techanicinfotech.com/solutions/ewallet-app-development-company",
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
            url: "https://www.techanicinfotech.com/solutions/ewallet-app-development-company",
            logo: "https://www.techanicinfotech.com/OGI/solutions/ewallet-app-development-og.webp",
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
              "https://www.techanicinfotech.com/solutions/ewallet-app-development-company",
            ],
          }),
        }}
      />
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
      {
        "@context": "https://schema.org",
        "@id":"https://www.techanicinfotech.com/solutions/ewallet-app-development-company",
        "@type": "FAQPage",
         "mainEntity": [{
    "@type": "Question",
    "name": "What makes Techanic InfoTech's eWallet apps easy to use?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "At Techanic InfoTech, we focus on crafting eWallet applications with intuitive interfaces and straightforward navigation, ensuring a hassle-free payment experience for all users."
    }
  },{
    "@type": "Question",
    "name": "How do you ensure the security of its eWallet applications?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We embed state-of-the-art encryption and employ rigorous fraud detection technologies, along with continuous security updates to protect every transaction within our eWallet apps."
    }
  },{
    "@type": "Question",
    "name": "Can Techanic InfoTech's eWallet solutions handle high-volume transactions seamlessly?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, our eWallet solutions are built to handle high volumes of transactions efficiently, ensuring quick and reliable payments with minimal downtime."
    }
  },{
    "@type": "Question",
    "name": "Are Your eWallet app development services affordable?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We strive to offer budget-friendly eWallet solutions without compromising on quality, providing cost-effective services that maximize return on investment for our clients. With us, you don’t have to worry about eWallet app development costs."
    }
  },{
    "@type": "Question",
    "name": "How does Techanic InfoTech stay ahead with its eWallet solutions?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "By continuously integrating the latest technologies and trends, we ensure our eWallet solutions are at the forefront, providing modern-age services that cater to the evolving digital landscape."
    }
  },{
    "@type": "Question",
    "name": "What features does Techanic InfoTech include to enhance user engagement in eWallet apps?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our eWallet apps feature personalized notifications, interactive elements, and reward systems to maintain high user engagement and satisfaction."
    }
  },{
    "@type": "Question",
    "name": "Do you sign Non-Disclosure Agreements (NDAs) for eWallet app development?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we value your privacy and intellectual property, which is why we readily sign NDAs to ensure the confidentiality of your project. That’s what makes us one of the most trusted eWallet mobile app development service providers in the market."
    }
  },{
    "@type": "Question",
    "name": "Why should I choose Techanic InfoTech for my eWallet app development?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Choosing Techanic InfoTech as a mobile wallet app development company means partnering with a company that has a proven track record, expert developers, and a commitment to delivering tailor-made, secure, and efficient eWallet solutions."
    }
  },{
    "@type": "Question",
    "name": "How does Techanic InfoTech contribute to the success of my eWallet app?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our team of expert digital wallet app developers and designers supports your project from ideation to launch and beyond, providing market analysis, strategic planning, and ongoing maintenance to ensure your eWallet app's success."
    }
  },{
    "@type": "Question",
    "name": "Can You develop eWallet apps that support multiple currencies?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Absolutely, we specialize in creating eWallet apps with multi-currency support, enabling seamless transactions across different countries and currencies."
    }
  },{
    "@type": "Question",
    "name": "How quickly can I hire eWallet app developers from Techanic InfoTech?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We can onboard eWallet app developers for your project within 24 hours to ensure that your app development process begins without any delay. We offer different models for hiring eWallet app developers."
    }
  },{
    "@type": "Question",
    "name": "Do you also provide white-label eWallet solutions?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To cater to business's custom demand we also provide White Label eWallet solutions along with custom development services. We customize the white label as per your requirements, giving it a touch of your personal brand."
    }
  }]
}`,
        }}
      />
      <PageBanner
        headingPart1="eWallet App"
        headingPart2="Development Company"
        paragraph="Enable seamless payments, top ups, account management, and bill payment for your users with an innovative eWallet application. Join hands with Techanic InfoTech, an established eWallet app development company. We are here to help you. "
        showVideo={false}
        btntext="Contact Us"
        image="/assets/bannerimages/ewallet-app.webp"
        mobileBackground="/assets/bannerimages/ewallet-banner-image.png"
      />

      <OurClients
        headingpart1="Working With"
        headingpart2="The Best"
        paragraphText="Clients"
      />
      <CloneApp
        id="grad-5"
        headingPart1="eWallet Clone App"
        headingPart2=" Development Solutions"
        paragraph=" Replicating success in eWallet app solution for clients via clone app
      development. Get inspired from the best, work with the best app
      developers, and be the best. We help you develop eWallet app clones."
        cloneData={[
          {
            id: 0,
            label: "PayPal Clone Development",
            content:
              "Leverage our expertise to develop a PayPal-like eWallet app, offering seamless money transfers, enhanced security, and an intuitive user experience. Ideal for businesses seeking a reliable and globally recognized payment solution.",
            image: "/assets/cloneappImages/paypal-clone-app.webp",
          },
          {
            id: 1,
            label: "Venmo Clone Development",
            content:
              "Create a social payment app inspired by Venmo with our tailored development services. This solution is perfect for businesses targeting a younger audience, integrating social media elements with easy and quick money transfer features.",
            image: "/assets/cloneappImages/venmo-clone-app.webp",
          },
          {
            id: 2,
            label: "Google Pay Clone Development",
            content:
              "Develop a Google Pay-like digital wallet with us, focusing on contactless NFC payments, reward systems, and broad compatibility with various financial institutions. Ideal for clients looking to offer a versatile and user-friendly payment app.",
            image: "/assets/cloneappImages/google-pay-clone-app.webp",
          },
          {
            id: 3,
            label: "Cash App Clone Development",
            content:
              "Build an app similar to Cash App with our development services, incorporating features like peer-to-peer payments, stock investments, and Bitcoin trading. This solution caters to clients aiming for a comprehensive financial platform.",
            image: "/assets/cloneappImages/cash-clone-app.webp",
          },
          {
            id: 4,
            label: "Apple Pay Clone Development",
            content:
              "With our Apple Pay clone development, create an eWallet app that emphasizes security and privacy, integrating seamlessly with Apple devices. Ideal for clients who want to offer an easy and secure payment solution for iOS users.",
            image: "/assets/cloneappImages/apple-pay-clone-app.webp",
          },
          {
            id: 5,
            label: "Samsung Pay Clone Development",
            content:
              "Develop a clone of Samsung Pay, focusing on both MST and NFC technologies, to offer clients a versatile payment solution. This service is perfect for businesses targeting Samsung users, combining convenience with a wide merchant acceptance network.",
            image: "/assets/cloneappImages/samsung-pay-clone-app.webp",
          },
        ]}
      />

      <CTAButton
        heading="Develop Next-Best eWallet App"
        paragraph="Tap into our eWallet app development services and bring your idea to reality. "
        btntext="Get Started"
        useGradient={true}
        // backgroundImage="/assets/cta-background-image-2.png"
        textColor="black"
        color1="rgba(173, 210, 255, 0.33)"
        color2="rgba(255, 101, 15, 0.33)"
        // color3="#FF650F54"
        // color4="#ADD2FF54"
        bgColor="#1052FE"
        text="white"
      />
      <CardSection
        headingPart1="Innovation Driving eWallet"
        headingPart2="App Development Services"
        mobileheadingPart1="eWallet App"
        mobileheadingPart2="Development Services"
        paragraph="To help businesses capture a strong foothold in ever-changing market, we offer a range of innovative eWallet software development services. Whether you are planning on developing an eWallet or a crypto platform, we have got you covered."
        cardItems={[
          {
            image: "/assets/icons/cryptocurrency-wallet-development-icon.png",
            title: "Cryptocurrency Wallet Development",
            description:
              "Embrace the future of finance with our Cryptocurrency Wallet Development service. We offer robust solutions to create secure and intuitive wallets that support a variety of digital currencies. Our wallet app solutions come with features like real-time tracking, transaction history, and enhanced security.",
          },
          {
            image: "/assets/icons/closed-wallet-development-icon.png",
            title: "Closed Wallet Development",
            description:
              "Our Closed Wallet Development service is tailored for businesses that wish to offer a dedicated wallet for in-house transactions. Perfect for e-commerce platforms and retailers, these wallets enhance customer loyalty by providing a convenient and secure environment.",
          },
          {
            image: "/assets/icons/semi-closed-wallet-icon.png",
            title: "Semi-Closed Wallet Development",
            description:
              "Expand your payment horizons with our Semi-Closed Wallet Development. These eWallet app solutions can be used at a selected range of merchants and locations, not just within your own platform. They are ideal for businesses looking to offer their customers flexibility.",
          },
          {
            image: "/assets/icons/open-wallet-development-icon.png",
            title: "Open Wallet Development",
            description:
              "Go boundless with our Open Wallet Development, creating a wallet that can be used for any transactions the same as cash. From paying utility bills to transferring money. As a leading mobile payment app development firm, we are here to help you.",
          },
          {
            image: "/assets/icons/nft-based-wallet-icon.png",
            title: "NFT-Based Wallet Development",
            description:
              "Step into the world of digital collectibles with our NFT NFT-based wallet Development service. As a top mobile wallet app development company, we build secure, user-friendly wallets that support the storage, showcase, and transaction of Non-Fungible Tokens (NFTs).",
          },
          {
            image: "/assets/icons/custom-ewallet-app-icon.png",
            title: "Custom eWallet App Development",
            description:
              "Your vision, our execution - the ethos behind our Custom eWallet App Development service. We work closely with our clients to create eWallet applications that cater specifically to their business needs and customer expectations.",
          },
        ]}
        color="0F53FF"
      />
      <ExpertsDev
        heading="Work With eWallet Development Experts"
        paragraph="Want to develop an eWallet App? We have got you covered
         with an expert as an expert mobile wallet app development company."
        text="Get Started"
        gradient="87.3deg, rgba(173, 210, 255, 0.44) -0.39%, rgba(255, 101, 15, 0.44) 91.12%
"
        btntext="#ffffff"
        isGradientPage={true}
        useGif={true}
        justifyImage="center"
        gifSrc="/assets/developers-section-image-2.png"
        image="/assets/developers-section-image-2.png"
        btnbg="#0F53FF"
        justify="center"
      />
      {/* <EwalletCards
        heading="Innovation Driving eWallet App Development Services "
        paragraph="To help businesses capture a strong foothold in ever-changing market, we offer a range of innovative eWallet software development services. Whether you are planning on developing an eWallet or a crypto platform, we have got you covered."
        foodcardback={ewalletcardback}
       
        
        
        position="start"
     headingColor="white"
     paragraphColor="white"
        cardBG="ffffff"
        color="6A056C"
        showExtraCards={false}
        radius="8"

        
      /> */}

      <Panels
        headingPart1="Feature Filled Digital"
        headingPart2="Wallet App Development"
        heading="Feature Filled Digital Wallet App Development"
        paragraph="To help your digital wallet app development solution stand out and help you achieve client satisfaction, we create an eWallet solution that’s 
        feature reach and humane. This is what helps our custom eWallet app development succeed."
        // Image1={ewalletuser}
        // Image2={ewalletdashboard}
        // Image4={ewalletpanel}
        // textColor="white"
        userPanelCards={[
          {
            icon1: "/assets/icons/simplified-registration-icon.svg",
            h1: "Simplified Registration",
            p1: "We ensure a secure sign-up with optional biometric authentication for your peace of mind.",
            icon2: "/assets/icons/instant-money-transfer-icon.svg",
            h2: "Instant Money Transfer",
            p2: "Our eWallet apps enable users to send and receive money instantly, making transactions as simple as a message.",
          },
          {
            icon1: "/assets/icons/flexible-wallet-funding-icon.svg",
            h1: "Flexible Wallet Funding",
            p1: "Our platform allows users to top-up wallets using their preferred payment method, from credit cards to cryptocurrencies.",
            icon2: "/assets/icons/notification-icon.svg",
            h2: "One-Touch Bill Payments",
            p2: "Our digital wallet app developers include this feature to simplify bill payments, offering a one-stop solution.",
          },
          {
            icon1: "/assets/icons/comprehensive-transection-icon.svg",
            h1: "Comprehensive Transaction Log",
            p1: "Techanic Infotech provides a transparent view of your spending, complete with real-time updates and detailed histories.",
            icon2: "/assets/icons/dedicated-support-icon.svg",
            h2: "Dedicated Support Center",
            p2: "We offer round-the-clock support, ensuring help is always a tap away within the app.",
          },
        ]}
        adminPanelCards={[
          {
            icon1: "/assets/icons/admin-dashboard-icon.svg",
            h1: "Intuitive Admin Dashboard",
            p1: "We provide a powerful dashboard for a bird's-eye view of the entire eWallet ecosystem.",
            icon2: "/assets/icons/robust-user-management-icon.svg",
            h2: "Robust User Management",
            p2: "Our digital wallet solutions fit the admin panel with tools for comprehensive user management, including KYC compliance.",
          },
          {
            icon1: "/assets/icons/efficient-dispute-handling-icon.svg",
            h1: "Efficient Dispute Handling",
            p1: "The admin panel of the eWallet app is integrated with a dispute resolution framework to swiftly address and resolve discrepancies.",
            icon2: "/assets/icons/boosting-promotions-icon.svg",
            h2: "Engagement-Boosting Promotions",
            p2: "We facilitate the creation of targeted promotions to enhance user engagement and wallet activity.",
          },
          {
            icon1: "/assets/icons/insight-analytics-icon.svg",
            h1: "Insightful Analytics Suite",
            p1: "To deliver advanced analytics for data-driven insights into user behavior and financial performance, we include this feature.",
            icon2: "/assets/icons/fortified-security-icon.svg",
            h2: "Fortified Security Measures",
            p2: "We prioritize security, offering robust tools to safeguard against unauthorized access and fraudulent activities.",
          },
        ]}
        advancePanelCards={[
          {
            icon1: "/assets/icons/biometric-login-icon.svg",
            h1: "Biometric Login",
            p1: "To create a top-notch eWallet app solution, we incorporate biometric authentication to offer users a seamless and secure login experience.",
            icon2: "/assets/icons/realtime-alerts-icon.svg",
            h2: "Real-Time Alerts",
            p2: "Our eWallet app development solutions send instant push notifications for online payments, ensuring users are always informed.",
          },
          {
            icon1: "/assets/icons/multi-currency-icon.svg",
            h1: "Multi-Currency Support",
            p1: "Our eWallet fintech applications enable transactions in multiple currencies, providing a globalized wallet experience.",
            icon2: "/assets/icons/wallet-interface-icon.svg",
            h2: "Customizable Wallet Interface",
            p2: "We offer a fully customizable wallet interface to align with user preferences and brand identity.",
          },
          {
            icon1: "/assets/icons/automated-backup-icon.svg",
            h1: "Automated Backup",
            p1: "To protect financial data with automated backups, we include this feature, so users never have to worry about losing their wallet information.",
            icon2: "/assets/icons/eco-friendly-rewards-icon.svg",
            h2: "Eco-Friendly Rewards",
            p2: "We promote sustainable spending by offering rewards for eco-friendly choices within the app.",
          },
        ]}
        // managenentPanelCards={[
        //   {
        //     h1: "AI-Powered Matching",
        //     p1: "Leverage artificial intelligence to suggest matches based on user behavior, preferences, and compatibility scores, enhancing the matchmaking process.",
        //     h2: "Video Profiles & Calls",
        //     p2: "Offer users a more dynamic way to present themselves and interact with video profiles and secure in-app video calls.",
        //   },
        //   {
        //     h1: "Safety Verification",
        //     p1: "Enhance user trust with photo verification and safety features, reducing fake profiles and fostering a secure dating environment.",
        //     h2: "Behavioral Analytics",
        //     p2: "Utilize behavioral data to refine user experiences, from personalized match suggestions to tailored app interactions.",
        //   },
        //   {
        //     h1: "Event Planning",
        //     p1: "Introduce features for planning dates or events within the app, encouraging real-world interactions among matches.",
        //     h2: "Gifts & Stickers",
        //     p2: "Enrich conversations and interactions with virtual gifts and stickers, adding a fun and expressive layer to messaging.",
        //   },
        // ]}
        // bgColor="6A056C"
        li1="User Panel"
        li2="Admin Panel"
        li3="Advance Features"
        li1Small1="User"
        li1Small2="Admin"
        li1Small3="Advance"
        showLi3={true}
        textColor1="white"
        // hoverBgColor="4E0B50"
        // headingBG="#4E0B50"
      />

      <GradientButton
        heading="Ready to Revolutionize Your Wallet Experience?"
        childheading1="Empower Your Transactions with Cutting-Edge Technology."
        childheading2="Let’s Create a Seamless Digital Payment Solution Together!
"
        image="/assets/cta-button-ewallet-vector-image.png"
        paragraph="Whether you're launching a new eWallet app or enhancing an existing platform, our expert developers are here to bring your vision to reality. With cutting-edge technology, customizable features, and a focus on user experience, we’ll help you create a eWallet platform that truly stands out."
        useBackgroundImage={false}
        buttonColor="#0F53FF"
        btntextColor="#ffffff"
        color1="rgba(173, 210, 255, 0.44)"
        percent1="-0.39%"
        degree="87.3deg"
        color2="rgba(255, 101, 15, 0.44)"
        percent2="91.12%"
        childHeadingShow={true}
      />
      <HiringDevelopers
        headingPart1="Hire eWallet App "
        headingPart2="Developers in 24 Hours "
        heading="Hire eWallet App Developers in 24 Hours "
        paragraph1="Hire eWallet app developers of your choice within 24 hours. Your own hand-picked team of payment app development and designing experts are just a click away. Collaborate with the best eWallet app development company in the market and give your ideas digital wings that will help you disrupt the digital wallet market."
        paragraph2="Techanic InfoTech is known in the industry for its talented pool of mobile app developers, designers, solution designers, project managers, QA, and so on. This enables us to deliver every payment solution from international payment applications to online payment solutions. Earning us the title of number one team of ewallet app developers. "
        btntxt="white"
        divBtn="#6A056C"
        direction="right"
        color1="#BB61BD"
        color2="#6A056C"
        listData={[
          "Dedicated Developers",
          "Seamless Collaboration ",
          "Expert & Professional",
          "Agile Methodology ",
        ]}
        bgColor="#ffffff"
        image="/assets/hiring-developers-image.webp"
      />
      <TechSuccess
        headingPart1="Choose The Best "
        headingPart2="eWallet App Development Company"
        paragraph="Looking for an eWallet app development partner to help you cross the bridge of market success? Your search ends with Techanic InfoTech. With a market-leading team of mobile wallet app developers we are empowering companies to achieve their dream
         targets and deliver value to end users. 
         Work with us, work with the best."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="430"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#F3F3FA"
      />
      <Languages
        head="Tech Stack for eWallet App Development"
        para="Techanic Infotech maintains quality in eWallet mobile applications via the most advanced, tested, and approved eWallet app 
        tech stack. We use only the best technologies in our mWallet app development."
        bgColor="#F3F3FA"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          {
            image: "/assets/icons/technologies-label-icon.svg",
            label: "Mobile App Development",
            flipIcon: "icons/Technologies-icon.svg",
          },
          { image: "/assets/icons/front-end-icon.svg", label: "Front-end" },
          { image: "/assets/icons/backend-icon.svg", label: "Back-end" },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Database",
          },
          {
            image: "/assets/icons/ui-ux-label-icon.svg",
            label: "UI/UX",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/android-icon.png",
            label: "Android",
            section: "Mobile App Development",
          },
          {
            image: "/assets/icons/ios-icon.png",
            label: "IOS",
            section: "Mobile App Development",
          },
          {
            image: "/assets/icons/ionic-icon.png",
            label: "Ionic",
            section: "Mobile App Development",
          },
          {
            image: "/assets/icons/flutter-icon.png",
            label: "Flutter",
            section: "Mobile App Development",
          },
          {
            image: "/assets/icons/xamarin-icon.png",
            label: "Xamarin",
            section: "Mobile App Development",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "React Native",
            section: "Mobile App Development",
          },
          {
            image: "/assets/icons/objective-c-icon.png",
            label: "Objective-C",
            section: "Mobile App Development",
          },
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
            image: "/assets/icons/php-development-icon.png",
            label: "PHP",
            section: "Back-end",
          },
          {
            image: "/assets/icons/django-icon.png",
            label: "Django",
            section: "Back-end",
          },
          {
            image: "/assets/icons/redis-icon.png",
            label: "Redis",
            section: "Back-end",
          },
          {
            image: "/assets/icons/node-js-icon.png",
            label: "NodeJS",
            section: "Back-end",
          },
          {
            image: "/assets/icons/mongodb-icon.png",
            label: "MongoDB",
            section: "Back-end",
          },
          {
            image: "/assets/icons/python-icon.png",
            label: "Python",
            section: "Back-end",
          },
          {
            image: "/assets/icons/rdbms-icon.png",
            label: "RDBMS",
            section: "Database",
          },
          {
            image: "/assets/icons/mysql-icon.png",
            label: "MySQL",
            section: "Database",
          },
          {
            image: "/assets/icons/elastic-search-icon.png",
            label: "ElasticSearch",
            section: "Database",
          },
          {
            image: "/assets/icons/rethink-db-icon.png",
            label: "RethinkDB",
            section: "Database",
          },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "PostgreSQL",
            section: "Database",
          },
          {
            image: "/assets/icons/illustrator-icon.png",
            label: "inVision",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/sketch-icon.png",
            label: "Sketch",
            section: "UI/UX",
          },
          // {
          //   image: "/assets/icons/flinto-icon.png",
          //   label: "Flinto",
          //   section: "UI/UX",
          // },
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
        ]}
      />
      <AppDevelop
        headingPart1="eWallet App Development "
        headingPart2="Process at Techanic InfoTech"
        heading="eWallet App Development Process at Techanic InfoTech"
        paragraph="Following a planned-out eWallet app development process, we ensure our clients get what they ask for,
         without any delay or high eWallet app development costs."
        image1="/assets/icons/requirement-gathering-icon.png"
        h1="Requirement Gathering"
        p1="We kickstart the process by conducting thorough discussions to understand your specific eWallet app requirements and objectives."
        image2="/assets/icons/design-prototype-icon.png"
        h2="Design and Prototyping"
        p2="Our eWallet app designers craft intuitive UI/UX designs followed by interactive prototypes to visualize the eWallet app's look and feel."
        image3="/assets/icons/techanical-architructure-icon.png"
        h3="Technical Architecture and Planning"
        p3="Techanic InfoTech's team sets up the app's technical framework, selecting the right tech stack and planning the development milestones."
        image4="/assets/icons/development-testing-icon.png"
        h4="App Development"
        p4="Our mobile wallet app developers begin coding the app, integrating custom features and functionalities to bring the eWallet solution to life."
        image5="/assets/icons/quality-assurance-icon.png"
        h5="Quality Assurance and Testing"
        p5="The wallet solution undergoes rigorous testing for functionality, performance, security, and usability to iron out any creases before launch."
        image6="/assets/icons/post-launch-support-icon.png"
        h6="Deployment and Support"
        p6="After successful testing, we deploy your eWallet app to the appropriate app stores and provide continuous maintenance and support."
        cards={[
          {
            image: "/assets/icons/requirement-gathering-icon.png",
            title: "Requirement Gathering",
            description:
              "We kickstart the process by conducting thorough discussions to understand your specific eWallet app requirements and objectives.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "Design and Prototyping",
            description:
              "Our eWallet app designers craft intuitive UI/UX designs followed by interactive prototypes to visualize the eWallet app's look and feel.",
          },
          {
            image: "/assets/icons/techanical-architructure-icon.png",
            title: "Technical Architecture and Planning",
            description:
              "Techanic InfoTech's team sets up the app's technical framework, selecting the right tech stack and planning the development milestones.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "App Development",
            description:
              "Our mobile wallet app developers begin coding the app, integrating custom features and functionalities to bring the eWallet solution to life.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
            title: "Quality Assurance and Testing",
            description:
              "The wallet solution undergoes rigorous testing for functionality, performance, security, and usability to iron out any creases before launch.",
          },
          {
            image: "/assets/icons/post-launch-support-icon.png",
            title: "Deployment and Support",
            description:
              "After successful testing, we deploy your eWallet app to the appropriate app stores and provide continuous maintenance and support.",
          },
        ]}
        align="center"
      />

      <AppBenefits
        heading="Empowering Business & Users With Mobile Wallet Solutions"
        paragraph="In addition to helping you deliver exceptional user experience to
            the end-user, we also help you reach the pinnacle of business
            success with solutions that drive innovation."
        bgColor="F3F3FA"
        data={[
          {
            image: "/assets/icons/easy-to-use-apps-icon.png",
            title: "Easy to Use Apps",
            cardbg: "#F1EBFF",
            description:
              "We design our eWallet applications with the user's convenience in mind, ensuring a smooth, intuitive interface that simplifies digital payments for everyone.",
          },
          {
            image: "/assets/icons/utmost-security-icon.png",
            title: "Utmost Security",
            cardbg: "#E7F5E8",
            description:
              "At Techanic InfoTech, we prioritize your security, embedding advanced encryption and fraud detection technologies to safeguard every transaction.",
          },
          {
            image: "/assets/icons/seamless-transaction-icon.png",

            cardbg: "#FFF9EE",
            title: "Seamless Transactions",
            description:
              "Our eWallet solutions are engineered for speed and reliability, enabling users to perform seamless transactions without any hiccups, anytime, anywhere.",
          },
          {
            image: "/assets/icons/budget-friendly-icon.png",

            cardbg: "#FEEDFA",
            title: "Budget Friendly",
            description:
              "We deliver cost-effective eWallet solutions that ensure you get a high-quality product without breaking the bank, maximizing your ROI.",
          },
          {
            image: "/assets/icons/modern-age-solution-icon.png",

            cardbg: "#E7F5E8",
            title: "Modern Age Solutions",
            description:
              "We stay ahead of the curve, incorporating cutting-edge technologies to offer eWallet solutions that meet the demands of the modern consumer.",
          },
          {
            image: "/assets/icons/user-engagement-icon.svg",
            cardbg: "#FFF9EE",
            title: "User Engagement",
            description:
              "Our eWallet apps are built with engagement in mind, featuring interactive elements and personalized notifications to keep users actively involved.",
          },
        ]}
      />

      <Portfolio
        heading="Portfolio"
        headingpart1="Our"
        headingpart2="Portfolio"
        bgColor="ffffff"
        paragraph="Techanic InfoTech is the best team of digital wallet app developers out there and our work speaks for itself"
        cards={cards}
        btntext="white"
        divBtn="#6A056C"
        direction="right"
        color1="#BB61BD"
        color2="#6A056C"
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are answers to some of the most frequently asked questions about eWallet app development and eWallet app design services. "
        questions={[
          "Q1: What makes Techanic InfoTech's eWallet apps easy to use?",
          "Q2: How do you ensure the security of its eWallet applications?",
          "Q3: Can Techanic InfoTech's eWallet solutions handle high-volume transactions seamlessly?",
          "Q4: Are Your eWallet app development services affordable?",
          "Q5: How does Techanic InfoTech stay ahead with its eWallet solutions?",
          "Q6: What features does Techanic InfoTech include to enhance user engagement in eWallet apps?",
          "Q7: Do you sign Non-Disclosure Agreements (NDAs) for eWallet app development?",
          "Q8: Why should I choose Techanic InfoTech for my eWallet app development?",
          "Q9: How does Techanic InfoTech contribute to the success of my eWallet app?",
          "Q10: Can You develop eWallet apps that support multiple currencies?",
          "Q11: How quickly can I hire eWallet app developers from Techanic InfoTech?",
          "Q12: Do you also provide white-label eWallet solutions?",
        ]}
        answers={[
          "A1: At Techanic InfoTech, we focus on crafting eWallet applications with intuitive interfaces and straightforward navigation, ensuring a hassle-free payment experience for all users.",
          "A2: We embed state-of-the-art encryption and employ rigorous fraud detection technologies, along with continuous security updates to protect every transaction within our eWallet apps.",
          "A3: Yes, our eWallet solutions are built to handle high volumes of transactions efficiently, ensuring quick and reliable payments with minimal downtime.",
          "A4: We strive to offer budget-friendly eWallet solutions without compromising on quality, providing cost-effective services that maximize return on investment for our clients. With us, you don’t have to worry about eWallet app development costs.",
          "A5: By continuously integrating the latest technologies and trends, we ensure our eWallet solutions are at the forefront, providing modern-age services that cater to the evolving digital landscape.",
          "A6: Our eWallet apps feature personalized notifications, interactive elements, and reward systems to maintain high user engagement and satisfaction.",
          "A7: Yes, we value your privacy and intellectual property, which is why we readily sign NDAs to ensure the confidentiality of your project. That’s what makes us one of the most trusted eWallet mobile app development service providers in the market.",
          "A8: Choosing Techanic InfoTech as a mobile wallet app development company means partnering with a company that has a proven track record, expert developers, and a commitment to delivering tailor-made, secure, and efficient eWallet solutions.",
          "A9:  Our team of expert digital wallet app developers and designers supports your project from ideation to launch and beyond, providing market analysis, strategic planning, and ongoing maintenance to ensure your eWallet app's success.",
          "A10: Absolutely, we specialize in creating eWallet apps with multi-currency support, enabling seamless transactions across different countries and currencies.",
          "A11: We can onboard eWallet app developers for your project within 24 hours to ensure that your app development process begins without any delay. We offer different models for hiring eWallet app developers.",
          "A12:  To cater to business's custom demand we also provide White Label eWallet solutions along with custom development services. We customize the white label as per your requirements, giving it a touch of your personal brand.",
        ]}
      />

      <ClientTestimonials
        heading="What our clients say"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
        bgColor="F1F5F9"
      />
    </>
  );
}
