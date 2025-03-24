import "./Login.css";

import { NavLink, useNavigate } from "react-router-dom";
import { useCallback } from "react"; 
import useAuthStore from "../../../services/firebase/use-auth-store";
import googleLogo from '../../../assets/google-icon.png'; // Ajusta la ruta
import microsoftLogo from '../../../assets/microsoft-icon.jpg'; // Ajusta la ruta
import loginImage from '../../../assets/login-image.png'

const Login = () => {
  const { loginGoogleWithPopUp } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = useCallback(()=>{
    loginGoogleWithPopUp()
    .then(()=>navigate("/perfil"))
    .catch(()=> navigate("/"));

  },[loginGoogleWithPopUp,navigate]);


  return (
    <div className="login-container">
      <div className="hero-content">
        <h1 className="main-title">Explora los órganos en 3D.</h1>
        <p className="subtitle">Si ya tienes una cuenta ¡empieza ahora!</p>
      </div>

      <div className="image-login">
      <img src={loginImage} alt="Imagen Login"
        />
      </div>

      <div className="login-section">
        <h2 className="welcome-title">Bienvenido de nuevo</h2>

        <div className="input-group">
          <input
            type="email"
            placeholder="Ingresar correo"
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

        <NavLink to="/pagina-inicio" className="auth-link login">
          Iniciar sesión
        </NavLink>
        {/* <h3>O continuar con</h3> */}

        <div className="divider-container">
          <div className="divider-line"></div>
          <span className="divider-text">O continua con</span>
          <div className="divider-line"></div>
        </div>

        <div className="flex-icons">
        <img
          className="button-image-sesion"
          title="Iniciar sesión con Google"
          src={googleLogo}
          alt="Continuar con Google"
          onClick={handleLogin}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && handleLogin()} // Funciona con teclado
        />
        <img
          className="button-image-sesion"
          title="Iniciar sesión con Google"
          src={microsoftLogo}
          alt="Continuar con Google"
          // onClick={handleLogin}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && handleLogin()} // Funciona con teclado
        />
        </div>
        

        {/* <button type="button"
        title="Iniciar sesión con Google"
        onClick={handleLogin}>
          Iniciar sesión Google
        </button> */}
      </div>
    </div>
  );
};

export default Login;