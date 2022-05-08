const root = document.querySelector("#root");
function App() {
  const [login, setLogin] = React.useState(false);
  // ternari operator
  return (
    <>
      <h1>Aplication</h1>
      {login ? <b>kamu sudah login</b> : <i>kamu belum login</i>}
      <button
        onClick={function () {
          setLogin(true);
        }}
      >
        Login
      </button>
    </>
  );
}
ReactDOM.render(<App />, root);
