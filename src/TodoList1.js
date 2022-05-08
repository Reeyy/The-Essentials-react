const root = document.querySelector("#root");

function App() {
  const [activity, setActivity] = React.useState("");
  //untuk menampung isi data dari acivity menjadi array
  const [todos, setTodos] = React.useState([]);

  addTodoHandler = (event) => {
    event.preventDefault();
    //untuk speread atau memunculkan semua isi array yang ada di todos yang berasal dari activity dengna mengunakan ...
    setTodos([...todos, activity]);
    //untuk reset activity (controled component)
    setActivity("");
  };

  return (
    <>
      <h1>Nice todo List</h1>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="nama kegiatan"
          value={activity}
          onChange={(event) => {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </>
  );
}
ReactDOM.render(<App />, root);
