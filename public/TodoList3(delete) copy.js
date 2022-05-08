const root = document.querySelector("#root");

function App() {
  const [activity, setActivity] = React.useState(""); //untuk menampung isi data dari acivity menjadi array

  const [todos, setTodos] = React.useState([]);

  generateId = () => {
    return Date.now();
  };

  addTodoHandler = event => {
    event.preventDefault(); //untuk speread atau memunculkan semua isi array yang ada di todos yang berasal dari activity dengna mengunakan ...

    setTodos([...todos, {
      id: generateId(),
      activity: activity
    }]); //untuk reset activity (controled component)

    setActivity("");
  };

  removeTodoHandler = todoId => {
    //untuk menghapus data berdasarkan id
    //dengna kondisi todo.id !== todoId atau todoid(yang dari button)
    //tidak sama dengan todoid yg ada di array kalo sama dia ke filter
    //kalo tidak dia akan ada dan nanti setTodos yang isi nya array yang sudah di filter
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
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
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "hapus"));
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);