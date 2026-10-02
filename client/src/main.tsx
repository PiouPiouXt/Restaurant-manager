import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AboutPage } from './pages/AboutPage.tsx'
import { App } from './App.tsx'
import { RestaurantDetailPage } from './pages/RestaurantDetailPage.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/Restaurants/:id"
          element={<RestaurantDetailPage />}
        />
        
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
