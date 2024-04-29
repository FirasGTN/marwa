import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OnloginRoute({ children }) {
    const navigate = useNavigate();
  //   let role = localStorage.getItem("acc");
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate(`/`);
    }
  });
  if (!token) {
    return <> {children} </>;
  }
}

export default OnloginRoute;
