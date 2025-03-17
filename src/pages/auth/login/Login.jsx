import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="hero-content">
        <h1 className="main-title">Explora los órganos en 3D.</h1>
        <p className="subtitle">Si ya tienes una cuenta ¡empieza ahora!</p>
      </div>

      <div className="login-section">
        <h2 className="welcome-title">Bienvenido de nuevo</h2>
        
        <div className="input-group">
          <input 
            type="email" 
            placeholder="Ingresar el correo"
            className="login-input"
          />
          <input 
            type="password" 
            placeholder="*********"
            className="login-input"
          />
        </div>
        
        <NavLink to="/recuperar-contrasena" className="forgot-password">
          ¿Olvidaste tu contraseña?
        </NavLink>
        
        <NavLink 
          to="/pagina-inicio" 
          className="auth-link login"
        >
          Iniciar sesión
        </NavLink>
      </div>
    </div>
  );
};

export default Login;