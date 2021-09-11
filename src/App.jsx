
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './componentes/header/Header';
import  Footer  from './componentes/footer/Footer';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div>
     <Header/>
     <Container>
       <Home/>
     </Container>
     <Footer/>
    </div>
  );
}

export default App;
