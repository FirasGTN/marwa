import React, { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "sonner";
import { XMarkIcon } from "@heroicons/react/24/outline";
function Login(props) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", loginData);
      if (response) {
        localStorage.setItem("token", response.data.token);
        props.setToken(response.data.token);
        props.LoginClose();
      }
      // window.location.reload();
    } catch (error) {
      toast.error("Please enter a correct email and password");
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target.id === "login") {
      props.LoginClose();
    }
  };
  return (
    <div
      className="login  mt-20  w-full fixed flex justify-center items-center"
      id="login"
      onClick={handleOverlayClick}
    >
      <div class=" login-div flex justify-center items-center   bg-transparent div1 rounded-lg   sm:p-6 md:p-8 ">
        <form
          class="space-y-7  w-full p-6 md:p-10 form-login"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between items-center">
            <h5 class="text-xl font-medium text-white">
              Sign in to our platform
            </h5>
            <XMarkIcon
              onClick={() => props.setLoginIsOpen(false)}
              className="h-6 w-6 text-white cursor-pointer"
              aria-hidden="true"
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              class="border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent border-gray-100 placeholder-gray-400 text-white"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <label
                for="password"
                class="block mb-2 text-sm font-medium  text-white"
              >
                Your password
              </label>
              <div>
                <a
                  href="#"
                  class="ms-auto text-sm  hover:underline text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              placeholder="••••••••"
              class=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-transparent border-gray-100 placeholder-gray-400 text-white"
            />
          </div>
          <button
            type="submit"
            class="w-full text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600  focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div class="text-sm font-medium text-gray-300">
            Not registered?{" "}
            <a
              onClick={() => navigate("/signup")}
              class="blue-700 hover:underline text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
