import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RootLayout } from './RootLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Work from './pages/work.jsx'
import Clients from './pages/clients.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<RootLayout />} >
          <Route index element={<App />} />
          <Route path="work" element={<Work />} />
          <Route path="clients" element={<Clients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
