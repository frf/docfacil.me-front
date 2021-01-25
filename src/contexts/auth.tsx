import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';
interface AuthContextData {
    signed: boolean;
    user: object | null;
    Login(user: object): Promise<void>;
    Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);

    useEffect(() => {
      const tokenUser = sessionStorage.getItem('@App:access_token');
      const refreshToken = sessionStorage.getItem('@App:refresh_token');
  
      if (tokenUser && refreshToken) {
        setUser({'access_token' :tokenUser});
      }
    }, []);

    async function Login(userData: object) {
        const response = await api.post('/auth/login', userData);

        setUser(response.data.access_token);
        api.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;

        sessionStorage.setItem('@App:access_token', response.data.access_token);
        sessionStorage.setItem('@App:refresh_token', response.data.refresh_token);
    }

    function Logout() {
        setUser(null);
        sessionStorage.removeItem('@App:access_token');
        sessionStorage.removeItem('@App:refresh_token');
    }

    return (
        <AuthContext.Provider
          value={{ signed: Boolean(user), user, Login, Logout }}
        >
          {children}
        </AuthContext.Provider>
      );
};

export default AuthContext;