import { useEffect, useState } from "react";
import Title from "./Title";
import carBlogs from "../assets/booking/blogs";
import BlogsCard from "./BlogsCard";
import { Link } from "react-router-dom";

const Article = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(carBlogs);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div>
          <Title
            heading="Articles & Tips"
            subheading="Explore some of the best tips from around the world"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.slice(0, 3).map((blogsData, i) => (
            <Link key={i} to={`/blogs/${blogsData.id}`}>
            <BlogsCard
              key={i}
              blogimg={blogsData.avtar}
              heading={blogsData.title}
              para={blogsData.content}
              date={blogsData.date}
            />
            </Link> 
          ))}
        </div>
      </div>
    </>
  );
};

export default Article;
