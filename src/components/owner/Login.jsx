import { useState } from "react";
import API from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/admin/login", adminData);

    if (res.data?.success && res.data?.token) {
      const token = res.data.token;

      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      // localStorage.setItem("admin", JSON.stringify(res.data.admin));

      // Redirect after login
      setLoggedIn(true);
      navigate("/owner");
    } else {
      setError(res.data?.message || "Login failed");
    }
  } catch (error) {
    const message = error.response?.data?.message || "Something went wrong";
    setError(message);
  }
};




  return (
    <div className="flex items-center mx-auto">
      <form
        onSubmit={handleLogin}
        className="bg-white text-gray-500 max-w-[540px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-bold mb-9 text-center text-gray-800">
          Welcome Back
        </h2>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <input
            className="w-full outline-none bg-transparent py-2.5"
            type="email"
            placeholder="Email"
            value={adminData.email}
            onChange={(e) =>
              setAdminData({ ...adminData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="flex items-center mt-2 mb-4 border bg-indigo-500/5 border-gray-500/10 rounded gap-1 pl-2">
          <input
            className="w-full outline-none bg-transparent py-2.5"
            type="password"
            placeholder="Password"
            value={adminData.password}
            onChange={(e) =>
              setAdminData({ ...adminData, password: e.target.value })
            }
            required
          />
        </div>

        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center gap-1">
            <input
              id="checkbox"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <div className="w-full text-right">
            <a className="text-blue-600 underline" href="#">
              Forgot Password
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mb-3 cursor-pointer bg-indigo-500 hover:bg-indigo-600/90 transition py-2.5 rounded text-white font-medium"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
