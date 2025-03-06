import Ewallet from "@/lib/secondpage/Ewallet/ewalletApp";

import OurClients from "@/components/clients/page";

import Experts from "@/lib/secondpage/dev";
import Portfolio from "@/components/getStarted/portfolio/portfolio";
import HiringDevs from "@/lib/secondpage/hireDev";
import TechSuccess from "@/lib/colab/techSuccess";

import Appdev from "@/lib/secondpage/nativeapp/Appdev";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import OurBlogs from "@/lib/clientsReviews/blogs";
import ClientTestimonials from "@/lib/clientsReviews/clients";

import Startwithussection2 from "@/components/getStarted/startwithussection2";

import BannerImg from "@/lib/secondpage/Ewallet/BannerImg";
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
    heading: "Client-Centric Approach",
    paragraph:
      "We listen, we understand, and we deliver. Our client-centric approach means your vision is our blueprint. Personalized attention to your needs ensures a WordPress solution that is perfectly aligned with your business objectives.",
  },
  {
    heading: "Cutting-Edge Technology",
    paragraph:
      "Staying ahead of the curve is vital, and we do it with our command of cutting-edge technology. Our WordPress solutions harness the latest tools and techniques to deliver state-of-the-art websites.",
  },
  {
    heading: "Agile Development Methodology",
    paragraph:
      "Our agile development methodology guarantees efficiency and flexibility. We adapt to changes and deliver high-quality WordPress solutions quickly, without compromising on quality.",
  },
];

const secondColumnData = [
  {
    heading: "Transparent Communication",
    paragraph:
      "Clear and continuous communication forms the cornerstone of our services. We keep you informed at every stage, ensuring a collaborative and inclusive development process.",
  },
  {
    heading: "Comprehensive Support",
    paragraph:
      "We don’t just build and leave. Our comprehensive support and maintenance services are designed to provide peace of mind post-launch, with a focus on longevity and performance of your WordPress site.",
  },
  {
    heading: "Proven Track Record",
    paragraph:
      "Our portfolio speaks volumes of our expertise. With a proven track record in delivering diverse WordPress projects, we have established ourselves as a trusted leader in WordPress development.",
  },
];
export const metadata = {
  contentLanguage: "en-us",
  title: "WordPress Development Company | Hire WordPress Developers",
  description:
    "Techanic Infotech is a WordPress development company. We provide WordPress development services to create interactive, responsive, and secure websites.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/wordpress-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "WordPress Development Company | Hire WordPress Developers",
    description:
      "Techanic Infotech is a WordPress development company. We provide WordPress development services to create interactive, responsive, and secure websites.",
    url: "https://www.techanicinfotech.com/services/wordpress-development-company",

    alt: "Techanic Infotech",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/wordpress-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "WordPress Development Company | Hire WordPress Developers",
    description:
      "Techanic Infotech is a WordPress development company. We provide WordPress development services to create interactive, responsive, and secure websites.",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/wordpress-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

export default function Wordpress() {
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
              "name": "WordPress Development Company | Hire WordPress Developers",
              "url": "https://www.techanicinfotech.com/services/wordpress-development-company",
              "image": "https://www.techanicinfotech.com/OGI/services/wordpress-development-og.webp",
              "description": "Techanic Infotech is a WordPress development company. We provide WordPress development services to create interactive, responsive, and secure websites.",
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
                  "addressLocality": "Via Giuseppe mazzini nu. 6, flat nu 107, MILANO 20123 ITALY",
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
      {/* <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Techanic Infotech",
              "image": "https://www.techanicinfotech.com/OGI/services/wordpress-development-og.webp",
              "@id": "https://www.techanicinfotech.com/services/wordpress-development-company",
              "url": "https://www.techanicinfotech.com/services/wordpress-development-company",
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
                  "addressLocality": "Via Giuseppe mazzini nu. 6, flat nu 107, MILANO 20123 ITALY",
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
                "https://www.techanicinfotech.com/services/wordpress-development-company"
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
              "url": "https://www.techanicinfotech.com/services/wordpress-development-company",
              "logo": "https://www.techanicinfotech.com/OGI/services/wordpress-development-og.webp",
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
                "https://www.techanicinfotech.com/services/wordpress-development-company"
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
              "@id":"https://www.techanicinfotech.com/services/wordpress-development-company",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is WordPress development and how can it benefit my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WordPress development involves creating a website using the WordPress platform, known for its versatility and user-friendliness. It benefits your business by providing a scalable, SEO-friendly, and customizable website that enhances user experience and digital presence."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Techanic Infotech approach custom WordPress development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our approach is tailored to each client's needs, starting with a deep dive into your business objectives. We offer bespoke solutions, from theme customization to plugin development, ensuring a website that is both unique and performance-driven."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Techanic Infotech help migrate my existing website to WordPress?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our WordPress migration services are designed to transfer your existing website to the WordPress platform smoothly, with minimal downtime and no data loss, while also optimizing the new site for performance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will I be able to update my WordPress site myself after development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, WordPress is user-friendly, and we ensure you have all the necessary training and tools to manage your site's content. We also offer WordPress support and maintenance services for more complex updates and technical issues."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Techanic Infotech sign a Non-Disclosure Agreement (NDA)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We prioritize confidentiality and are happy to sign an NDA to ensure your project details and intellectual property are protected throughout the development process and after completion."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Techanic Infotech ensure the security of my WordPress website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We implement robust security measures, including secure coding practices, regular updates, and security plugins, to protect your website from threats. Our maintenance plan includes ongoing security checks and immediate response to any issues."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the cost of WordPress website development at Techanic Infotech?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Costs vary depending on the complexity and specific requirements of your project. We provide transparent quotes after understanding your needs, ensuring no hidden fees and a cost-effective development process."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to develop a WordPress site with Techanic Infotech?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Development time varies based on project size and complexity. We follow an agile methodology to deliver quality websites promptly and can provide a time estimate after discussing project requirements."
                  }
                }
              ]
            }
          `,
        }}
      />

      <VectorBanner
        headingPart1="WordPress Development Company"
        paragraph="Unlock the full potential of your online presence with Techanic Infotech, a leading WordPress development company. We specialize in creating bespoke WordPress development services that elevate your brand and engage your audience."
        vectorImage="/assets/bannerimages/wordpress-development-vector-banner-image.svg"
        btnContent="Let’s Discuss"
        solidColor="#ffffff"
        image="/assets/bannerimages/wordpress-development-banner-image.webp"
      />
      <OurClients
        headingpart1="We Work With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <NativeApp1
        headingPart1="Mastering "
        headingPart2="WordPress Development"
        paragraph1={`WordPress powers a substantial portion of the web, thanks to its versatile and user-friendly platform. It’s the powerhouse behind a diverse array of websites, from bustling e-commerce stores to professional portfolios. Understanding its vast potential is crucial for any business aiming to establish a significant online presence.`}
        paragraph2="Techanic Infotech stands at the forefront of this digital revolution, providing WordPress development services that cater to the specific needs of businesses. By merging innovation with functionality, we help companies to not only carve their niche in the digital landscape but also to maintain a dynamic and robust online platform that grows with their business."
        image="/assets/wordpress-development-section-image.webp"
      />
      <CTAButton
        heading="Custom WordPress Development"
        paragraph="Transform your vision into reality with our custom WordPress development services. Tailored to meet your unique business needs, our solutions are the key to a standout online identity."
        btntext="Let’s Get Started"
        backgroundImage="/assets/wordpress-cta-vector-image.svg"
        bgColor="#ffffff"
      />
      <ServicePagesCards
        headingPart1="Comprehensive "
        headingPart2="WordPress Services"
        gridStyles="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8"
        paragraph={`Expand your digital reach with our full suite of WordPress services tailored to meet the evolving demands of your business. Our experts are dedicated to delivering excellence at every step of your web journey.`}
        techcard={[
          {
            image: "/assets/icons/wordpress-website-development-icon.png",
            title: "WordPress Website Development",
            description:
              "Crafting stunning and responsive websites, our WordPress website development services ensure your site not only looks great but also performs seamlessly across all devices, enhancing user experience and engagement.",
          },
          {
            image: "/assets/icons/woo-commerce-icon.png",
            title: "WooCommerce - eCommerce Development",
            description:
              "Leverage the power of WooCommerce to build a robust eCommerce platform. Our tailored solutions are designed to boost your online sales with a user-friendly shopping experience and seamless payment integration.",
          },
          {
            image: "/assets/icons/custom-wordpress-development-icon.png",
            title: "Custom WordPress Development",
            description:
              "Every business is unique, and so should be its website. Our custom WordPress development goes beyond templates to create bespoke functionalities and designs that reflect the distinctiveness of your brand.",
          },
          {
            image: "/assets/icons/wordpress-plugin-development-icon.png",
            title: "WordPress Plugin Development",
            description:
              "Extend the capabilities of your WordPress site with custom plugins. From adding simple features to complex integrations, our WordPress Plugin Development services cater to your specific needs for a more efficient site.",
          },
          {
            image: "/assets/icons/wordpress-theme-customization-icon.png",
            title: "WordPress Theme Customization",
            description:
              "Transform your website’s look and feel with our WordPress theme customization services. Tailor-made to align with your branding, we ensure your site stands out with a professional and personalized aesthetic.",
          },
          {
            image: "/assets/icons/job-portal-maintenance-icon.png",
            title: "WordPress Migration and Support",
            description:
              "Migrate your existing website to WordPress smoothly with our expert assistance. Post-launch, count on our WordPress support and maintenance services to keep your site updated, secure, and running without a hitch.",
          },
        ]}
      />

      <ServiceCtaButton
        heading="Work With WordPress Experts"
        paragraph="Join forces with our WordPress experts and bring to life a website that drives results. Our dedicated team ensures your site is robust, scalable, and perfectly aligned with your business goals."
        text="Talk To Us"
        isGradientPage={true}
        gradient="90deg, #FFD152 0%, #CABB93 100%"
        image="/assets/wordpress-development-cta-image.webp"
        btnbg="#ffffff"
      />
      <ServicePagesCards
        headingPart1="Advantages Of Our "
        headingPart2="WordPress Development Solutions"
        gridStyles="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8"
        paragraph={`Elevate your business with our WordPress development solutions designed for success. Benefit from a blend of agility, customization, and scalability to stay ahead in the competitive digital landscape.`}
        cardType={false}
        techcard={[
          {
            image: "/assets/icons/seamless-user-experience-icon.png",
            title: "Seamless User Experience",
            description:
              "Our WordPress solutions prioritize user experience, ensuring intuitive navigation and fast loading times. A seamless interface translates to increased user engagement and retention.",
          },
          {
            image: "/assets/icons/customizability-flexibility-icon.png",
            title: "Customizability and Flexibility",
            description:
              "Tailor your site to the tee with our custom WordPress CMS development services. Flexibility is at your fingertips, allowing for unique designs and functionalities that grow with your business.",
          },
          {
            image: "/assets/icons/robust-security-icon.png",
            title: "Robust Security Measures",
            description:
              "Security is paramount; hence our WordPress websites come fortified with robust security protocols. Keep your customer's data safe and your business reputation intact.",
          },
          {
            image: "/assets/icons/seo-friendly-structure-icon.png",
            title: "SEO-Friendly Structure",
            description:
              "Climb the search engine ranks with WordPress's SEO-friendly features. Our development approach maximizes visibility, driving organic traffic to your website.",
          },
          {
            image: "/assets/icons/scalable-solution-icon.png",
            title: "Scalable Web Solutions",
            description:
              "As your business expands, so does your website. Our WordPress web solutions are designed to scale, supporting your growth with adaptable features and resources.",
          },
          {
            image: "/assets/icons/comprehensive-support-icon.png",
            title: "Comprehensive WordPress Support",
            description:
              "Post-launch, our WordPress support and maintenance stand ready to address your needs. Continuous updates and optimizations ensure your site remains at peak performance.",
          },
        ]}
        bgColor="F1F5F9"
        cardBG="ffffff"
        color="0F172A"
        showExtraCards={false}
        radius="8"
        position="center"
        height="450px"
      />

      <HiringDevelopers
        headingPart1="Hire Expert "
        headingPart2="WordPress Developers"
        paragraph1="When you hire WordPress developers from Techanic Infotech, you're investing in a partnership with seasoned professionals who bring a wealth of experience and creativity to your project. Our developers are not just coders; they are problem solvers and innovators, committed to pushing the boundaries of what WordPress can do. With a deep understanding of the platform and its vast array of plugins and themes, they deliver solutions that are both strategic and high-performing."
        paragraph2="Hire WordPress web developers means getting access to a team dedicated to excellence and meticulous attention to detail. They are adept in the latest trends and technologies, ensuring your website is cutting-edge and fully optimized for user experience and SEO. Beyond technical skills, our developers are communicative and collaborative, integrating seamlessly into your workflow to achieve the results you need with the flexibility you require with our WordPress Developers For Hire. "
        image="/assets/hire-developers-service-page-image.webp"
        btntxt="white"
      />
      <TechSuccess
        headingPart1="WordPress Web "
        headingPart2="Development Solutions"
        paragraph="Discover comprehensive WordPress web development solutions with Techanic Infotech. From initial concept to final launch, our seasoned WordPress developers craft websites that are both innovative and user-friendly. Experience seamless integration, customization, and a suite of WordPress web solutions designed to propel your business forward."
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
        head="Our WordPress Tech Mastery"
        para="At Techanic Infotech, we are proficient in the latest WordPress technologies. Our WordPress development professionals are adept at harnessing the full spectrum of WordPress features to deliver cutting-edge websites."
        bgColor="#EFF3FF"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          { image: "/assets/icons/front-end-icon.svg", label: "Front-end" },
          { image: "/assets/icons/backend-icon.svg", label: "Back-end" },
          { image: "/assets/icons/app-dev-icon.svg", label: "Mobile" },

          {
            image: "/assets/icons/web-servers.png",
            label: "Web",
          },
          {
            image: "/assets/icons/big-data-label-icon.svg",
            label: "Big Data",
          },
        ]}
        languages={[
          // Front-end Technologies
          {
            image: "/assets/icons/react-icon.png",
            label: "ReactJS",
            section: "Front-end",
          },
          {
            image: "/assets/icons/angular-icon.png",
            label: "AngularJS",
            section: "Front-end",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "React Native",
            section: "Front-end",
          },

          // Back-end Technologies

          {
            image: "/assets/icons/ruby-on-rails-icon.png",
            label: "Ruby On Rails",
            section: "Back-end",
          },
          {
            image: "/assets/icons/php-development-icon.png",
            label: "PHP",
            section: "Back-end",
          },
          {
            image: "/assets/icons/python-icon.png",
            label: "Python",
            section: "Back-end",
          },
          {
            image: "/assets/icons/node-js-icon.png",
            label: "Node.js",
            section: "Back-end",
          },
          {
            image: "/assets/icons/mern-icon.png",
            label: "MERN",
            section: "Back-end",
          },
          {
            image: "/assets/icons/java-icon.png",
            label: "JAVA",
            section: "Back-end",
          },

          // Mobile Technologies
          {
            image: "/assets/icons/android-icon.png",
            label: "Android",
            section: "Mobile",
          },
          {
            image: "/assets/icons/ios-icon.png",
            label: "iOS",
            section: "Mobile",
          },
          {
            image: "/assets/icons/hybrid-icon.png",
            label: "Hybrid",
            section: "Mobile",
          },

          // Web Technologies
          {
            image: "/assets/icons/drupal-icon.png",
            label: "Drupal",
            section: "Web",
          },
          {
            image: "/assets/icons/wordpress-icon.png",
            label: "WordPress",
            section: "Web",
          },

          // Big Data Technologies
          {
            image: "/assets/icons/nlp-icon.png",
            label: "NLP",
            section: "Big Data",
          },
          {
            image: "/assets/icons/data-science-icon.png",
            label: "Data Science & Analytics",
            section: "Big Data",
          },
        ]}
      />
      <Appdev
        mainHeading="Why Choose Techanic Infotech For WordPress Development?"
        mainParagraph="Techanic Infotech stands out as the partner of choice for WordPress development due to our unwavering commitment to quality and innovation. Our team is composed of industry veterans who are passionate about crafting tailor-made solutions that drive success. We pride ourselves on our strategic approach, which blends technological prowess with business acumen, ensuring your WordPress site is not only aesthetically pleasing but also commercially effective."
        firstColumnData={firstColumnData}
        secondColumnData={secondColumnData}
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Have questions? We’ve got answers. Dive into our FAQs to learn more about our WordPress development."
        questions={[
          "Q1: What is WordPress development and how can it benefit my business?",
          "Q2: How does Techanic Infotech approach custom WordPress development?",
          "Q3: Can Techanic Infotech help migrate my existing website to WordPress?",
          "Q4: Will I be able to update my WordPress site myself after development?",
          "Q5: Does Techanic Infotech sign a Non-Disclosure Agreement (NDA)?",
          "Q6: How does Techanic Infotech ensure the security of my WordPress website?",
          "Q7: What is the cost of WordPress website development at Techanic Infotech?",
          "Q8: How long does it take to develop a WordPress site with Techanic Infotech?",
        ]}
        answers={[
          "A1: WordPress development involves creating a website using the WordPress platform, known for its versatility and user-friendliness. It benefits your business by providing a scalable, SEO-friendly, and customizable website that enhances user experience and digital presence.",
          "A2: Our approach is tailored to each client's needs, starting with a deep dive into your business objectives. We offer bespoke solutions, from theme customization to plugin development, ensuring a website that is both unique and performance-driven.",
          "A3: Absolutely. Our WordPress migration services are designed to transfer your existing website to the WordPress platform smoothly, with minimal downtime and no data loss, while also optimizing the new site for performance.",
          "A4: Yes, WordPress is user-friendly, and we ensure you have all the necessary training and tools to manage your site's content. We also offer WordPress support and maintenance services for more complex updates and technical upkeep.",
          "A5: We prioritize confidentiality and are happy to sign an NDA to ensure your project details and intellectual property are protected throughout the development process and after completion.",
          "A6: We implement robust security measures, including secure coding practices, regular updates, and security plugins, to protect your website from threats. Our maintenance plan includes ongoing security checks and immediate response to any issues.",
          "A7: Costs vary depending on the complexity and specific requirements of your project. We provide transparent quotes after understanding your needs, ensuring no hidden fees and a cost-effective development process.",
          "A8: Development time varies based on project size and complexity. We follow an agile methodology to deliver quality websites promptly and can provide a time estimate after discussing your project requirements.",
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
