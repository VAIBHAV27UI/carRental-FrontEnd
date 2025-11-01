import img from "./../assets/blog.jpg";

const BlogsCard = ({
  blogimg = img,
  date = "January 12, 2017",
  heading = "What To Do if Your Rental Car Has Met With An Accident",
  para = "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache coffee ea next level ethnic fingerstache",
}) => {
  return (
    <>
      <div className="px-4">
        <div className="border border-gray-300 rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-200 hover:shadow-xl/30  mb-10 ">
          <div className="w-full">
            <img src={blogimg} alt="" className="w-full" />
          </div>
          <div className="p-4">
            <p className="mb-2">{date}</p>
            <h1 className="text-black font-bold text-2xl mb-3">{heading}</h1>
            <p className="mb-3 line-clamp-2"> {para}</p>
            <button className="bg-transparent text-gray-500">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default BlogsCard;
