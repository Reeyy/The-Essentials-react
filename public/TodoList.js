const root = document.querySelector("#root");

function App() {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({}); //!untuk menampung isi data dari acivity menjadi array

  const [todos, setTodos] = React.useState([]); //! untuk msg nanti ketika acitviy tidak boleh kosong

  const [message, setMessage] = React.useState(""); //!untuk id data

  generateId = () => {
    return Date.now();
  }; //!add and save update


  function saveTodoHandler(event) {
    event.preventDefault(); //!logic agar ketika kosong tidak ada teks tidak bisa di simpan
    //!dan memunculkan msg

    if (!activity) {
      return setMessage("Tidak boleh kosong cuy !");
    }

    setMessage("");

    if (edit.id) {
      const updatedTodo = { ...edit,
        activity: activity
      }; //*mengambil index dari array Todos dan membuat kondisi
      //* sama dengan index yang di klik di button edit

      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      }); //* untuk mengclone array data yang ada di todos

      const updatedTodos = [...todos]; //* untuk merubah data array yang di clone dari todos
      //* menjadi data baru yang di ambil dari updatedTodo berdasarkan index
      //* yang di ambil dari button di line 26

      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelHandler();
    } //*untuk speread atau memunculkan semua isi array yang ada di todos yang berasal dari activity dengna mengunakan ...


    setTodos([...todos, {
      id: generateId(),
      activity: activity,
      done: false
    }]); //*untuk reset activity (controled component)

    setActivity(""); //*untuk reset msg (ketika activity kosong)

    setMessage("");
  } //!delete


  removeTodoHandler = todoId => {
    //*untuk menghapus data berdasarkan id
    //*dengna kondisi todo.id !== todoId atau todoid(yang dari button)
    //*tidak sama dengan todoid yg ada di array kalo sama dia ke filter
    //*kalo tidak dia akan ada dan nanti setTodos yang isi nya array yang sudah di filter
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (edit.id) cancelHandler();
  }; //!Edit
  //*merubah input value text box menjadi activity yang akan di edit


  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  } //!cancel edit


  function cancelHandler() {
    //* untuk membuat edit cancel
    setEdit({});
    setActivity("");
  } //!Untuk cheklist


  function doneTodohandler(todo) {
    const updatedTodo = { //! simple mengunakan spread operator
      ...todo,
      done: todo.done ? false : true //!tidak simple
      // id: todo.id,
      // activity: todo.activity,
      // done: todo.done ? false : true

    };
    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id === todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Nice todo List"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "nama kegiatan",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? "simpan update" : "Tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelHandler
  }, "Gajadi Edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodohandler.bind(this, todo)
    }), todo.activity, "(", todo.done ? "selesai" : "belum selesai", ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "hapus"));
  })) : /*#__PURE__*/React.createElement("i", null, " tidak ada todo nya "));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);