import React from "react";
import { Text, View, Button  } from "react-native";


export default function Staff({navigation}){
    return (
        <View>
            <Text>
                Staff
            </Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
                />
        </View>
    )
}