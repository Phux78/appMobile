import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native'
import React, { useState } from 'react';    
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//const API = 'http:/192.168.1.103:9000';
const API = 'http:/172.16.156.100:9000';
function LoginScreen({ navigation })  {
    const API = 'http:/192.168.1.103:9000';

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const _storeData = async (data) => {
        try {
            await AsyncStorage.setItem('@Token', data);
            navigation.navigate('Index');
        } catch(err){
            console.log(err);
        }
    }

    const Login = ({}) => { console.log('login');
        axios.post(`${API}/loginFL`, {
            name: name,
            password: password
        })
        .then((response) => {
            if(response.data.status === 'ok'){
                _storeData(response.data.token);
            } else{
                alert('Login fail');
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
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
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={Login}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity> 
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
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
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
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