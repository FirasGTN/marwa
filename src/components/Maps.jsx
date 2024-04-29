import React, { useEffect, useState } from "react";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import "../Styles/maps.css";

function Maps(props) {
  function sendPlaceDetailsRequest(feature, geocoder) {
    if (feature) {
      props.setFormData({
        ...props.formData,
        address: {
          ...props.formData.address,
          country: feature.properties.country,
          state: feature.properties.state,
          formatted: feature.properties.formatted,
          city: feature.properties.city,
          zipcode: feature.properties.postcode,
          street: feature.properties.street,
          placeCode: feature.properties.plus_code,
        },
      });
    }
    return geocoder.sendPlaceDetailsRequest(feature);
  }
  function sendGeocoderRequest(value, geocoder) {
    if (
      value.length > 0 &&
      document.getElementById("AddressAutoFill").style.border ===
        "1px solid red"
    ) {
      document.getElementById("AddressAutoFill").style.border = "0px";
    }
    return geocoder.sendGeocoderRequest(value);
  }

  return (
    <GeoapifyContext apiKey="7891bf38f31f4fe195ae33770bb2e042">
      <GeoapifyGeocoderAutocomplete
        placeholder="Enter address here"
        sendPlaceDetailsRequestFunc={sendPlaceDetailsRequest}
        addDetails={true}
        filterByCountryCode={["tn"]}
        sendGeocoderRequestFunc={sendGeocoderRequest}
      />
    </GeoapifyContext>
  );
}

export default Maps;
