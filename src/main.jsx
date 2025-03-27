import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Products />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
