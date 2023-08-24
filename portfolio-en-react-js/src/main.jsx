import React from 'react'
import ReactDOM from 'react-dom/client'
import { InicioPage } from './pages/InicioPage'
import './index.css'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'
import {BrowserRouter} from 'react-router-dom'
import { ContactoPage } from './pages/ContactoPage'
import { SobreMiPage } from './pages/SobreMiPage'
import { ProyectosPage } from './pages/ProyectosPage'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <React.StrictMode>
  <App></App>
   <Footer></Footer>
  </React.StrictMode>
  </BrowserRouter>
)
