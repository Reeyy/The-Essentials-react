const root = document.querySelector("#root");

//Menggunakan use then
function App() {
  React.useEffect(function () {
    const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
      });
    console.log(getData);
  }, []);
  return <h1></h1>;
}
ReactDOM.render(<App />, root);
