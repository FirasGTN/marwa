import React from "react";
import Maps from "./Maps";

function AutoFillAdress(props) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 "
          >
            Address Line
          </label>
        </div>
        <div
          className="mt-2 rounded-md border-0 text-black"
          id="AddressAutoFill"
        >
          <Maps formData={props.formData} setFormData={props.setFormData} />
        </div>
      </div>
      <div className="flex gap-5 signup-form-fullname">
        <div className="full-name">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 "
          >
            Country
          </label>
          <div className="mt-2">
            <input
              id="country"
              value="Tunisia"
              name="country"
              type="text"
              autoComplete="country"
              required
              disabled
              className="bg-neutral-100 cursor-not-allowed	text-black block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
            />
          </div>
        </div>
        <div className="full-name">
          <label
            htmlFor="state"
            className="block text-sm font-medium leading-6 "
          >
            State
          </label>
          <div className="mt-2">
            <input
              id="state"
              value={props.formData.address.state}
              name="state"
              type="text"
              autoComplete="state"
              required
              disabled
              className="bg-neutral-100 cursor-not-allowed text-black block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 signup-form-fullname">
        <div className="full-name">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 "
          >
            City
          </label>
          <div className="mt-2">
            <input
              id="city"
              value={props.formData.address.city}
              name="city"
              type="text"
              autoComplete="city"
              required
              disabled
              className="bg-neutral-100 cursor-not-allowed text-black block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
            />
          </div>
        </div>
        <div className="full-name">
          <label
            htmlFor="postcode"
            className="block text-sm font-medium leading-6 "
          >
            Post Code
          </label>
          <div className="mt-2">
            <input
              id="postcode"
              value={props.formData.address.zipcode}
              name="postcode"
              type="number"
              autoComplete="postcode"
              required
              disabled
              className="bg-neutral-100 cursor-not-allowed text-black block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
            />
          </div>
        </div>
      </div>
      <div className="full-name">
        <label
          htmlFor="street"
          className="block text-sm font-medium leading-6 "
        >
          Street
        </label>
        <div className="mt-2">
          <input
            id="street"
            value={props.formData.address.street}
            name="street"
            type="drop"
            autoComplete="street"
            required
            disabled
            className="bg-neutral-100 cursor-not-allowed text-black block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
          />
        </div>
      </div>
    </>
  );
}

export default AutoFillAdress;
