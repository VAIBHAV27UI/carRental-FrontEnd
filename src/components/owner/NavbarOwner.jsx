import { NavLink, useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.png";

const NavbarOwner = ({ loggedIn, setLoggedIn }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminToken");
    setLoggedIn(false);
    navigate("/owner/login");
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-gray-500 realtive transition-all bg-black/90">
        <NavLink path="/owner">
          <img src={logo} alt="" className="h-7" />
        </NavLink>
        <div className="">
          {loggedIn && (
          <button onClick={handleLogout} className="text-white cursor-pointer bg-blue-950 hover:bg-blue-700 py-2 px-5 rounded-md">
            Logout
          </button>
        )}
        </div>
      </div>
    </>
  );
};

export default NavbarOwner;
