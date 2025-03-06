
"use client";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { useInView } from "react-intersection-observer";
export default function BlogCards({ blogsbg }) {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const blogsPerPage = 9;
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://techanicstrapi.onrender.com/api/blogs?fields=title&fields=slug&fields=category&fields=meta&populate=mainImage&sort=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${blogsPerPage}`,
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

        const extractedBlogs = data.data.map((blog) => ({
          id: blog.id,
          title: blog.attributes.title,
          category: blog.attributes.category,
          mainImage: blog.attributes.mainImage?.data?.[0]?.attributes?.url
            ? `${blog.attributes.mainImage.data[0].attributes.url}`
            : null,
          slug: blog.attributes.slug,
          createdAt: blog.attributes.createdAt,
        }));
        console.log(extractedBlogs, "data extracted");
        setBlogs(extractedBlogs);
        setTotalPages(data.meta.pagination.pageCount);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);
  const handleChange = (event, value) => {
    setPage(value);
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full h-auto flex flex-col gap-[10px] md:gap-4 px-[24px] lg:py-[40px] py-[20px] xl:px-[100px]">
      <div className="responsive-text text-center">
        <h1 className=" font-bold">Our Latest Blogs</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full">
        {loading
          ? Array.from(new Array(blogsPerPage)).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : blogs.map((blog) => (
            
              <BlogCard blog={blog} key={blog.id} blogsbg={blogsbg} />
            ))}
      </div>
      <Stack spacing={2} className="mx-auto mt-8">
        <Pagination
          count={totalPages} // Use totalPages from Strapi
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}

const SkeletonCard = () => (
  <Box
    sx={{
      border: "1px solid #eeeeee",
      padding: "20px",
      borderRadius: "4px",
      width: "100%",
      height: "300px",
      backgroundColor: "#f5f5f5",
    }}
  >
    <Skeleton variant="rectangular" width="100%" height={200} />
    <Box sx={{ paddingTop: "10px" }}>
      <Skeleton variant="text" height={30} width="100%" />
    </Box>
  </Box>
);

function generateSlug(category) {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// const slug = generateSlug(category);
// console.log(slug);

const BlogCard = ({ blog, blogsbg }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const categorySlug = generateSlug(blog.category);
  const blogSlug = blog.slug;
  const animateClass = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <Link
      passHref
      ref={ref}
      href={`/blogs/${blogSlug}`} // This uses the original blog slug for the blog post
      className={`w-full h-auto border-2 border-[#eeeeee] p-[10px] grid gap-2 bg-[${blogsbg}] transform transition-all duration-700 ease-out ${animateClass}`}
    >
      <div
        className={`w-full h-[230px] sm:h-[160px] md:h-[200px] 2xl:h-[300px] overflow-hidden bg-[${blogsbg}]`}
      >
        {blog.mainImage ? (
          <img
            src={blog.mainImage}
            alt={`Image for ${blog.title}`}
            width="100%"
            height="100%"
            rounded="rounded-none"
            className="lg:transition-transform w-full h-full object-contain lg:duration-500 lg:hover:scale-110"
          />
        ) : (
          <Skeleton variant="rectangular" width={400} height={200} />
        )}
      </div>
      <Link
        href={`/blogs/category/${categorySlug}`} // Use the generated category slug
        className="border-[1px] border-gray-400 rounded-full w-fit px-4 hover:bg-blue-700 hover:text-white"
      >
        {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
      </Link>
      <Tooltip title={blog.title}>
        <h3 className="text-base md:text-lg lg:text-xl font-bold line-clamp-1">
          {blog.title}
        </h3>
      </Tooltip>
    </Link>
  );
};

