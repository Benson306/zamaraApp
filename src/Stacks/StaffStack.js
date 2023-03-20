import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Staff from "../screens/Staff";
import AddStaff from "../screens/AddStaff";
import Preview from '../screens/Preview';
import UpdateStaff from "../screens/UpdateStaff";

const Stack = createNativeStackNavigator();

export default function StaffStack(){

    return (
        <Stack.Navigator initialRouteName='Staff'>
                <Stack.Screen 
                name="Staff" 
                component={Staff} 
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="AddStaff"
                component={AddStaff}
                options={{headerShown: false}}
                />
                <Stack.Screen 
                name="Preview" 
                component={Preview} 
                options={{headerShown: false}}
                />
                <Stack.Screen 
                name="Update" 
                component={UpdateStaff} 
                options={{headerShown: false}}
                />
                
      </Stack.Navigator> 
    )
}