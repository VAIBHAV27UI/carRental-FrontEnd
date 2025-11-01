import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

const ContactUs = () => {


  return (
    <>
      <div className="h-screen max-w-7xl mx-auto pt-30">
        <div className="grid grid-cols-4 gap-5 items-center">
          <div className="col-span-2 ">
            <h1 className="text-4xl mb-5">Get in touch</h1>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium itaque praesentium a perspiciatis beatae excepturi
              accusamus. Ipsum nemo nam vitae numquam! Eveniet quae autem
              perferendis molestiae natus ducimus sit accusamus maxime.
            </p>
          </div>
          <div className="col-span-2 ">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-1 bg-gray-300/80 rounded-xl py-5 px-2">
                <h1 className="text-1xl font-bold">Join our team</h1>
                <p className="flex items-center mt-2">
                  <MdEmail className="mr-2" />
                  career@gcarrental.com
                </p>
                <p className="flex mt-1">
                  <FaPhone className="mr-2" />
                  +1 (555) 905-2345
                </p>
              </div>
              <div className="col-span-1 bg-gray-300/80 rounded-xl py-5 px-2">
                <h1 className="text-1xl font-bold">Location</h1>
                <p className="flex items-center mt-2">
                  <IoLocation className="mr-2" /> Mumbai
                </p>
                <p className="flex mt-1">
                  <FaPhone className="mr-2" />
                  +1 (555) 905-2345
                </p>{" "}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ContactUs;
