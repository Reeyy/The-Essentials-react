const root = document.querySelector("#root");

function App() {
  const [login, setLogin] = React.useState(false);

  if (login) {
    return /*#__PURE__*/React.createElement("h1", null, "udah login");
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "login dulu"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);