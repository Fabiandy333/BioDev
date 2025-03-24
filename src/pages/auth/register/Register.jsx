import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import useAuthStore from "../../../services/firebase/use-auth-store";
import googleLogo from "../../../assets/google-icon.png"; // Ajusta la ruta
import microsoftLogo from '../../../assets/microsoft-icon.jpg';
import registerImage from '../../../assets/register-image.png';
import React, { useState } from "react";

const Register = () => {
  const { loginGoogleWithPopUp } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp()
      .then(() => navigate("/perfil"))
      .catch(() => navigate("/"));
  }, [loginGoogleWithPopUp, navigate]);

  const options = [
    {
      value: "",
      text: "--Género--",
      disabled: true,
      className: "desabled-option",
    },
    { value: "male", text: "Masculino", className: "option" },
    { value: "female", text: "Femenino", className: "option" },
    { value: "other", text: "Otro", className: "option" },
  ];
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className="login-container">
      <div className="hero-content">
        <h1 className="main-title">Explora los órganos en 3D.</h1>
        <p className="subtitle">¡Que esperas para registrate!!</p>
      </div>
            <div className="image-register">
            <img src={registerImage} alt="Imagen Register"
              />
            </div>

      <div className="login-section">
        <h2 className="welcome-title">Bienvenido usuario</h2>

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

          <div className="row-age-geder">
            <input type="number" placeholder="Edad" className="login-input" />
            {/* <input type="text" placeholder="Género" className="login-input" /> */}

            <select
              className="login-input register"
              value={selected}
              id="mi-select-genero"
              name="select"
              onChange={handleChange}
            >
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className={option.className}
                  disabled={option.disabled || false}
                >
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>

        <NavLink to="/pagina-inicio" className="auth-link login">
          Registrarse
        </NavLink>

        <div className="divider-container">
          <div className="divider-line"></div>
          <span className="divider-text">O registrate con</span>
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
      </div>
    </div>
  );
};

export default Register;
