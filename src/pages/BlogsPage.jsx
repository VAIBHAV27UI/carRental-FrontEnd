import { useEffect, useState } from "react";
import BlogsCard from "../components/BlogsCard";
import carBlogs from "../assets/booking/blogs";
import Title from "../components/Title";
import carBan from "./../assets/car-banner.jpg";
import { Link, useParams } from "react-router-dom";

const BlogsPage = () => {
  const [carBlog, setCarBlog] = useState([]);

  useEffect(() => {
    setCarBlog(carBlogs);
  }, []);

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

      <div className="mt-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {carBlog.map((blog, i) => (
            <Link key={blog.id} to={`/blogs/${blog.id}`}>
              <BlogsCard
                key={i}
                blogimg={blog.avtar}
                heading={blog.title}
                para={blog.content}
                date={blog.date}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
