import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
// Pages Landing
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Login from './pages/Login';
// import Registro from './pages/Registro';
import Carrito from './pages/Carrito';
import Perfil from './pages/Perfil';
import DetailsProduct from './pages/DetailsProduct';
// Admin pages
import ProductList from './pages/pagesAdmin/ProductList';
import MessageList from './pages/pagesAdmin/MessageList';
import UserList from './pages/pagesAdmin/UserList';
import SaleList from './pages/pagesAdmin/SaleList';

// Componentes 
import { Footer } from './componentes/footer/Footer';
import { Header } from './componentes/header/Header';
import { SpinnerCM } from './componentes/spinner/SpinnerCM';

// utils
import { leerDeLocalStorage } from "./utils/localStorage";
import { useLocalStorage } from './hooks/useLocalStorage';
import DeliveryList from './pages/pagesAdmin/DeliveryList';


function App() {

  const tokenLocalData = leerDeLocalStorage('token') || {};

  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [sales, setSales] = useState([]);
  const [deliveries, setDeliveries] = useState([]);

  const [cart, setCart] = useLocalStorage('cart', []);

  const [showSideCart, setShowSideCart] = useState(false);

  const [search, setSearch] = useState('');

  const [isLoading, setIsLoading] = useState(true);


  // hacemos la validacion del token
  const requestUserData = async () => {
    const tokenLocal = leerDeLocalStorage('token') || {};
    setIsLoading(true);

    try {
      if (tokenLocal.token) {
        const headers = { 'x-auth-token': tokenLocal.token };
        const response = await axios.get('http://localhost:4000/api/auth', { headers });
        setUser(response.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      localStorage.removeItem('token');
      alert('Su sesión expiró.')
      window.location.href = '/';
    }
  };

  useEffect(() => {
    requestUserData();
  }, []);

  // get productos de la API 
  // definimos estado aparte para setear productos de admin
  const [tableProducts, setTableProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/products/');
      setProducts(response.data);
      setTableProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [])

  // definimos estado aparte para traer usuarios para admin
  const [tableUsers, setTableUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/users/');
      setTableUsers(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, [])

  // Traigo los Mensajes que postean los usuarios
  const getMessages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/messages/');
      setMessages(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getMessages();
  }, [])

  // Traigo ventas que hacen los usuarios
  const [tableSales, setTableSales] = useState([]);
  const getSales = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/sales/');
      setSales(response.data);
      setTableSales(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getSales();
  }, [])

  // Traigo los datos de direccion ventas que hacen los usuarios
  const getDeliveries = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/deliveries/');
      setDeliveries(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getDeliveries();
  }, [])

  const isAdmin = user.role === "admin";

  if (isLoading) {
    return (
      <SpinnerCM />
    );
  }



  return (
    <div className="footer-fix">
      <Header
        user={user}
        setSearch={setSearch}
        cart={cart} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/detalle/:productId">
          <DetailsProduct
            cart={cart}
            setCart={setCart}
            showSideCart={showSideCart}
            setShowSideCart={setShowSideCart} />
        </Route>

        <Route path="/productos">
          <Productos
            products={products}
            setProducts={setProducts}
            search={search}
            setSearch={setSearch}
            cart={cart} setCart={setCart}
            showSideCart={showSideCart}
            setShowSideCart={setShowSideCart} />
        </Route>

        <Route path="/nosotros">
          <Nosotros />
        </Route>

        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/carrito">
          <Carrito
            user={user}
            cart={cart} setCart={setCart} />
        </Route>

        <Route path="/login" >
          <Login requestUserData={requestUserData} cart={cart} />
        </Route>

        {/* <Route path="/register" >
          <Registro />
        </Route> */}

        {tokenLocalData.token &&
          <Route path="/perfil" >
            <Perfil requestUserData={requestUserData} user={user}
              sales={sales}
              setSales={setSales}
              getSales={getSales} />
          </Route>
        }
        {/* Admin pages */}
        {isAdmin && (
          <Route path="/productList" >
            <ProductList tableProducts={tableProducts} setTableProducts={setTableProducts} getProducts={getProducts} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/messageList" >
            <MessageList messages={messages} setMessages={setMessages} getMessages={getMessages} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/userList" >
            <UserList user={user} tableUsers={tableUsers} setTableUsers={setTableUsers} getUsers={getUsers} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/saleList" >
            <SaleList
              getSales={getSales} tableSales={tableSales} setTableSales={setTableSales} />
          </Route>
        )}
        {isAdmin && (
          <Route path="/deliveryList" >
            <DeliveryList
              getDeliveries={getDeliveries} setDeliveries={setDeliveries} deliveries={deliveries}/>
          </Route>
        )}

        <Route path="/404">
          404
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

