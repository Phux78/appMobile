import { StyleSheet, Text, View, Button, BackHandler, Alert } from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState,useEffect,useCallback} from 'react';


import SplashScreen from './src/SplashScreen';
import Index from './src/routers/Index';
import SelectRoll from './src/routers/SelectRoll';
import SelectFreelance from './src/SetRollFreelance/SelectFreelance';
import SelectEmployer from './src/SetRollEmployer/SelectEmployer';


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
              name="SelectRoll"
              component={SelectRoll}
          />
              
          <Stack.Screen
              name="Index"
              component={Index}
            />

          <Stack.Screen
              name="SelectFreelance"
              component={SelectFreelance}
          />

          <Stack.Screen
              name="SelectEmployer"
              component={SelectEmployer}
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
