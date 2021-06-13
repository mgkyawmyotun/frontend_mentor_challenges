import React from "../../_snowpack/pkg/react.js";
export const SearchBar = ({inputRef, search}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "main__search_bar"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Search for any IP address or domain",
    ref: inputRef,
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        search();
      }
      return;
    }
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: search
  })));
};
