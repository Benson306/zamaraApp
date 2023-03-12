import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerStack from './DrawerStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';

function AppNav() {
    const { isLoading, userToken } = useContext(AuthContext)

    if(isLoading){
        return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
            <ActivityIndicator size="large" />
        </View>
        )
        
    }
  return (
    <NavigationContainer>
        { userToken !== null ? <DrawerStack /> : <AuthStack /> }
    </NavigationContainer>
  )
}

export default AppNav
