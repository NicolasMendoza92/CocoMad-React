import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import router dom 
import { Switch, Route } from 'react-router-dom';
// Pages Landing
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Favoritos from './pages/Favoritos';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Carrito from './pages/Carrito';
// Admin pages

// Componentes 
import { Footer } from './componentes/footer/Footer';



function App() {


  return (

    <div className="footer-fix">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/productos">
                <Productos />
              </Route>

              <Route path="/nosotros">
                <Nosotros />
              </Route>

              <Route path="/contacto">
                <Contacto />
              </Route>

              <Route path="/carrito">
                <Carrito />
              </Route>

              <Route path="/favoritos" >
                <Favoritos />
              </Route>

              <Route path="/login" >
                <Login />
              </Route>

              <Route path="/register" >
                <Registro />
              </Route>

            </Switch>
      <Footer />
    </div>

  );
}

export default App;

