import { useNavigate } from "react-router";
import capture1 from "../assets/images/Capture1.JPG";
import capture2 from "../assets/images/Capture2.JPG";
import { RiErrorWarningLine } from "react-icons/ri";

export default function OperaEffectHandle() {
  const navigate = useNavigate();
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main
        className="grid min-h-screen place-items-center bg-white px-3   lg:px-8"
        style={{ paddingTop: "80px" }}
      >
        <div className="my-9 ">
          <p className=" font-semibold text-indigo-600">Opera and Opera GX</p>
          <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            HARDWARE ACCELERATION
          </h1>
        </div>
        <p
          className="my-3 sm:my-6 font-semibold  leading-7 text-gray-600 sm:text-4xl  "
          style={{
            // fontSize: "1.7rem",
            // width: "75%",
            alignSelf: "flex-start",
          }}
        >
          If you are using an opera or opera gx browser, you must enable use
          hardware acceleration feature in the settings of the browser to see
          the effect smoothly.
        </p>
        {/* FIRST */}
        <div className="flex sm:text-2xl w-full">
          <p className=" my-3 sm:my-6 mr-2   leading-7 text-gray-600">1)</p>

          <p className="my-3 sm:my-6   leading-7 text-gray-600">
            First open the settings page of your opera or opera gx browser{" "}
            <b>"opera://settings"</b>
          </p>
        </div>
        {/* SECOND  */}
        <div className="flex">
          <p className="sm:text-2xl  my-3 sm:my-6 mr-2   leading-7 text-gray-600">
            2)
          </p>
          <p className="my-3 sm:my-6 sm:text-2xl   leading-7 text-gray-600">
            Second go to{" "}
            <b>
              Advanced -> System Settings -> General -> Enable Hardware
              Acceleration
            </b>{" "}
            or search for <b>Use hardware acceleration</b> in the search bar.
          </p>
        </div>
        <img src={capture1} alt="" className="md:w-4/5" />
        {/* THIRD */}
        <div className="flex w-full">
          <p className="sm:text-2xl my-3 sm:my-6 mr-2   leading-7 text-gray-600">
            3)
          </p>
          <p className="sm:text-2xl my-3 sm:my-6   leading-7 text-gray-600">
            Finally make sure you enable it !
          </p>
        </div>
        <img src={capture2} alt="" className="" />
        <button className="my-3 sm:my-6 button-9" onClick={() => navigate("/")}>
          Done
        </button>
      </main>
    </>
  );
}
