import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Redirect } from 'react-router-dom';
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
import ProductList from './pages/pagesAdmin/ProductList';
import MessageList from './pages/pagesAdmin/MessageList';
import UserList from './pages/pagesAdmin/UserList';
import SaleList from './pages/pagesAdmin/SaleList';

// Componentes 
import { Footer } from './componentes/footer/Footer';
import { Header } from './componentes/header/Header';
import Perfil from './pages/Perfil';

// import Lottie from "react-lottie"
// import pagewine from "./utils/lottieArchivos/pagewine.json";
// import { Container } from 'react-bootstrap';

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice"
//   },

// }



function App() {

const user={name:"nico", email:"nico@gmail.com" , role:"admin"}

const isAdmin = user.role === "admin";

  return (

    <div className="footer-fix">
      <Header user={user} />
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

        <Route path="/perfil" >
          <Perfil />
        </Route>

         {/* Admin pages */}
         {isAdmin && (
          <Route path="/productList" >
            <ProductList/>
          </Route>
        )}
        {isAdmin && (
          <Route path="/messageList" >
            <MessageList />
          </Route>
        )}
        {isAdmin && (
          <Route path="/userList" >
            <UserList />
          </Route>
        )}
        {isAdmin && (
          <Route path="/saleList" >
            <SaleList />
          </Route>
        )}

        <Route path="/404">
          404
          {/* <Container>
            <Lottie options={{ animationData: pagewine, ...defaultOptions }} />
          </Container> */}
        </Route>

        <Route path="*">
          <Redirect to="/404" />
        </Route>

      </Switch>
      <Footer />
    </div>

  );
}

export default App;

