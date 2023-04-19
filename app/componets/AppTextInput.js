import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function AppTextInput({icon, ...otherProps}) {
    return (
       <View style={styles.container}>
        <View style={styles.card}>
        {icon && <MaterialCommunityIcons 
        name={icon}
        size={20}
        color={"#686A6C"}
        style={styles.icon}
        />}
        <TextInput style={styles.textInput} {...otherProps}  />
       </View>
       </View>
    );
}
 const styles = StyleSheet.create({
    container:{
     alignItems:'center'
    },
    card:{
        backgroundColor:"#FEFCFF",
        borderRadius:10,
        alignItems:'center',
        flexDirection:'row',
        width:"80%",
        padding:15,
        marginVertical:5,
        elevation:10
    },
    textInput:{
        fontSize:18,
        color:"#686A6C"
    },
    icon:{
        marginRight:10,
    }
    
 })
export default AppTextInput;