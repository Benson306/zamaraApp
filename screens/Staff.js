import { useFocusEffect } from "@react-navigation/native";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Text, View, TextInput,StyleSheet, Keyboard, Alert, ActivityIndicator } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Card from "../utility/Card";


export default function Staff({navigation}){
        const [loading, setLoading] = useState(false);

        const [data, setData] = useState([]);

        useFocusEffect(
            React.useCallback(() => {
                fetch('https://crudcrud.com/api/5f5afa596da24a139691f98772e87c6e/zamara')
                .then(res => res.json())
                .then((res) => {
                    setData(res)
                    setLoading(false);
                })
                .catch(err =>{
                    setLoading(false);
                })
            }, [])
          );


        const handleNav= ()=>{
                navigation.navigate('AddStaff')
        }
            
    return (
        <View style={styles.container}>
            <View style={{padding:10}}>
                <TouchableOpacity onPress={handleNav} style={styles.button}>
                    <Text style={styles.buttonText}><Text style={{fontSize:16}}>+</Text>   Add New Staff</Text>
                </TouchableOpacity>
            </View>
            
            
            <View style={styles.content}>
                <Text style={styles.contentHeading}>Staff List</Text>
                <Text style={{alignSelf:'center'}}>List of All Staff Members</Text>

                {
                loading ? 
                
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size='large'  color="#009999"/>
                </View> 
                
                :
                <FlatList 
                    style={{marginTop:20}}
                    data={data}
                    renderItem={({ item })=>(
                        <TouchableOpacity style={{marginTop:10}} onPress={()=>{navigation.navigate('Preview', item)}}>
                            <Card>
                                <View style={{flexDirection:'row'}}>
                                <View style={{width:250}}>
                                    <Text style={styles.name}>{item.staffName}</Text>
                                    <Text style={styles.email}>{item.staffEmail}</Text>
                                    <Text style={styles.email}>{item.department}</Text>
                                </View>
                                <View style={{alignContent:'center', justifyContent:'center'}}>
                                    <Text style={{fontSize:25, color:'#009999'}}>{'>'}</Text>
                                </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
                } 

                </View>
                
                          

        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        padding:0,
        flexDirection:'column',
        backgroundColor:'#b3b3b3'
    },
    search:{
        width:200,
        borderWidth:1,
        borderRadius:10,
        marginRight:5,
        padding:5,
        marginTop:10,
        alignSelf:'flex-end'
    },
    button:{
        backgroundColor:'#009999',
        width:150,
        padding:15,
        alignItems:'center',
        alignSelf:'flex-end',
        borderRadius:10
    },
    buttonText:{
        color:'white'
    },
    content:{
        flexDirection:'column',
        backgroundColor: '#b3b3b3',
        padding:20,
        height:'100%'
    },
    contentHeading:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center'
    },
    name:{
        fontSize: 20,
        color:'#009999'
    },
    email:{
        color:'gray'
    }
})