import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './pages/about-us/AboutUs.jsx'
import HowToUse from './pages/how-to-use/HowToUse.jsx'
import Quiz from './pages/quiz/Quiz.jsx'
import NotFound from './pages/not-found/NotFount.jsx'
import DiseasesLayout from './pages/diseases/DiseasesLayout.jsx'
import Symptoms from './pages/diseases/illness1/Symptoms.jsx'
import Login from './pages/auth/login/Login.jsx'
import Register from './pages/auth/register/Register.jsx'
import Layout from './layout/Layout.jsx'  
import Profile from './pages/profile/Profile.jsx'
import { BrowserRouter,Route,Routes} from 'react-router'
import Home from './pages/home/Home.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/sobre-nosotros' element={<AboutUs/>}/>
        <Route path='/como-usar' element={<HowToUse/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/inicio-sesion" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="/enfermedades" element={<DiseasesLayout />}>
          <Route path="enfermedad-1" element={<Symptoms />} />
          <Route path="enfermedad-2" element={<Symptoms />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
