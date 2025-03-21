// Lógica de autenticación
import { create } from "zustand";
//Store en zustan para guardar los datos que lleguen del login
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import { auth } from "../../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => {
  const observeAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      user
        ? set({ userLooged: user })
        : set({
            userLooged: null,
          });
    });
  };
  observeAuthState();

  return {
    userLooged: null,

    loginGoogleWithPopUp: async () =>{
        try{
            return await signInWithPopup(auth,provider)
        }catch(error){
            console.error(error);
        }
    },

    logout : async()=>{
        signOut(auth)
        .then(()=>set({userLooged:null}))
        .catch((error)=>console.error(error))
    }
  };
});

export default useAuthStore;
