import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import { Home } from './pages/home/Home';
import { useState } from "react";
import { Productos } from './pages/productos/Productos';
import { Nosotros } from './pages/nosotros/Nosotros';
import { Contacto } from './pages/contactenos/Contacto';



function App() {

  const [section, setSection] = useState('home')
  
  return (
    <div>
      {(section === 'home' || section === 'nosotros') && <Header setSection={setSection} section={section}/>}
     <Container>
     {section === 'home' && <Home/>}
     {section === 'nosotros' && <Nosotros/>}
     {section === 'productos' && <Productos/>}
     {section === 'contactenos' && <Contacto/>}
     </Container>
     <Footer/>
    </div>
  );
}

export default App;
