// app/layout.js
import React from "react";
import { Inter } from "next/font/google";
import NavBar from "@/components/mainSection/navbar";
import Headquarters from "@/lib/endSection/head";
import Email from "@/components/Email";
import "./globals.css";
import Script from "next/script";
import ContactInfo from "@/components/formSection/contactInfo";
import HomePopup from "../components/formSection/HomePopup";

const inter = Inter({ subsets: ["latin"] });
// const globalMetadata = {
//   title: "Techanic Infotech",
//   description:
//     "Techanic Infotech is a leading software development company. We offer services tailored to meet clients' unique needs and transform their visions into reality.",
//   robots: 'index, follow',
//   siteName:"Techanic Infotech"
// };
// const jsonLD = {
//   "@context": "https://schema.org",
//   "@type": "Website",
//   name: "Techanic Infotech",
//   url: "https://techanicinfotech.com/",
// };
// export const metadata = {
//   title: "Techanic Infotech",
//   description: "Techanic Infotech is a leading software development company. We offer services tailored to meet clients' unique needs and transform their visions into reality.",
// };

export default function RootLayout({ children, metadata }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          async
          strategy="lazyOnload"
          defer
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KRLD2G92');`,
          }}
        />

        {/* <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KRLD2G92');
            `,
          }}
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        />
        {/* Apply combined metadata */}
        {/* <meta name="robots" content={"index , follow"} /> */}
        {/* <meta
          property="og:image"
          content="https://www.techanicinfotech.com/OGI/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}
        {/* <meta
          name="twitter:image"
          content="https://www.techanicinfotech.com/OGI/og-image.png"
        /> */}
        <meta name="revisit-after" content="2 days" />
        <meta name="rating" content="Safe For Kids" />
        <meta name="document-type" content="Public" />
        <meta name="language" content="English" />
        <meta property="og:site_name" content="Techanic Infotech" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        /> */}
        <script
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
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRLD2G92"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NavBar color="white" color1="white" />
        {children}
        <ContactInfo />
        <Headquarters />
        <div className="fixed bottom-0 left-0 m-5 z-10">
          <Email />
        </div>
        
        <HomePopup />
        {/* <div className="fixed top-[7%]  right-[10px] sm:right-[10px] md:right-[10px] lg:right-[10px] m-5 z-10 flex flex-col gap-4">
          <img
            src="/assets/new-year.png"
            alt="img"
            className="animate-bounce h-auto w-[80px] sm:w-[86px] md:w-[90px] xl:w-[120px] 2xl:w-[140px]   mx-auto"
          />
        </div> */}

        {/* <PopupForm/> */}
        {/* Tawk.to Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6694cfb732dca6db2caf6b63/1i2qkmpek';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
