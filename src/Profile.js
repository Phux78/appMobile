import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = ({navigation}) => {
  const [user, setUser] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const API = 'http:/192.168.214.131:9000';
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const fetchUser = async () => {
        const token = await AsyncStorage.getItem('Token');
        const response = await axios.get(`${API}/profileFL/me`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (response.data.status === 200) {
          setUser(response.data.freelance);
          setIsLoaded(true);
        }
      };
      fetchUser();
    }
  }, [isFocused]);

  return (
    <SafeAreaView>
      {
        isLoaded && (
          <View>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.location}</Text>
            <TouchableOpacity
                    onPress={() => navigation.navigate('EditProfile')}
                    
                  >
                    <Text>Edit</Text>
                  </TouchableOpacity>
          </View>
        )
      }
      {
        !isLoaded && (
          <View>
            <ActivityIndicator />
          </View>
        )
      }
    </SafeAreaView>
  );
};

export default Profile;
