import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './components/Feed';
import HomeScreen from './components/HomeScreen';
import FreelanceProfile from './components/FreelanceProfile';

const Drawer = createDrawerNavigator();
        
const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator>
      <Drawer.Screen
          name="Feed"
          component={Feed}
          options={{ drawerLabel: 'Feed' }}
        />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="FreelanceProfile"
          component={FreelanceProfile}
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

