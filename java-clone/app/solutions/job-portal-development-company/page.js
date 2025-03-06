import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";

import HiringDevs from "@/lib/secondpage/hireDev";

import OurClients from "@/components/clients/page";
import CloneApp from "@/lib/secondpage/cloneapp";
import TechSuccess from "@/lib/colab/techSuccess";
import CardSection from "@/lib/secondpage/cardssection";
import Panels from "@/lib/secondpage/Panels";
import ExpertsDev from "@/lib/secondpage/ExpertsDev";

import CTAButton from "@/components/getStarted/CTAButton";

import ClientTestimonials from "@/lib/clientsReviews/clients";
// import ContactInfo from "@/components/formSection/contactInfo";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import BannerImage from "@/components/BannerImage";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
import Icons from "@/lib/secondpage/Icons";
import ServiceCtaButton from "@/components/getStarted/ServicesCtaButtons";
export const metadata = {
  title: "Job Portal Development Company - Techanic Infotech",
  description:
    "Techanic Infotech is a leading Job Portal Development Company. We provide robust and custom recruitment app development services with expert developers.",
  contentLanguage: "en-us",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/solutions/job-portal-development-company"
    ),

  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Job Portal Development Company - Techanic Infotech",
    description:
      "Techanic Infotech is a leading Job Portal Development Company. We provide robust and custom recruitment app development services with expert developers.",
    url: "https://www.techanicinfotech.com/solutions/job-portal-development-company",
    
    alt: "Techanic Infotech",
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
    title: "Job Portal Development Company - Techanic Infotech",
    description:
      "Techanic Infotech is a leading Job Portal Development Company. We provide robust and custom recruitment app development services with expert developers.",
    site: "@Techanicinfo",
    creator: "@Techanicinfo",
    // image: "https://www.techanicinfotech.com/OGI/og-image.png",
    url: "https://www.techanicinfotech.com/solutions/job-portal-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

// import ERCImg from '@/assets/ERC.png'

// const slideFood = [
//   {
//     img1: pikitImg1,
//     img2: pikitImg2,
//     heading: "Enjoy your time working",
//     paragraph:
//       "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     playstoreLink:
//       "https://play.google.com/store/apps/details?id=in.pikit.app&pcampaignid=web_share",
//     appleLink:
//       "https://apps.apple.com/in/app/pikit-food-grocery-delivery/id1536007416",
//   },
//   {
//     img1: msosiImg1,
//     img2: msosiImg2,
//     heading: "Enjoy your time working",
//     paragraph:
//       "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     playstoreLink:
//       " https://play.google.com/store/apps/details?id=tz.co.dukaapp.food&pcampaignid=web_share",
//     appleLink:
//       "https://apps.apple.com/am/app/msosidrop-food-delivery/id1669215594",
//   },
//   {
//     img1: glovoImg1,
//     img2: glovoImg2,
//     heading: "Enjoy your time working",
//     paragraph:
//       "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     playstoreLink:
//       " https://play.google.com/store/apps/details?id=tz.co.dukaapp.food&pcampaignid=web_share",
//     appleLink:
//       "https://apps.apple.com/us/app/glovo-food-delivery-and-more/id951812684",
//   },
//   {
//     img1: wellServedImg1,
//     img2: wellServedImg2,
//     heading: "Enjoy your time working",
//     paragraph:
//       "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     playstoreLink:
//       "https://play.google.com/store/apps/details?id=com.teonite.wellserved&pcampaignid=web_share",
//     appleLink: "https://apps.apple.com/pl/app/wellserved/id874376551",
//   },
//   {
//     img1: menuamImg1,
//     img2: menuamImg2,
//     heading: "Enjoy your time working",
//     paragraph:
//       "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     playstoreLink:
//       " https://play.google.com/store/apps/details?id=am.menu.app&pcampaignid=web_share",
//     appleLink:
//       "https://apps.apple.com/us/app/menu-am-food-more-delivery/id991535987",
//   },
// ];
export default function JobPortal() {
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
        "name": "Job Portal Development Company - Techanic Infotech",
        "url": "https://www.techanicinfotech.com/solutions/job-portal-development-company",
        "image": "https://www.techanicinfotech.com/OGI/og-image.png",
        "description": "Techanic Infotech is a leading Job Portal Development Company. We provide robust and custom recruitment app development services with expert developers.",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur - 302026 Rajasthan, India",
            "addressLocality": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur",
            "addressRegion": "Rajasthan",
            "postalCode": "302026",
            "addressCountry": "IN",
            "telephone": "+91 7222001000"
          },
          {
            "@type" : "PostalAddress",
            "streetAddress": "224 W 35th St Ste 500 #2215 New York, NY 10001",
            "addressLocality": "224 W 35th St Ste 500 #2215 New York, NY 10001",
            "addressRegion": "New York",
            "postalCode": "10001",
            "telephone": "+1 8053364021",
            "addressCountry" : {
              "@type" : "Country",
              "name" : "US"
            }
          },
          {
            "@type" : "PostalAddress",
            "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road. Dubai",
            "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road",
            "addressRegion": "DUBAI",
            "postalCode": "417213",
            "telephone": "+971 524981077",
            "addressCountry" : {
              "@type" : "Country",
              "name" : "AE"
            }
          },
          {
            "@type" : "PostalAddress",
            "streetAddress": "Via Giuseppe Mazzini, 6, flat 107 MILANO 20123 ITALY",
            "addressLocality": "Via Giuseppe Mazzini, 6, flat 107 MILANO",
            "addressRegion": "MILANO",
            "postalCode": "20123",
            "telephone": "+39 3517578120",
            "addressCountry" : {
              "@type" : "Country",
              "name" : "IT"
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
        "image": "https://www.techanicinfotech.com/OGI/og-image.png",
        "@id": "https://www.techanicinfotech.com/solutions/job-portal-development-company",
        "url": "https://www.techanicinfotech.com/solutions/job-portal-development-company",
        "priceRange": "$25-$50",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur - 302026 Rajasthan, India",
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
          "https://www.techanicinfotech.com/solutions/job-portal-development-company"
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
        "url": "https://www.techanicinfotech.com/solutions/job-portal-development-company",
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
          "https://www.techanicinfotech.com/solutions/job-portal-development-company"
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
        "@id":"https://www.techanicinfotech.com/solutions/job-portal-development-company",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a job portal app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A job portal app is a digital platform that connects job seekers with potential employers, streamlining the recruitment process through various features like profile creation, resume upload, and job alerts."
            }
          },
          {
            "@type": "Question",
            "name": " Why should I choose Techanic Infotechfor job portal development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Techanic Infotech offers industry-leading expertise, a robust tech stack, and a comprehensive development process, ensuring your job portal is not only feature-rich but also scalable and user-friendly."
            }
          },
          {
            "@type": "Question",
            "name": "How does Techanic Infotech ensure thequality of a job portal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We follow a stringent development process that includes thorough requirement analysis, strategic planning, meticulous design, and rigorous testing to deliver a high-quality job portal."
            }
          },
          {
            "@type": "Question",
            "name": "Can Techanic Infotech provide customized job portal solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in custom job portal development, tailoring every aspect of the platform to meet the specific needs of your business and your users."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cost of developing a job portal app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of developing a job portal app varies depending on several factors such as the complexity of features, design specifications, and the level of customization required. Contact us for a detailed quote."
            }
          },
          {
            "@type": "Question",
            "name": "Does Techanic Infotech offer post-launch support and maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely, we offer continuous support and maintenance services to ensure your job portal app remains updated with the latest features and technologies."
            }
          },
             {
            "@type": "Question",
            "name": "Will my job portal app be mobile-friendly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we ensure that your job portal app is responsive and offers a seamless experience across all devices, including smartphones, tablets, and desktops."
            }
          },
               {
            "@type": "Question",
            "name": "Can I hire developers from Techanic Infotech on a project basis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Certainly, we provide flexible hiring models that allow you to hire our expert developers on a project or hourly basis, depending on your needs."
            }
          },
               {
            "@type": "Question",
            "name": "How do you handle data security and user privacy in the job portal app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Data security and user privacy are our top priorities. We adhere to the best practices and compliance standards to protect user data and ensure the confidentiality of the recruitment process."
            }
          },
               {
            "@type": "Question",
            "name": "Will Techanic Infotech sign a Non-Disclosure Agreement (NDA) for my project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we are committed to maintaining the highest level of confidentiality. We are willing to sign an NDA to protect your project details and intellectual property."
            }
          }
        ]
      }
    `,
        }}
      />
      <BannerImage
        bgImage="/assets/bannerimages/job-portal.webp"
        mobileBackground='/assets/bannerimages/job-portal-banner-image.png'
        headingPart1={`Job Portal `}
        headingPart2="Development  Company"
        paragraph="Techanic Infotech as a leading job portal development company is at the forefront of revolutionizing the employment landscape with bespoke job portal development services. Our commitment to excellence ensures your online job portal is not just a platform but
         a dynamic ecosystem connecting talent with opportunity."
        // bgImage={jobImg}
        textColor1="white"
        btnContent="Let’s Get Started "
        btnbg="#ffffff"
        isOpaque={false}
      />
      <OurClients
        headingpart1="Working With "
        headingpart2="The Best"
        paragraphText="Clients"
      />
      <CloneApp
        headingPart1="Craft Your Success with"
        headingPart2="Job Portal Clone Solutions"
        paragraph="Elevate your recruitment game with our Job Portal Clone Development services, designed to mirror the success of leading job portals. Gain a competitive edge with a platform that blends proven strategies with innovative features."
        cloneData={[
          {
            id: 0,
            label: "ZipRecruiter Clone App Development",
            content:
              "Deploy a powerful job-matching system with our ZipRecruiter Clone, equipped with smart algorithms to connect the right candidates with the right roles swiftly and efficiently.",
            image: "/assets/cloneappImages/zip-recruiter-clone-app-image.webp", // Replace with actual image path or variable
          },
          {
            id: 1,
            label: "Indeed Clone App Development",
            content:
              "Launch a comprehensive job search engine with our Indeed Clone, offering extensive filters and job listings to cater to a wide range of industries and sectors.",
            image: "/assets/cloneappImages/indeed-clone-app-image.webp", // Replace with actual image path or variable
          },
          {
            id: 2,
            label: "LinkedIn Clone App Development",
            content:
              "Foster professional connections with our LinkedIn Clone, an interactive platform for networking, job searching, and professional growth, featuring profile endorsements and tailored content feeds.",
            image: "/assets/cloneappImages/linkedin-clone-app-image.webp", // Replace with actual image path or variable
          },
          {
            id: 3,
            label: "Glassdoor Clone App Development",
            content:
              "Create a transparent job search experience with our Glassdoor Clone, integrating company reviews and salary data to help job seekers find their ideal employers.",
            image: "/assets/cloneappImages/glassdoor-clone-app-image.webp", // Replace with actual image path or variable
          },
          {
            id: 4,
            label: "Monster Clone App Development",
            content:
              "Unleash a robust job portal with our Monster Clone, focusing on a user-friendly interface and advanced search capabilities to streamline the recruitment process.",
            image: "/assets/cloneappImages/monster-clone-app-image.webp", // Replace with actual image path or variable
          },
          {
            id: 5,
            label: "Career Builder Clone App Development",
            content:
              "Introduce a versatile job posting and application system with our CareerBuilder Clone, offering refined tools for resume building and job market insights to enhance job matching.",
            image: "/assets/cloneappImages/career-builder-clone-app-image.webp", // Replace with actual image path or variable
          },
        ]}
      />

      {/* <StartWithUS
        heading="Tailored Recruiting Platforms"
        paragraph="Paragraph: Experience the power ofcustomization with our custom job portal development
         designed to cater to your specific recruitment needs."
        text="Discover More"
        bgC="ffffff"
      /> */}
      <ExpertsDev
        heading="Tailored Recruiting Platforms"
        paragraph="Paragraph: Experience the power ofcustomization with our custom job portal development
         designed to cater to your specific recruitment needs."
        text="Get Started"
        isGradientPage={true}
        gradient="85.73deg, #2164F3 -33.69%, #4DB3E2 96.57%"
        showBorder={true}
        border="white"
        initialcolor="white"
        hovercolor="#ffffff"
        hovertext="black"
        image="/assets/job-portal-cta-image-1.webp"
        justifyImage="center"
        textColor="white"
      />
      {/* <CTAButton
        heading="Tailored Recruiting Platforms"
        paragraph="Paragraph: Experience the power ofcustomization with our custom job portal development
         designed to cater to your specific recruitment needs."
        btntext="Get Started"
        useGradient={false}
        backgroundImage="/assets/cta-background-image-2.png"
        textColor="white"
        color1=" #EC9E5B"
        color2="#EF5D7A"
        color3="#1052FE"
        color4="#916EC0"
        bgColor="#1052FE"
        text="white"
      /> */}
      <CardSection
        headingPart1="Comprehensive Job "
        headingPart2="Portal Development Services"
        mobileheadingPart1="Comprehensive Job Portal"
        mobileheadingPart2="Development Services"
        paragraph={`At Techanic Infotech, we offer a full spectrum of job portal services designed to take your recruitment process to the next level. From ideation to launch and beyond, we deliver excellence at every step.`}
        cardItems={[
          {
            image: "/assets/icons/custom-job-portal-app-development-icon.png",
            title: "Custom Job Portal App Development",
            description:
              "Tailor your recruitment platform with our custom job portal app development service. We create unique, feature-rich mobile applications that cater specifically to your business model and user requirements.",
          },
          {
            image: "/assets/icons/job-portal-web-development-icon.png",
            title: "Job Portal Web App Development",
            description:
              "Expand your digital footprint with a responsive job portal web application. Our solutions are optimized for performance, offering a seamless user experience across all devices and platforms.",
          },
          {
            image: "/assets/icons/job-portal-design-icon.png",
            title: "Job Portal Design and Branding",
            description:
              "Stand out in the market with our job portal design and branding services. We ensure your job portal not only functions smoothly but also resonates with your brand's identity and values.",
          },
          {
            image: "/assets/icons/recruitment-software-solution-icon.png",
            title: "Recruitment Software Solution Management",
            description:
              "Streamline your recruitment operations with our software solution management. We provide robust back-end support and maintenance to ensure your portal runs without a hitch.",
          },
          {
            image: "/assets/icons/recruitment-portal-development-icon.png",
            title: "Recruitment Portal Development Services",
            description:
              "Develop a full-featured recruitment portal with our end-to-end services. We focus on creating intuitive, scalable platforms that automate and simplify the hiring process.",
          },
          {
            image: "/assets/icons/job-portal-maintenance-icon.png",
            title: "Job Portal Maintenance and Support",
            description:
              "Ensure your job portal remains at the forefront of innovation with our ongoing maintenance and support services. We keep your platform updated with the latest features and security enhancements.",
          },
        ]}
        color="0F53FF"
      />

      {/* <Portfolio
        heading="Our Success Stories"
        bgColor="ffffff"
        paragraph={`Delve into our rich portfolio of cutting-edge job portals
         and recruitment platforms that showcase our technical prowess and
          innovative approach to recruitment solutions.
         Each project is a testament to our dedication to delivering excellence.`}
        slides={slideFood}
        btntext="white"
        divBtn="#0000ff "
        direction="right"
        color1="#0000ff"
        color2="#001289"
      /> */}
      <Panels
        headingPart1="Innovative Features for "
        headingPart2="Enhanced Job Portal Solutions"
        paragraph="Dive into the array of specialized feature sour job portal offers, each designed to streamline the recruitment process forusers, recruiters, and administrators
         alike. Experience the synergy of technology and convenience."
        li1="User Panel Features"
        li4="Recruiter Panel Features"
        li2="Admin Panel Features"
        li1Small1="User"
        li1Small2="Admin"
        li1Small4="Recruiter"
        panelImage="/assets/icons/recruiter-panel-icon.svg"
        showLi4={true}
        textColor1="white"
        userPanelCards={[
          {
            icon1: Icons.ProfileCustomization,
            h1: "Easy Profile Creation",
            p1: "Quickly build a detailed professional profile to start applying for jobs in our job portal platform solution.",
            icon2: Icons.RealTimeAlerts,
            h2: "Job Alerts Subscription",
            p2: "Get notifications for new job postings that match your skills and interests.",
          },
          {
            icon1: Icons.SearchIcon,
            h1: "Job Search Filters",
            p1: "Use advanced filters to narrow down job searches by criteria like location, salary, and job type.",
            icon2: Icons.GpsTracking,
            h2: "Application Tracking",
            p2: "Track the status of your job applications in real time with this feature in job search app development.",
          },
          {
            icon1: Icons.DocumentUpload,
            h1: "Resume Upload and Management",
            p1: "Upload and edit your resume directly on the platform for easy application in recruitment web portal development.",
            icon2: Icons.OrderHistory,
            h2: "Interview Scheduling",
            p2: "Conveniently schedule interviews with potential employers through the platform.",
          },
        ]}
        adminPanelCards={[
          {
            icon1: Icons.UserManagement,
            h1: "User Account Management",
            p1: "With this feature of the admin panel, the team can oversee user accounts, ensuring authenticity and compliance.",
            icon2: Icons.ContentModeration,
            h2: "Content Moderation",
            p2: "Control the quality of job listings and user interactions in a professional environment.",
          },
          {
            icon1: Icons.AnalyticsReporting,
            h1: "Reporting and Analytics",
            p1: "Another important feature of the admin panel allows access to comprehensive reports for informed decision-making.",
            icon2: Icons.FinancialManagement,
            h2: "Financial Dashboard",
            p2: "Manage revenue streams from job postings and premium services this feature is integrated.",
          },
          {
            icon1: Icons.Support,
            h1: "Technical Support Management",
            p1: "We include this feature which prompts technical support and manages user feedback efficiently.",
            icon2: Icons.ProfileCustomization,
            h2: "Platform Customization",
            p2: "Customize the job portal features and appearance to align with evolving business needs.",
          },
        ]}
        // advancePanelCards={[
        //   {
        //     h1: "AI-Powered Matching",
        //     p1: "Leverage artificial intelligence to suggest matches based on user behavior, preferences, and compatibility scores, enhancing the matchmaking process.",
        //     h2: "Video Profiles & Calls",
        //     p2: "Offer users a more dynamic way to present themselves and interact with video profiles and secure in-app video calls.",
        //   },
        //   {
        //     h1: "Safety Verification",
        //     p1: "Enhance user trust with photo verification and safety features, reducing fake profiles and fostering a secure job search environment.",
        //     h2: "Behavioral Analytics",
        //     p2: "Utilize behavioral data to refine user experiences, from personalized match suggestions to tailored app interactions.",
        //   },
        //   {
        //     h1: "Event Planning",
        //     p1: "Introduce features for planning job-related events within the platform, encouraging networking and career development.",
        //     h2: "Premium Services",
        //     p2: "Offer premium services such as resume writing assistance or career coaching for users looking for personalized support.",
        //   },
        // ]}
        managenentPanelCards={[
          {
            icon1: Icons.MenuManagement,
            h1: "Job Posting Management",
            p1: "Post new jobs easily and manage existing listings efficiently in the solution that we deliver.",
            icon2: Icons.SearchIcon,
            h2: "Candidate Search and Shortlisting",
            p2: "Utilize search tools to find and shortlist candidates that fit job requirements.",
          },
          {
            icon1: Icons.AdvanceMatchFilters,
            h1: "Resume Access and Filtering",
            p1: "Access a database of resumes and use filters to find suitable candidates quickly.",
            icon2: Icons.ProfileManagement,
            h2: "Interview Management",
            p2: "It’s easy to organize and manage candidate interviews directly through the portal with this feature.",
          },
          {
            icon1: Icons.AnalyticsReporting,
            h1: "Recruitment Campaign Analytics",
            p1: "Monitor the performance of recruitment campaigns with analytics tools with this feature.",
            icon2: Icons.MarketingTools,
            h2: "Communication Tools",
            p2: "The recruiter can engage with candidates using integrated messaging and communication tools.",
          },
        ]}
      />
     <Languages
          bgColor="#F3F3FA"
        head="Tech Savvy, IT Services"
       
        iconheight='60px'
        iconwidth='60px'
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
            image: "/assets/icons/sql-icon.png",
            label: "SQL",
            section: "Database",
          },
          {
            image: "/assets/icons/sqlite-icon.png",
            label: "SQLite",
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
            image: "/assets/icons/google-cloud-icon.png",
            label: "Google Cloud",
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
      <HiringDevs
        heading="Hire Job Portal Developers in 24 Hours"
        paragraph1="Secure the expertise of seasoned job portal developers from Techanic
         Infotech to transform your vision into a fully functional digital recruitment
          platform. Our expert recruitment portal developers are proficient in the latest 
          technologies, ensuring your portal is built on a foundation of reliability and innovation."
        paragraph2="With our dedicated developers, you gain acollaborative partner in crafting
         a user-centric portal tailored to the unique demands of the job market. Their
          strategic approach ensures that your platform not only attracts but also 
          retains both job seekers and recruiters."
       listData={["Industry-leading Expertise",
        "Agile Development Practices",
        "Commitment to Quality",
        "Continuous Technical Support"]}
        btntxt="white"
     
      />
      <TechSuccess
        headingPart1="Streamline "
        headingPart2="Your Recruitment"
        paragraph="Transform your recruitment process with our comprehensive recruitment
         software solutions. Our intuitive platforms offer seamless candidate tracking, evaluation, and management,
         all tailored to your unique business needs."
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

      <AppDevelop
        headingPart1="Job Portal "
        headingPart2="Development Process"
        paragraph="At Techanic Infotech, our job portal development 
        process is meticulously crafted to deliver a product that is 
        as robust as it is intuitive. We prioritize transparency and efficiency 
        from conception to launch, ensuring your vision is realized with precision."
        image1="/assets/icons/requirement-analysis-icon.png"
        h1="Requirement Analysis"
        p1="Identifying client needs and defining theproject scope."
        image2="/assets/icons/idea-validation-icon.png"
        h2="Planning & Strategy"
        p2="Creating a detailed roadmap and strategyfor development."
        image3="/assets/icons/design-prototype-icon.png"
        h3="Design & Prototyping"
        p3="Crafting the user interface with anemphasis on user experience."
        image4="/assets/icons/development-icon.png"
        h4="Development & Integration"
        p4="Coding the platform and integrating essential functionalities."
        image5="/assets/icons/quality-assurance-icon.png"
        h5="Testing & Quality Assurance"
        p5="Rigorous testing to ensure a bug-free and seamless user experience."
        image6="/assets/icons/launch-deployment-icon.png"
        h6="Deployment & Launch"
        p6="Launching the portal with fullfunctionality and support."
        cards={[
          {
            image: "/assets/icons/requirement-analysis-icon.png",
             title: "Requirement Analysis",
            description:
              "Identifying client needs and defining the project scope.",
          },
          {
            image: "/assets/icons/idea-validation-icon.png",
             title: "Planning & Strategy",
            description:
              "Creating a detailed roadmap and strategy for development.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
             title: "Design & Prototyping",
            description:
              "Crafting the user interface with an emphasis on user experience.",
          },
          {
            image: "/assets/icons/development-icon.png",
             title: "Development & Integration",
            description:
              "Coding the platform and integrating essential functionalities.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
             title: "Testing & Quality Assurance",
            description:
              "Rigorous testing to ensure a bug-free and seamless user experience.",
          },
          {
            image: "/assets/icons/launch-deployment-icon.png",
             title: "Deployment & Launch",
            description:
              "Launching the portal with full functionality and support.",
          },
        ]}
        align="center"
      />
            <ServiceCtaButton
        heading="Innovate Your Hiring"
        paragraph="Step into the future with our cutting-edge online
         job portal development – where functionality meets efficiency."
        text="Customize Now"
        bgColor="F1F5F9"
        isGradientPage={true}
        gradient="85.73deg, #2164F3 -33.69%, #4DB3E2 96.57%"
        showBorder={true}
        textColor="white"
        border="white"
        initialcolor="white"
        hovercolor="#ffffff"
        hovertext="black"
        image="/assets/job-portal-cta-image-2.webp"
      />
      <CardSection
        headingPart1="Benefits of Our "
        headingPart2="Job Portal App Development Services"
        paragraph={`Embrace the strategic advantage with Techanic Infotech's job portal app development services. We deliver not just a product but a platform for businesses to revolutionize the recruitment process, enhancing efficiency and expanding reach in the talent market.`}
        cardItems={[
          {
            image: "/assets/icons/enhanced-reach-to-candidates-icon.png",
            title: "Enhanced Reach to Candidates",
            description:
              "Our job portal apps are designed to maximize your visibility among job seekers, broadening your reach to the most qualified candidates across various industries and specializations.",
          },
          {
            image: "/assets/icons/streamlined-hiring-icon.png",
            title: "Streamlined Hiring Process",
            description:
              "We streamline your recruitment workflow with automation and advanced sorting features, significantly reducing the time and resources spent on finding the perfect candidate.",
          },
          {
            image: "/assets/icons/brand-reputation-building.png",
            title: "Brand Reputation Building",
            description:
              "A sophisticated job portal reflects your commitment to innovation and quality, strengthening your brand and positioning you as a leader in the competitive job market.",
          },
          {
            image: "/assets/icons/cost-effective-solution-icon.png",
            title: "Cost-Effective Recruitment",
            description:
              "Our solutions reduce hiring costs by optimizing the recruitment cycle and minimizing the need for intermediaries, allowing for a more budget-friendly hiring process.",
          },
          {
            image: "/assets/icons/access-to-recruitment-analysis-icon.png",
            title: "Access to Recruitment Analytics",
            description:
              "Gain valuable insights into hiring trends and behaviors with our analytics features, empowering you to make data-driven decisions to improve recruitment strategies.",
          },
          {
            image: "/assets/icons/continuous-support-icon.png",
            title: "Continuous Support and Updates",
            description:
              "We ensure your job portal remains cutting-edge with ongoing support and updates, keeping your platform secure and efficient as technology and market demands evolve. ",
          },
        ]}
        color="0F53FF"
      />

      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are answers to some of the mostfrequently asked questions about job portal development solutions."
        showExtraSelects={false}
        questions={[
          "Q1: What is a job portal app?",
          "Q2: Why should I choose Techanic Infotechfor job portal development?",
          "Q3: How does Techanic Infotech ensure thequality of a job portal?",
          "Q4: Can Techanic Infotech provide customized job portal solutions?",
          "Q5: What is the cost of developing a jobportal app?",

          "Q6: Does Techanic Infotech offer post-launch support and maintenance?",
          "Q7: Will my job portal app be mobile-friendly?",
          "Q8: Can I hire developers from Techanic Infotech on a project basis?",
          "Q9: How do you handle data security and user privacy in the job portal app?",
          "Q10: Will Techanic Infotech sign a Non-Disclosure Agreement (NDA) for my project?",
        ]}
        answers={[
          "A1: A job portal app is a digital platform that connects job seekers with potential employers, streamlining the recruitment process through various features like profile creation, resume upload, and job alerts.",
          "A2: Techanic Infotech offers industry-leading expertise, a robust tech stack, and a comprehensive development process, ensuring your job portal is not only feature-rich but also scalable and user-friendly.",
          "A3: We follow a stringent development process that includes thorough requirement analysis, strategic planning, meticulous design, and rigorous testing to deliver a high-quality job portal.",
          "A4: Yes, we specialize in custom job portal development, tailoring every aspect of the platform to meet the specific needs of your business and your users.",
          "A5: The cost of developing a job portal app varies depending on several factors such as the complexity of features, design specifications, and the level of customization required. Contact us for a detailed quote.",
          "A6: Absolutely, we offer continuous support and maintenance services to ensure your job portal app remains updated with the latest features and technologies.",
          "A7: Yes, we ensure that your job portal app is responsive and offers a seamless experience across all devices, including smartphones, tablets, and desktops.",
          "A8: Certainly, we provide flexible hiring models that allow you to hire our expert developers on a project or hourly basis, depending on your needs.",
          "A9: Data security and user privacy are our top priorities. We adhere to the best practices and compliance standards to protect user data and ensure the confidentiality of the recruitment process.",
          "A10: Yes, we are committed to maintaining the highest level of confidentiality. We are willing to sign an NDA to protect your project details and intellectual property.",
        ]}
      />
      {/* <OurBlogs /> */}
      <ClientTestimonials
        heading="What our clients say"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
        bgColor="F1F5F9"
      />
    </>
  );
}
