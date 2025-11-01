import { Link } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendarClock } from "react-icons/tb";

import logo from "./../assets/logo.png";

const Footer = () => {
  const footermenu = [
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 py-10">
            <div className="w-full text-white">
              <h2 className="font-semibold">About Us</h2>
              <p className="font-light my-5 text-[14px] pr-14">
                Getting dressed up and traveling with good friends makes for a
                shared, unforgettable experience.
              </p>
              <img src={logo} alt="" className="w-1/2" />
            </div>

            <div className="w-full text-white">
              <h2 className="font-semibold mb-5">Contact Info</h2>
              <ul>
                <li className="flex items-center my-2">
                  <span className="mr-2"><IoIosPhonePortrait/></span>
                  <p>1-567-124-44227</p>
                </li>

                <li className="flex items-center my-2">
                  <span className="mr-2"><CiLocationOn/></span>
                  <p className="text-[14px]">184 Main Street East Perl Habour 8007</p>
                </li>

                <li className="flex items-center my-2">
                  <span className="mr-2"><TbCalendarClock/></span>
                  <p className="text-[14px]">Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
                </li>
              </ul>
            </div>

            <div className="w-full text-white">
              <h2 className="font-semibold">Newsletter</h2>
              <p className="font-light my-5 text-[14px] pr-14">
                Don't miss a thing! Sign up to receive daily deals Your Email
                Address
              </p>
            </div>
          </div>

          {/* copyright */}

          <div className="grid grid-cols-1 md:grid-cols-2 text-white py-5 border-t-1 border-[#222222]">
            <div className="">
              <p>© Copyright Grand Car Rental - Vaibhav Jagtap</p>
            </div>

            <div className="">
              {footermenu.map((menu, i) => (
                <Link to={menu.link} key={i} className="px-4">
                  {menu.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
