import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ViewAllUser from './components/ViewAllUsers';
import RegisterScreen from './components/RegisterScreen'
import Navbar from './components/Navbar';


const Stack = createStackNavigator();
//<Stack.Screen name="Home" component={HomeScreen}/>

        {/* <Stack.Screen
          name="ViewAllUser"
          component={ViewAllUser}
          options={{
            title: 'ViewAllUser', 
            headerStyle: {
              backgroundColor: '#FFD700', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        /> */}

        {/* <Stack.Screen 
        name="Navbar"
        component={Navbar}
        /> */}
const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
      
         <Stack.Screen
          name="ViewAllUser"
          component={ViewAllUser}
          options={{
            title: 'ViewAllUser', 
            headerStyle: {
              backgroundColor: '#FFD700', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        /> 
        

        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login', 
              headerStyle: {
                backgroundColor: '#FFD700', 
              },
              headerTintColor: '#fff', 
              headerTitleStyle: {
                fontWeight: 'bold', 
              },
            }}
          /> 

          <Stack.Screen 
            name="Register"
            component={RegisterScreen}
          />

        
      </Stack.Navigator>      
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
  },
});

