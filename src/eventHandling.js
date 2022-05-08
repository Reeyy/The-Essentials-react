const root = document.querySelector("#root");

// function onclick1() {
//   alert(1);
// }
// const element = <button onClick={onclick1}>Click Me</button>;

// ReactDOM.render(element, root);

/** dengan parameter **/
function onclick1(msg) {
  alert(msg);
}
const element = (
  <button onClick={onclick1.bind(this, "hello test")}>Click Me</button>
);

ReactDOM.render(element, root);
