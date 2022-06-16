import { createContext, useState } from "react";

export const LoginContext = createContext();

export const AuthProvider = (props) => {
  const [authState, setAuthState] = useState({
    Id: "",
    token: "",
  });

  return (
    <LoginContext.Provider value={[authState, setAuthState]}>
      {props.children}
    </LoginContext.Provider>
  );
};
