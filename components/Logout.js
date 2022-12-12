import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Logout = async() => {
    const navigation = useNavigation();
    const logout = async() => {
        try {
            await AsyncStorage.removeItem('@Token');
            await AsyncStorage.removeItem('');
            navigation.replace('Login');
        }catch(error){
            console.log(error.message);
        }
    }
  return (
    <View>
      <Text>Logout</Text>
    </View>
  )
}

export default Logout