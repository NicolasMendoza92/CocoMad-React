import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './componentes/header/Header';
import { useState } from "react";
import { Home } from './pages/home/Home';
import { Productos } from './pages/productos/Productos';
import { Nosotros } from './pages/nosotros/Nosotros';
import { Contactenos } from './pages/contactenos/Contactenos';


function App() {

  const [section, setSection] = useState('home')
  
  return (
    <div>
       <Header setSection={setSection} />
     <Container>
     {section === 'home' && <Home/>}
     {section === 'productos' && <Productos/>}
     {section === 'nosotros' && <Nosotros/>}
     {section === 'contactenos' && <Contactenos/>}
     </Container>
    </div>
  );
}

export default App;
