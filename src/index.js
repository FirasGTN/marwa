import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Navbar : Login and Cart handle open and close still need to be implemented

// New register component :
// change the register with the new templet
// remove the old Login page
// complete the Fn of Login

// New Login component :
// remove the old Login page
// complete the Fn of Login

// Account Component:
// complete the function ablity for addding items into cart, removing them, and updating the quantity
// make sure that when a user is not logged in they are redirected to login if trying to access this route
