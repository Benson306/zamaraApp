import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import ContinentsStack from "./ContinentsStack";
import CustomSidebarMenu from "./CustomDrawer";
import HomeStack from "./HomeStack";
import StaffStack from "./StaffStack";

const Drawer = createDrawerNavigator();

export default function DrawerStack(){
    return (
        <Drawer.Navigator initialRouteName="Home"
            screenOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 5 },
            }}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen 
            name="HOME" 
            component={HomeStack}
            options={{
                headerTitle:'ZAMARA APP',
                headerTitleAlign:'center',
            }}
            
            />
            <Drawer.Screen name="STAFF" component={StaffStack} />
            <Drawer.Screen name="CONTINENTS" component={ContinentsStack} />
        </Drawer.Navigator>
    )
}