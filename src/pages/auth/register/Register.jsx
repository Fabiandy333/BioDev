import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../use-auth";
import "./Register.css";
import brainImage from '../../../../public/brain-people.png';
import eyeIcon from '../../../../public/eye.svg';
import eyeOffIcon from '../../../../public/eye-off.svg';

const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { registerWithEmail, logout } = useAuth();
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await registerWithEmail(email, password);
      // Guardar el usuario también en el backend (MongoDB)
      await fetch(`${API_URL}/api/v1/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayName: nombre + " " + apellido,
          email,
        }),
      });
      await logout();
      setSuccess("Te has registrado correctamente.");
      // Opcionalmente, podrías redirigir al login después de unos segundos
      setTimeout(() => navigate("/inicio-sesion"), 2000);
    } catch (err) {
      console.error(err);
      setError("Error al registrar. Intenta con otro correo.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="register-left">
          <h1 className="main-title">Explora los órganos en 3D.</h1>
          <p className="subtitle">¡Regístrate y comienza a explorar!</p>
        </div>
        <div className="register-center">
          <div className="oval-background">
            <img src={brainImage} alt="Órganos en 3D" className="organ-image" />
          </div>
        </div>
        <div className="register-right">
          <h2 className="register-title">Crea una nueva cuenta</h2>
          <form className="register-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" required className="input-field" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder="Apellido" required className="input-field" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            <input type="email" placeholder="Ingresar correo" required className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
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
            <input
              type="number"
              placeholder="Edad"
              required
              className="input-field"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              min="1"
            />
            <select className="input-field" required value={genero} onChange={(e) => setGenero(e.target.value)}>
              <option value="">Género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <button type="submit" className="btn-register">Registrarse</button>
          </form>
          <div className="separator">O continúa con</div>
          <button className="google-login" title="Iniciar sesión con google">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
