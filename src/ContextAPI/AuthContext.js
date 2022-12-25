import { createContext, useContext, useEffect, useState } from 'react';
//import { auth, db } from '../../firebase.config';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  //const [user, setUser] = useState({});
  return(
    <AuthContext.Provider>
    {children}
  </AuthContext.Provider>
  )
}

export function UserAuth() {
    return useContext(AuthContext);
}