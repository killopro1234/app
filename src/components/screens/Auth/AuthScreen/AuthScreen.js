import { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, Platform} from 'react-native';
import { LoginForm, RegisterForm } from '../../../Auth/LoginForm/LoginForm';
import logo from '../../../../../assets/logo.png';
import { styles } from './AuthScreen.styles';


export  function AuthScreen(){
    const [showLogin,setShowLogin]=useState(true);
    useState
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "heading"}
            >
                {showLogin ? <LoginForm/> : <RegisterForm/>}
            </KeyboardAvoidingView>
        </View>
    )
}

