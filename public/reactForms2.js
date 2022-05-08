const root = document.querySelector("#root"); //controled form semua di control oleh usestate

function App() {
  const [nama, setNama] = React.useState("Masukan Nama");

  function ketikaSubmit(event) {
    event.preventDefault();
    console.log("nama:", nama);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikaSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: nama,
    onChange: function (event) {
      setNama(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "kirim"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);