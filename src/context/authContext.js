'use client'

import Cookies from "js-cookie";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

export const AuthContext = createContext({
    login: (authTokens) => {},
    logout: () => {},
    isAuthenticated: false
});

export default function AuthContextProvider({children}){

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState('');

    const login = useCallback(function (authTokens, user_id){
        Cookies.set("authTokens", authTokens);
        setUserId(user_id);
        setIsAuthenticated(true);
    },[]);

    const logout = useCallback(function(){
        Cookies.remove("authTokens");
        setUserId('');
        setIsAuthenticated(false);
    },[]);

    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated,
        userId
    }), [login, logout,  isAuthenticated, userId]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext(){
    return useContext(AuthContext);
}



