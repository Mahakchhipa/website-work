import ContactInfo from "@/components/formSection/contactInfo";
import PortfolioPage from "@/components/getStarted/portfolio/PortfolioPage";
import ClientTestimonials from "@/lib/clientsReviews/clients";
export const metadata = {
  title: "Techanic Infotech | Our Web and App Development Portfolios",
  description:
    "A glimpse of a few top brands that we have served with incredible web development, app development, on-demand app development, etc.",
    alternates: {
      canonical: new URL('https://www.techanicinfotech.com/portfolio'),   
    },
    robots: "index, follow",
};


export default function Portfolio() {
  return(
    <>
    <PortfolioPage/>
    <ClientTestimonials
        heading="What Our Clients Say ?"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
        bgColor="F1F5F9"
      />
      
    </>
  )
}
