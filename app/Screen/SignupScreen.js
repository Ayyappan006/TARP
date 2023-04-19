
import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import AppTextInput from '../componets/AppTextInput';
import AppButton from '../componets/AppButton';



function SignupScreen({navigation}) {

    return (
        <View>
            <Image
             style={styles.logo}
             source={require('../assets/homelogo.png')} />
          
            <View>
            <AppTextInput 
            style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                keyboardType="email-address"
                placeholder="Email"
            />
            <AppTextInput 
            style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                keyboardType="email-address"
                placeholder="Password"
                secureTextEntry
            />
         <AppButton  title="Login" onPress={()=> navigation.navigate("student")}/>

         
         <Text style={styles.newuser}> New User !</Text>
         <AppButton  title="SignIn" onPress={()=> navigation.navigate("Login")}/>

         </View>
     

        </View>
    );
}
const styles = StyleSheet.create({
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:100,
        marginBottom:20,
        resizeMode:"contain"
    },
    card:{
        alignItems:'center'
    },
    newuser:{
        textAlign:'center',
        marginTop:30,
        fontWeight:"bold"
    }
    
})
export default SignupScreen;