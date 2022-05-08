const root = document.querySelector("#root");

//menggunakan async await
function App() {
  React.useEffect(function () {
    async function getData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );

      const respone = await request.json();
      console.log(respone);
    }
    getData();
  }, []);
  return <h1>fetch data</h1>;
}
ReactDOM.render(<App />, root);
