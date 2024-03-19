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

    const login = useCallback(function (authTokens){
        Cookies.set("authTokens", authTokens);
        setIsAuthenticated(true);
    },[]);

    const logout = useCallback(function(){
        Cookies.remove("authTokens");
        setIsAuthenticated(false);
    },[]);

    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated
    }), [login, logout,  isAuthenticated]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext(){
    return useContext(AuthContext);
}



