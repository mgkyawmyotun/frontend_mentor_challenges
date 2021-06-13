import React, {useEffect, useRef, useState} from "../_snowpack/pkg/react.js";
import {Card} from "./components/Card.js";
import {SearchBar} from "./components/SearchBar.js";
import {ipGeoLookUp, markAndFlyToLocation, setUpMap} from "./utils.js";
function App({}) {
  const mapRef = useRef(null);
  const inputRef = useRef(null);
  const [result, setResult] = useState(null);
  const [LngLat, setLngLat] = useState(null);
  const [loading, setLoading] = useState(true);
  const search = async () => {
    setLoading((value) => true);
    if (inputRef && inputRef.current) {
      const {
        ip,
        isp,
        location: {country, city, lat, lng, timezone}
      } = await ipGeoLookUp(inputRef.current.value + "");
      setResult({ip, isp, location: country + " , " + city, timezone});
      setLngLat({lng, lat});
      setLoading((value) => false);
    }
  };
  useEffect(() => {
    const map = setUpMap(mapRef);
    if (!LngLat) {
      search();
    }
    markAndFlyToLocation(LngLat, map);
  }, [LngLat]);
  return /* @__PURE__ */ React.createElement("div", {
    className: loading ? "loading" : ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "main__title"
  }, "IP Address Tracker"), /* @__PURE__ */ React.createElement(SearchBar, {
    inputRef,
    search
  }), /* @__PURE__ */ React.createElement(Card, {
    result
  }), /* @__PURE__ */ React.createElement("div", {
    className: "main__map",
    ref: mapRef
  })));
}
export default App;
