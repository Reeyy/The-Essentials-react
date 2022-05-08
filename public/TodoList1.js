const root = document.querySelector("#root");

function App() {
  const [activity, setActivity] = React.useState(""); //untuk menampung isi data dari acivity menjadi array

  const [todos, setTodos] = React.useState([]);

  addTodoHandler = event => {
    event.preventDefault(); //untuk speread atau memunculkan semua isi array yang ada di todos yang berasal dari activity dengna mengunakan ...

    setTodos([...todos, activity]); //untuk reset activity (controled component)

    setActivity("");
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Nice todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "nama kegiatan",
    value: activity,
    onChange: event => {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo
    }, todo);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);