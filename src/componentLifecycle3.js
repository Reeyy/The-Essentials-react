const root = document.querySelector("#root");
function App() {
  const [diKlik, setDiklik] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(function () {
    console.log("init carousel");
    //kalo pake library ketika init

    return function () {
      console.log("destrouy carousel");
      //ini akan hapus dulu libarary sebelum nya lalu ini lagi
    };
  });

  return (
    <>
      <h1 id="judul">ini judul y</h1>
      <button
        onClick={function () {
          setDiklik(true);
        }}
      >
        klik aku yax
      </button>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        klik tambah
      </button>
      nilai saat ini: {count}
    </>
  );
}
ReactDOM.render(<App />, root);
