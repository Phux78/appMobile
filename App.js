import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ViewAllUser from './components/ViewAllUsers';
import HomeScreen from './components/HomeScreen';
import Feeds from './components/Feeds';
import FreelanceProfile from './components/FreelanceProfile';

const Drawer = createDrawerNavigator();
        
const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator>

        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ drawerLabel: 'Home' }}
        />

        <Drawer.Screen
          name="Feeds"
          component={Feeds}
          options={{ drawerLabel: 'Feeds' }}
        />

        <Drawer.Screen
          name="ViewAllUser"
          component={ViewAllUser}
          options={{ drawerLabel: 'View User' }}
        />

        <Drawer.Screen
          name="FreelanceProfile"
          component={FreelanceProfile}
          options={{ drawerLabel: 'FreelanceProfile' }}
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

