import { NavLink, useLocation } from "react-router-dom";
import admin from "../../assets/booking/admin";
import logo from './../../assets/logo.png'

const Sidebar = () => {
  const owner = admin;
  const location = useLocation();

  const ownerMenu = [
    { name: "Dashboard", path: "/owner" },
    { name: "Add Car", path: "/owner/add-car" },
    { name: "Manage Booking", path: "/owner/manage-booking" },
    // { name: "Manage Car", path: "/owner/manage-car" },
    // { name: "Add Blogs", path: "/owner/add-blogs" },
  ];



  return (
    <>
      <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-500 text-sm bg-black/90">
        
        <p className="mt-2 text-base max-md:hidden text-white border-b border-b-gray-500 pb-5">Welcome, {owner?.name}</p>

        <div className="w-full">
          {ownerMenu.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${
                link.path === location.pathname
                  ? "bg-blue-400/10 text-blue-600"
                  : "bg-gray-400/10 text-gray-600"
              }`}
            >
              <p className="max-md:hidden"> {link.name}</p>
              <div
                className={`${
                  link.path === location.pathname && "bg-blue-600"
                } w-1.5 h-8 rounded-l right-0 absolute`}
              ></div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
