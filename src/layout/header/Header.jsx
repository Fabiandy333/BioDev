import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from '../../../public/Logo.png'

const Header = () => {
  return (
    <header className="main-header">

      <div className="header-left">
        <div className="logo-container">
          <NavLink to="/">
            <img 
              src={logo} 
              alt="BioDev Logo" 
              className="logo-image"
            />
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
          <div className="language-selector">
            <span>Español</span>
          </div>
          
          <NavLink to="/inicio-sesion" 
          className={({isActive})=>`auth-link ${isActive ? 'active' : ''}`}>
            Iniciar Sesión</NavLink>

          <NavLink to="/registro" className="auth-link register">Registrarse</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;