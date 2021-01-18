import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    Login(): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(){
    const context = useContext(AuthContext);
   
    return context;
}

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);

    async function Login() {

        const response = await api.post('/auth/login', {
          email: 'fabio@fabiofarias.com.br',
          password: '123456',
        });
     
        setUser(response.data.user);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`

        localStorage.setItem('@App:access_token', response.data.access_token);
        localStorage.setItem('@App:refresh_token', response.data.refresh_token);

        console.log(response);
      }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, Login }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;