import { useCallback } from "react";
import useAuthStore from "../../services/firebase/use-auth-store"
import { useNavigate } from "react-router";
import "./Profile"

const Profile = () => {
    console.log(useAuthStore());
    //desestructurar useAuthStore()
    const {userLooged, logout} = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = useCallback(()=>{
        logout().then(()=> navigate("/"));
    }, [logout,navigate]);

    

  return (
    <>
        <h1>Perfil del usuario</h1>
        <p>Bienvenido! {userLooged?.displayName}</p>
        <p>Url foto perfil! {userLooged?.photoURL}</p>
        <img 
              src={userLooged?.photoURL} 
              alt={`Foto de perfil de ${userLooged?.displayName}`}
              className="profile-photo"
        />
        <button onClick={handleLogout} title="Cerrar sesion">Cerrar sesión</button>
    </>
  );
};

export default Profile