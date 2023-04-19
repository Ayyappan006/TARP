
import React, { useState } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import AppTextInput from '../componets/AppTextInput';
import AppButton from '../componets/AppButton';



function LoginScreen({navigation}) {

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
                icon='phone'
                keyboardType="email-address"
                placeholder="Number"
                secureTextEntry
            />
            <AppTextInput 
            style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                icon='calendar'
                keyboardType="email-address"
                placeholder="Bith Date"
                secureTextEntry
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


         <AppButton  title="Login" onPress={()=> navigation.navigate('Signup')}/>
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
        resizeMode:'contain'
    },
    card:{
        alignItems:'center'
    }
    
})
export default LoginScreen;