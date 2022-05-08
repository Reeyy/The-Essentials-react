const root = document.querySelector("#root"); // function onclick1() {
//   alert(1);
// }
// const element = <button onClick={onclick1}>Click Me</button>;
// ReactDOM.render(element, root);

/** dengan parameter **/

function App() {
  //cara Simple
  const [count, setCount] = React.useState(0); //cara tidak simple
  // const state = React.useState(0);
  // const count = state[0];
  // const updateCount = state[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);