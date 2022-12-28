import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = ({navigation}) => {
  const [user, setUser] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const API = 'http:/192.168.1.103:9000';
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const fetchUser = async () => {
        const token = await AsyncStorage.getItem('Token');
        const response = await axios.get(`${API}/profileEM/me`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (response.data.status === 200) {
          setUser(response.data.employer);
          setIsLoaded(true);
        }
      };
      fetchUser();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={{backgroundColor: '#FFC000', flex: 1}}>
      {
        isLoaded && (
          <View style={styles.card}>
            <Image source={{uri: user.profile_pic }} style = {styles.pic} resizeMode="cover"/>
            
            <Text style={styles.name}>{user.name}</Text>
              <View style={styles.card2} />
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column'}}>
                
              </View>
              <View style={{flexDirection: 'column'}}>

              </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 10, alignSelf: 'center'}}>

              <View style={{flexDirection: 'column'}}>
                <View style={styles.card4}>
                  <Image style={styles.icon} source={ require('../src/pic/ringing.png') } />
                    <Text style={styles.phone}>{user.phoneNumber}</Text>
                  <Image style={styles.icon} source={ require('../src/pic/email.png') } />
                    <Text style={styles.email}>{user.email}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
                      onPress={() => navigation.navigate('EditProfile')}
                      style={styles.bottonlog}
                  >
                      <Text style={styles.bottonTextlog}>Edit</Text>
                  </TouchableOpacity>
          </View>
        )
      }
      {
        !isLoaded && (
          <View style={{paddingTop: 50}}>
            <ActivityIndicator />
          </View>
        )
      }
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  pic:{
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 20,
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },

  card:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 7,
    alignSelf: 'center',
    width: '96%',
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },
  card2:{
    backgroundColor: 'black',
    paddingHorizontal: 2,
    paddingVertical: 3,
    marginVertical: 2,
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },
  card3:{
    height: 150,
    width: 150,
    borderColor: 'Black',
    backgroundColor: 'white',
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },
  card4:{
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderColor: 'Black',
    backgroundColor: 'white',
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },
  icon:{
    width: 30,
    height: 30,
    marginTop: 15,
    alignSelf: 'center',
  },
  name:{
    paddingTop: 8,
    paddingBottom: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  email:{
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  phone:{
    paddingTop: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  jobTitle:{
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 5,
  },
  bottonlog: {
    width: 200,
    marginTop: 20,
    backgroundColor: '#28282B',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
  },
  bottonTextlog: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});