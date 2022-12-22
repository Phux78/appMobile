import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FeedEmployer from '../EmployerScreen/FeedEmployer';
import FreelanceProfileEach from '../FreelanceScreen/FreelanceProfileEach';
import Profile from '../Profile';
import EditProfile from '../EditProfile';
import Logout from '../Logout';
import CardInfo from '../CardInfo';
import CreatePost from '../EmployerScreen/CreatePost';
import PostEach from '../EmployerScreen/PostEach';


const Drawer = createDrawerNavigator();
        
const IndexEmployer = () => {
  return (

      <Drawer.Navigator >
          <Drawer.Screen
            name="FeedEmployer"
            component={FeedEmployer}
            options={{ drawerLabel: 'Feed' }}
          />

          <Drawer.Screen
            name="CreatePost"
            component={CreatePost}
            options={{ drawerLabel: 'Create Post' }}
          />          

          <Drawer.Screen 
            name="Profile"
            component={Profile}
            options={{ drawerLabel: 'Profile' }}
          />

          <Drawer.Screen
            name="Logout"
            component={Logout}
            options={{ drawerLabel: 'Logout' }}
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

export default IndexEmployer;

const styles = StyleSheet.create({
  container: {
  },
  bg: {
    backgroundColor: 'yellow'
  },
});
