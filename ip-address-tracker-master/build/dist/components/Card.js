import React from "../../_snowpack/pkg/react.js";
export const Card = ({result}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, result && /* @__PURE__ */ React.createElement("div", {
    className: "main__card"
  }, " ", /* @__PURE__ */ React.createElement("div", {
    className: "main__card__ip"
  }, /* @__PURE__ */ React.createElement("div", null, "Ip Address"), /* @__PURE__ */ React.createElement("div", null, result.ip)), /* @__PURE__ */ React.createElement("div", {
    className: "main__card__location"
  }, /* @__PURE__ */ React.createElement("div", null, "Location"), /* @__PURE__ */ React.createElement("div", null, result.location)), /* @__PURE__ */ React.createElement("div", {
    className: "main__card__timezone"
  }, /* @__PURE__ */ React.createElement("div", null, "Timezone"), /* @__PURE__ */ React.createElement("div", null, result.timezone)), /* @__PURE__ */ React.createElement("div", {
    className: "main__card__isp"
  }, /* @__PURE__ */ React.createElement("div", null, "isp"), /* @__PURE__ */ React.createElement("div", null, result.isp))));
};
