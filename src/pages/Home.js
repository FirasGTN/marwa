import React, { useEffect, useState } from "react";
import "../Styles/home.css";
import imageHolder from "../assets/images/imageHolder.png";
import vidoeOne from "../assets/videos/FripageV1.mp4";
import vidoeOneMobile from "../assets/videos/mar video1 mobile.mp4";
import vidoeThree from "../assets/videos/fripage video-4.mp4";
import videoFive from "../assets/videos/mar video5.mp4";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import test from "../assets/images/fripage capture 3.jpg";

import Loding from "../components/Loding";
// import test2 from "../assets/images/test.jpg";
import { useNavigate } from "react-router-dom";
import MobileShopCart from "../components/DesktopShopCart";
import DesktopShopCart from "../components/DesktopShopCart";

function Home(props) {
  // let [sourceHeight, setSourceHeight] = useState();
  let [video1Load, setVideo1Load] = useState(false);

  const navigate = useNavigate();
  const videoElement = document.querySelector(".video1");
  const width_screen = window.innerWidth;
  // console.log(switchPageC);

  useEffect(() => {
    props.setSwitchPageC(false);
  }, []);

  // useEffect(() => {
  // props.setTargetHeight("video1", "section-one-two", "height");
  // props.setTargetHeight("video1-m", "section-one-two", "height");
  // if (videoElement) {
  //   window.addEventListener("resize", function (event) {
  //     setSourceHeight(videoElement.offsetHeight);
  //   });
  // }
  //   function deviceType() {
  //     const ua = navigator.userAgent;
  //     if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  //       return "tablet";
  //     } else if (
  //       /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
  //         ua
  //       )
  //     ) {
  //       return "mobile";
  //     }
  //     return "desktop";
  //   }
  //   console.log(deviceType());
  // }, []);

  function disableScroll() {
    // Get the current scroll position
    var scrollPosition = [
      window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft,
      window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop,
    ];

    // Save the current scroll position
    var body = document.body;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition[1]}px`;
    body.style.left = `-${scrollPosition[0]}px`;
  }

  function enableScroll() {
    var body = document.body;
    // Restore the scroll position
    body.style.overflow = "auto";
    body.style.position = "static";
    body.style.top = "auto";
    body.style.left = "auto";
  }
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  return (
    <div className="home">
      <Loding switchPageC={props.switchPageC} />
      <section className="section-one" id="section-one">
        <video
          playsInline
          autoPlay
          loop
          muted
          preload="auto"
          className="video1"
          onCanPlay={() => setVideo1Load(true)}
          id="video1"
          disablePictureInPicture
        >
          <source src={videoFive}></source>
        </video>
      </section>
      <section>
        <div
          className={
            props.LoginIsOpen
              ? "opacity-0 section-one-two"
              : "opacity-1 section-one-two"
          }
          id="section-one-two"
        >
          <div
            className="section-one-two-content -z-2"
            id="section-one-two-content-one"
          >
            <div>
              <h1>Welcome to the Future</h1>
              <p>
                Talent she for lively eat led sister. Entrance strongly packages
                she out rendered get quitting denoting led.
              </p>
              <button
                class="animated-buttonn"
                onClick={() => {
                  props.setSwitchPageC(!props.switchPageC);
                  setVideo1Load(false);
                  disableScroll();
                  setTimeout(() => {
                    enableScroll();
                    navigate("/store");
                  }, 1200);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text" style={{ margin: "0px 3px" }}>
                  S H O P
                </span>
                <span class="text" style={{ margin: "0px 3px" }}>
                  N O W
                </span>
                <span class="circle"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="arr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-two ">
        <div
          className="relative bg-white overflow-hidden"
          style={{ height: "100vh" }}
        >
          <div className="pb-80 pt-20 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Summer styles are finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  This year, our new summer collection will shelter you from the
                  harsh elements of a world that doesn't care if you live or
                  die.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blur-background-div"></div>
      </section>
      <section className="section-three">
        <video
          playsInline
          autoPlay
          muted
          preload="auto"
          loop
          className="video2"
          disablePictureInPicture
        >
          <source src={vidoeOne}></source>
        </video>
      </section>
    </div>
  );
}

export default Home;
