const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false); // ternaru operator

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Aplication"), login ? /*#__PURE__*/React.createElement("b", null, "kamu sudah login") : /*#__PURE__*/React.createElement("i", null, "kamu belum login"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);