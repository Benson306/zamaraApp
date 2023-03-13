import React, { useContext, useEffect, useState } from 'react';
import { View, Text,Button,ActivityIndicator, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function Home({navigation}){

    const {userData} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({})


    useEffect(()=>{
        fetch('https://dummyjson.com/users/'+userData.id)
        .then(res => res.json())
        .then(res =>{
            setData(res);
            setLoading(false);
        })
        .catch(err =>{
            setLoading(false);
            throw err;
        })
        
    },[])
    return (
        <View>
            {
                loading ? 
                <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:30 }}>
                    <ActivityIndicator size='large'  color="#009999"/>
                </View> 
                :
                data != null ?
                <View>
                    <View style={styles.home}>
                        <Text style={styles.welcome}>
                            Welcome, {data.firstName} {data.lastName}
                        </Text>
                        <Text style={styles.text}>
                            Your profile details is as below:
                        </Text>
                    </View>
                    <View style={styles.wrapper}>
                        <View style={styles.flex}>
                            <View style={styles.row1}>
                                <Text style={styles.header}>
                                Age:
                                </Text>
                                <Text style={styles.body}>
                                    {data.age}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.header}>
                                Gender:
                                </Text>
                                <Text style={styles.body}>
                                {data.gender}
                                </Text>
                            </View>
                            
                        </View>
                        <View style={styles.flex}>
                            <View style={styles.row1}>
                                <Text style={styles.header}>
                                Eye Color:
                                </Text>
                                <Text style={styles.body}>
                                    {data.eyeColor}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.header}>
                                Blood Group:
                                </Text>
                                <Text style={styles.body}>
                                {data.bloodGroup}
                                </Text>
                            </View>
                            
                        </View>
                        <View style={styles.flex}>
                            <View style={styles.row1}>
                                <Text style={styles.header}>
                                Height:
                                </Text>
                                <Text style={styles.body}>
                                    {data.height}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.header}>
                                Weight
                                </Text>
                                <Text style={styles.body}>
                                {data.weight}
                                </Text>
                            </View>
                            
                        </View>
                        <Text style={styles.header}>
                        Email:
                        </Text>
                        <Text style={styles.body}>
                            {data.email}
                        </Text>
                        <Text style={styles.header}>
                        Phone:
                        </Text>
                        <Text style={styles.body}>
                            {data.phone}
                        </Text>
                        <Text style={styles.header}>
                        BirthDate:
                        </Text>
                        <Text style={styles.body}>
                            {data.birthDate}
                        </Text>
                    </View>
                </View>
                : 
                <Text>
                    Failed to Fetch Data
                </Text>

            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    home:{
        justifyContent:'space-between',
        backgroundColor:'#009999',
        padding:30
    },
    welcome: {
        fontSize: 22,
        color:'white',
        alignSelf:'center'
    },
    text:{
        marginTop:20,
        fontSize:15,
        alignSelf:'center'
    },
    wrapper:{
        paddingHorizontal:30,
    },
    header:{
        marginTop:10,
        fontSize: 15,
        color:'gray'
    }, 
    body:{
        fontSize: 20
    },
    flex:{
        flexDirection: 'row',
    },
    row1:{
        marginRight: 120,
        width:80
    }


})