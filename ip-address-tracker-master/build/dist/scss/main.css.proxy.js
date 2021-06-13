// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap\");\nbody {\n  width: 100vw;\n  height: 100vh;\n  font-family: \"Rubik\", sans-serif;\n}\n\n*,\n::before,\n::after,\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.loading::before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  background-color: #969696;\n  opacity: 0.8;\n}\n\n.loading::after {\n  z-index: 10;\n  position: absolute;\n  content: \" \";\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  top: calc(50% - 50px);\n  left: calc(50% - 50px);\n  box-sizing: border-box;\n  border: 32px solid #fff;\n  border-color: black transparent white transparent;\n  animation: lds-hourglass 1.2s infinite;\n}\n\n@keyframes lds-hourglass {\n  0% {\n    transform: rotate(0);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    transform: rotate(900deg);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    transform: rotate(1800deg);\n  }\n}\nh1 {\n  margin: 0;\n}\n\n.main {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  padding: 1.875em 0;\n  z-index: 1;\n}\n.main .main__title {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: #fff;\n}\n.main .main__search_bar {\n  display: flex;\n  margin: 1.875em auto;\n  width: 80%;\n  align-items: center;\n  border-radius: 10%;\n  overflow: hidden;\n}\n.main .main__search_bar > input {\n  border: none;\n  font-size: 1rem;\n  padding: 1.25em 1.5em 1.25em 1.5em;\n  flex: 1 1 4em;\n  font-weight: 500;\n  border-radius: 1em 0 0 1em;\n  cursor: pointer;\n}\n.main .main__search_bar > input::placeholder {\n  font-size: 0.8rem;\n}\n.main .main__search_bar > button {\n  cursor: pointer;\n  border: none;\n  flex: 0 0 4em;\n  border-radius: 0 1em 1em 0;\n  align-self: stretch;\n  background-color: #000;\n  position: relative;\n}\n.main .main__search_bar > button::after {\n  position: absolute;\n  background-image: url(../../images/icon-arrow.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  content: \"\";\n  width: 30%;\n  height: 30%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main .main__map {\n  z-index: -1;\n  position: absolute !important;\n  top: 30%;\n  left: 0;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 70%;\n}\n.main .main__card {\n  margin: 1em auto;\n  width: 80%;\n  z-index: 1;\n  border-radius: 0.5em;\n  padding: 1em;\n  box-sizing: border-box;\n  font-weight: 500;\n  background-color: white;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(auto-fit, 1fr);\n  align-items: center;\n}\n.main .main__card > *[class^=main__card__] {\n  color: white;\n  text-align: center;\n}\n.main .main__card > *[class^=main__card__] > div:first-child {\n  font-size: 0.8em;\n  color: #969696;\n  font-weight: 700;\n}\n.main .main__card > *[class^=main__card__] > div:last-child {\n  font-size: 1.5em;\n  color: #000;\n  font-weight: 500;\n}\n\n.main::before {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  background: url(\"../../images/pattern-bg.png\");\n  background-size: cover;\n  width: 100%;\n  height: 30%;\n  top: 0;\n  left: 0;\n}\n\n@media screen and (min-width: 1000px) {\n  .main > .main__card {\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(auto-fit, 1fr);\n    padding: 1em;\n    justify-items: stretch;\n  }\n  .main > .main__card > *[class^=main__card__] {\n    padding: 1em 1em;\n    position: relative;\n    text-align: start;\n  }\n  .main > .main__card > *[class^=main__card__] > div:first-child {\n    margin: 0.5em 0;\n  }\n  .main > .main__card > *[class^=main__card__] > div:last-child {\n    margin-left: 0.2em;\n  }\n  .main > .main__card > *[class^=main__card__]:not(div:last-child):after {\n    content: \"\";\n    position: absolute;\n    background-color: #969696;\n    opacity: 0.5;\n    width: 0.05em;\n    height: 60%;\n    top: 20%;\n    right: 0;\n  }\n  .main > .main__search_bar {\n    width: 35%;\n  }\n  .main > .main__search_bar > input {\n    font-size: 1.2rem;\n    font-weight: 700;\n  }\n  .main > .main__search_bar > input::placeholder {\n    font-size: 1rem;\n  }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}