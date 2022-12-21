import { StyleSheet, Text, View, Button, BackHandler, Alert, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, { Component } from 'react';

const BottomSelectRoll = () => {
  const navigation = useNavigation();
  return(
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding">
          <View style={styles.buttonContainer}>

            <TouchableOpacity 
                onPress={() => navigation.navigate('SelectEmployer')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Employer</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                onPress={() => navigation.navigate('SelectFreelance')}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonText}>Freelance</Text>
            </TouchableOpacity> 
          </View>
        </KeyboardAvoidingView>
    );
}

export default BottomSelectRoll;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        paddingBottom: 5,
    },
      buttonOutline: {
      backgroundColor: '#0782F9',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
  }
})