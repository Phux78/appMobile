import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, Button, BackHandler, Alert } from 'react-native';
import React, {useState,useEffect,useCallback} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EmployerLogin from '../EmployerScreen/EmployerLogin';
import EmployerRegister from '../EmployerScreen/EmployerRegister';

const Stack = createStackNavigator();

const SelectEmployer = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name="EmployerLogin"
        component={EmployerLogin}
      />

      <Stack.Screen
        name="EmployerRegister"
        component={EmployerRegister}
      />
    </Stack.Navigator>
  );
}

export default SelectEmployer;

const styles = StyleSheet.create({
  buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
  },
  button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
  },
  buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
  },
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
      paddingBottom: 5,
  },
})
