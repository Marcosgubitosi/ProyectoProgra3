import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import NowPlayingGeneral from "./pages/NowPlayingGeneral";
import UpcomingGeneral from "./pages/UpcomingGeneral";
import Detalle from "./components/Detalle/Detalle"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGYxNjk2MDJhNDhmNDNlZmM5NWRlOTBmNWIzMjk5MSIsIm5iZiI6MTcyNjQxMzcyNy4xNzk5NTgsInN1YiI6IjY2ZTZmOTY1ZDdiY2NhNTI0ZGIwOWM1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6Ow_K_PM0RM2Vt-KN6IdqY_PgrstVijF790b4o8L4c'
  }
};

fetch('https://api.themoviedb.org/3/movie/upcoming', options)
  .then(response => response.json())
  .then(data => console.log(data)
  )
  .catch(err => console.error(err));


function App() {
  //variables se declaran antes del return
  return (
    <>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/favoritos" component={Favoritos}/>
            <Route exact path="/nowplaying" component={NowPlayingGeneral}/>
            <Route exact path="/upcoming" component={UpcomingGeneral}/>
            <Route exact path="/pelicula/id/:id" component={Detalle}/>
            <Route path="" component={PaginaNoEncontrada}/>
          </Switch>
        <Footer/>
    </>
  );
}

export default App;
