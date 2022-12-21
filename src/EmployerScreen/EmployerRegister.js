import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import React, { useState } from 'react';    
import axios from "axios";

//const API = 'http://192.168.1.104:9000';
const API = 'http:/192.168.1.103:9000';

export default function EmployerRegister({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profile_pic, setProfile_pic] = useState('');


  const register = () => {
    if(!name || !email || !password || !phoneNumber) {
      alert('Register failed, Check your infomation again.');
      return;
    }
    axios.post(`${API}/regisEmployers`, {
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      profile_pic: profile_pic,
    })
    .then((response) => {
      if(response.data.status === 'ok') {
        alert('Register success!!');
        navigation.navigate('EmployerLogin');
        
      }
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">

      <View style={styles.inputContainer}>
        <Text>Employer</Text>

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
            placeholder='Telephone Number'
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.input}
        />
        
        <TextInput 
            placeholder='Profile picture'
            value={profile_pic}
            onChangeText={setProfile_pic}
            style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
            onPress={register}
            style={[styles.button]}
        >
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity> 

        <TouchableOpacity
            onPress={() => navigation.navigate('EmployerLogin')}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

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
      paddingBottom: 5,
  },
})