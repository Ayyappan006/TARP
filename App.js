import React from 'react';
import { View,Text,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/Screen/HomeScreen';
import AppTextInput from './app/componets/AppTextInput';
import AppButton from './app/componets/AppButton';
import SignupScreen from './app/Screen/SignupScreen';
import LoginScreen from './app/Screen/LoginScreen';
import Student from './app/Screen/Student';
import Company from './app/Screen/Company';
import SearchCompany from './app/Screen/SearchCompany';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        {/* HomePage */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome' }}
        />

          {/* loginpage */}
          <Stack.Screen  name='Login' component={LoginScreen}
          options={{title: 'Sign In' }}/>
        
          {/* Signpage */}
          <Stack.Screen  name='Signup' component={SignupScreen}
          options={{title: 'Login' }}/>

          {/* Component */}
        <Stack.Screen  name='student' component={Student}
          options={{title: 'Home' }}/>

          {/* Component */}
        <Stack.Screen  name='company' component={Company}
          options={{title: 'Map' }}/>

         
            {/* search company */}
       
        <Stack.Screen  name='search' component={SearchCompany}
          options={{title: 'Devices' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;