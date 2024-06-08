import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children})  => {
  const initialAuthUSer = localStorage.getItem("user");
  const [authUser, setAuthUser] = useState(initialAuthUSer ? JSON.parse(initialAuthUSer) : undefined);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
  
}

export const useAuth = () => useContext(AuthContext);

