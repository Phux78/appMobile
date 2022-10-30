import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ViewAllUser from './ViewAllUsers';

const Drawer = createDrawerNavigator();

export default function Navbar() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Feed">
      <Drawer.Screen
        name="ViewAllUser"
        component={ViewAllUser}
        options={{ drawerLabel: 'ViewAllUser' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ drawerLabel: 'Updates' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>
  );
}

/* export default function Navbar() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
} */