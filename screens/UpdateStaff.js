import { Formik } from "formik";
import React, { useState } from "react";
import { Text, View, TextInput,StyleSheet, Keyboard, Alert, ActivityIndicator } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as yup from 'yup';

    export const staffSchema = yup.object({
        staffNumber: yup.string().required().min(3),
        staffName: yup.string().required().min(3),
        staffEmail: yup.string().required().min(3),
        department: yup.string().required().min(1),
        salary: yup.string().required().min(1)
    })

export default function UpdateStaff({route, navigation}){
        const { _id, staffNumber, staffName, staffEmail, department , salary } = route.params;

        const [loading, setLoading] = useState(false);

        const handleSubmit = (values, actions) =>{
                setLoading(true);

                let data = JSON.stringify(values); 


            fetch('https://crudcrud.com/api/5f5afa596da24a139691f98772e87c6e/zamara/'+_id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: data
                })
                .then(() => {
                    Alert.alert('Success','Staff Updated', [
                        {text:'okay', onPress: () =>{
                            navigation.navigate('Staff');
                        }}
                    ])
                    setLoading(false);
                })
                .catch(err=>{
                    setLoading(false);
                })

                setLoading(false);
                
        }

   
    return (
        <View>
        {
           !loading ? 
            
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Formik 
                        initialValues={{staffNumber: staffNumber, staffName:staffName, staffEmail:staffEmail, department:department, salary:salary}}
                        validationSchema={staffSchema}   
                        onSubmit={((values, actions)=>{
                            Keyboard.dismiss();
                            handleSubmit(values, actions);
                        })}
                    >
                        {(props)=>(
                            <View style={styles.container}>

                                <Text style={{fontSize:20, fontWeight:'bold', marginBottom:30, color:'black'}}>Update Staff Details</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Staff Number"
                                    value={props.values.staffNumber}
                                    onChangeText={props.handleChange('staffNumber')}
                                    blurOnSubmit={true}
                                    onBlur={props.handleBlur('staffNumber')}
                                    autoCorrect={false}
                                /> 
                                <Text style={styles.errorText}>{props.touched.staffNumber && props.errors.staffNumber}</Text>

                                <TextInput 
                                    style={styles.input}
                                    placeholder="Staff Name"
                                    value={props.values.staffName}
                                    onChangeText={props.handleChange('staffName')}
                                    blurOnSubmit={true}
                                    onBlur={props.handleBlur('staffName')}
                                    autoCorrect={false}
                                /> 
                                <Text style={styles.errorText}>{props.touched.staffName && props.errors.staffName}</Text>

                                <TextInput 
                                    style={styles.input}
                                    placeholder="Staff Email"
                                    value={props.values.staffEmail}
                                    onChangeText={props.handleChange('staffEmail')}
                                    blurOnSubmit={true}
                                    onBlur={props.handleBlur('staffEmail')}
                                    autoCorrect={false}
                                />
                                <Text style={styles.errorText}>{props.touched.staffEmail && props.errors.staffEmail}</Text>

                                <TextInput 
                                    style={styles.input}
                                    placeholder="Department"
                                    value={props.values.department}
                                    onChangeText={props.handleChange('department')}
                                    blurOnSubmit={true}
                                    onBlur={props.handleBlur('department')}
                                    autoCorrect={false}
                                /> 
                                <Text style={styles.errorText}>{props.touched.department && props.errors.department}</Text>

                                <TextInput
                                    keyboardType="numeric" 
                                    style={styles.input} 
                                    placeholder="Salary"
                                    value={props.values.salary}
                                    onChangeText={props.handleChange('salary')}
                                    blurOnSubmit={true}
                                    onBlur={props.handleBlur('salary')}
                                    autoCorrect={false}
                                />
                                <Text style={styles.errorText}>{props.touched.salary && props.errors.salary}</Text>


                                <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                                    <Text style={styles.buttonText}>Update</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                            

                    </Formik>
                </View>
                </TouchableWithoutFeedback>
            :
            <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:30 }}>
                    <ActivityIndicator size='large'  color="#009999"/>
            </View> 

        }
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        alignItems:'center'
    },
    input:{
        borderBottomWidth:1,
        marginBottom:5,
        width: 300,
        fontSize:18,
        padding:10,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        backgroundColor:'#cccccc'
    },
    button:{
        backgroundColor:'#009999',
        padding: 15,
        width:200,
        alignItems:'center',
        borderRadius:8,
        marginTop:30
    }, 
    buttonText:{
        color:'white',
        fontSize:15,
    },
    errorText:{
        color:'red',
        marginBottom:10,
        alignSelf:'flex-start',
        marginLeft:10
    }
})