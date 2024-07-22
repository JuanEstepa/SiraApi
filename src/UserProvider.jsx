import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

const userContext = React.createContext();
const userToggleContext = React.createContext();
const userEditContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function useUserToggleContext() {
  return useContext(userToggleContext);
}

export function useEditContext() {
  return useContext(userEditContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const CerrarSesion = () => {
    if (user) {
      setUser(null);
    } else {
      console.log("Ningun usuario activo");
    }
  };

  return (
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={CerrarSesion}>
        <userEditContext.Provider value={setUser}>
          {children}
        </userEditContext.Provider>
      </userToggleContext.Provider>
    </userContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
