import { createContext, useContext } from "react";

const methods = {
  logIn: () => {},
  signUp: () => {},
  googleSignIn: () => {},
};
const authContext = createContext(methods);

const useAuth = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  // Login with email and password
  const logIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  //   Signup with email and password
  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  //   Login with google
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      throw error;
    }
  };

  return (
    <authContext.Provider value={{ logIn, signUp, googleSignIn }}>
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
