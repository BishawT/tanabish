import "./App.css";
import  Banner  from "./components/Banner";
import Nav from "./components/Nav";
import requests from "./components/requests";
import Row from "./components/Row";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>

      <Row Title = "NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
        />

      <Row Title = "Trending Now" fetchUrl={requests.fetchTrendingNow} />
      <Row Title="Top Rated " fetchUrl={requests.fetchTopRatedMovies} />
      <Row Title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row Title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row Title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row Title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row Title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}/>
        
      
    </div>
  );
}

export default App;
