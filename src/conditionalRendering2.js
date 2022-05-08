const root = document.querySelector("#root");
function App() {
  const [login, setLogin] = React.useState(false);

  if (login) {
    return (
      <>
        <h1>udah login bang</h1>
        <button
          onClick={function () {
            setLogin(false);
          }}
        >
          balik lagi ah
        </button>
      </>
    );
  }

  return (
    <>
      <h1>login dulu</h1>
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
