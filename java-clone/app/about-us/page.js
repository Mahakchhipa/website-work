import Vision from "@/lib/secondpage/vision";
import OurClients from "@/components/clients/page";
import ClientTestimonials from "@/lib/clientsReviews/clients";
import Thrive from "@/components/mainSection/aboutfiles/Trive";
import ExpertsDev from "@/lib/secondpage/ExpertsDev";
import AboutUsBanner from "@/components/AboutUsBanner";
import ShadowCards from "@/components/ShadowCards";
import CTAButtonDevelopment from "@/components/getStarted/CTABUttonDevelopment";
export const metadata = {
  contentLanguage: "en-us",
  title: "About Us - Techanic Infotech",
  description:
    "Techanic Infotech is an IT solutions-providing company. We provide web development, app development, and complete enterprise solutions for businesses.",
  alternates: {
    canonical: new URL("https://www.techanicinfotech.com/about-us"),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "About Us - Techanic Infotech",
    description:
      "Techanic Infotech is an IT solutions-providing company. We provide web development, app development, and complete enterprise solutions for businesses.",
    url: "https://www.techanicinfotech.com/about-us",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    alt: "Techanic Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Techanic Infotech",
    description: `Techanic Infotech is a leading software development company. We offer services tailored to meet clients' unique needs and transform their visions into reality.`,
    site: "@Techanicinfo",
    creator: "@Techanicinfo",
    image: "https://www.techanicinfotech.com/OGI/og-image.png",
    url: "https://www.techanicinfotech.com/about-us",
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

export default function About() {
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
          "name": "About Us - Techanic Infotech",
          "url": "https://www.techanicinfotech.com/about-us",
          "image": "https://www.techanicinfotech.com/OGI/og-image.png",
          "description": "Techanic Infotech is a leading software development company. We offer services tailored to meet clients' unique needs and transform their visions into reality.",
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
          "@id": "https://www.techanicinfotech.com/about-us",
          "url": "https://www.techanicinfotech.com/about-us",
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
            "https://www.techanicinfotech.com/about-us"
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

      <AboutUsBanner
        heading="About Us"
        bgImage="/assets/bannerimages/about-us-banner-image.webp"
        mobilebgImage="/assets/bannerimages/about-us-mobile-banner-image.webp"
        textColor1="white"
      />
      <OurClients
        headingpart1="Working With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <ShadowCards />
      <Vision />
      <Thrive />
      <CTAButtonDevelopment
        heading="Join Our Journey"
        paragraph="Become a part of the Techanic Infotech family where innovation meets excellence."
        text="Let's Talk"
        useBackgroundImage={true}
        backimage="/assets/about-us-cta-vector-image.svg"
        buttonColor="#ffffff"
        image="/assets/about-us-cta-image.webp"
        textColor="white"
      />
      <ClientTestimonials
        heading="Hear Our Success Stories"
        cardBgColor="F1F5F9"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        bgColor="ffffff"
      />

      {/* <OurBlogs /> */}
    </>
  );
}
