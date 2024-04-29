import React, { useEffect, useState } from "react";
import "../Styles/navbar2.css";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router";
import { CiUser } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Navbar2(props) {
  const [url, setUrl] = useState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [animationDisplayed, setAnimationDisplayed] = useState(false);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <header
        className={
          animationDisplayed
            ? " fixed inset-x-0 top-0 z-50 newnavbar newnavbar-animation"
            : " fixed inset-x-0 top-0 z-50 newnavbar "
        }
      >
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a
              className="-m-1.5 p-1.5"
              onClick={() => {
                if (props.CartIsOpen) {
                  props.AccountClose("/");
                } else if (props.LoginIsOpen) {
                  props.LoginClose("/");
                } else {
                  navigate("/");
                }
              }}
            >
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => {
                // navigate("/");
                setMobileMenuOpen(true);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <p
              className="text-sm font-semibold leading-6 text-white cursor-pointer"
              onClick={() => {
                if (props.CartIsOpen) {
                  props.AccountClose("/");
                } else if (props.LoginIsOpen) {
                  props.LoginClose("/");
                } else {
                  navigate("/");
                }
              }}
            >
              Home
            </p>
            <p
              className="text-sm font-semibold leading-6 text-white cursor-pointer"
              onClick={() => {
                if (props.CartIsOpen) {
                  props.AccountClose("/store");
                } else if (props.LoginIsOpen) {
                  props.LoginClose("/store");
                } else {
                  props.setSwitchPageC(true);
                  setTimeout(() => {
                    navigate("/store");
                  }, 800);
                }
              }}
            >
              Store
            </p>
            <p
              className="text-sm font-semibold leading-6 text-white cursor-pointer"
              onClick={() => {
                if (props.CartIsOpen) {
                  props.AccountClose("/about");
                } else if (props.LoginIsOpen) {
                  props.LoginClose("/about");
                } else {
                  navigate("/about");
                }
              }}
            >
              About us
            </p>
          </div>
          {!props.token ? (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
              <a
                className="text-sm font-semibold leading-6 text-white "
                onClick={() => {
                  if (props.LoginIsOpen) {
                    props.LoginClose();
                  } else {
                    props.setLoginIsOpen(!props.LoginIsOpen);
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                className="text-sm font-semibold leading-6 text-white "
                style={{ cursor: "pointer" }}
              >
                {props.CartIsOpen === false ? (
                  <CiUser
                    size={30}
                    color="#fff"
                    onClick={() => {
                      props.setCartIsOpen(!props.CartIsOpen);
                    }}
                  />
                ) : (
                  <IoIosCloseCircleOutline
                    size={30}
                    color="#fff"
                    onClick={() => {
                      if (props.CartIsOpen) {
                        props.AccountClose();
                      }
                    }}
                  />
                )}
              </a>
            </div>
          )}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden "
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50  " />
          <Dialog.Panel className="fixed flex flex-col gap-5 inset-y-0 right-0 z-50 w-full overflow-y-hidden bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between ">
              <a
                onClick={() => {
                  if (props.CartIsOpen) {
                    props.AccountClose("/");
                  } else if (props.LoginIsOpen) {
                    props.LoginClose("/");
                  } else {
                    navigate("/");
                  }
                  setMobileMenuOpen(false);
                }}
                className="-m-1.5 p-1.5"
              >
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <p
                    className={
                      url === "/" &&
                      props.LoginIsOpen === false &&
                      props.CartIsOpen === false
                        ? "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-gray-200 cursor-pointer"
                        : "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                    }
                    onClick={() => {
                      if (props.CartIsOpen) {
                        props.AccountClose("/");
                      } else if (props.LoginIsOpen) {
                        props.LoginClose("/");
                      } else {
                        navigate("/");
                      }

                      setMobileMenuOpen(false);
                    }}
                  >
                    Home
                  </p>
                  <p
                    className={
                      url === "/store" &&
                      props.LoginIsOpen === false &&
                      props.CartIsOpen === false
                        ? "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-gray-200 cursor-pointer"
                        : "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                    }
                    onClick={() => {
                      if (props.CartIsOpen) {
                        props.AccountClose("/store");
                      } else if (props.LoginIsOpen) {
                        props.LoginClose("/store");
                      } else {
                        props.setSwitchPageC(true);
                        setTimeout(() => {
                          navigate("/store");
                        }, 800);
                      }
                      props.setLoginIsOpen(false);
                    }}
                  >
                    Store
                  </p>
                  <p
                    className={
                      url === "/about" &&
                      props.LoginIsOpen === false &&
                      props.CartIsOpen === false
                        ? "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-gray-200 cursor-pointer"
                        : "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                    }
                    onClick={() => {
                      if (props.CartIsOpen) {
                        props.AccountClose("/about");
                      } else if (props.LoginIsOpen) {
                        props.LoginClose("/about");
                      } else {
                        navigate("/about");
                      }
                      setMobileMenuOpen(false);
                    }}
                  >
                    About us
                  </p>
                </div>
                <div className="">
                  {!props.token ? (
                    <div className="py-6">
                      <a
                        onClick={() => {
                          setMobileMenuOpen(false);
                          props.setCartIsOpen(false);
                          props.setLoginIsOpen(!props.LoginIsOpen);
                        }}
                        className={
                          props.LoginIsOpen
                            ? "bg-gray-200 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 cursor-pointer"
                            : "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                        }
                      >
                        Log in
                      </a>
                    </div>
                  ) : (
                    <div className="py-6">
                      <a
                        onClick={() => {
                          setMobileMenuOpen(false);
                          props.setCartIsOpen(true);
                        }}
                        // className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        className={
                          props.CartIsOpen
                            ? "bg-gray-200 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 cursor-pointer"
                            : "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                        }
                      >
                        Profile
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* {props.token ? (
              <div className="h-full overflow-hidden pt-5">
                <div className="flex flex-col h-full overflow-hidden ">
                  <div className="flex items-start justify-between">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </Dialog.Title>
                    <div className="ml-3  flex h-7 items-center">
                  <button
                    type="button"
                    className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    // onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                  </div>

                  <div className="mt-8 overflow-scroll">
                    <div className=" ">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                  </h3>
                                  <p className="ml-4">{product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.color}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  Qty {product.quantity}
                                </p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 pt-3 sm:px-6 ">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$262.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : null} */}
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

export default Navbar2;
