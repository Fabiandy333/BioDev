import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from '../../../public/Logo.png'
import useAuth from "../../pages/auth/use-auth";

const PublicHeader = () => {
  const { userLooged } = useAuth();

  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo-container">
          <NavLink to="/">
            <img src={logo} alt="BioDev Logo" className="logo-image" />
          </NavLink>
        </div>
      </div>

      <nav className="header-nav">
        <div className="top-nav">
          <NavLink to="/" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Inicio</NavLink>
          <NavLink to="/sobre-nosotros" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Sobre nosotros</NavLink>
          <NavLink to="/como-usar" className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>Cómo usar</NavLink>
        </div>

        <div className="auth-section">
          <NavLink to="/inicio-sesion" className="auth-link">Iniciar Sesión</NavLink>
          <NavLink to="/registro" className="auth-link register">Registrarse</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default PublicHeader;
