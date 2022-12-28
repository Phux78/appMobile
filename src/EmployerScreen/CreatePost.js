import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const API = 'http:/192.168.1.103:9000';


export default function CreatePost ({navigation}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
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

  console.log(user)

    const PostFunction = () => {
        if(!title || !content){
            alert('Looks like you forgot to fill in something.')
            return;
        }
        axios.post(`${API}/posts`,{
            title: title,
            content: content,
            contact: user.email,
            name: user.name,
            profile_pic: user.profile_pic,
        })
        .then((response) => {
            if(response.data.status === 201){
                alert('Create post success.');
                navigator.navigate('IndexEmployer');
            }
        })
        .catch((error) => {
            console.log(error.message);
          })
    }

    const CancelFunction = () => {
      setTitle('');
      setContent('');  
    };

  return (
    <KeyboardAvoidingView style={{backgroundColor: '#FFC000',flex: 1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
              placeholder='Title'
              value={title}
              onChangeText={setTitle}
              style={styles.input}
          />

          <TextInput 
              placeholder='Content'
              value={content}
              onChangeText={setContent}
              style={styles.input2}
              textAlignVertical="top"
              multiline={true}
              
          />
        </View>

        <View style={styles.bottonContainer}>
          <TouchableOpacity
              onPress={PostFunction}
              style={styles.botton}
          >
              <Text style={styles.bottonText}>Post</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
              onPress={CancelFunction}
              style={[styles.botton, styles.bottonOutline]}
          >
              <Text style={styles.buttonText2}>Cancel</Text>
          </TouchableOpacity> 
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
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
    input2: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      height: 200,
      marginTop: 5,
  },
    bottonContainer: {
      
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
  },
    botton: {
      width: 200,
      backgroundColor: '#28282B',
      padding: 15,
      borderRadius: 10,
  },
  bottonText2: {
      color: '#28282B',
      fontWeight: '700',
      fontSize: 16,
  },
  bottonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#28282B',
      borderWidth: 2,
  },
  bottonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },
})