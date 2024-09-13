import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  //variables se declaran antes del return
  return (
    <>
      <div/>
          <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/favoritos" component={Favoritos}/>

              <Route  path="" component={PaginaNoEncontrada}/>
            </Switch>
          <Footer />
      <div/>
    </>
  );
}

export default App;
