const root = document.querySelector("#root");
function App() {
  const fruits = ["Apple", "orange", "grape", "lengkeng"];
  return (
    <>
      <ul>
        {fruits.map(function (fruit) {
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
    </>
  );
}
ReactDOM.render(<App />, root);
