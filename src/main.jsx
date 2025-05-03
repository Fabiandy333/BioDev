import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout/Layout'
import AppRouter from './routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <AppRouter />
    </Layout>
  </BrowserRouter>
)
