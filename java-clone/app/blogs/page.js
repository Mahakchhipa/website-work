// app/blogs/page.js
import BlogCards from "@/components/BlogComponents/Blogcards";
export const metadata = {
  title: "Latest Blogs and News | Techanic Infotech",
  description:
    "Find the latest official blogs of mobile app development, dating app development and more technology industry.",
    alternates: {
      canonical: new URL('https://www.techanicinfotech.com/blogs'),   
    },
    robots: "index, follow",
};


export default function Blogs() {
  return (
      <div className="w-full  pt-16">
        <BlogCards blogsPerPage="9" />          
      </div>
  );
}
