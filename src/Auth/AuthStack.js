import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/RegisterScreen';

const AuthStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{ drawerLabel: 'Login' }}
        />

      <Drawer.Screen
          name="Register"
          component={RegisterScreen}
          options={{ drawerItemStyle: { height: 0 } }}
        />
    </Drawer.Navigator>
  )
}

export default AuthStack

