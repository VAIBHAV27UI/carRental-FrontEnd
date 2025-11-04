import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import MyBooking from "./pages/MyBooking";
import Footer from "./components/Footer";
import SingleCar from "./components/SingleCar";
import AddCar from "./pages/owner/AddCar";
import ManageBooking from "./pages/owner/ManageBooking";
import Dashboard from "./pages/owner/Dashboard";
import AddBlogs from "./pages/owner/AddBlogs";
import Layout from "./pages/owner/Layout";
import Login from "./components/owner/Login";
import UserLogin from "./components/UserLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogsPage from "./pages/BlogsPage";
import SingleBlog from "./components/SingleBlog";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import BookingCar from "./components/BookingCar";
import AOS from "aos";
import AdminRoute from "./components/owner/AdminRoute";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100, // Distance from top to trigger animation
      easing: "ease-in-out", // Easing option
      once: true, // Animation only once
    });
  }, []);

  const owner = useLocation().pathname.startsWith("/owner");

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");

    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      {!owner && <Navbar setLoggedIn={setLoggedIn} />}

      {loggedIn && !owner && <UserLogin setLoggedIn={setLoggedIn} />}

      <Routes>
        {/* Public Website */}
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/make/:brand" element={<Cars />} />
        <Route path="/cars/type/:type" element={<Cars />} />
        <Route path="/cars/:id" element={<SingleCar />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/:id" element={<BookingCar />} />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBooking />
            </ProtectedRoute>
          }
        />

        {/* Owner Dashboard */}

        <Route
          path="/owner"
          element={<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        >
          {owner && (
            <Route
              path="login"
              element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
          )}

          <Route element={<AdminRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="add-car" element={<AddCar />} />
            <Route path="manage-booking" element={<ManageBooking />} />
            {/* <Route path="add-blogs" element={<AddBlogs />} /> */}
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {!owner && <Footer />}
    </>
  );
}

export default App;
