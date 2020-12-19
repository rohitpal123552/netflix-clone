import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Accordian from "./Accordian";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Nav />
      {/* Banner */}
      <Banner/>
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOrigionals}
      isLargeRow={true}  
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}
        className="bottomBorder"
      />

      {/* Accordian */}

      <Accordian/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
