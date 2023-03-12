import { Formik } from "formik";
import React from "react";
import { Text, View , TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Styles from "../styles/Styles";


export default Login = () =>{

    const handleSubmit = () =>{
       
    }
    return  (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.login}>
            
            <Image source={require('../assets/logo.png')} styles={Styles.logo}/>
            <Text style={Styles.brand}>Zamara App</Text>
            
            <Formik
                initialValues={{username:'', password:''}}
            >
              {(props) =>(
                <View>
                    <TextInput 
                        style={Styles.textInput}
                        placeholder="Username"
                        value={props.values.username}
                        onChangeText={props.handleChange('username')}
                    />
                    <TextInput 
                        style={Styles.textInput}
                        placeholder="Password"
                        value={props.values.password}
                        onChangeText={props.handleChange('password')}
                        secureTextEntry={true}
                        autoCorrect={false}
                    />

                    <TouchableOpacity style={Styles.loginButton} onPress={handleSubmit}>
                        <Text style={Styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    
                </View>
              )}  
            </Formik>
            
        </View>
        </TouchableWithoutFeedback>
    )
}