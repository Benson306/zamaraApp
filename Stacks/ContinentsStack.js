import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Continents from "../screens/Continents";

const Stack = createNativeStackNavigator();

export default function ContinentsStack(){

    return (
        <Stack.Navigator initialRouteName='Continents'>
                <Stack.Screen
                name="Continents"
                component={Continents}
                options={{headerShown:false}}
                />
                
      </Stack.Navigator> 
    )
}