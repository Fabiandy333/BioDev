import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/about-us/AboutUs";
import HowToUse from "../pages/how-to-use/HowToUse";
import Quiz from "../pages/quiz/Quiz";
import NotFound from "../pages/not-found/NotFount";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Inicio from "../pages/inicio/Inicio";
import App from "../App";
import DiseasesRoutes from "./DiseasesRoutes";
import Experience3d from "../pages/experience-3d/Experience3d";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sobre-nosotros" element={<AboutUs />} />
      <Route path="/como-usar" element={<HowToUse />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/inicio-sesion" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/enfermedades/*" element={<DiseasesRoutes />} />
      <Route path="/experiencia-3d" element={<Experience3d />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
