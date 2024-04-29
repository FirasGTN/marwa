import React from "react";
import CityList from "./CityList";
function ManualFillAdress(props) {
  // console.log(props.formData);
  return (
    <>
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
              disabled
              className="bg-neutral-100 cursor-not-allowed block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
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
            <select
              id="state"
              name="state"
              onChange={(e) =>
                props.setFormData({
                  ...props.formData,
                  address: {
                    ...props.formData.address,
                    state: e.target.value,
                  },
                })
              }
              onFocus={(event) =>
                event.target.style.border === "1px solid red"
                  ? (event.target.style.border = "none")
                  : null
              }
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
            >
              <option selected>Choose a state</option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Mannouba">Mannouba</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Béja">Béja</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Zaghouan">Zaghouan</option>
              <option value="Siliana">Siliana</option>
              <option value="Le Kef">Le Kef</option>
              <option value="Sousse">Sousse</option>
              <option value="Monastir">Monastir</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Sfax">Sfax</option>
              <option value="Gabès">Gabès</option>
              <option value="Médenine">Médenine</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Kebili">Kebili</option>
              <option value="Tataouine">Tataouine</option>
            </select>
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
            <CityList
              formData={props.formData}
              setFormData={props.setFormData}
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
              name="postcode"
              type="number"
              autoComplete="postcode"
              onChange={(e) =>
                props.setFormData({
                  ...props.formData,
                  address: {
                    ...props.formData.address,
                    zipcode: e.target.value,
                  },
                })
              }
              onFocus={(event) =>
                event.target.style.border === "1px solid red"
                  ? (event.target.style.border = "none")
                  : null
              }
              className="block w-full text-gray-900 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
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
            name="street"
            type="drop"
            autoComplete="street"
            onChange={(e) =>
              props.setFormData({
                ...props.formData,
                address: { ...props.formData.address, street: e.target.value },
              })
            }
            onFocus={(event) =>
              event.target.style.border === "1px solid red"
                ? (event.target.style.border = "none")
                : null
            }
            className="block w-full text-gray-900 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
          />
        </div>
      </div>
    </>
  );
}

export default ManualFillAdress;
