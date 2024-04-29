import React from "react";
import "../Styles/Loding.css";
function Loding(props) {
  const numbers = [1, 2, 3, 4, 5];
  const elements = [];

  for (let i = 0; i < numbers.length; i++) {
    elements.push(
      <div
        className="sw-image-holder aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7 group "
        key={i}
      >
        
      </div>
    );
  }
  return (
    <div
      className={
        props.switchPageC === false
          ? "switchPage switchPageOff"
          : "switchPage switchPageOn"
      }
      style={{ overflow: "hidden" }}
    >
      <div className="gender-holder">
        <div className="sw-text-holder" style={{ width: "10%" }}></div>
        <div className="sw-text-holder"></div>
        <div className="sw-text-holder"></div>
        <div className="sw-text-holder"></div>
        <div className="sw-text-holder"></div>
      </div>
      <div className="bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {elements}
        </div>
      </div>
    </div>
  );
}

export default Loding;
