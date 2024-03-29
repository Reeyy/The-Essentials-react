const root = document.querySelector("#root");

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(function () {
    async function getData() {
      const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
      const respone = await request.json();
      setNews(respone);
      setLoading(false);
    }

    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "fetch data"), loading ? /*#__PURE__*/React.createElement("i", null, "Loading data...") : /*#__PURE__*/React.createElement("ul", null, news.map(function (item) {
    // //buat cek isi nya apa aja yang ada di api dengan console log
    // console.log(item);
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);