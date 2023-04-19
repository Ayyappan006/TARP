import React from 'react';
import { View,Text,ImageBackground,Image,StyleSheet,TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AppButton from '../componets/AppButton';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Student({navigation}) {
    return (
        <ImageBackground 
        style={styles.container} 
        source={require('../assets/welcomeimage.png')}>


        <View style={styles.card}>
           <View style={styles.innercard}>
        <TouchableOpacity style={styles.touchbutton1} onPress={()=> navigation.navigate('')}>
        <View style={styles.button1} >
            <MaterialCommunityIcons  name='home-outline' size={30} color={"#686A6C"}/>
        </View>
        </TouchableOpacity>
           
        <TouchableOpacity style={styles.touchbutton}  onPress={()=> navigation.navigate('company')}>
        <View style={styles.button} >
            <MaterialCommunityIcons  name='map' size={30} color={"white"}/>
        </View>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.touchbutton}  onPress={()=> navigation.navigate('search')}>
        <View style={styles.button} >
            <MaterialCommunityIcons  name='devices' size={30} color={"white"}/>
        </View>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.touchbutton} onPress={()=> navigation.navigate("")}>
        <View style={styles.button} >
            <MaterialCommunityIcons  name='google-maps' size={30} color={"white"}/>
        </View>
        </TouchableOpacity>
        </View>

            <View  >
                <Image source={require('../assets/companylogo.png')} style={styles.float}></Image>
            </View>

            


        </View>



        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:'flex-end'
    },
    card:{
        width:"85%",
        height:70,
        backgroundColor:"#686A6C",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        elevation:20,

    },
    innercard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        

    },
    touchbutton:{
        
        alignItems: 'center'

    },
    button:{
        backgroundColor:"#686A6C",
        padding:5,
        alignItems:'center',
        borderRadius:15,
        marginTop:20,
        marginBottom:10
    },
    button1:{
        backgroundColor:"white",
        padding:5,
        alignItems:'center',
        borderRadius:15,
        marginTop:20,
        marginBottom:10
    },
    text:{
        color:"#fff",
        padding:10,
        fontSize:18,
        fontWeight:'bold'
    }
})
export default Student;