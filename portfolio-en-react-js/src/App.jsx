import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { InicioPage } from './pages/InicioPage';
import { ProyectosPage } from './pages/ProyectosPage';
import { SobreMiPage } from './pages/SobreMiPage';
import { ContactoPage } from './pages/ContactoPage';
import TresEnRaya from './data/projects/TresEnRaya/TresEnRaya';


function App() {
    return (
      <div>
                      <link rel="stylesheet" href="./src/styles/styles.css" />

        <Menu />
            <Routes>
            <Route exact path="/" element={<InicioPage />} />
              <Route path="/inicio" element={<InicioPage />} />
              <Route path="/proyectos" element={<ProyectosPage />} />
              <Route path="/sobre-mi" element={<SobreMiPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/TresEnRaya" element={<TresEnRaya />} />
            </Routes>
      </div>
    );
  }

export default App;