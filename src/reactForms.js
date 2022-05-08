const root = document.querySelector("#root");
function App() {
  const namaRef = React.useRef(null);

  function ketikaSubmit(event) {
    event.preventDefault();
    const nama = namaRef.current.value;
    console.log("nama:", nama);
  }
  return (
    <form onSubmit={ketikaSubmit}>
      <div>
        <label>Nama:</label>
        <input type="text" name="nama" ref={namaRef} />
      </div>
      <button type="submit">kirim</button>
    </form>
  );
}
ReactDOM.render(<App />, root);
