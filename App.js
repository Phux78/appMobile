import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './components/Feed';
import FreelanceProfile from './components/FreelanceProfile';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/FreelanceRegister';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './routers/Index';



//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
        
const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          
          <Stack.Screen 
              name="Login"
              component={LoginScreen}
              options={{ drawerLabel: 'Login', }}
            />

          <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ drawerItemStyle: { height: 0 } }}
            />

          <Stack.Screen
              name="Index"
              component={Index}
              options={{ drawerItemStyle: { height: 0 } }}
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
