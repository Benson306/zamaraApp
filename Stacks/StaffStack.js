import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Staff from "../screens/Staff";

const Stack = createNativeStackNavigator();

export default function StaffStack(){

    return (
        <Stack.Navigator initialRouteName='Staff'>
                <Stack.Screen 
                name="Staff" 
                component={Staff} 
                options={{headerShown: false}}
                />
                
      </Stack.Navigator> 
    )
}