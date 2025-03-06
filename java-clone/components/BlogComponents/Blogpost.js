"use client";
import React from "react";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Skeleton from "@mui/material/Skeleton";
import Link from "next/link";
import "./blogs.css";
import CustomImage from "./CustomeImage";
import PopupForm from "../formSection/PopupForm";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";
import cta1 from "../../public/assets/blog-content-cta-1.webp";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // Popup state
  const [displayBlogs, setDisplayBlogs] = useState([]);
  const [page, setPage] = useState(1);

  const [error, setError] = useState(null);
  const blogsPerPage = 3;
  const contentRef = useRef(null);
  const handleOpen = () => {
    setIsOpen(true);
    console.log("buuton clicked");
  }; // Open popup
  const handleClose = () => setIsOpen(false); // Close popup

  const imageLinks = [
    "/assets/blog-content-cta-2.webp",
    "/assets/blog-content-cta-1.webp",
  ];
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [buttonContent, setButtonContent] = useState([]);
  const generateHtmlFromContent = (content) => {
    const htmlContent = content
      .map((block) => {
        if (!block) return ""; // Skip blocks without content
        const children = block.children || [];
  
        if (block.type === "code") {
          return children.map((child) => child.text?.trim() || "").join("");
        }
  
        if (
          block.type === "paragraph" &&
          children.some((child) => (child.text?.trim() || "").startsWith("<"))
        ) {
          return children.map((child) => child.text?.trim() || "").join("");
        }
        if (block.type === "list" && block.format === "unordered") {
          return `<ul>${children
            .map((liChild) => {
              // Handle list-item text, bold property, and links
              const listItemContent = liChild.children
                .map((child) => {
                  if (child.type === "link") {
                    const href = child.url || "#";
                    const boldText = child.children
                      .map((linkChild) =>
                        linkChild.bold
                          ? ` <strong>${linkChild.text || ""} </strong>`
                          : linkChild.text || ""
                      )
                      .join("");
                    return `<a href="${href}" style="color: blue;">${boldText}</a>`;
                  }
                  
                  // Check if text should be bold
                  if (child.bold) {
                    return `<strong>${child.text || ""}</strong>`;
                  }
        
                  return child.text || "";
                })
                .join(""); // Combine all text, bold, and links
          
              return `<li class="list-disc ml-4">${listItemContent}</li>`;
            })
            .join("")}</ul>`;
        }
        
  
  
        if (block.type === "image" && block.image) {
          const { url, alternativeText } = block.image;
          const imageUrl = url.startsWith("http")
            ? url
            : `https://techanicstrapi.onrender.com${url}`;
          return `<img src="${imageUrl}" alt="${
            alternativeText || ""
          }" style="object-fit: cover;" />`;
        }
  
        if (
          block.type !== "heading" &&
          block.type !== "paragraph" &&
          block.type !== "table" &&
          block.type !== "a" &&
          block.type !== "list" &&
          block.type !== "list-item" // Handle list-item separately
        ) {
          return "";
        }
  
        const textContent = children
          .map((child) => {
            // Check if the child is a link
            if (child.type === "link") {
              const href = child.url || "#";
              const boldText = child.children
                .map((linkChild) =>
                  linkChild.bold
                    ? ` <strong>${linkChild.text || ""} </strong>`
                    : linkChild.text || ""
                )
                .join("");
              return `<a href="${href}" style="color: blue;">${boldText}</a>`;
            }
  
            // Use the bold property to determine if text should be bold
            if (child.bold) {
              return ` <strong>${child.text || ""} </strong>`;
            }
  
            return child.text?.trim() || "";
          })
          .filter((text) => text !== ""); // Filter out empty text
  
        if (textContent.length === 0) return ""; // Skip blocks with no text
  
        switch (block.type) {
          case "heading":
            return `<h${block.level || 1} id=${block.children?.[0]?.text
              ?.replace(/\s+/g, "-")
              .toLowerCase()}>${textContent.join("")}</h${block.level || 1}>`;
          case "paragraph":
            return `<p>${textContent.join("")}</p> `;
          case "list":
            // Handle unordered list (format: 'unordered')
            if (block.format === 'unordered') {
              return `<ul>${children
                .map((liChild) => `<li>${generateHtmlFromContent([liChild])}</li>`) // Call generateHtmlFromContent for each list-item
                .join("")}</ul>`;
            }
            return ""; // Skip other types of lists if needed
          case "list-item":
            // Handle individual list items
            return `<li>${textContent.join("")}</li>`;
          case "table":
            return `<table>${textContent.join("")}</table>`; // Add more handling as needed
          default:
            return "";
        }
      })
      .filter((html) => html !== "") // Filter out empty HTML blocks
      .join("");
  
    console.log(htmlContent); // Log the generated HTML for debugging
    return htmlContent;
  };
  
  useEffect(() => {
    const currentRef = contentRef.current;

    // Function to handle button clicks
    const handleClick = (e) => {
      console.log("Clicked element:", e.target);
      if (e.target.tagName.toLowerCase() === "button") {
        handleOpen(); // Open the popup when any button is clicked
      }
    };

    // Attach event listener to the ref
    if (currentRef) {
      currentRef.addEventListener("click", handleClick);
    }

    return () => {
      // Clean up the event listener
      if (currentRef) {
        currentRef.removeEventListener("click", handleClick);
      }
    };
  }, [blogs]); // Re-run when blogs change
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          `https://techanicstrapi.onrender.com/api/blogs?filters[slug][$eq]=${slug}&populate=mainImage&populate=image`,
          {
            headers: {
              "Content-Type": "application/json",

              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Ensure the response is in JSON format
        const data = await response.json();

        console.log("Fetched data:", data);

        // Check if the data has a 'data' key and it's an array
        if (Array.isArray(data.data)) {
          setBlogs(data.data);
        } else {
          console.error("Unexpected data format:", data);
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://techanicstrapi.onrender.com/api/blogs?fields=title&fields=slug&populate=mainImage&sort=createdAt:desc&pagination[pageSize]=3`, // Sort by createdAt
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        console.log("card data", data);

        // Extract blogs with their main image and title (heading)
        const extractedBlogs = data.data.map((blog) => ({
          id: blog.id,
          title: blog.attributes.title,
          mainImage: blog.attributes.mainImage?.data?.[0]?.attributes?.url
            ? `${blog.attributes.mainImage.data[0].attributes.url}`
            : null,
          slug: blog.attributes.slug,
          createdAt: blog.attributes.createdAt, // Add createdAt if needed
        }));

        setDisplayBlogs(extractedBlogs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedBlogs = Array.isArray(displayBlogs)
    ? displayBlogs.slice((page - 1) * blogsPerPage, page * blogsPerPage)
    : [];

  if (error) return <p>Error: {error}</p>;
  if (loading) {
    return (
      <>
        <div className="bg-[#eeeeee] rounded  px-[24px]  pt-28 pb-24  xl:px-[100px] flex items-center justify-center">
          <div className="grid  lg:grid-cols-2  gap-4   ">
            <div className=" max-h-[458px]">
              <Skeleton
                variant="rectangular"
                className="w-[320px] h-[300px] sm:w-[400px] md:w-[740px] lg:w-[480px] xl:w-[450px] xl:h-[400px] rounded-[24px]"
              />
            </div>

            <div className="flex items-start justify-center flex-col gap-4 w-full md:w-[300px] lg:w-[500px]">
              <div className="flex items-center gap-3 w-full">
                {" "}
                <Skeleton variant="rectangular" width="100%" />
                <Skeleton variant="text" width="100%" />
              </div>
              <div className="w-full">
                {" "}
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="40%" />
              </div>

              <div className="flex lg:flex-row flex-col gap-4">
                <div className="flex gap-4">
                  {[...Array(4)].map((_, index) => (
                    <Skeleton
                      key={index}
                      animation="wave"
                      variant="circular"
                      width={52}
                      height={52}
                    />
                  ))}
                </div>
                {/* <div className="flex gap-4">
                {[...Array(4)].map((_, index) => (
                  <Skeleton
                    key={index}
                    animation="wave"
                    variant="circular"
                    width={52}
                    height={52}
                  />
                ))}
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  const strapiBaseUrl = "https://techanicstrapi.onrender.com"; // Adjust this if your Strapi server runs on a different URL

  function generateSlug(category) {
    return category
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }
  return (
    <>
      {blogs.map((blog) => {
        const contentHtml = generateHtmlFromContent(blog.attributes.content);
        const blocks = blog.attributes.content;
        const faq = blog.attributes.schemaData.faq;
        console.log(blogs, "faq data");
        const headings = blocks
          .filter((block) => block.type === "heading") // Filter only heading blocks
          .map((block) => ({
            text: block.children?.[0]?.text || "", // Extract the text of the heading
            id:
              block.children?.[0]?.text?.replace(/\s+/g, "-").toLowerCase() ||
              "",
            level: block.level,
          }));
        console.log(headings, "headings for table of content");
        const categorySlug = generateSlug(blog.attributes.category);
        const blogUrl = encodeURIComponent(`https://www.techanicinfotech.com/blogs/${blog.attributes.slug}`);

        const icons1 = [
          {
            src: "/assets/icons/instagram-icon.svg",
            width: "24px",
            height: "24px",
            href: "https://www.instagram.com/techanic_infotech_/?locale=English",
          },
          {
            src: "/assets/icons/facebook-icon.svg",
            width: "24px",
            height: "24px",
            href: `https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`,
          },
          {
            src: "/assets/icons/twitter-icon.svg",
            width: "24px",
            height: "24px",
            href: `https://twitter.com/intent/tweet?url=${blogUrl}&text=Check%20out%20this%20blog!`,
          },
          {
            src: "/assets/icons/linkedin-icon.svg",
            width: "24px",
            height: "24px",
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`,
          },
          // {
          //   src: "/assets/icons/whats-app-icon.svg",
          //   width: "24px",
          //   height: "24px",
          //   href: `https://wa.me/?text=Check%20out%20this%20blog:%20${blogUrl}`,
          // },
          // {
          //   src: "/assets/icons/share-icon.svg",
          //   width: "24px",
          //   height: "24px",
          //   href: "#", // You can add a share button with JavaScript functionality
          // },
        ];
        
        return (
          <>
            <div className="bg-[#eeeeee] rounded px-[24px] pt-28 pb-24 xl:px-[100px] flex items-center justify-center">
              <div className="grid  lg:grid-cols-2  gap-6 mx-auto">
                {/* Blog Image */}
                <div className="h-auto rounded-[24px] flex items-center w-full">
                  {blog.attributes.mainImage?.data?.[0]?.attributes?.url && (
                    <CustomImage
                      publicImage={`${blog.attributes.mainImage.data[0].attributes.url}`}
                      // width="748px"
                      // height="561px"
                      objectFit="cover"
                      rounded="rounded-[24px]"
                      className="h-full rounded-[24px]"
                      alt={blog.attributes.mainImage.data[0].attributes.name}
                    />
                  )}
                </div>

                {/* Blog Content */}
                <div className="flex items-start justify-center flex-col gap-4">
                  {/* Category */}
                  {blog.attributes.category && (
                    <Link  href={`/blogs/category/${categorySlug}`} className="flex items-center gap-3">
                      <p className="p-4 bg-[#CEDCFF] text-[#303030] rounded-[4px] text-xs w-fit">
                      {blog.attributes.category.charAt(0).toUpperCase() + blog.attributes.category.slice(1)}
                      </p>
                    </Link>
                  )}

                  {/* Title */}
                  <div className="flex flex-col gap-4">
                    <h1 className="font-bold font-[Poppins] text-3xl leading-[33px] lg:text-[40px] lg:leading-[60px]">
                      {blog.attributes.title}
                    </h1>

                    {/* Date */}
                    {blog.attributes.Date && (
                      <p className="text-[13px] text-[#6A707C]">
                        {new Date(blog.attributes.Date).toLocaleDateString(
                          "en-US",
                          options
                        )}
                      </p>
                    )}

                    {/* Icons */}
                    <div className="flex lg:flex-row flex-col gap-4">
                      <div className="flex gap-4">
                        {icons1.map((icon, index) => (
                          <Link
                            href={icon?.href}
                            passHref
                            key={index}
                            className="flex items-center justify-center rounded-full  w-[52px] h-[52px] p-3 bg-white hover:bg-[#CEDCFF]"
                          >
                            <CustomImage
                              publicImage={icon.src}
                              width={icon.width}
                              height={icon.height}
                              alt="icons"
                              rounded="rounded-none"
                            />
                          </Link>
                        ))}
                      </div>
                      {/* Uncomment if needed */}
                      {/* <div className="flex gap-4">
                    {icons2.map((icon, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center rounded-full w-[52px] h-[52px] bg-white p-4"
                      >
                        <CustomImage
                          publicImage={icon.src}
                          width={icon.width}
                          height={icon.height}
                          alt="icons"
                        />
                      </div>
                    ))}
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-[20px] px-[8px] lg:px-[40px] lg:py-[40px] mx-auto flex md:flex-row flex-col gap-5">
              {/* Sidebar - Table of Contents */}
              <div style={{ flex: 1 }} className="">
                <div
                  className="flex flex-col gap-4 "
                  style={{
                    position: "sticky",
                    top: "90px",
                    maxHeight: "79vh",
                    overflowY: "auto",
                    zIndex: 10,
                  }}
                >
                  <h2 className="text-lg font-bold w-fit ">
                    Table Of Content
                    <hr className="border-black border-[1px]" />
                  </h2>
                  <ul className="border-gray-400 border-l-[0.4px] p-3 bg-[#eeeeee] rounded-lg">
                    {headings.map((heading, index) => (
                      <li
                        key={index}
                        style={{
                          marginLeft: heading.level === 3 ? "20px" : heading.level > 2 ? "30px" : "0px"

                        }}
                      >
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            const target = document.getElementById(heading.id);
                            const offset = 90; // Height of the navbar
                            const bodyRect =
                              document.body.getBoundingClientRect().top;
                            const elementRect =
                              target.getBoundingClientRect().top;
                            const elementPosition = elementRect - bodyRect;
                            const offsetPosition = elementPosition - offset;

                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth",
                            });
                          }}
                          href={`#${heading.id}`}
                          className="hover:text-blue-500 font-semibold hover:underline text-sm"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href={`#faq`}
                        className="hover:text-blue-500 font-semibold hover:underline text-sm"
                      >
                        FAQ's
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Blog Content */}
              <div style={{ flex: 2 }}>
                <div className="blog-content w-full">
                  <div
                    className="blog-dynamic-content w-full flex flex-col gap-4"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                    onClick={(e) => {
                      if (e.target.closest(".custom-button")) {
                        handleOpen();
                      }
                    }}
                  />
                </div>
                <FrequentQuestions
                  showFaqs={false}
                  headingBlog="FAQ's"
                  questions={faq?.map((faq) => faq?.question)} // Map questions inline
                  answers={faq?.map((faq) => faq?.answer)}
                />
              </div>

              {/* <div className="flex-1 md:sticky top-[90px] md:max-h-[90vh] md:overflow-y-auto z-10  flex flex-col gap-8">
                <div className="page-text flex flex-col gap-4">
                  <h3>Share:</h3>
                  <div className="grid  gap-4">
                    <div className="grid grid-cols-2 lg:grid  xl:grid-cols-2 gap-4">
                      <a
                        href="https://www.facebook.com/techanicinfotech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3b5998] rounded-full flex p-3 items-center justify-center gap-3"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          // size="2x"
                          className="text-white text-xl"
                        />
                        <p>Facebook</p>
                      </a>
                      <a
                        href="https://x.com/techanicinfo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1da1f2] rounded-full flex p-3 items-center justify-center gap-3"
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          // size="2x"
                          className="text-white text-xl"
                        />
                        <p>Twitter</p>
                      </a>
                    </div>
                    <div className="grid  grid-cols-2 lg:grid xl:grid-cols-2 gap-4">
                      <a
                        href="https://www.instagram.com/techanic_infotech_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#df8d97] rounded-full flex p-3 items-center justify-center gap-3"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          // size="2x"
                          className="text-white text-xl"
                        />
                        <p>Instagram</p>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/techanic-infotech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0077b5] rounded-full flex p-3 items-center justify-center gap-3"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          // size="2x"
                          className="text-white text-xl"
                        />

                        <p>LinkedIn</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <Link href="/contact-us" className="flex flex-col gap-6">
                      {imageLinks.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Blog content CTA ${index + 1}`}
                        />
                      ))}
                    </Link>
                  </div>
                </div>
                <div >
                  <div className="page-text">
                    <h3>Latest Blogs:</h3>
                  </div>
                  <div>
                    <div className="mb-8">
                      {displayedBlogs.map((blog) => (
                        <Link
                          key={blog.slug}
                          passHref
                          href={`/blogs/${blog.slug}`}
                          className={`w-full h-auto  p-[10px] grid gap-2 `}
                        >
                          <div className={`w-[220px] overflow-hidden `}>
                            {blog.mainImage ? (
                              <img
                                src={blog.mainImage}
                                alt={`Image for ${blog.title}`}
                                className="lg:transition-transform w-full h-full lg:duration-500 lg:hover:scale-110"
                              />
                            ) : (
                              <Skeleton
                                variant="rectangular"
                                width={100}
                                height={100}
                              />
                            )}
                          </div>
                          <Tooltip title={blog.title}>
                            <h3 className="text-base  font-semibold line-clamp-2">
                              {blog.title}
                            </h3>
                          </Tooltip>
                          <Link
                            href={`/blogs/${blog.slug}`}
                            className="rounded-lg bg-[#3b5998] text-white font-semibold text-lg w-fit py-2 px-3 "
                          >
                            Read More
                          </Link>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

              <PopupForm isOpen={isOpen} onClose={handleClose} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Blog;
// "use client";
// import React from "react";

// import { useState, useEffect, useRef } from "react";
// import { useParams } from "next/navigation";
// import Skeleton from "@mui/material/Skeleton";
// import Link from "next/link";
// import "./blogs.css";
// import CustomImage from "./CustomeImage";
// import PopupForm from "../formSection/PopupForm";
// import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const { slug } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [isOpen, setIsOpen] = useState(false); // Popup state
//   const contentRef = useRef(null);
//   const handleOpen = () => {
//     setIsOpen(true);
//     console.log("buuton clicked");
//   }; // Open popup
//   const handleClose = () => setIsOpen(false); // Close popup
//   const icons1 = [
//     {
//       src: "/assets/icons/instagram-icon.svg",
//       width: "18px",
//       height: "20px",
//       href: "https://www.instagram.com/techanic_infotech_/?locale=English",
//     },
//     {
//       src: "/assets/icons/facebook-icon.svg",
//       width: "24px",
//       height: "24px",
//       href: "https://www.facebook.com/techanicinfotech/",
//     },
//     {
//       src: "/assets/icons/twitter-icon.svg",
//       width: "24px",
//       height: "12px",
//       href: "https://x.com/techanicinfo",
//     },
//     {
//       src: "/assets/icons/linkedin-icon.png",
//       width: "18px",
//       height: "20px",
//       href: "https://www.linkedin.com/company/techanic-infotech/",
//     },
//     {
//       src: "/assets/icons/whats-app-icon.svg",
//       width: "19px",
//       height: "19px",
//       href: "https://www.linkedin.com/company/techanic-infotech/",
//     },
//   ];
//   const options = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   const [buttonContent, setButtonContent] = useState([]);
//   const generateHtmlFromContent = (content) => {
//     const htmlContent = content
//       .map((block) => {
//         if (!block) return ""; // Skip blocks without content
//         const children = block.children || [];

//         if (block.type === "code") {
//           return children.map((child) => child.text?.trim() || "").join("");
//         }

//         if (
//           block.type === "paragraph" &&
//           children.some((child) => (child.text?.trim() || "").startsWith("<"))
//         ) {
//           return children.map((child) => child.text?.trim() || "").join("");
//         }

//         if (block.type === "image" && block.image) {
//           const { url, alternativeText } = block.image;
//           const imageUrl = url.startsWith("http")
//             ? url
//             : `https://techanicstrapi.onrender.com${url}`;
//           return `<img src="${imageUrl}" alt="${
//             alternativeText || ""
//           }" style="object-fit: cover;" />`;
//         }

//         if (
//           block.type !== "heading" &&
//           block.type !== "paragraph" &&
//           block.type !== "table" &&
//           block.type !== "a"
//         ) {
//           return "";
//         }

//         const textContent = children
//           .map((child) => {
//             // Use the bold property to determine if text should be bold
//             if (child.bold) {
//               return `<strong>${child.text || ""}</strong>`;
//             }
//             return child.text?.trim() || "";
//           })
//           .filter((text) => text !== "");

//         if (textContent.length === 0) return "";

//         switch (block.type) {
//           case "heading":
//             return `<h${block.level || 1}>${textContent.join("")}</h${
//               block.level || 1
//             }>`;
//           case "paragraph": {
//             const processedParagraph = textContent.join(" "); // Join with space for readability
//             return `<p>${processedParagraph}</p>`;
//           }
//           case "table":
//             return `<table>${textContent.join("")}</table>`; // Add more handling as needed
//           default:
//             return "";
//         }
//       })
//       .filter((html) => html !== "") // Filter out empty HTML blocks
//       .join("");

//     console.log(htmlContent); // Log the generated HTML for debugging
//     return htmlContent;
//   };

//   useEffect(() => {
//     const currentRef = contentRef.current;

//     // Function to handle button clicks
//     const handleClick = (e) => {
//       console.log("Clicked element:", e.target);
//       if (e.target.tagName.toLowerCase() === "button") {
//         handleOpen(); // Open the popup when any button is clicked
//       }
//     };

//     // Attach event listener to the ref
//     if (currentRef) {
//       currentRef.addEventListener("click", handleClick);
//     }

//     return () => {
//       // Clean up the event listener
//       if (currentRef) {
//         currentRef.removeEventListener("click", handleClick);
//       }
//     };
//   }, [blogs]); // Re-run when blogs change
//   const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//   useEffect(() => {
//     const fetchBlogData = async () => {
//       try {
//         const response = await fetch(
//           `https://techanicstrapi.onrender.com/api/blogs?filters[slug][$eq]=${slug}&populate=mainImage&populate=image`,
//           {
//             headers: {
//               "Content-Type": "application/json",

//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         // Ensure the response is in JSON format
//         const data = await response.json();

//         console.log("Fetched data:", data);

//         // Check if the data has a 'data' key and it's an array
//         if (Array.isArray(data.data)) {
//           setBlogs(data.data);
//         } else {
//           console.error("Unexpected data format:", data);
//           setBlogs([]);
//         }
//       } catch (error) {
//         console.error("Error fetching blog data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogData();
//   }, [slug]);

//   if (loading) {
//     return (
//       <>
//         <div className="bg-[#eeeeee] rounded  px-[24px]  pt-28 pb-24  xl:px-[100px] flex items-center justify-center">
//           <div className="grid  lg:grid-cols-2  gap-4   ">
//             <div className=" max-h-[458px]">
//               <Skeleton
//                 variant="rectangular"
//                 className="w-[320px] h-[300px] sm:w-[400px] md:w-[740px] lg:w-[480px] xl:w-[450px] xl:h-[400px] rounded-[24px]"
//               />
//             </div>

//             <div className="flex items-start justify-center flex-col gap-4 w-full md:w-[300px] lg:w-[500px]">
//               <div className="flex items-center gap-3 w-full">
//                 {" "}
//                 <Skeleton variant="rectangular" width="100%" />
//                 <Skeleton variant="text" width="100%" />
//               </div>
//               <div className="w-full">
//                 {" "}
//                 <Skeleton variant="text" width="100%" />
//                 <Skeleton variant="text" width="100%" />
//                 <Skeleton variant="text" width="40%" />
//               </div>

//               <div className="flex lg:flex-row flex-col gap-4">
//                 <div className="flex gap-4">
//                   {[...Array(4)].map((_, index) => (
//                     <Skeleton
//                       key={index}
//                       animation="wave"
//                       variant="circular"
//                       width={52}
//                       height={52}
//                     />
//                   ))}
//                 </div>
//                 {/* <div className="flex gap-4">
//                 {[...Array(4)].map((_, index) => (
//                   <Skeleton
//                     key={index}
//                     animation="wave"
//                     variant="circular"
//                     width={52}
//                     height={52}
//                   />
//                 ))}
//               </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
//   const strapiBaseUrl = "https://techanicstrapi.onrender.com"; // Adjust this if your Strapi server runs on a different URL

//   return (
//     <>
//       {blogs.map((blog) => {
//         const contentHtml = generateHtmlFromContent(blog.attributes.content);
// const faq = blog.attributes.schemaData.faq;
// console.log(faq, "faq data");
//         return (
//           <>
//             <div className="bg-[#eeeeee] rounded px-[24px] pt-28 pb-24 xl:px-[100px] flex items-center justify-center">
//               <div className="grid  lg:grid-cols-2  gap-6 mx-auto">
//                 {/* Blog Image */}
//                 <div className="h-auto rounded-[24px] flex items-center w-full">
//                   {blog.attributes.mainImage?.data?.[0]?.attributes?.url && (
//                     <CustomImage
//                       publicImage={`${blog.attributes.mainImage.data[0].attributes.url}`}
//                       // width="748px"
//                       // height="561px"
//                       objectFit="cover"
//                       rounded="rounded-[24px]"
//                       className="h-full rounded-[24px]"
//                       alt={blog.attributes.mainImage.data[0].attributes.name}
//                     />
//                   )}
//                 </div>

//                 {/* Blog Content */}
//                 <div className="flex items-start justify-center flex-col gap-4">
//                   {/* Category */}
//                   {blog.attributes.category && (
//                     <div className="flex items-center gap-3">
//                       <p className="p-4 bg-[#CEDCFF] text-[#303030] rounded-[4px] text-xs w-fit">
//                         {blog.attributes.category}
//                       </p>
//                     </div>
//                   )}

//                   {/* Title */}
//                   <div className="flex flex-col gap-4">
//                     <h1 className="font-bold font-[Poppins] text-3xl leading-[33px] lg:text-[40px] lg:leading-[60px]">
//                       {blog.attributes.title}
//                     </h1>

//                     {/* Date */}
//                     {blog.attributes.Date && (
//                       <p className="text-[13px] text-[#6A707C]">
//                         {new Date(blog.attributes.Date).toLocaleDateString(
//                           "en-US",
//                           options
//                         )}
//                       </p>
//                     )}

//                     {/* Icons */}
//                     <div className="flex lg:flex-row flex-col gap-4">
//                       <div className="flex gap-4">
//                         {icons1.map((icon, index) => (
//                           <Link
//                             href={icon?.href}
//                             passHref
//                             key={index}
//                             className="flex items-center justify-center rounded-full w-[52px] h-[52px] p-3 bg-white"
//                           >
//                             <CustomImage
//                               publicImage={icon.src}
//                               width={icon.width}
//                               height={icon.height}
//                               alt="icons"
//                               rounded="rounded-none"
//                             />
//                           </Link>
//                         ))}
//                       </div>
//                       {/* Uncomment if needed */}
//                       {/* <div className="flex gap-4">
//                     {icons2.map((icon, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-center rounded-full w-[52px] h-[52px] bg-white p-4"
//                       >
//                         <CustomImage
//                           publicImage={icon.src}
//                           width={icon.width}
//                           height={icon.height}
//                           alt="icons"
//                         />
//                       </div>
//                     ))}
//                   </div> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="py-[20px] px-[8px] lg:px-[40px] lg:py-[40px] mx-auto flex md:flex-row flex-col gap-5">
//               {/* Sidebar - Table of Contents (if needed) */}
//               <div style={{ flex: 1 }}></div>

//               {/* Blog Content */}
//               <div className="" style={{ flex: 2 }}>
//                 <div className="blog-content w-full">
//                   <div
//                     className="blog-dynamic-content w-full  flex flex-col gap-4"
//                     dangerouslySetInnerHTML={{ __html: contentHtml }}
//                     onClick={(e) => {
//                       if (e.target.closest(".custom-button")) {
//                         handleOpen();
//                       }
//                     }}
//                   />
//                 </div>
// <FrequentQuestions
// showFaqs={false}
// headingBlog="FAQ's"
//   questions={faq.map((faq) => faq.question)} // Map questions inline
//   answers={faq.map((faq) => faq.answer)}
// />
//               </div>

//               <div style={{ flex: 1 }}></div>
//               <PopupForm isOpen={isOpen} onClose={handleClose} />
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default Blog;
