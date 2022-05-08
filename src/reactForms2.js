const root = document.querySelector("#root");

//controled form semua di control oleh usestate
function App() {
  const [nama, setNama] = React.useState("Masukan Nama");

  function ketikaSubmit(event) {
    event.preventDefault();
    console.log("nama:", nama);
  }
  return (
    <form onSubmit={ketikaSubmit}>
      <div>
        <label>Nama:</label>
        <input
          type="text"
          name="nama"
          value={nama}
          onChange={function (event) {
            setNama(event.target.value);
          }}
        />
      </div>
      <button type="submit">kirim</button>
    </form>
  );
}
ReactDOM.render(<App />, root);
