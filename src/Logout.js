import React, { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Logout() {
    const navigation = useNavigation();
    const logout = async() => {
        try {
            await AsyncStorage.removeItem('Token');
            navigation.replace('Splash');
        }catch(error){
            console.log(error.message);
        }
    }

  return (
    <View style={{backgroundColor: '#FFC000', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
            onPress={logout}
            style={[styles.botton, styles.bottonOutline]}
        >
            <Image style={styles.icon} source={ require('../src/pic/logout.png') } />
        </TouchableOpacity> 
    </View>
  )
};

const styles = StyleSheet.create({
    icon:{
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginLeft: 30,
        marginTop: 10,
    },
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 150,
      
  },
  bg: {
      backgroundColor: 'yellow'
    },
  inputContainer: {
      width: '80%'
  },
  input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
  },

    botton: {
        width: 200,
        height: 200,
        backgroundColor: '#28282B',
        padding: 15,
        borderRadius: 10,
    },
    bottonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#28282B',
        borderWidth: 2,
    },
    bottonText: {
        color: 'black',
        fontWeight: '900',
        fontSize: 34,
        alignSelf: 'center',
    },

})