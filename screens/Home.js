import React, { useContext } from 'react';
import { View, Text,Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Home({navigation}){

    const {userData} = useContext(AuthContext);
    return (
        <View>
            <Text>
                Welcome {userData.firstName} {userData.lastName}
            </Text>
        </View>
    )
}