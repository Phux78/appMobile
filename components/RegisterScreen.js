import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import React, { useState } from 'react';    
import axios from "axios";

const API = 'http:/192.168.1.103:9000'
//const API = 'http:/192.168.1.104:9000/';
//const API = 'http:/192.168.250.131:9000/';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [Freelance, setFreelance] = useState('');
  const [Employer, setEmployer] = useState('');

  const roleFreelance = () =>{
    setFreelance(true);
    setEmployer(false);
  }

  const roleEmployer = () =>{
    setFreelance(false);
    setEmployer(true);
  }

  const register = () => {
    if(!name || !email || !password) {
      alert('Register failed');
      return;
    }
    axios.post(`${API}/regisFreelances`, {
      name: name,
      email: email,
      password: password,
    })
    .then((response) => {
      if(response.data.status === 'ok') {
        navigation.navigate('Login');
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
        
      
      <View style={{flexDirection: "row"}}>
        <CheckBox
          title='Freelance'
          checked={Freelance}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={roleFreelance}
        />

        <CheckBox 
          title='Employer'
          checked={Employer}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={roleEmployer}
        />
      </View> 

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

      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
            onPress={register}
            style={[styles.button]}
        >
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity> 

        <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
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