import React from 'react'
import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#009999',
        paddingTop:29,
        padding: 10
    },
    login:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop:150
    },
    logo:{
        alignSelf:'center'
    },
    brand:{
        fontSize: 40,
        color: 'white',
        textAlign: 'center'
    },
    textInput:{
        width: 300,
        padding: 10,
        fontSize:20,
        color:'white',
        marginTop:20,
        borderRadius: 5,
        borderBottomWidth:1,
        borderColor: 'white',
    },
    loginButton:{
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderColor:'#009999',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },
    loginText:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#009999',
    },
    errorText:{
        color: 'yellow',
        paddingTop: 5,
        textTransform: 'capitalize'
    },
    inputContainer: {
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputAlt:{
        width: 260,
        padding: 10,
        fontSize:20,
        color:'white',
        marginTop:20,
        borderColor: 'white'
    }
})

export default Styles;