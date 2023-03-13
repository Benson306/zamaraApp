import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Preview({route, navigation}) {
    const { _id, staffNumber, staffName, staffEmail, department , salary } = route.params;

    const handleDelete = () => {

        Alert.alert('Confirm', 'Are You Sure you Want to Delete?', [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {
                fetch('https://crudcrud.com/api/15fafef46fa247c7b0ee6160b32fc394/zamara/'+_id,{
                    method: 'DELETE'
                }).then(()=>{
                    navigation.navigate('Staff')
                })
            }},
          ]);

        

    }
  return (
    <View style={styles.container}>
        <Text style={styles.topic}>Staff Details Preview</Text>
        <Text style={styles.heading}>Staff Number:</Text>
        <Text style={styles.body}>{staffNumber}</Text>
        <Text style={styles.heading}>Staff Name:</Text>
        <Text style={styles.body}>{staffName}</Text>
        <Text style={styles.heading}>Staff Email:</Text>
        <Text style={styles.body}>{staffEmail}</Text>
        <Text style={styles.heading}>Department:</Text>
        <Text style={styles.body}>{department}</Text>
        <Text style={styles.heading}>Salary:</Text>
        <Text style={styles.body}>{salary}</Text>

        <View style={{marginTop:40, flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity 
                style={{borderWidth:2,borderColor:'#009999' , padding: 8, borderRadius:8, width:100, alignItems:'center'}} 
                onPress={() => navigation.navigate('Update', route.params)}
            >
                <Text style={{color:'#009999', fontSize: 16}}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{backgroundColor:'#b30000', padding: 10, borderRadius:8, width:100, alignItems:'center'}} 
                onPress={()=>handleDelete()}
            >
                <Text style={{color:'white', fontSize: 16}}>Delete</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 30
    },
    topic: {
        fontSize: 22,
        alignSelf:'center',
        fontWeight:'bold'
    },
    heading:{
        fontSize: 19,
        padding: 10,
        marginTop:5,
        color:'#009999',
        fontWeight:'bold'
    },
    body:{
        fontSize:18,
        paddingLeft:15,
    }
})
