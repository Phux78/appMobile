import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FeedEmployer from '../EmployerScreen/FeedEmployer';
import FreelanceProfileEach from '../FreelanceScreen/FreelanceProfileEach';
import Profile from '../Profile';
import EditProfile from '../EditProfile';
import Logout from '../Logout';
import FeedPost from '../FreelanceScreen/FeedPost';
import CardInfo from '../CardInfo';
import PostEach from '../EmployerScreen/PostEach';
 


const Drawer = createDrawerNavigator();
        
const IndexFreelance = () => {
  return (

      <Drawer.Navigator>
          <Drawer.Screen
            name="FeedPost"
            component={FeedPost}
            options={{ drawerLabel: 'Home page', headerShown: false,}}
          />
          
          <Drawer.Screen
            name="FeedEmployer"
            component={FeedEmployer}
            options={{ drawerLabel: 'Feed',headerShown: false, }}
          />

          <Drawer.Screen 
            name="Profile"
            component={Profile}
            options={{ drawerLabel: 'Profile',headerShown: false,}}
          />

          <Drawer.Screen
            name="Logout"
            component={Logout}
            options={{ drawerLabel: 'Logout',headerShown: false, }}
          />    
          
          <Drawer.Screen
            name="PostEach"
            component={PostEach}
            options={{ drawerItemStyle: { height: 0 } }}
          />  

          <Drawer.Screen
            name="FreelanceProfileEach"
            component={FreelanceProfileEach}
            options={{ drawerItemStyle: { height: 0 } }}
          /> 

          <Drawer.Screen
            name="CardInfo"
            component={CardInfo}
            options={{ drawerItemStyle: { height: 0 } }}
          /> 

          <Drawer.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ drawerItemStyle: { height: 0 } }}
            />
      </Drawer.Navigator>    
  );
}

export default IndexFreelance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
  bg: {
    backgroundColor: 'yellow'
  },
});
