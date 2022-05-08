const root = document.querySelector("#root");
function App() {
  const [login, setLogin] = React.useState(false);

  if (login) {
    return <h1>udah login</h1>;
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
