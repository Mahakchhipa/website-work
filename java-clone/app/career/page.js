import Careers from '@/components/careers/Careers'
export const metadata = {
  title: "Career Opportunities | Techanic Infotech",
  description:
    "Get on an inventive journey with us. As a dynamic and fastest-growing software development company, Techanic Infotech provides an ideal environment.",
    alternates: {
      canonical: new URL('https://www.techanicinfotech.com/career'),
      
    },
    robots: "index, follow",
};

export default function Career() {
  return(
    <>
    <Careers/>
    </>
  )
}
