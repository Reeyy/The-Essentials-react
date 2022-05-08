const root = document.querySelector("#root");

const className = "box";
/** class variable **/

/** Rendering **/
function tick() {
  const element = (
    /** memanggil dengan variable **/
    // <div className={box}>

    <div className="box">
      <h1> jam sekarang </h1>
      {new Date().toLocaleTimeString()}
    </div>
  );
  ReactDOM.render(element, root);
}
tick();
setInterval(function () {
  tick();
}, 1000);
