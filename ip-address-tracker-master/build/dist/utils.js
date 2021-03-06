import mapBox from "../_snowpack/pkg/mapbox-gl.js";
import {SearchType} from "./type.js";
export const isIpAddress = (data) => {
  const res = +data.toString().replaceAll(/\./g, "");
  if (isNaN(res))
    return false;
  return true;
};
export const ipGeoLookUp = async (address) => {
  const type = isIpAddress(address) ? SearchType.IP : SearchType.DOMAIN;
  try {
    const res = await fetch("https://geo.ipify.org/api/v1?apiKey=at_46Ab3aAzJjotM4I3hNYHnryR3ZChT&" + type + "=" + address);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export const setUpMap = (mapRef) => {
  mapBox.accessToken = "pk.eyJ1Ijoia3lhd215b3R1biIsImEiOiJjazV1aWs1ZDUwdGdhM2pwM3RpbXhkdXJ4In0.WFtL4jwTC6eRB2A-dRk99A";
  const map = new mapBox.Map({
    container: mapRef.current,
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 1
  });
  return map;
};
export const markAndFlyToLocation = (LngLat, map) => {
  if (LngLat && LngLat.lat && LngLat.lat) {
    new mapBox.Marker({color: "#000"}).setLngLat([LngLat.lng, LngLat.lat]).addTo(map);
    map.flyTo({
      center: [LngLat.lng, LngLat.lat],
      zoom: 10,
      essential: true
    });
  }
};
