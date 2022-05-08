const root = document.querySelector("#root");

function App() {
  const [diKlik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    console.log(document.getElementById("judul"));
  }, [diKlik, count]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "ini judul y"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDiklik(true);
    }
  }, "klik aku yax"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "klik tambah"), "nilai saat ini: ", count);
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);