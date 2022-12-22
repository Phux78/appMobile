import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import axios from 'axios';

const API = 'http:/192.168.1.103:9000';


export default function CreatePost ({navigation}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const createPostFunction = () => {
        if(!title || !content){
            alert('Looks like you forgot to fill in something.')
            return;
        }
        axios.post(`${API}/posts`,{
            title: title,
            content: content,
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

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">

      <View style={styles.inputContainer}>
        <Text>CreatePost</Text>
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
            style={styles.input}
            
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={createPostFunction}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            onPress={() => navigation.navigate('FeedEmployer')}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonText2}>Cancel</Text>
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
    buttonText2: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
        paddingBottom: 5,
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
    }
})