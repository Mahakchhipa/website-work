'use client'
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { useParams } from "next/navigation";

export default function FilterBlogs({ blogsbg }) {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [uniqueBlogs, setUniqueBlogs] = useState([]);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const blogsPerPage = 12;
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://techanicstrapi.onrender.com/api/blogs?fields=title&fields=slug&fields=category&fields=meta&populate=mainImage&sort=createdAt:desc&pagination[pageSize]=1000`,
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

        setBlogs(extractedBlogs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (slug && blogs.length > 0) {
      const slugWords = slug.replace(/-/g, " ").toLowerCase().split(" ")[0];
      const filtered = blogs.filter((blogItem) => {
        const blogSlugWords = blogItem.category.toLowerCase().split(" ")[0];
        return blogSlugWords === slugWords;
      });

      const uniqueBlogsData = Array.from(new Set(filtered.map((a) => a.id))).map(
        (id) => filtered.find((a) => a.id === id)
      );

      setUniqueBlogs(uniqueBlogsData);
      setPage(1); // Reset to the first page on category change
    }
  }, [blogs, slug]);

  // Update total pages and current blogs when uniqueBlogs or page changes
  useEffect(() => {
    const total = Math.ceil(uniqueBlogs.length / blogsPerPage);
    setTotalPages(total);

    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    setCurrentBlogs(uniqueBlogs.slice(startIndex, endIndex));
  }, [uniqueBlogs, page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full h-auto flex flex-col gap-[10px] md:gap-4 px-[24px] lg:py-[40px] py-[20px] xl:px-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full">
        {loading ? (
          Array.from(new Array(blogsPerPage)).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          <BlogCard blogs={currentBlogs} blogsbg={blogsbg} />
        )}
      </div>
      {uniqueBlogs.length > blogsPerPage && (
        <Stack spacing={2} className="mx-auto mt-8">
          <Pagination count={totalPages} page={page} onChange={handleChange} />
        </Stack>
      )}
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

const BlogCard = ({ blogs, blogsbg }) => (
  <>
    {blogs.length > 0 ? (
      blogs.map((blog) => (
        <Link
          key={blog.id}
          passHref
          href={`/blogs/${blog.slug}`}
          className={`w-full h-auto border-[2px] border-[#eeeeee] p-[10px] grid gap-2 bg-[${blogsbg}]`}
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
                className="lg:transition-transform w-full h-full lg:duration-500 lg:hover:scale-110"
              />
            ) : (
              <Skeleton variant="rectangular" width={400} height={200} />
            )}
          </div>
          <Link
            href={`/blogs/category/${blog.category
              .toLowerCase()
              .replace(/[^a-z0-9\s-]/g, "")
              .trim()
              .replace(/\s+/g, "-")}`}
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
      ))
    ) : (
      <p>No blogs found for this category</p>
    )}
  </>
);
