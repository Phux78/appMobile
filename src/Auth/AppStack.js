import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../components/Feed';
import Profile from '../components/Profile';
import FreelanceProfile from '../components/FreelanceProfile';
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/RegisterScreen';

export const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
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
              options={{ drawerItemStyle: { height: 0 }}}
            /> 
            
    </Drawer.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({
    container: {
    
    },
});