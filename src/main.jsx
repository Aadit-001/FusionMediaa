import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RootLayout } from './RootLayout'
import Work from './pages/work.jsx'
import Services from './pages/services.jsx'
import Clients from './pages/clients.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './blogs/blogs.jsx'
import BlogDetail from './blogs/blogDetail.jsx'
import AdminBlog from './blogs/adminBlog.jsx'
import Branding from './services/branding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<RootLayout />} >
          <Route index element={<App />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/services/branding" element={<Branding />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
