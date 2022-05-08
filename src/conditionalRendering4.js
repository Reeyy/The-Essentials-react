const root = document.querySelector("#root");
function App() {
  const [login, setLogin] = React.useState(false);
  //pake && buat ga ada else
  return (
    <>
      <h1>Aplication</h1>
      {login && <b>kamu sudah login</b>}
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
