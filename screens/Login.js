import { Formik } from "formik";
import React, { useContext } from "react";
import { Text, View , TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Styles from "../styles/Styles";
import * as yup from 'yup'
import { AuthContext } from "../context/AuthContext";


    const loginSchema = yup.object({
        username: yup.string()
                    .required()
                    .min(3),
        password: yup.string().required().min(4)

    })
export default Login = ({ navigation }) =>{
    const {login} = useContext(AuthContext)

    const handleSubmit = (values, actions) =>{
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                username: values.username,
                password: values.password
            })
            })
            .then(res => res.json())
            .then((res) => {

                if(Object.hasOwn(res, 'message')){
                    Alert.alert('Oops!','Invalid Credentials', [
                        {text:'dismiss', onPress: () =>{}}
                    ])
                }else{
                    login(res);
                }
                
                actions.resetForm();
            });
    }
        
    return  (
        <View style={Styles.container}>
            
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={Styles.login}>
                
                <Image source={require('../assets/logo.png')} styles={Styles.logo}/>
                <Text style={Styles.brand}>Zamara App</Text>
                
                <Formik
                    initialValues={{username:'', password:''}}
                    validationSchema={loginSchema}
                    onSubmit={(values, actions)=>{
                        handleSubmit(values, actions)
                    }}
                >
                {(props) =>(
                    <View>
                        <TextInput 
                            style={Styles.textInput}
                            placeholder="Username"
                            value={props.values.username}
                            onChangeText={props.handleChange('username')}
                            blurOnSubmit={true}
                            onBlur={props.handleBlur('username')}
                            autoCorrect={false}
                        />
                        <Text style={Styles.errorText}>{props.touched.username && props.errors.username}</Text>
                        <TextInput 
                            style={Styles.textInput}
                            placeholder="Password"
                            value={props.values.password}
                            onChangeText={props.handleChange('password')}
                            secureTextEntry={true}
                            autoCorrect={false}
                            onBlur={props.handleBlur('password')}
                        />
                        <Text style={Styles.errorText}>{props.touched.password && props.errors.password}</Text>

                        <TouchableOpacity style={Styles.loginButton} onPress={props.handleSubmit}>
                            <Text style={Styles.loginText}>Login</Text>
                        </TouchableOpacity>
                        
                    </View>
                )}  
                </Formik>
                
            </View>
            </TouchableWithoutFeedback>
        </View>
    )
}