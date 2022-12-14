import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../components/Feed';
import FreelanceProfile from '../components/FreelanceProfile';

import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import Logout from '../components/Logout';


const Drawer = createDrawerNavigator();
        
const Index = () => {
  return (

      <Drawer.Navigator >
          
{/*           <Drawer.Screen
              name="Login"
              component={LoginScreen}
              options={{ drawerLabel: 'Login' }}
            /> */}

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
            name="Logout"
            component={Logout}
            options={{ drawerLabel: 'Logout' }}
          />    
          
          <Drawer.Screen
            name="FreelanceProfile"
            component={FreelanceProfile}
            options={{ drawerItemStyle: { height: 0 } }}
          /> 
{/* 
          <Drawer.Screen
              name="Register"
              component={RegisterScreen}
              options={{ drawerItemStyle: { height: 0 } }}
            /> */}

          <Drawer.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ drawerItemStyle: { height: 0 } }}
            />
      </Drawer.Navigator>    
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
  },
  bg: {
    backgroundColor: 'yellow'
  },
});
