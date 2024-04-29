import "./App.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { Route, Routes, useNavigate } from "react-router";
import Navbar2 from "./components/Navbar2";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Maps from "./components/Maps";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import AccountDesktop from "./components/AccountDesktop";
import Login from "./components/Login";
import SignUpForm from "./pages/SignUpForm";
import Signup from "./components/Signup";
import OperaEffectHandle from "./components/OperaEffectHandle";
import { Demo } from "./components/Demo";
function App() {
  const [userDataChanged, setUserDataChanged] = useState(false);
  const [userData, setUserData] = useState();
  let [switchPageC, setSwitchPageC] = useState(false);
  const [CartIsOpen, setCartIsOpen] = useState(false);
  const [LoginIsOpen, setLoginIsOpen] = useState(false);
  const [SignupIsOpen, setSignupIsOpen] = useState(false);
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  axios.defaults.baseURL = "https://marwa-server.onrender.com";

  const handleLogout = (log) => {
    // Perform logout actions here
    localStorage.removeItem("token"); // Remove token from localStorage
    setToken(null); // Clear token state
    if (CartIsOpen) {
      AccountClose();
    }
    if (log) {
      setLoginIsOpen(true);
    }
    // window.location.reload()
    // Additional cleanup actions if necessary
    // Redirect to login page
  };

  const getUserData = async (token) => {
    if (token) {
      const decodedToken = jwtDecode(token);
      let userID = decodedToken.user.id;
      let response = await axios.get(`/getuserdata/${userID}`);
      setUserData(response.data.userFilter);
    }
  };
  const AccountClose = (path) => {
    if (CartIsOpen === true) {
      var element = document.getElementById("AccountDesktop");
      if (element) {
        element.classList.add("AccountDesktopAnimation");
      }
      if (path) {
        navigate(path);
      }
      setTimeout(() => {
        setCartIsOpen(false);
      }, 500);
    } else {
      if (path) {
        navigate(path);
      }
    }
  };
  const LoginClose = (path) => {
    if (LoginIsOpen === true) {
      var element = document.getElementById("login");
      element.classList.add("login-unmount");
      if (path) {
        navigate(path);
      }
      setTimeout(() => {
        setLoginIsOpen(false);
      }, 500);
    } else {
      if (path) {
        navigate(path);
      }
    }
  };
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const operaDetected =
      userAgent.indexOf("OPR") !== -1 || userAgent.indexOf("Opera") !== -1;
    if (operaDetected && !localStorage.getItem("Opera-hardware-acceleration")) {
      navigate("/hardware-Acceleration");
      localStorage.setItem("Opera-hardware-acceleration", true);
    }
    getUserData(token);
    const checkTokenExpiration = () => {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        // If token doesn't exist, treat it as if the user logged out
        handleLogout(false);
        return;
      }
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const tokenExpiryTime = decodedToken.exp * 1000; // Convert seconds to milliseconds
          const currentTime = Date.now();
          if (currentTime >= tokenExpiryTime) {
            setIsTokenExpired(true);
            localStorage.removeItem("token");
            setToken(null); // Clear token state
            navigate("/"); // Redirect to home page
          } else {
            setIsTokenExpired(false);
          }
        } catch (error) {
          // Handle token decoding error
          console.error("Error decoding token:", error);
          localStorage.removeItem("token");
          setToken(null); // Clear token state
          navigate("/"); // Redirect to home page
        }
      }
    };

    const intervalId = setInterval(checkTokenExpiration, 10000);
    return () => clearInterval(intervalId);
  }, [token, navigate]);

  if (userDataChanged) {
    getUserData(token);
  }
  return (
    <div className="App">
      {SignupIsOpen ? (
        <Signup
          setSignupIsOpen={setSignupIsOpen}
          LoginClose={LoginClose}
        />
      ) : null}
      {LoginIsOpen ? (
        <Login
          setLoginIsOpen={setLoginIsOpen}
          setToken={setToken}
          LoginClose={LoginClose}
        />
      ) : null}
      <Toaster position="top-center" richColors style={{ marginTop: "70px" }} />
      <AccountDesktop
        CartIsOpen={CartIsOpen}
        setCartIsOpen={setCartIsOpen}
        userData={userData}
        handleLogout={handleLogout}
        setLoginIsOpen={setLoginIsOpen}
        AccountClose={AccountClose}
      />
      <Navbar2
        token={token}
        CartIsOpen={CartIsOpen}
        setCartIsOpen={setCartIsOpen}
        LoginIsOpen={LoginIsOpen}
        setLoginIsOpen={setLoginIsOpen}
        switchPageC={switchPageC}
        setSwitchPageC={setSwitchPageC}
        AccountClose={AccountClose}
        LoginClose={LoginClose}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              switchPageC={switchPageC}
              setSwitchPageC={setSwitchPageC}
              LoginIsOpen={LoginIsOpen}
            />
          }
        />
        <Route
          path="/store"
          element={
            <Store
              setUserDataChanged={setUserDataChanged}
              LoginIsOpen={LoginIsOpen}
              CartIsOpen={CartIsOpen}
              SignupIsOpen={SignupIsOpen}
            />
          }
        />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/hardware-Acceleration" element={<OperaEffectHandle />} />
      </Routes>
      {/* <Demo/> */}
    </div>
  );
}

export default App;
