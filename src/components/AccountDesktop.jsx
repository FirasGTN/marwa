import React, { useEffect } from "react";
import DesktopShopCart from "./DesktopShopCart";
import "../Styles/Account.css";
import { MdHistory } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import { MdPending } from "react-icons/md";
import { MdLogout } from "react-icons/md";

function AccountDesktop(props) {
  // useEffect(() => {
  //   if (props.CartIsOpen){
  //     document.getElementById("")
  //   }
  // }, []);

  let firstname;
  let lastname;
  if (props.userData) {
    firstname =
      props.userData.firstName.charAt(0).toUpperCase() +
      props.userData.firstName.slice(1);
    lastname =
      props.userData.lastName.charAt(0).toUpperCase() +
      props.userData.lastName.slice(1);
  }
  const handleOverlayClick = (event) => {
    if (event.target.id === "AccountDesktop") {
      props.AccountClose();
    }
  };

  return (
    <>
      {props.CartIsOpen ? (
        <div
          className="AccountDesktop overflow-scroll"
          id="AccountDesktop"
          onClick={handleOverlayClick}
          style={{ height: "100%" }}
        >
          <div class="mx-auto max-w-5xl  px-6 md:flex md:space-x-6 xl:px-0 pt-5">
            <div class="rounded-lg w-full">
              <div class=" mb-6 rounded-lg bg-white p-6 shadow-md  h-full">
                <div class=" flex user-info justify-between sm:items-center sm:flex h-full sm:w-full sm:justify-between">
                  <div class="account-order-list">
                    <div className="account-logo1 flex justify-center items-center pt-1">
                      <FcOk />
                    </div>
                    <p className="account-orders1">active order :</p>
                    <p className="account-orders-count1">1</p>
                    <div className="account-logo2 flex justify-center items-center pt-1">
                      <MdPending />
                    </div>
                    <p className="account-orders2">pending order :</p>
                    <p className="account-orders-count2">2</p>
                    <div className="account-logo3 flex justify-center items-center pt-1">
                      <MdHistory />
                    </div>
                    <p className="account-orders3">historique order :</p>
                    <p className="account-orders-count3">10</p>
                  </div>
                  <div class="flex justify-between items-center gap-3 min-[490px]:flex-row-reverse ">
                    <div>
                      <h2 class="text-lg font-bold text-gray-900">
                        {firstname && lastname ? (
                          <div>
                            {firstname} {lastname}
                          </div>
                        ) : null}
                      </h2>
                      <p class="mt-1 text-xs text-gray-700">
                        {props.userData?.email}
                      </p>
                    </div>
                    <MdLogout
                      className="h-full w-10 "
                      style={{ cursor: "pointer" }}
                      onClick={() => props.handleLogout()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {props.userData.cart.length > 0 ? (
            <DesktopShopCart userData={props.userData} />
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default AccountDesktop;
