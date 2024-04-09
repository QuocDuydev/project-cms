import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
function Register() {
  const { logoutUser } = useContext(AuthContext);
  const [regInfo, setRegInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRegInfo({ ...regInfo, [name]: value });
  };
  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `http://localhost:1337/api/auth/local/register`,
        {
          username: regInfo.username,
          email: regInfo.email,
          password: regInfo.password,
        }
      );
      if (response.status === 200) {
        alert("Bạn đã đăng ký thành công");
        window.location.href = "/login";
      } else {
        alert("Đăng ký thất bại vui lòng kiểm tra lại thông tin đăng ký");
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };
  return (
    <section className="text-gray-600 body-font">
      <button onClick={logoutUser}>logout</button>
      <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
          <h1 className="text-3xl font-medium text-gray-900 title-font">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="mt-4 leading-relaxed">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">
            Sign Up
          </h2>
          <form action="">
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="full-name"
                name="email"
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="text-sm leading-7 text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="full-name"
                name="username"
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="email"
                name="password"
                onChange={handleChange}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </form>
          <button
            onClick={handleRegister}
            type="submit"
            className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
          >
            Register
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
