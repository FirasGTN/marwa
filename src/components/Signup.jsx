import React, { useEffect, useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "sonner";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AutoFillAdress from "../components/AutoFillAdress";
import ManualFillAdress from "../components/ManualFillAdress";
import "../Styles/signup.css";

function Sigup(props) {
  const navigate = useNavigate(); // Initialize history object

  const [step, setStep] = useState(true);
  const [fillAdress, setFillAdress] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: {
      state: "",
      formatted: "",
      city: "",
      zipcode: "",
      street: "",
      placeCode: "",
    },
  });

  // if (document.getElementById("bordered-radio-1").checked) {
  //   console.log("check");
  // }
  // console.log(formData);

  // useEffect(() => {
  //   if (formData.address.state) {
  //     document.getElementById("state").value = formData.address.state;
  //   }
  //   if (formData.address.city) {
  //     document.getElementById("city").value = formData.address.city;
  //   }
  // }, [formData]);

  // console.log(formData.address.state.length);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.address.city ||
      !formData.address.state ||
      !formData.address.street ||
      !formData.address.zipcode
    ) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password
      ) {
        toast.error("Form must contain all the details");

        if (!formData.firstName) {
          document.getElementById("FirstName").style.border = "1px solid red";
        }
        if (!formData.lastName) {
          document.getElementById("LastName").style.border = "1px solid red";
        }
        if (!formData.email) {
          document.getElementById("email").style.border = "1px solid red";
        }
        if (!formData.password) {
          document.getElementById("password").style.border = "1px solid red";
        }
      } else if (
        !document.getElementById("bordered-radio-1").checked &&
        !document.getElementById("bordered-radio-2").checked
      ) {
        document
          .querySelectorAll(".radio-container")
          .forEach(function (element) {
            element.style.border = "1px solid red";
          });
      } else if (document.getElementById("bordered-radio-1").checked) {
        if (
          !formData.address.state ||
          !formData.address.city ||
          !formData.address.zipcode ||
          !formData.address.street
        ) {
          toast.error("Address must contain all the details");
          if (!formData.address.state) {
            document.getElementById("state").style.border = "1px solid red";
          }
          if (!formData.address.city) {
            document.getElementById("city").style.border = "1px solid red";
          }
          if (!formData.address.zipcode) {
            document.getElementById("postcode").style.border = "1px solid red";
          }
          if (!formData.address.street) {
            document.getElementById("street").style.border = "1px solid red";
          }
        }
      } else if (document.getElementById("bordered-radio-2").checked) {
        if (
          !formData.address.state ||
          !formData.address.city ||
          !formData.address.zipcode ||
          !formData.address.street
        ) {
          toast.error("Address must contain all the details");
          document.getElementById("AddressAutoFill").style.border =
            "1px solid red";
        }
      }
    } else {
      signupFn();
    }
  };

  const signupFn = async () => {
    try {
      const response = await axios.post("/signup", formData);

      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      if (error.response.data.element === "firstName") {
        document.getElementById("FirstName").style.border = "1px solid red";
      } else if (error.response.data.element === "lastName") {
        document.getElementById("LastName").style.border = "1px solid red";
      } else if (error.response.data.element === "email") {
        document.getElementById("email").style.border = "1px solid red";
      } else if (error.response.data.element === "password") {
        document.getElementById("password").style.border = "1px solid red";
        console.log("password");
      }
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target.id === "login") {
      props.LoginClose();
    }
  };
  return (
    <div
      className="signup  mt-20  w-full fixed h-screen  "
      id="login"
      onClick={handleOverlayClick}
    >
      <div class="form-signup  text-white bg-transparent  rounded-lg pt-16 p-6 p-8 ">
        <div className="fixed  top-5  flex justify-between items-center" style={{width :"50rem"}} >
          <h5 class="text-xl font-medium text-white">
            Sign in to our platform
          </h5>
          <XMarkIcon
            onClick={() => props.setLoginIsOpen(false)}
            className="h-6 w-6 text-white cursor-pointer"
            aria-hidden="true"
          />
        </div>
        <form className="space-y-6  overflow-y-scroll  h-full">
          <div className="flex gap-5 signup-form-fullname">
            <div className="full-name">
              <label className="block text-sm font-medium leading-6 ">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="FirstName"
                  name="FirstName"
                  type="text"
                  autoComplete="FirstName"
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  onFocus={(event) =>
                    event.target.style.border === "1px solid red"
                      ? (event.target.style.border = "none")
                      : null
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>
            <div className="full-name">
              <label className="block text-sm font-medium leading-6 ">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="LastName"
                  name="LastName"
                  type="text"
                  autoComplete="LastName"
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  onFocus={(event) =>
                    event.target.style.border === "1px solid red"
                      ? (event.target.style.border = "none")
                      : null
                  }
                  className="block w-full rounded-md text-black border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm  font-medium leading-6 ">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onFocus={(event) =>
                  event.target.style.border === "1px solid red"
                    ? (event.target.style.border = "none")
                    : null
                }
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 ">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                onFocus={(event) =>
                  event.target.style.border === "1px solid red"
                    ? (event.target.style.border = "none")
                    : null
                }
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
              />
            </div>
          </div>
          <label className="block text-sm font-medium leading-6 ">
            Address
          </label>
          <div
            className="flex gap-5 radio-address"
            style={{ marginTop: "10px" }}
          >
            <div class="radio-container flex w-full items-center ps-4 border border-gray-200 rounded dark:border-gray-700 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset">
              <a
                href="#go"
                id="bordered-radio-1"
                type="radio"
                value="Manual"
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                onChange={(e) => {
                  setFillAdress(e.target.value);
                  setFormData({
                    ...formData,
                    address: {
                      state: "",
                      formatted: "",
                      city: "",
                      zipcode: "",
                      street: "",
                      placeCode: "",
                    },
                  });
                  document
                    .querySelectorAll(".radio-container")
                    .forEach(function (element) {
                      if (element.style.border === "1px solid red") {
                        element.style.border = "none";
                      }
                    });
                }}
              />
              <label
                for="bordered-radio-1"
                class="w-full py-4 ms-2 text-sm font-medium "
              >
                Manual fill the address
              </label>
            </div>
            <div class="radio-container flex w-full items-center ps-4 border border-gray-200 rounded dark:border-gray-700 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset">
              <input
                id="bordered-radio-2"
                type="radio"
                value="Auto"
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                onChange={(e) => {
                  setFillAdress(e.target.value);
                  setFormData({
                    ...formData,
                    address: {
                      state: "",
                      formatted: "",
                      city: "",
                      zipcode: "",
                      street: "",
                      placeCode: "",
                    },
                  });
                  document
                    .querySelectorAll(".radio-container")
                    .forEach(function (element) {
                      if (element.style.border === "1px solid red") {
                        element.style.border = "none";
                      }
                    });
                }}
              />
              <label
                for="bordered-radio-2"
                class="w-full py-4 ms-2 text-sm font-medium "
              >
                Auto fill the address{" "}
                <span className="text-gray-300	">(suggestion)</span>
              </label>
            </div>
          </div>
          {fillAdress === "Auto" ? (
            <AutoFillAdress formData={formData} setFormData={setFormData} />
          ) : fillAdress === "Manual" ? (
            <ManualFillAdress formData={formData} setFormData={setFormData} />
          ) : null}
          <button
            onSubmit={handleSubmit}
            type="submit"
            id="go"
            className=" flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sigup;
