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
  const logIn = async () => {};
  const signUp = async () => {};
  const googleSignIn = async () => {};

  return (
    <authContext.Provider value={{ logIn, signUp, googleSignIn }}>
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
