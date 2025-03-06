// app/blogs/[slug]/page.js
// export const metadata = {
//   robots: 'noindex, nofollow',
// };
import BlogPost from "@/components/BlogComponents/Blogpost";
export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.slug;
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const response = await fetch(
    `https://techanicstrapi.onrender.com/api/blogs?populate=mainImage&filters[slug][$eq]=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();

  const blog = data.data?.[0]?.attributes;

  if (!blog) {
    return {
      title: "Blog not found",
      description: "This blog post could not be found.",
    };
  }
  console.log(blog.meta?.title);

  const { title, description } = blog.meta || {};
  // const mainImage = blog?.mainImage?.data?.attributes?.formats?.large?.url
  const mainImage = blog?.mainImage?.data[0]?.attributes?.formats?.large?.url;
  console.log(mainImage, "meta data for blogs");
  console.log(title, "meta title");
  return {
    title: title || "Default Title",
    description: description || "Default Description",
    openGraph: {
      title: blog.meta?.title || "Default OG Title",
      description: blog.meta?.description || "Default OG Description",
      url: `https://www.techanicinfotech.com/blogs/${blog.slug}`,
      images: [
        {
          url: `${mainImage}`, // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.meta?.title || "Default Twitter Title",
      description: blog.meta?.description || "Default Twitter Description",
      images: [
        {
          url: `${mainImage}`, // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ],
    },
    // robots: "index, follow",
    alternates: {
      canonical: `https://www.techanicinfotech.com/blogs/${blog.slug}`,
    },
  };
}

export default async function BlogPage({ params }) {
  const id = params.slug;
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  // Fetching blog data from the API
  const response = await fetch(
    `https://techanicstrapi.onrender.com/api/blogs?populate=mainImage&filters[slug][$eq]=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  const blog = data.data?.[0]?.attributes;

  // Log the entire blog data to understand its structure
  console.log("Fetched blog data:", blog);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "This blog post could not be found.",
    };
  }

  // Log schemaData directly
  console.log("Raw schemaData:", blog.schemaData);

  // Check if schemaData contains faq
  const faqEntities = blog.schemaData?.faq || [];
  console.log("FAQ from schemaData:", faqEntities); // Log the FAQ entities

  // Creating the FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntities.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  console.log("Constructed FAQ Schema:", faqSchema); // Log the constructed schema

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 2) }}
      />
      <BlogPost blog={blog} />
    </>
  );
}
