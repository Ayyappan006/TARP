import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


function AppButton({title,navigation,onPress}) {
    return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.button} >
        <Text style={styles.text} > {title}</Text>
    </View>
</TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card:{
        
        alignItems: 'center'

    },
    button:{
        backgroundColor:"#686A6C",
        padding:5,
        alignItems:'center',
        borderRadius:15,
        marginTop:30,
        marginBottom:30,
        elevation:20,
    },
    text:{
        color:"#fff",
        padding:10,
        fontSize:18,
        fontWeight:'bold'
    }
})
export default AppButton;