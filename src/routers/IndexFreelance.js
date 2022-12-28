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
import CustomDrawer from '../routers/CustomDrawer';
import AboutUs from '../AboutUs';


const Drawer = createDrawerNavigator();
        
const IndexFreelance = () => {
  return (

      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
          <Drawer.Screen
            name="Feed"
            component={FeedPost}
            options={{
              drawerLabel: 'Feed',
              headerStyle: {
                backgroundColor: '#28282B',
              },
              headerTintColor: 'white',
              drawerActiveBackgroundColor: '#FFC000',
              drawerActiveTintColor: 'black',
              drawerInactiveTintColor: 'white',
            }}
          />

          <Drawer.Screen 
            name="Profile"
            component={Profile}
            options={{ drawerLabel: 'Profile',headerStyle: {
              backgroundColor: '#28282B',
            },
            headerTintColor: 'white',
            drawerActiveBackgroundColor: '#FFC000',
            drawerActiveTintColor: 'black',
            drawerInactiveTintColor: 'white',
          }}
          />

          <Drawer.Screen
            name="About us"
            component={AboutUs}
            options={{ drawerLabel: 'About us', headerStyle: {
              backgroundColor: '#28282B',
            },
            headerTintColor: 'white',
            drawerActiveBackgroundColor: '#FFC000',
            drawerActiveTintColor: 'black',
            drawerInactiveTintColor: 'white',
          }}
          />    

          <Drawer.Screen
            name="Logout"
            component={Logout}
            options={{ drawerLabel: 'Logout',headerStyle: {
              backgroundColor: '#28282B',
            },
            headerTintColor: 'white',
            drawerActiveBackgroundColor: '#FFC000',
            drawerActiveTintColor: 'black',
            drawerInactiveTintColor: 'white',
          }}
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
