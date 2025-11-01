import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/logo.png";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice/userSlice";

const Navbar = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menulinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "Blog", path: "/blogs" },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/")
  };

  return (
    <div
      className={`fixed flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32
        py-4 transition-all w-full z-10
        ${scrolled ? "bg-[rgba(0,0,0,0.5)]" : "bg-black"}`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="max-w-48" />
      </Link>

      {/* Menu links */}
      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 right-0 flex flex-col sm:flex-row items-start
                    sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 
                    ${
                      open
                        ? "max-sm:translate-x-0 bg-[rgba(0,0,0,0.9)]"
                        : "max-sm:translate-x-full"
                    }`}
      >
        {menulinks.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            onClick={() => setOpen(false)}
            className="text-white px-8 py-2 hover:text-blue-400 transition-all"
          >
            {link.name}
          </Link>
        ))}

        <div className="grid gap-8 flex-wrap md:hidden">
          <Link
                    to="my-bookings"
                    className="w-full px-8 px py-2 flex flex-1  text-white hover:bg-gray-100 transition-all duration-300"
                  >
                    My Bookings
                  </Link>
                  <button
                    className="w-full px-8 py-2 flex flex-1  text-white hover:bg-gray-100 transition-all duration-300 text-left cursor-pointer"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
        </div>

        <div>
          {currentUser ? (
            <div className="text-white">
              <div className="relative hidden md:block">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  height={40}
                  width={40}
                  className="border-2 hover:shadow-lg rounded-full border-purple-600 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                />
                <div
                  className={`md:absolute py-2 right-0 w-48 bg-white mt-1 rounded-md shadow-xl flex-col border ${
                    dropdown ? "flex" : "hidden"
                  }`}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link
                    to="my-bookings"
                    className="px-4 py-2 text-gray-400 hover:bg-gray-100 transition-all duration-300"
                  >
                    My Bookings
                  </Link>
                  <button
                    className="px-4 py-2 text-gray-400 hover:bg-gray-100 transition-all duration-300 text-left cursor-pointer"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setLoggedIn(true)} // open login modal
              className="cursor-pointer px-8 py-2 bg-blue-800 hover:bg-blue-600 transition-all text-white rounded-lg"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="sm:hidden cursor-pointer px-4 py-2 transition-all text-white rounded-lg"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoCloseSharp size={24} /> : <CiMenuFries size={24} />}
      </button>
    </div>
  );
};

export default Navbar;
