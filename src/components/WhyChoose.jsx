import { FaCarSide } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import Title from "./Title";

const WhyChoose = () => {
  const whyData = [
    {
      heading: "Variety of Car Brands",
      paragraph:
        "Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
      icon: <FaCarSide />,
    },
    {
      heading: "Best Rate Guarantee",
      paragraph:
        "Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
      icon: <FaRegSmile />,
    },
    {
      heading: "Awesome Customer Support",
      paragraph:
        "Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.",
      icon: <CiHeart />,
    },
  ];

  return (
    <>
      <div className="bg-[#5856d6] my-5 text-white py-5">
        <Title
          heading="Why Choose Us"
          subheading="Explore our first class limousine & car rental services"
        />

        <div className="max-w-7xl mx-auto pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 text-center">
            {whyData.map((data, i) => (
              <div key={i} className="text-center mb-10 md:mb-0">
                <span className="flex justify-center text-5xl">{data.icon}</span>
                <h2 className="text-[20px] font-bold my-2">{data.heading}</h2>
                <p className="text-[14px] px-2">{data.paragraph}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </>
  );
};

export default WhyChoose;
