const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false); //pake && buat ga ada else

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Aplication"), login && /*#__PURE__*/React.createElement("b", null, "kamu sudah login"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);