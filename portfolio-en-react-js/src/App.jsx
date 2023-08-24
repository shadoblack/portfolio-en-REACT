import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { InicioPage } from './pages/InicioPage';
import { ProyectosPage } from './pages/ProyectosPage';
import { SobreMiPage } from './pages/SobreMiPage';
import { ContactoPage } from './pages/ContactoPage';
import { Footer } from './components/Footer';

function App() {
  return (
    
      <><Menu /><Routes>
          <Route path="/inicio" element={<InicioPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/sobre-mi" element={<SobreMiPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
      </Routes></>
    
  );
}

export default App;