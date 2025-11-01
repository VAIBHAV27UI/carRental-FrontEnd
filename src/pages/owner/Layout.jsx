import { Outlet } from "react-router-dom";
import NavbarOwner from "../../components/owner/NavbarOwner";
import Sidebar from "../../components/owner/Sidebar";

const Layout = ({loggedIn, setLoggedIn }) => {
  return (
    <>
      <div className="flex flex-col">
        <NavbarOwner loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <div className="flex">
          <Sidebar />
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Layout;
