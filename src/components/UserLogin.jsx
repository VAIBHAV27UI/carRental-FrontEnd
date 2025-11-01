import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import API from "../utils/axios";
import { useNavigate } from "react-router-dom";
import {
  accountStart,
  accountFailure,
  accountSuccess,
} from "../redux/userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const UserLogin = ({ setLoggedIn }) => {
  const [state, setState] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/signup", userData);

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        alert("Register is successfully please login!");
      }

      setUserData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      setLoggedIn(false)
      navigate("/");


      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      setErrorMessage(message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      dispatch(accountStart());

      const res = await API.post("/users/login", userData);

      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setLoggedIn(false);
        dispatch(accountSuccess(res.data.user));
        setUserData({ email: "", password: "" });
        navigate("/");
      } else {
        const message = "Login failed. No token received.";
        setErrorMessage(message);
        dispatch(accountFailure(message));
      }
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      setErrorMessage(message);
      dispatch(accountFailure(message));
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-100 flex items-center text-sm text-gray-600 bg-black/50">
        <form className="relative flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
          <div
            className="absolute right-4 top-4 cursor-pointer text-2xl text-blue-900"
            onClick={() => setLoggedIn(false)}
          >
            <IoMdClose />
          </div>

          <p className="text-2xl font-medium m-auto">
            <span className="text-indigo-500">User</span>{" "}
            {state === "login" ? "Login" : "Sign Up"}
          </p>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          {state === "register" && (
            <div className="w-full">
              <p>Name</p>
              <input
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                value={userData.name}
                placeholder="type here"
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                type="text"
                required
              />
            </div>
          )}
          <div className="w-full ">
            <p>Email</p>
            <input
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              value={userData.email}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="email"
              required
            />
          </div>
          {state === "register" && (
            <div className="w-full ">
              <p>Mobile</p>
              <input
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                value={userData.phone}
                placeholder="type here"
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
                type="number"
                required
              />
            </div>
          )}
          <div className="w-full ">
            <p>Password</p>
            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              value={userData.password}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="password"
              required
            />
          </div>
          {state === "register" ? (
            <p>
              Already have account?
              <span
                onClick={() => setState("login")}
                className="text-indigo-500 cursor-pointer"
              >
                click here
              </span>
            </p>
          ) : (
            <p>
              Create an account?
              <span
                onClick={() => setState("register")}
                className="text-indigo-500 cursor-pointer"
              >
                click here
              </span>
            </p>
          )}
          <button
            className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer"
            onClick={state === "register" ? handleSignup : handleLogin}
          >
            {state === "register" ? "Create Account" : "Login"}

          </button>

        </form>
      </div>
    </>
  );
};

export default UserLogin;
