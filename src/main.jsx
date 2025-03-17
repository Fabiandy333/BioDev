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
import { BrowserRouter,Route,Routes} from 'react-router'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/sobre-nosotros' element={<AboutUs/>}/>
        <Route path='/como-usar' element={<HowToUse/>}/>
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/inicio-sesion" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/enfermedades" element={<DiseasesLayout />}>
          <Route path="enfermedad-1" element={<Symptoms />} />
          <Route path="enfermedad-2" element={<Symptoms />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
