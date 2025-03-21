import useAuthStore from "../../services/firebase/use-auth-store"
import "./Profile"

const Profile = () => {
    console.log(useAuthStore());
    //desestructurar useAuthStore()
    const {userLooged} = useAuthStore();

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
    </>
  );
};

export default Profile