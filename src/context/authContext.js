'use client'

import Cookies from "js-cookie";
import { createContext, useCallback, useContext, useMemo } from "react";

export const AuthContext = createContext({
    login: (authTokens) => {},
    logout: () => {}
});

export default function AuthContextProvider({children}){
    const login = useCallback(function (authTokens){
        Cookies.set("authTokens", authTokens);
    },[]);

    const logout = useCallback(function(){
        Cookies.remove("authTokens");
    },[]);

    const value = useMemo(() => ({
        login,
        logout
    }), [login, logout]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext(){
    return useContext(AuthContext);
}



