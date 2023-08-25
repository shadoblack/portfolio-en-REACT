import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Footer } from './components/Footer'
import {BrowserRouter} from 'react-router-dom'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <React.StrictMode>
  <App></App>
   <Footer></Footer>
  </React.StrictMode>
  </BrowserRouter>
)
