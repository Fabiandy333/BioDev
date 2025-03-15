import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Quiz from './pages/quiz/Quiz.jsx'
import NotFound from './pages/not-found/NotFount.jsx'
import Login from './pages/auth/login/Login.jsx'
import Register from './pages/auth/register/Register.jsx'
import { BrowserRouter,Route,Routes} from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='quiz' element={<Quiz/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/inicio-sesion' element={<Login/>}/>
    <Route path='/registro' element={<Register/>}/>
  </Routes>
  </BrowserRouter>
)
