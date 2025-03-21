import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useCallback } from "react"; 
import useAuthStore from "../../../services/firebase/use-auth-store";



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
        <h3>O continuar con Google</h3>
        <button type="button"
        title="Iniciar sesión con Google"
        onClick={handleLogin}>
          Iniciar sesión Google
        </button>

      </div>
    </div>
  );
};

export default Login;