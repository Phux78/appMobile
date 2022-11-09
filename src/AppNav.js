import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, { useState, useContext } from 'react';    
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './Auth/AuthContext';

import AppStack from './Auth/AppStack';
import AuthStack from './Auth/AppStack';

const AppNav = () => {
    const {isLoding, userToken} = useContext(AuthContext);

    if( isLoding ) {
        <View style={{flexlex:1, justifyContent: 'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
    }

  return (
      <NavigationContainer style={styles.container}>
        { userToken !== null ? <AuthStack /> : <AuthStack /> } 
      </NavigationContainer>
  )
}

export default AppNav

const styles = StyleSheet.create({
    container: {
    
    },
});