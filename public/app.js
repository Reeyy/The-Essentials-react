const root = document.querySelector("#root");
const className = "box";
/** class variable **/

/** Rendering **/

function tick() {
  const element =
  /*#__PURE__*/

  /** memanggil dengan variable **/
  // <div className={box}>
  React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h1", null, " jam sekarang "), new Date().toLocaleTimeString());
  ReactDOM.render(element, root);
}

tick();
setInterval(function () {
  tick();
}, 1000);