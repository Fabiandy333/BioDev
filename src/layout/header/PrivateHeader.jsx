import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from '../../../public/Logo.png'
import useAuth from "../../pages/auth/use-auth";

const PrivateHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  }

  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo-container">
          <NavLink to="/inicio">
            <img src={logo} alt="BioDev Logo" className="logo-image" />
          </NavLink>
        </div>
      </div>

      <nav className="header-nav">
        <div className="top-nav">
          <NavLink to="/inicio" className={({ isActive }) => `auth-link ${isActive ? 'active' : ''}`}>Inicio</NavLink>
          <NavLink to="/enfermedades" className={({ isActive }) => `auth-link ${isActive ? 'active' : ''}`}>Enfermedades</NavLink>
          <NavLink to="/experiencia-3d" className={({ isActive }) => `auth-link ${isActive ? 'active' : ''}`}>
            Experiencia 3D
          </NavLink>

          <NavLink to="/quiz" className={({ isActive }) => `auth-link ${isActive ? 'active' : ''}`}>Quiz</NavLink>
        </div>

        <div className="auth-section">
          <button className="auth-link register" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </nav>
    </header>
  );
};

export default PrivateHeader;
