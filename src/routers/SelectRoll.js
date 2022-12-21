import {useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, BackHandler, Alert } from 'react-native';
import React, {useState,useEffect,useCallback} from 'react';

import BottomSelectRoll from './BottomSelectRoll';
 
    const Stack = createStackNavigator();
    const SelectRoll = () => {

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="BottomSelectRoll"
                component={BottomSelectRoll}
            />
        </Stack.Navigator>
    )
}

export default BottomSelectRoll;

const styles = StyleSheet.create({
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
