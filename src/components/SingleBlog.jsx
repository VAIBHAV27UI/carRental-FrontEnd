import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import carBlogs from "../assets/booking/blogs";
import carBan from "./../assets/car-banner.jpg";
import Title from "./Title";
const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selectedBlog = carBlogs.find((b) => String(b.id) === id);
    setBlog(selectedBlog);
    console.log(selectedBlog);
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <div
        className="h-screen md:h-100 bg-cover bg-center flex flex-col gap-14 items-center justify-center text-white"
        style={{ backgroundImage: `url(${carBan})` }}
      >
        <Title
          heading="Driven to Inspire"
          subheading="Exploring the Latest in Cars, Innovation, and Automotive Lifestyle"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:p-0 gap-4 my-5 p-5">
          <div className="md:col-span-2">
            <img src={blog.avtar} alt="" className="w-full rounded-xl" />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-2xl mb-2">{blog.title}</h1>
            <span className="text-gray-900/75">{blog.date}</span>
            <p className="text-md mt-5">{blog.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
