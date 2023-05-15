import React, { createContext, useContext, useState}  from "react"; 
import { User } from "../services/useService";
import { useEffect } from "react";

interface AuthContextProps {
  authenticated: boolean;
  user: User;
  login: (user: User) => void;
  logout: () => void;
  isLoading: boolean;
} 

//createContext é uma função que cria uma extrutura global para ser usada em toda a aplicação 
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);


// Vamos criar um hook de autenticação (não é um hook de react) mas sim criado pelo hook useContext para usar em um determinado componente.
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => { 
  const [authenticated, setAuthenticated] =useState(false);
  const [user, setUser] =useState<User>({} as User);
  const [isLoading, setIsLoading] =useState(true);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setAuthenticated(true);
    }
    setIsLoading(false);
   },[]); 


  const login = (loggedUser: User) => {
    setUser(loggedUser);
    setAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(loggedUser));

  };

  const logout =  () => {
    setUser({} as User);
    setAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, user, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
