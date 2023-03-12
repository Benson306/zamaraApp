import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Staff from "../screens/Staff";

const Stack = createNativeStackNavigator();

export default function AppStack(){

    return (
        <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{headerShown: true}}
                />
                <Stack.Screen 
                name="Staff" 
                component={Staff} 
                options={{
                    headerBackVisible: false
                }}
                />
      </Stack.Navigator> 
    )
}