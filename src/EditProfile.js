import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

const API = 'http:/192.168.1.103:9000';

const EditProfile = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [user, setUser] = useState();

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
        }
      };
      fetchUser();
    }
  }, [isFocused]);

  return (
    <View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">

      <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Name'
            value={name}
            onChangeText={setName}
            style={styles.input}
        />

        <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            style={styles.input}
        />

        <TextInput 
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
        />

        <TextInput 
            placeholder='Phone Number'
            value={phoneNumber}
            onChangeText={setphoneNumber}
            style={styles.input}
        />

      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
            onPress={() => {}}
            style={[styles.button]}
        >
            <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity> 

        <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Cancel</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        
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
    buttonContainer: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flexDirection: "row",
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

    buttonOutlineText: {

    },
})