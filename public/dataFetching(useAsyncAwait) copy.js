const root = document.querySelector("#root"); //controled form semua di control oleh usestate

function App() {
  React.useEffect(function () {
    async function getData() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
      const respone = await request.json();
      console.log(respone);
    }

    getData();
  }, []);
  return /*#__PURE__*/React.createElement("h1", null, "fetch data");
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);