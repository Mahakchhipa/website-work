import ContactInfo from "@/components/formSection/contactInfo";
import Portfolio from "@/components/getStarted/portfolio/portfolio";

import ClientTestimonials from "@/lib/clientsReviews/clients";

const slideFood = [
  {
    img1: "portfolioImages/pikit-food-delivery.jpg",
    // img2: pikitImg2,
    heading: "Pikit Food Delivery",

    paragraph:
      "Pikit is a user-friendly food delivery app designed to connect customers with a wide variety of local restaurants. It offers an extensive range of cuisines, allowing users to browse menus, customize orders, and make secure payments easily. Pikit features real-time order tracking, personalized recommendations, and exclusive deals to enhance the dining experience. With a focus on convenience and reliability, Pikit ensures that meals are delivered hot and fresh to your doorstep. The app also includes user reviews and ratings to help customers make informed choices, making it the ultimate solution for hassle-free food delivery.",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=in.pikit.app&pcampaignid=web_share",
    appleLink:
      "https://apps.apple.com/in/app/pikit-food-grocery-delivery/id1536007416",
    webLink:
      "https://apps.apple.com/in/app/pikit-food-grocery-delivery/id1536007416",
  },
  {
    img1: "portfolioImages/brozo-courier-delivery-app.jpg",
    // img2: borzoImg2,
    heading: "Borzo Delivery",
    paragraph:
      "Borzo is an on-demand delivery service app that connects users with couriers for fast and efficient delivery of goods. Formerly known as WeFast, Borzo operates in multiple countries, offering same-day, last-mile, and scheduled delivery services. It caters to both individuals and businesses, providing a reliable solution for transporting packages, documents, and other items. The app features real-time tracking, various delivery options, and competitive pricing, ensuring a seamless experience for users. With a focus on convenience and speed, Borzo is ideal for e-commerce, food delivery, and personal deliveries, making logistics hassle-free and efficient.",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=global.dostavista.client&pcampaignid=web_share",
    appleLink:
      "https://apps.apple.com/us/app/borzo-courier-delivery-app/id1530403049",
    webLink: "https://borzodelivery.com/in/cities/home-delivery-bengaluru",
  },
  {
    img1: "portfolioImages/cabify-taxi-app.jpeg",
    // img2: cabifyImg2,
    heading: "Cabify ",
    paragraph:
      "Cabify is a transportation network startup that provides ride-hailing services via its mobile app and is present in numerous European and Latin American countries. Cabify lets users plan rides, monitor their driver's whereabouts in real time, and pay for their journeys online, just like other ride-hailing apps. Cabify is renowned for emphasizing safety and provides tools like ride tracking and background checks on drivers. Additionally, the app offers possibilities for various ride kinds, such as group transportation, executive automobiles, and regular cars. In an effort to rival other ride-hailing services like Uber and Lyft, Cabify seeks to offer consumers in urban regions a dependable and practical transportation option.",
    appleLink: "https://apps.apple.com/es/app/cabify/id476087442",
    webLink: "https://cabify.com/en",
  },
  {
    img1: "portfolioImages/nepali-matrimony.png",
    // img2: nepalImg2,
    heading: "Nepali Matrimony",
    paragraph:
      "A portal called Nepali Matrimony was created to assist individuals in Nepal and the Nepali diaspora in finding compatible life partners. It serves people who are looking for partnerships in the Nepali community that would eventually lead to marriage. Users of the app can establish profiles with information about their age, education, occupation, and preferred partners. Based on these parameters, users can look for possible matches and message them using the app's messaging service. The goal of the Nepali Matrimony app is to give Nepali singles a quick, acceptable, and culturally relevant means to meet and choose a life mate.",
    webLink: "https://www.nepal-matrimony.com/success",
  },
  {
    img1: "portfolioImages/doctor-on-demand.jpg",
    // img2: docondemandImg2,
    heading: "Dr+ On Demand",
    paragraph:
      "A telehealth program called Dr+ On Demand was created to offer easily available and convenient medical consultations. Without having to physically visit a clinic, users can schedule virtual visits with credentialed healthcare specialists to receive medical advice, medications, and treatment plans. Real-time video consultations, encrypted communication, and an easy-to-use UI are all aspects of the app. The goal of Dr+ On Demand is to improve access to healthcare, particularly for people living in rural or disadvantaged areas. It also provides a wide range of services, such as mental health counseling, urgent care, and specialist consultations, making it a complete answer for contemporary healthcare requirements.",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.doctorondemand.android.patient&pcampaignid=web_share",
    appleLink: "https://apps.apple.com/us/app/doctor-on-demand/id591981144",
    webLink: "https://doctorondemand.com",
  },
];
export const metadata = {
  title: "Get in Touch with Techanic Infotech Today ",
  description:
    "Reach out to Techanic Infotech, a premier mobile and web development company. Submit your request through our contact form, and our team will respond promptly to address your development needs.",

  alternates: {
    canonical: new URL("https://www.techanicinfotech.com/contact-us"),
  },
  robots: "index, follow",
};
export default function ContectUs() {
  return (
    <>
<div className="w-full">
  <div
    className="relative flex items-center justify-center h-[220px] md:h-[380px] p-[40px] bg-cover bg-center"
    style={{
      backgroundImage: "url('/assets/bannerimages/contact_us.webp')",
    }}
  >
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Text Content */}
    <div className="relative text-start max-w-[1200px] z-10">
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
        Contact Us
      </h1>
    </div>
  </div>
</div>


      {/* <Portfolio
         heading="Our portfolio"
        paragraph="At Techanic InfoTech, we let our work speak for itself. Here’s a glimpse into our technical prowess in the form of market-leading solutions."
        bgColor="F1F5F9"
        slides={slideFood}
        divBtn="#0000ff"
        direction="right"
        color1="#0000ff"
        color2="#001289"
        btntext="white"
      /> */}

      <ClientTestimonials
        heading="What Our Clients Say ?"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
        bgColor="F1F5F9"
      />
    </>
  );
}
