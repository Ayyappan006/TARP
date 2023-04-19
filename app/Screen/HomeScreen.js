import React from 'react';
import { View,Text,ImageBackground,StyleSheet,TouchableOpacity,Image } from 'react-native';
import {MaterialCommunityIcons} from'@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
    return (
        <ImageBackground  
        style={styles.background} >
            <Image source={require('../assets/homelogo.png')} style={styles.image} />
            <Image source={require('../assets/homeimage.png')} style={styles.images} />
            
           <View style={styles.container}>
                
            
            <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Signup')}>
                <View style={styles.button} >
                <MaterialCommunityIcons name="login" size={20} />
                    <Text style={styles.text} > LOGIN</Text>
                </View>
            </TouchableOpacity>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        resizeMode:'contain',
        alignItems:'center',

    },
    container:{
        
        marginTop:50


    },
    button:{
        backgroundColor:'white',
        padding:10,
        alignItems:'center',
        width:150,
        borderRadius:15,
        margin:10,
        marginBottom:30,
        elevation:20
    },
    text:{
        padding:10,
        fontSize:18,
        fontWeight:'bold'
    },
    images:{
        width: 300,
        height:300,
        resizeMode:"contain",
    },
    image:{
        width: 150,
        height:150,
        resizeMode:"contain",
        marginTop:50
    }
})
export default HomeScreen;