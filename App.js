import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './components/Feed';
import FreelanceProfile from './components/FreelanceProfile';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import Profile from './components/Profile';


const Drawer = createDrawerNavigator();
        
const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator>
          <Drawer.Screen 
            name="Profile"
            component={Profile}
            options={{ drawerLabel: 'Profile' }}
          />
          
          <Drawer.Screen
            name="Feed"
            component={Feed}
            options={{ drawerLabel: 'Feed' }}
          />
          
          <Drawer.Screen
            name="FreelanceProfile"
            component={FreelanceProfile}
            options={{ drawerItemStyle: { height: 0 } }}
          /> 

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
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
  },
});

