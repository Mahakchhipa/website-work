import OurClients from "@/components/clients/page";
import CloneApp from "@/lib/secondpage/cloneapp";
import TechSuccess from "@/lib/colab/techSuccess";
import CardSection from "@/lib/secondpage/cardssection";
import Panels from "@/lib/secondpage/Panels";
import ExpertsDev from "@/lib/secondpage/ExpertsDev";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import ServicesCtaButton from "@/components/getStarted/ServicesCtaButtons";
import ClientTestimonials from "@/lib/clientsReviews/clients";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";

import BannerImage from "@/components/BannerImage";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
import Icons from "@/lib/secondpage/Icons";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";

// const cards = [
//   {
//     id: 1,
//     image: "/assets/portfolioImages/health-direct-portfolio-image.png", // Use the first image from `slideFood`
//     heading: "Enjoy your time working",
//     para: "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     webLink:
//       "https://play.google.com/store/apps/details?id=in.pikit.app&pcampaignid=web_share",
//   },
//   {
//     id: 2,
//     image: "/assets/portfolioImages/health-direct-portfolio-image.png", // Use the first image from the second object in `slideFood`
//     heading: "Enjoy your time working",
//     para: "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     webLink:
//       "https://play.google.com/store/apps/details?id=tz.co.dukaapp.food&pcampaignid=web_share",
//   },
//   {
//     id: 3,
//     image: "/assets/portfolioImages/health-direct-portfolio-image.png", // Use the first image from the third object in `slideFood`
//     heading: "Enjoy your time working",
//     para: "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     webLink:
//       "https://play.google.com/store/apps/details?id=tz.co.dukaapp.food&pcampaignid=web_share",
//   },
//   {
//     id: 4,
//     image: "/assets/portfolioImages/health-direct-portfolio-image.png", // Use the first image from the fourth object in `slideFood`
//     heading: "Enjoy your time working",
//     para: "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     webLink:
//       "https://play.google.com/store/apps/details?id=com.teonite.wellserved&pcampaignid=web_share",
//   },
//   {
//     id: 5,
//     image: "/assets/portfolioImages/health-direct-portfolio-image.png", // Use the first image from the fifth object in `slideFood`
//     heading: "Enjoy your time working",
//     para: "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     webLink:
//       "https://play.google.com/store/apps/details?id=am.menu.app&pcampaignid=web_share",
//   },
// ];
export const metadata = {
  contentLanguage: "en-us",
  title: "Education App Development Company - Techanic Infotech ",
  description:
    "Techanic Infotech is a leading educational app development company. We provide educational apps & software with expert team of educational app developers.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/solutions/education-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Education App Development Company - Techanic Infotech",
    description:
      " Techanic Infotech is a leading educational app development company. We provide educational apps & software with expert team of educational app developers..",
    url: "https://www.techanicinfotech.com/solutions/education-app-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/solutions/education-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "Education App Development Company - Techanic Infotech",
    description:
      "Techanic Infotech is a leading educational app development company. We provide educational apps & software with expert team of educational app developers..",
      images: [
        {
          url: "https://www.techanicinfotech.com/OGI/solutions/education-app-development-og.webp", // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ],
  },
  robots: "index, follow",
};
export default function ELearning() {
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
          "name": "Education App Development Company - Techanic Infotech",
          "url": "https://www.techanicinfotech.com/solutions/education-app-development-company",
          "image": "https://www.techanicinfotech.com/OGI/solutions/education-app-development-og.webp",
          "description": "Techanic Infotech is a leading educational app development company. We provide educational apps & software with expert team of educational app developers..",
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
          "image": "https://www.techanicinfotech.com/OGI/solutions/education-app-development-og.webp",
          "@id": "https://www.techanicinfotech.com/solutions/education-app-development-company",
          "url": "https://www.techanicinfotech.com/solutions/education-app-development-company",
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
            "https://www.techanicinfotech.com/solutions/education-app-development-company"
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
          "url": "https://www.techanicinfotech.com/solutions/education-app-development-company",
          "logo": "https://www.techanicinfotech.com/OGI/solutions/education-app-development-og.webp",
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
            "https://www.techanicinfotech.com/solutions/education-app-development-company"
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
  "@id":"https://www.techanicinfotech.com/solutions/education-app-development-company",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What differentiates Techanic InfoTech from other education app development companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our unique blend of expertise in the latest educational technologies, commitment to quality, and personalized approach to each project sets us apart. We focus on creating innovative, user-centric solutions that drive engagement and learning outcomes."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure the quality and security of the education apps you develop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We adhere to strict quality assurance protocols and conduct comprehensive testing throughout the development process. Security is integrated from the start, with best practices in data protection and compliance."
      }
    },
    {
      "@type": "Question",
      "name": "Can Techanic InfoTech develop apps for both iOS and Android platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our team is proficient in developing apps for both iOS and Android, using native and cross-platform technologies to deliver seamless user experiences across all devices."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of support can I expect after my app is launched?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer ongoing support and maintenance services to ensure your app remains updated, secure, and aligned with evolving user needs and technological advancements."
      }
    },
    {
      "@type": "Question",
      "name": "How does Techanic InfoTech handle client communication and project updates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We believe in transparent and continuous communication, utilizing project management tools and regular meetings to keep you informed and involved at every stage of the development process."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate advanced features like AI and AR in educational apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely, our team is skilled in incorporating advanced technologies like Artificial Intelligence (AI) and Augmented Reality (AR) to create engaging and interactive learning experiences."
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical timeline for developing an education app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The development timeline varies based on the app's complexity, desired features, and any custom requirements. We work closely with clients to establish realistic timelines that meet their launch goals."
      }
    },
    {
      "@type": "Question",
      "name": "How do you approach project scoping and cost estimation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We begin with a detailed discussion of your project goals and requirements, followed by a thorough scoping exercise. This allows us to provide a transparent and accurate cost estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Is there flexibility in your app development services to accommodate changes during the project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we adopt an agile development methodology, allowing for flexibility and adjustments to the project scope and requirements as needed, ensuring the final product aligns with your vision."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get started with my education app development project with Techanic InfoTech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply reach out to us with your project idea, and we'll guide you through the next steps, including initial consultations, project scoping, and strategic planning to kickstart your app development journey."
      }
    }
  ]
}
      `,
        }}
      />
      <BannerImage
        bgImage="/assets/bannerimages/education-app-banner-image.webp"
        mobileBackground="/assets/bannerimages/education-app-banner-mobile-image.webp"
        headingPart1="Education App "
        headingPart2="Development Company"
        paragraph="At Techanic InfoTech, we pride ourselves as a leading education app development company. Leveraging
         the latest technology trends, we create immersive and interactive educational applications that cater to the diverse needs of learners and educators. Our solutions are designed to transform traditional learning environments into dynamic digital classrooms."
        btnContent="Let’s Get Started "
        spancolor="#ffffff"
        textColor1="white"
        showBorder={true}
        initialcolor="white"
        border="white"
        hovercolor="#ffffff"
        hovertext="black"
        isOpaque={false}
      />
      <OurClients headingpart1="Working With " headingpart2="The Best" />
      <CloneApp
        id="grad-5"
        headingPart1=" eLearning Clone"
        headingPart2="App Development"
        paragraph="  Techanic InfoTech specializes in eLearning clone app development, offering tailored solutions that mirror the success of leading educational platforms. Our clone apps incorporate essential features and functionalities, ensuring a seamless and engaging learning experience for users."
        cloneData={[
          {
            id: 0,
            label: "Duolingo Clone App Development",
            content:
              "Our Duolingo clone app development focuses on creating engaging language learning platforms. Featuring gamified lessons, personalized learning paths, and real-time progress tracking, these apps make language learning accessible and fun.",
            image: "/assets/cloneappImages/duolingo-clone-app-image.webp",
          },
          {
            id: 1,
            label: "EdX Clone App Development",
            content:
              "We develop EdX clone apps that offer a wide range of courses from top universities. Our clones feature course catalogs, interactive learning modules, and certification, mimicking the EdX experience.",
            image: "/assets/cloneappImages/edx-clone-app-image.webp",
          },
          {
            id: 2,
            label: "Coursera Clone App Development",
            content:
              "Our Coursera clone app development brings the world-class educational content of Coursera to your fingertips. With a comprehensive range of courses, peer interaction, and expert assessments, learners can achieve their full potential.",
            image: "/assets/cloneappImages/coursera-clone-app-image.webp",
          },
          {
            id: 3,
            label: "Udemy Clone App Development",
            content:
              "Techanic InfoTech's Udemy clone apps are designed for professional skill development. Featuring a vast library of courses, instructor-led sessions, and interactive forums, these clones empower career growth.",
            image: "/assets/cloneappImages/udemy-clone-app-image.webp",
          },
          {
            id: 4,
            label: "Khan Academy Clone App Development",
            content:
              "Our Khan Academy clone apps focus on K-12 education with a personalized learning dashboard. Incorporating practice exercises, instructional videos, and a personalized learning dashboard, these apps cater to individual learning paces.",
            image: "/assets/cloneappImages/khan-academy-clone-app-image.webp",
          },
          {
            id: 5,
            label: "Lynda Clone App Development",
            content:
              "We create Lynda clone apps for professional learning and skill development. Our clones offer a vast library of high-quality courses in various industries, taught by industry experts, ensuring users stay ahead in their professional fields.",
            image: "/assets/cloneappImages/lynda-clone-app-image.webp",
          },
        ]}
      />
      <ExpertsDev
        heading="Enter the EdTech App Market With A Bang"
        paragraph="Dive into the world of innovative learning withour comprehensive education app 
               development services. Elevate your educationalcontent and engage learners like never before."
        text="Get Started "
        gradient="85.85deg, #FB9EF9 28.05%, #829CEB 123.64%"
        btntext="black"
        hovertext="white"
        textColor="black"
        isGradientPage={true}
        useGif={true}
        gifSrc="/assets/elearning-cta-image-1.webp"
        image="/assets/elearning-cta-image-1.webp"
        showBorder={true}
        hovercolor="black"
        border="black"
        justifyImage="center"
      />
      {/* <CTAButton
        heading="Enter the EdTech App Market With A Bang"
        paragraph="Dive into the world of innovative learning withour comprehensive education app 
               development services. Elevate your educationalcontent and engage learners like never before."
        btntext="Get Started"
        useGradient={false}
        backgroundImage="/assets/cta-background-image-2.png"
     
      /> */}

      <CardSection
        headingPart1="Our Education "
        headingPart2="App Development Services"
        mobileheadingPart1="Our Education"
        mobileheadingPart2="App Development Services"
        paragraph="At Techanic InfoTech, we offer a wide range of education app development services tailored to meet the evolving needs of the education sector. From interactive learning apps to comprehensive management systems, our solutions are designed to enhance the learning experience and streamline educational operations."
        cardItems={[
          {
            image: "/assets/icons/custom-education-app-icon.png",
            title: "Custom Education App Development",
            description:
              "We specialize in custom education app development, creating unique and engaging learning experiences tailored to your specific educational goals. Our custom solutions ensure that your app stands out in the market and meets the exact needs of your learners.",
          },
          {
            image: "/assets/icons/lms-development-icon.png",
            title: "LMS Development",
            description:
              "Our LMS development services focus on creating scalable and robust learning management systems that facilitate the delivery, tracking, and management of online learning content, providing educators and learners with a seamless educational experience.",
          },
          {
            image: "/assets/icons/tutor-app-icon.png",
            title: "Tutor App Development",
            description:
              "We develop tutor apps that connect learners with expert tutors for personalized learning sessions. These apps feature scheduling, live tutoring sessions, payment gateways, and feedback systems, making private tutoring more accessible and efficient.",
          },
          {
            image: "/assets/icons/education-game-development-icon.png",
            title: "Educational Game Development",
            description:
              "Engage learners with our educational game development service, where learning meets fun. Our educational games are designed to reinforce learning through interactive gameplay, making complex subjects more digestible for learners of all ages.",
          },
          {
            image: "/assets/icons/ebook-elearning-app-icon.png",
            title: "eBook & eLearning Content App Development",
            description:
              "Transform traditional learning materials with our eBook and eLearning content app development. We create apps that offer interactive eBooks, multimedia content, and assessments, enhancing the reading and learning experience.",
          },
          {
            image: "/assets/icons/student-assessment-app-icon.png",
            title: "Student Assessment and Evaluation App Development",
            description:
              "Our student assessment and evaluation app development focuses on creating platforms for conducting quizzes, tests, and exams online. With features like automated grading, real-time feedback, and detailed analytics, educators can efficiently assess student performance and learning outcomes.",
          },
        ]}
        color="0F53FF"
      />

      <Panels
        headingPart1="Key Features of Our"
        headingPart2="Educational Apps"
        heading="Key Features of Our Educational Apps"
        paragraph="Our educational apps are designed with comprehensive features tailored to the roles of students, teachers, schools, and administrators. Each panel is equipped with intuitive functionalities to streamline the learning process, enhance teaching methodologies, and simplify management tasks."
        li1="Student Panel Features:"
        li1Small1="Student"
        li2="Admin Panel Features"
        li1Small2="Admin "
        li3="Teacher Panel Features"
        li1Small3="Teacher "
        li4="School Panel Features"
        li1Small4="School "
        bgColor="F3F3FA"
        showLi4={true}
        showLi3={true}
        textColor1="white"
        textColor="black"
        panelImage="/assets/icons/elearning-panel-icon.png"
        userPanelCards={[
          {
            icon1: Icons.LearningPaths,
            h1: "Personalized Learning Paths",
            p1: "Customizable learning journeys based on individual student goals and performance.",
            icon2: Icons.DiscussionForms,
            h2: "Discussion Forums",
            p2: "Platforms for students to interact, discuss, and collaborate on learning topics.",
          },
          {
            icon1: Icons.QuizzesIcon,
            h1: "Interactive Quizzes and Assessments",
            p1: "Engaging quizzes and assessments to test knowledge and track progress.",
            icon2: Icons.RevenueTracking,
            h2: "Progress Tracking",
            p2: "Real-time dashboards to monitor learning progress and achievements.",
          },
          {
            icon1: Icons.MultimediacontentIcon,
            h1: "Multimedia Content Access",
            p1: "Access to videos, animations, and interactive content for immersive learning experiences.",
            icon2: Icons.Support,
            h2: "24/7 Learning Support",
            p2: "Access to resources and support anytime,enhancing continuous learning.",
          },
        ]}
        adminPanelCards={[
          {
            icon1: Icons.UserManagement,
            h1: "User Management",
            p1: "Comprehensive tools for managing student, teacher, and school accounts and permissions.",
            icon2: Icons.AnalyticsReporting,
            h2: "Data Analytics and Reporting",
            p2: "Advanced analytics for insights into app usage, engagement, and educational outcomes.",
          },
          {
            icon1: Icons.ContentModeration,
            h1: "Content Management System",
            p1: "Easy management of app content, courses, and educational materials.",
            icon2: Icons.DedicatedSupport,
            h2: "Technical Support Management",
            p2: "Tools for managing user queries, technical issues, and support tickets.",
          },
          {
            icon1: Icons.Security,
            h1: "Security Settings",
            p1: "Robust security features to protect user data and ensure privacy compliance.",
            icon2: Icons.BrandingIcon,
            h2: "App Customization and Branding",
            p2: "Customization options for branding and tailoring the app to specific institutional needs.",
          },
        ]}
        advancePanelCards={[
          {
            icon1: Icons.CourseManagement,
            h1: "Course Management",
            p1: "Comprehensive analytics for user behavior,content reach, and engagement decision-making...",
            icon2: Icons.PerformenceAnalytics,
            h2: "Student Performance Analytics",
            p2: " Insights into student performance to tailor teaching strategies effectively.",
          },
          {
            icon1: Icons.GradingIcon,
            h1: "Assignment Distribution and Grading",
            p1: "Tools to create, manage, and update course content and materials easily.",
            icon2: Icons.LiveSession,
            h2: "Live Session Scheduling",
            p2: "Scheduling tools for organizing live classes, lectures, or tutoring sessions.",
          },
          {
            icon1: Icons.UserFeedback,
            h1: "Feedback Mechanisms",
            p1: "Providing personalized feedback to students to aid their learning journey.",
            icon2: Icons.LibraryAccess,
            h2: "Resource Library Access",
            p2: "Access to a vast library of teaching materials and resources for lesson planning.",
          },
        ]}
        managenentPanelCards={[
          {
            icon1: Icons.EnrollmentIcon,
            h1: "Enrollment Management",
            p1: " Simplified processes for student enrollment, registration, and administration.",
            icon2: Icons.CurriculamPlanning,
            h2: "Curriculum Planning",
            p2: "Tools for designing and implementing effective school-wide curricula.",
          },
          {
            icon1: Icons.FinancialManagement,
            h1: "Financial Management",
            p1: "Integrated systems for managing fees, expenses, and financial reporting.",
            icon2: Icons.CommunicationChannel,
            h2: "Communication Channels",
            p2: "Direct communication channels for updates, announcements, and parent-teacher interactions.",
          },
          {
            icon1: Icons.AnalyticsReporting,
            h1: "Compliance and Reporting",
            p1: "Tools to ensure compliance with educational standards and reporting for accreditation.",
            icon2: Icons.EventPlanning,
            h2: "Event and Schedule Management",
            p2: " Calendar management for organizing school events, holidays, and schedules.",
          },
        ]}
      />
      <HiringDevelopers
        headingPart1="Hire Education "
        headingPart2="App Developers in 24 Hours"
        paragraph1="At Techanic InfoTech, we understand the urgency and importance of initiating your education app project without delay.
         That's why we offer a streamlined process to connect you with top-tier education app developers within 24 hours. Our team comprises experts who are well-versed in the latest educational technology trends and development methodologies."
        paragraph2="Leveraging our vast network of skilled developers, we ensure that you get the perfect match for your project's specific needs. Whether you're looking to build a new app from scratch or enhance an existing one, our developers
         are equipped to deliver high-quality, innovative solutions that meet your timeline and exceed your expectations."
        listData={[
          "Expert Matching Quickly",
          "Rapid Project Initiation",
          "Flexible Engagement Models",
          "Seamless Communication",
        ]}
        bgColor="ffffff"
        btntxt="white"
        divBtn="gray"
        direction="right"
        color1="#909090"
        color2="#737373"
        image="/assets/hiring-developers-image.webp"
      />
      <TechSuccess
        headingPart1="Choose The Best "
        headingPart2="Education App Development Company"
        paragraph="Ready to bring your educational vision to 
        life? Contact us to discuss your project and get a detailed quote tailored to your specific needs. Let's shape the future of education together. Techanic InfoTech as
         a leading app development company is here to help you."
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
        head="Our Technology Stack"
        para="At Techanic InfoTech, we are committed to using cutting-edge technology to build robust and scalable educational apps.This versatile technology arsenal ensures that 
        our educational app development services are not just innovative but also reliable and efficient."
        bgColor="#F3F3FA"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          { image: "/assets/icons/front-end-icon.svg", label: "Front-end" },
          { image: "/assets/icons/backend-icon.svg", label: "Back-end" },

          {
            image: "/assets/icons/languages-icon.svg",
            label: "Languages",
          },
          {
            image: "/assets/icons/technologies-label-icon.svg",
            label: "Technologies",
          },
          {
            image: "/assets/icons/payment-icon.svg",
            label: "Payment Gateway",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/angular-icon.png",
            label: "AngularJS",
            section: "Front-end",
          },
          {
            image: "/assets/icons/node-js-icon.png",
            label: "NodeJS",
            section: "Front-end",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "ReactJS",
            section: "Front-end",
          },
          {
            image: "/assets/icons/vue-js-icon.png",
            label: "Vue.JS",
            section: "Front-end",
          },
          {
            image: "/assets/icons/laravel-icon.png",
            label: "Laravel",
            section: "Front-end",
          },
          {
            image: "/assets/icons/mern-icon.png",
            label: "MERN",
            section: "Front-end",
          },
          {
            image: "/assets/icons/room-db-icon.png",
            label: "Room DB",
            section: "Back-end",
          },
          {
            image: "/assets/icons/mongodb-icon.png",
            label: "MongoDB",
            section: "Back-end",
          },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "PostgreSQL",
            section: "Back-end",
          },
          {
            image: "/assets/icons/mysql-icon.png",
            label: "Microsoft SQL",
            section: "Back-end",
          },
          {
            image: "/assets/icons/python-icon.png",
            label: "Python",
            section: "Languages",
          },
          {
            image: "/assets/icons/c-plus-plus-icon.png",
            label: "C++",
            section: "Languages",
          },
          {
            image: "/assets/icons/c-sharp-icon.png",
            label: "C#",
            section: "Languages",
          },
          {
            image: "/assets/icons/java-icon.png",
            label: "Java",
            section: "Languages",
          },
          {
            image: "/assets/icons/kotlin-icon.png",
            label: "Kotlin",
            section: "Languages",
          },
          {
            image: "/assets/icons/swift-icon.png",
            label: "Swift",
            section: "Languages",
          },
          {
            image: "/assets/icons/objective-c-icon.png",
            label: "Objective C",
            section: "Languages",
          },
          {
            image: "/assets/icons/xml-icon.png",
            label: "XML",
            section: "Technologies",
          },
          {
            image: "/assets/icons/java-icon.png",
            label: "Java",
            section: "Technologies",
          },
          {
            image: "/assets/icons/android-studio-icon.png",
            label: "Android Studio",
            section: "Technologies",
          },
          {
            image: "/assets/icons/android-sdk-icon.png",
            label: "Android SDK",
            section: "Technologies",
          },
          {
            image: "/assets/icons/paypal-icon.png",
            label: "PayPal",
            section: "Payment Gateway",
          },
          {
            image: "/assets/icons/stripe-icon.png",
            label: "Stripe",
            section: "Payment Gateway",
          },
          {
            image: "/assets/icons/apple-pay-icon.png",
            label: "Apple Pay",
            section: "Payment Gateway",
          },
          {
            image: "/assets/icons/gpay-icon.png",
            label: "Google Pay",
            section: "Payment Gateway",
          },
        ]}
      />

      <AppDevelop
        headingPart1="Our Education App"
        headingPart2=" Development Process"
        paragraph=" At Techanic InfoTech, our education app development process is designed to ensure efficiency, transparency, and quality. From initial concept to 
        final launch, we follow a structured approach to bring your educational app vision to life."
        image1="/assets/icons/idea-validation-icon.png"
        h1="Idea & Conceptualization"
        p1="Define the app's purpose, target audience, and core features."
        image2="/assets/icons/development-testing-icon.png"
        h2="Design and Prototyping"
        p2="Create user-centric designs and interactive prototypes for feedback."
        image3="/assets/icons/development-testing-icon.png"
        h3="Development & Integration"
        p3="Code the app with the latest technologies and integrate essential functionalities."
        image4="/assets/icons/quality-assurance-icon.png"
        h4="Quality Assurance & Testing"
        p4="Rigorous testing to ensure the app is bug-free and user-friendly."
        image5="/assets/icons/deployment-icon.png"
        h5="Deployment & Launch"
        p5="Launch the app on relevant platforms with full compliance and optimization."
        image6="/assets/icons/maintenance-updates-icon.png"
        h6="Support & Maintenance"
        p6="Provide ongoing support and updates to keep the app relevant and efficient."
        cards={[
          {
            image: "/assets/icons/idea-validation-icon.png",
            title: "Idea & Conceptualization",
            description:
              "Define the app's purpose, target audience, and core features.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "Design and Prototyping",
            description:
              "Create user-centric designs and interactive prototypes for feedback.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "Development & Integration",
            description:
              "Code the app with the latest technologies and integrate essential functionalities.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
            title: "Quality Assurance & Testing",
            description:
              "Rigorous testing to ensure the app is bug-free and user-friendly.",
          },
          {
            image: "/assets/icons/deployment-icon.png",
            title: "Deployment & Launch",
            description:
              "Launch the app on relevant platforms with full compliance and optimization.",
          },
          {
            image: "/assets/icons/maintenance-updates-icon.png",
            title: "Support & Maintenance",
            description:
              "Provide ongoing support and updates to keep the app relevant and efficient.",
          },
        ]}
        align="center"
        textcolor="black"
      />
      <ServicesCtaButton
        heading="Build Your eLearning App, Right Now!"
        paragraph="Our expertise as an educational app development company sets us apart.
                     With a focus on high-quality content anduser-friendly interfaces,
                      we deliver exceptional eLearning experiences."
        isGradientPage={true}
        gradient="90deg, #E89EF7 0%, #AA9DF0 100%"
        image="/assets/elearning-cta-image-2.webp"
        showBorder={true}
        border="black"
        initialcolor="black"
        textColor="black"
        text="Customize Now"
        hovercolor="#000000"
        hovertext="white"
      />
      {/* <ExpertsDev
        heading="Build Your eLearning App, Right Now!"
        paragraph="Our expertise as an educational app development company sets us apart.
         With a focus on high-quality content anduser-friendly interfaces,
          we deliver exceptional eLearning experiences."
        isGradientPage={true}
        showBorder={true}
        border="white"
        gradient="90deg, #E89EF7 0%, #AA9DF0 100%"
           textColor="black"
        text="Customize Now"
     
      /> */}
      <CardSection
        headingPart1="Advantages of "
        headingPart2="Our EdTech Solutions"
        mobileheadingPart1="Advantages of "
        mobileheadingPart2="Our EdTech Solutions"
        color="0F53FF"
        paragraph="Techanic InfoTech's EdTech app development services offer transformative benefits for both businesses in the education sector and their student users. Our solutions are designed to enhance learning outcomes and operational efficiencies."
        cardItems={[
          {
            image: "/assets/icons/learning-engagement-icon.png",
            title: "Enhanced Learning Engagement",
            description:
              "Our apps use interactive and multimedia content to captivate students' interest, making learning more engaging and effective. This leads to improved comprehension and retention rates.",
          },
          {
            image: "/assets/icons/accessibility-icon.png",
            title: "Accessibility and Flexibility",
            description:
              "Students can access educational content anytime, anywhere, which accommodates various learning styles and schedules. This flexibility supports continuous learning outside traditional classroom settings.",
          },
          {
            image: "/assets/icons/data-driven-insights-icon.png",
            title: "Data-Driven Insights",
            description:
              "Businesses gain valuable insights through data analytics on student performance and app usage. These insights enable personalized learning experiences and informed decision-making to enhance educational offerings.",
          },
          {
            image: "/assets/icons/scalable-solution-icon.png",
            title: "Scalability for Business Growth",
            description:
              "Our scalable solutions support your business growth, allowing you to easily expand your offerings and user base without compromising performance or user experience.",
          },
          {
            image: "/assets/icons/cost-effective-solution-icon.png",
            title: "Cost-Effective Education Solutions",
            description:
              "By reducing the need for physical materials and infrastructure, our EdTech apps offer a cost-effective alternative for businesses, lowering the barrier to entry for quality education.",
          },
          {
            image: "/assets/icons/increased-market-research-icon.png",
            title: "Increased Collaboration and Community Building",
            description:
              "Features like discussion forums and group projects within our apps foster a sense of community among students, encouraging collaboration and peer-to-peer learning, which enriches the educational experience.",
          },
        ]}
      />
      {/* <Portfolio
        heading="Our portfolio"
        bgColor="ffffff"
        paragraph="Take a look at our diverse portfolio towitness the breadth of our expertise in 
        education app development. Frominteractive learning apps for children to comprehensive 
        eLearning platforms forhigher education, our projects showcase our ability to create engaging 
        and effective educational solutions. Each app in our portfolio is a testament to our commitment 
        to quality and innovation in the realm of educational technology."
        cards={cards}
        btntext="white"
        divBtn="gray"
        direction="right"
        color1="#909090"
        color2="#737373"
      /> */}
      <FrequentQuestions
        heading="Frequently asked questions"
        paragraph="If you're considering Techanic InfoTech for your education app development needs, you likely have some questions. Below we've compiled answers to some of the most frequently asked questions to help clarify our processes, commitments, and the unique value we offer."
        questions={[
          "Q1: What differentiates Techanic InfoTech from other education app development companies?",
          "Q2: How do you ensure the quality and security of the education apps you develop?",
          "Q3: Can Techanic InfoTech develop apps for both iOS and Android platforms?",
          "Q4: What kind of support can I expect after my app is launched?",
          "Q5: How does Techanic InfoTech handle client communication and project updates?",
          "Q6: Can you integrate advanced features like AI and AR in educational apps?",
          "Q7: What is the typical timeline for developing an education app?",
          "Q8: How do you approach project scoping and cost estimation?",
          "Q9: Is there flexibility in your app development services to accommodate changes during the project?",
          "Q10: How can I get started with my education app development project with Techanic InfoTech?",
        ]}
        answers={[
          "A1: Our unique blend of expertise in the latest educational technologies, commitment to quality, and personalized approach to each project sets us apart. We focus on creating innovative, user-centric solutions that drive engagement and learning outcomes.",
          "A2: We adhere to strict quality assurance protocols and conduct comprehensive testing throughout the development process. Security is integrated from the start, with best practices in data protection and compliance.",
          "A3: Yes, our team is proficient in developing apps for both iOS and Android, using native and cross-platform technologies to deliver seamless user experiences across all devices.",
          "A4: We offer ongoing support and maintenance services to ensure your app remains updated, secure, and aligned with evolving user needs and technological advancements.",
          "A5: We believe in transparent and continuous communication, utilizing project management tools and regular meetings to keep you informed and involved at every stage of the development process.",
          "A6: Absolutely, our team is skilled in incorporating advanced technologies like Artificial Intelligence (AI) and Augmented Reality (AR) to create engaging and interactive learning experiences.",
          "A7: The development timeline varies based on the app's complexity, desired features, and any custom requirements. We work closely with clients to establish realistic timelines that meet their launch goals.",
          "A8: We begin with a detailed discussion of your project goals and requirements, followed by a thorough scoping exercise. This allows us to provide a transparent and accurate cost estimate.",
          "A9: Yes, we adopt an agile development methodology, allowing for flexibility and adjustments to the project scope and requirements as needed, ensuring the final product aligns with your vision.",
          "A10: Simply reach out to us with your project idea, and we'll guide you through the next steps, including initial consultations, project scoping, and strategic planning to kickstart your app development journey.",
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
