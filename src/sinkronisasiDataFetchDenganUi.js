const root = document.querySelector("#root");

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(function () {
    async function getData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/blogs"
      );

      const respone = await request.json();
      setNews(respone);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      <h1>fetch data</h1>
      {loading ? (
        <i>Loading data...</i>
      ) : (
        <ul>
          {news.map(function (item) {
            // buat cek isi nya apa aja yang ada di api dengan console log
            // console.log(item);
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}
ReactDOM.render(<App />, root);
