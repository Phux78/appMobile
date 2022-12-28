import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import React, { useState } from 'react';    
import axios from "axios";

//const API = 'http://192.168.1.104:9000';
//const API = 'http:/192.168.250.131:9000';
const API = 'http:/192.168.1.103:9000';
//const API = 'http:/172.16.156.100:9000';


export default function FreelanceRegister({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [Jobtitle, setJobtitle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profile_pic, setProfile_pic] = useState('');

  const register = () => {
    if(!name || !email || !password || !phoneNumber || !Jobtitle || !profile_pic) {
      alert('Register failed, Check your infomation again.');
      return;
    }
    axios.post(`${API}/regisFreelances`, {
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      jobTitle: Jobtitle,
      profile_pic: profile_pic,
    })
    .then((response) => {
      if(response.data.status === 'ok') {
        alert('Register success!!');
        navigation.navigate('FreelanceLogin');
        
      }
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

        return (
          <View style={{backgroundColor: '#FFC000', flex: 1}}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding">
      
              <View style={styles.inputContainer}>
                <Text style={styles.Text}>Freelance Register</Text>
      
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

                <TextInput 
                    placeholder='What is you can do??'
                    value={Jobtitle}
                    onChangeText={setJobtitle}
                    style={styles.input}
                />
              </View>

              
      
              <View style={styles.buttonContainerlog}>
              
                <TouchableOpacity
                  onPress={register}
                  style={styles.bottonlog}
                >
                  <Text style={  styles.bottonTextlog}>Register</Text>
                </TouchableOpacity> 
                
                <TouchableOpacity
                  onPress={() => navigation.navigate('FreelanceLogin')}
                  style={[styles.bottonlog, styles.bottonOutlinelog]}
                >
                  <Text style={styles.bottonText2log}>Login</Text>
                </TouchableOpacity>
      
              </View>
            </KeyboardAvoidingView>
          </View>
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
            marginTop: 30,
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
      
        Text: {
          fontSize: 16,
          fontWeight: '900',
          paddingBottom: 10,
        }
      })