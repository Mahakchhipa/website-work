"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import CustomImage from "./CustomeImage";

export default function HomepageBlogs({ blogsbg }) {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const blogsPerPage = 3;
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  // console.log("token", process.env.NEXT_PUBLIC_STRAPI_API_TOKEN);
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

        setBlogs(extractedBlogs);
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

  const displayedBlogs = Array.isArray(blogs)
    ? blogs.slice((page - 1) * blogsPerPage, page * blogsPerPage)
    : [];

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full  flex flex-col gap-6 md:gap-4 px-[20px] lg:py-[40px] py-[20px] xl:px-[100px] h-auto lg:h-[580px] 2xl:h-[640px]">
      <div className="child-text text-center">
        <h2 className=" font-bold">Our Latest Blogs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full">
        {loading
          ? Array.from(new Array(blogsPerPage)).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : displayedBlogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} blogsbg={blogsbg} />
            ))}
      </div>
      <div className="repsonsive-link flex items-center justify-center">
        <button
          className="flex items-center px-[28px] py-[10px] rounded-md  bg-[#0F53FF]  text-white     transition-transform duration-300 transform hover:scale-110 mt-2"
          // style={{
          //   background: "linear-gradient(270deg, #2929DE 0%, #08083A 100%)",
          // }}
        >
          <Link href="/blogs" className=" font-semibold text-lg">
            View More
            {/* <FontAwesomeIcon icon={faArrowRight} height={20} width={20} /> */}
          </Link>
        </button>
      </div>
      {/* <Stack spacing={2} className="mx-auto mt-8">
        <Pagination
          count={Math.ceil(blogs.length / blogsPerPage)}
          page={page}
          onChange={handleChange}
        />
      </Stack> */}
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

const BlogCard = ({ blog, blogsbg }) => {
  return (
    <Link
      passHref
      href={`/blogs/${blog.slug}`}
      className={`w-full h-auto border-2 border-[#eeeeee] p-[10px] grid gap-2 bg-[${blogsbg}] `}
    >
      <div className={`w-full h-[230px] sm:h-[160px] md:h-[200px] 2xl:h-[300px] overflow-hidden bg-[${blogsbg}]`}>
        {blog.mainImage ? (
          <img
          src={blog.mainImage}
            alt={`Image for ${blog.title}`}
            // width="400px"
            // height="200px"
            // objectFit="contain"
            rounded="rounded-none"
            className="lg:transition-transform w-full h-full lg:duration-500 lg:hover:scale-110"
          />
        ) : (
          <Skeleton variant="rectangular" width={400} height={200} />
        )}
      </div>
      <Tooltip title={blog.title}>
        <h3 className="text-base md:text-lg lg:text-xl font-bold line-clamp-2">
          {blog.title}
        </h3>
      </Tooltip>
    </Link>
  );
};

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Skeleton from '@mui/material/Skeleton';

// const data = [
//   {
//     src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
//     title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
//     channel: 'Don Diablo',
//     views: '396k views',
//     createdAt: 'a week ago',
//   },
//   {
//     src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
//     title: 'Queen - Greatest Hits',
//     channel: 'Queen Official',
//     views: '40M views',
//     createdAt: '3 years ago',
//   },
//   {
//     src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
//     title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
//     channel: 'Calvin Harris',
//     views: '130M views',
//     createdAt: '10 months ago',
//   },
// ];

// function Media(props) {
//   const { loading = false } = props;

//   return (
//     <Grid container wrap="nowrap">
//       {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
//         <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
//           {item ? (
//             <img
//               style={{ width: 210, height: 118 }}
//               alt={item.title}
//               src={item.src}
//             />
//           ) : (
//             <Skeleton variant="rectangular" width={210} height={118} />
//           )}

//           {item ? (
//             <Box sx={{ pr: 2 }}>
//               <Typography gutterBottom variant="body2">
//                 {item.title}
//               </Typography>
//               <Typography display="block" variant="caption" color="text.secondary">
//                 {item.channel}
//               </Typography>
//               <Typography variant="caption" color="text.secondary">
//                 {`${item.views} • ${item.createdAt}`}
//               </Typography>
//             </Box>
//           ) : (
//             <Box sx={{ pt: 0.5 }}>
//               <Skeleton />
//               <Skeleton width="60%" />
//             </Box>
//           )}
//         </Box>
//       ))}
//     </Grid>
//   );
// }

// Media.propTypes = {
//   loading: PropTypes.bool,
// };

// export default function YouTube() {
//   return (
//     <Box sx={{ overflow: 'hidden' }}>
//       <Media loading />
//       <Media />
//     </Box>
//   );
// }
