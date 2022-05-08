const root = document.querySelector("#root");

function App() {
  const judulRef = React.useRef(null);
  React.useEffect(function () {
    setTimeout(function () {
      judulRef.current.textContent = "aplikasi";
    }, 3000);
  }, []); //dengan id
  // React.useEffect(function () {
  //   const judul= document.getElementById("judul");
  //   setTimeout(function () {
  //    judul.textContent="aplikasi"
  //   }, 1000);
  // }, []);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "aplications"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);