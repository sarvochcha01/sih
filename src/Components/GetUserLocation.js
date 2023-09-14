import axios from "axios";
import { useState } from "react";

const GetUserLocation = () => {
  let city = "";

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    console.log(lat + " " + lon);
    let finalEndPoint = `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`;
    axios.get(finalEndPoint).then((res) => {
      city = res.data.address.city;
      console.log(city);
      console.log(res.data);
    });
  };

  const err = () => {
    console.log("Unable to retrieve location");
  };

  navigator.geolocation.getCurrentPosition(success, err);
  return city;
};

export default GetUserLocation;
