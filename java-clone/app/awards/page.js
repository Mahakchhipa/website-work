import ViewFirstSection from "@/lib/secondpage/development/frontSection";

import OurClients from "@/components/clients/page";
import Recognition from "@/lib/secondpage/recognition";
import OurBlogs from "@/lib/clientsReviews/blogs";
import ClientTestimonials from "@/lib/clientsReviews/clients";
import ContactInfo from "@/components/formSection/contactInfo";
export const metadata = {
  title: "Our Awards and Recognition - Techanic Infotech",
  description:
    "Techanic Infotech’s greatest honour is delivering value for your business. Some industry pioneers honoured us with awards that are worth showcasing.",
  alternates: {
    canonical: new URL("https://www.techanicinfotech.com/awards"),
  },
  robots: "index, follow",
};
export default function Awards() {
  return (
    <>
      <ViewFirstSection
        image="backgroundImages/awards-banner.png"
        heading="Honoured By The Best, As The Best"
        pargraph="Explore Earth And Space"
        mainparagraph1="At Techanic Infotech, our legacy is marked by a 
           series of distinguished awards and accolades that reflect 
           our unwavering commitment to innovation and service excellence. "
        mainparagraph2="Each honor we receive fuels our drive to set new standards in the
           technology services industry."
        text="View More"
      />
      <OurClients
        headingpart1="Working With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <Recognition />
      <ClientTestimonials
        heading="Hear Our Success Stories"
        cardBgColor="ffffff"
        paragraph="Discover how Techanic Infotech has propelled businesses 
        into the future with our transformative solutions."
        bgColor="F1F5F9"
      />
        
      {/* <OurBlogs/> */}
    </>
  );
}
