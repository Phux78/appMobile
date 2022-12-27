import { StyleSheet, Text, View, Button, BackHandler, Alert } from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState,useEffect,useCallback} from 'react';


import SplashScreen from './src/SplashScreen';
import IndexFreelance from './src/routers/IndexFreelance';
import IndexEmployer from './src/routers/IndexEmployer';
import EmployerLogin from './src/EmployerScreen/EmployerLogin';
import FreelanceLogin from './src/FreelanceScreen/FreelanceLogin';
import EmployerRegister from './src/EmployerScreen/EmployerRegister';
import FreelanceRegister from './src/FreelanceScreen/FreelanceRegister';


//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen 
              name="Splash"
              component={SplashScreen}
              
            /> */}
          <Stack.Screen 
              name="EmployerLogin"
              component={EmployerLogin}
            />
          
          <Stack.Screen 
              name="FreelanceLogin"
              component={FreelanceLogin}
            />
          
          <Stack.Screen
              name="EmployerRegister"
              component={EmployerRegister}
          />
          <Stack.Screen
              name="FreelanceRegister"
              component={FreelanceRegister}
          />
              
          <Stack.Screen
              name="IndexFreelance"
              component={IndexFreelance}
            />
          
          <Stack.Screen
              name="IndexEmployer"
              component={IndexEmployer}
            />
          
      </Stack.Navigator>    
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
  },
  bg: {
    backgroundColor: 'yellow'
  },
});
