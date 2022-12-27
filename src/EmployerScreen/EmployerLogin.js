import { StyleSheet, Text, Image, View, TouchableOpacity,KeyboardAvoidingView,TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, { Component, useState,  useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const EmployerLogin = ({navigation}) => {
  //const navigation = useNavigation();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const API = 'http:/192.168.1.103:9000';

    const _storeData = async (data) => {
      try {
          await AsyncStorage.setItem('Token', data);
          //console.log(data);
          navigation.navigate('IndexEmployer');
      } catch(err){
          console.log(err);
      }
  }

  const Login = ({}) => { console.log('login');
      axios.post(`${API}/loginEM`, {
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
  return(
    <View style={{backgroundColor: '#FFC000', flex: 1}}>
          <View style={{alignItems: 'center', marginTop: 50}}>
            <Image style={{ width: 200, height: 200 }} source={require('../pic/logo.jpg')} />
              <View style={styles.bottonContainer}>
                <TouchableOpacity 
                    onPress={() =>{}}
                    style={[styles.botton, styles.left, styles.buttonPressed]}
                >
                    <Text style={styles.buttomText}>Employer</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => navigation.navigate('FreelanceLogin')}
                    style={[styles.botton, styles.right]}
                >
                    <Text style={styles.buttomText}>Freelance</Text>
                </TouchableOpacity>
              </View>
          </View>    
          <KeyboardAvoidingView style={styles.container}>
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

            <View style={styles.bottonContainerlog}>
                  <TouchableOpacity
                      onPress={Login}
                      style={styles.bottonlog}
                  >
                      <Text style={styles.bottonTextlog}>Login</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                      onPress={() => navigation.navigate('EmployerRegister')}
                      style={[styles.bottonlog, styles.bottonOutlinelog]}
                  >
                      <Text style={styles.bottonText2log}>Register</Text>
                  </TouchableOpacity> 
            </View>
          </KeyboardAvoidingView>
          
    </View>
          
    );
}

export default EmployerLogin;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },

  //Login_Regis
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC000',
    marginTop: 50,
  },
  inputContainer: {
    width: '80%'
  },
  input: {
      backgroundColor: 'white',
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 20,
      marginTop: 10,
  },
  bottonContainerlog: {
      
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
  },
  bottonlog: {
      width: 200,
      backgroundColor: '#28282B',
      padding: 15,
      borderRadius: 10,
  },
  bottonText2log: {
      color: '#28282B',
      fontWeight: '700',
      fontSize: 16,
  },
  bottonOutlinelog: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#28282B',
      borderWidth: 2,
  },
  bottonTextlog: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },

  //
  bottonContainer: {
    flexDirection: 'row',
  },
  botton: {
    backgroundColor: '#28282B',
    width: '50%',
    height: 70,
    padding: 15,
  },
  left: {
    borderRightWidth: 1,
    borderRightColor: '#fff',
  },
  right: {
    borderLeftWidth: 1,
    borderLeftColor: '#fff',
  },
  buttomText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
    paddingBottom: 5,
    textAlign: 'center'
  },
});
