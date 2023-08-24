import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { InicioPage } from './pages/InicioPage';
import { ProyectosPage } from './pages/ProyectosPage';
import { SobreMiPage } from './pages/SobreMiPage';
import { ContactoPage } from './pages/ContactoPage';


function App() {
    return (
      <div>
                      <link rel="stylesheet" href="./src/styles/styles.css" />

        <Menu />
            <Routes>
              <Route path="/inicio" element={<InicioPage />} />
              <Route path="/proyectos" element={<ProyectosPage />} />
              <Route path="/sobre-mi" element={<SobreMiPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
            </Routes>
      </div>
    );
  }

export default App;