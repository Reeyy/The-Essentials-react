const root = document.querySelector("#root"); // function onclick1() {
//   alert(1);
// }
// const element = <button onClick={onclick1}>Click Me</button>;
// ReactDOM.render(element, root);

/** dengan parameter **/

function App() {
  //cara Simple

  const [count, setCount] = React.useState(0);

  //cara tidak simple
  // const state = React.useState(0);
  // const count = state[0];
  // const updateCount = state[1];
  return (
    <>
      <button
        onClick={function () {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={function () {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}
ReactDOM.render(<App />, root);
