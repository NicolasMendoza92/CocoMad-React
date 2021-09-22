import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/home/Home'
import { Nosotros } from './pages/nosotros/Nosotros'
import { Productos } from './pages/productos/Productos'
import { Contacto } from './pages/contacto/Contacto'
import Footer from './componentes/footer/Footer';

function App() {

  return (

    <div className="footer-fix">
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450}
            classNames="page"
          >
            <Switch location={location}>
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
              
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      <Footer />
    </div>

  );
}

export default App;

