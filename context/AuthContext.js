import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvder = ({children}) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken]= useState(null);
    const [userData, setUserData] = useState({})

    const login = (res) =>{

        setIsLoading(true);
        setUserToken(res.token);
        setUserData(res);
        AsyncStorage.setItem('userToken', res.token);
        AsyncStorage.setItem('userData', JSON.stringify(res))
        setIsLoading(false);
    }

    const logout = () =>{
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userData');
        setIsLoading(false);
    }

    const isLoggedIn = async () =>{

        try {
            setIsLoading(true)
            let token = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userData')
            userInfo = JSON.parse(userInfo);

            if(userInfo){
                setUserToken(token);
                setUserData(userInfo);
            }
            
            setIsLoading(false);

        } catch(e){
            console.log('isLogged In Error');
        }
        
    }

    useEffect(()=>{
        isLoggedIn();
    },[])
    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userData}}>
            {children}
        </AuthContext.Provider>
    )
}