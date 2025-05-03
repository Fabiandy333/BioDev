import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from '../use-auth';
import "./Login.css";
import brainImage from '../../../../public/brain-people.png';
import eyeIcon from '../../../../public/eye.svg';
import eyeOffIcon from '../../../../public/eye-off.svg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { loginGoogleWithPopup, loginWithEmail } = useAuth();
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      navigate("/inicio");
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginGoogleWithPopup();
      navigate("/inicio");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left">
          <h1 className="main-title">Explora los órganos en 3D.</h1>
          <p className="subtitle">Si ya tienes una cuenta<br />¡empieza ahora!</p>
        </div>

        <div className="login-center">
          <div className="oval-background">
            <img src={brainImage} alt="Órganos en 3D" className="organ-image" />
          </div>
        </div>

        <div className="login-right">
          <h2 className="login-title">Bienvenido de nuevo</h2>

          <form className="login-form" onSubmit={handleEmailLogin}>
            <input
              type="email"
              placeholder="Ingresar correo"
              required
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                required
                className="input-field password-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? eyeOffIcon : eyeIcon}
                alt="Toggle visibility"
                className="toggle-password"
                onClick={togglePassword}
              />
            </div>

            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn-login" title="Iniciar sesión">Iniciar sesión</button>
          </form>

          <div className="separator">O continúa con</div>

          <button className="google-login" title="Iniciar sesión con google" onClick={handleGoogleLogin}>
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
