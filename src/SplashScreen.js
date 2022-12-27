import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('EmployerLogin');
    }, 1500);
  }, []);

  return (
    <View style={styles.logo}>
      <Image style={{ width: 300, height: 300 }} source={require('../assets/logo.gif')} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC000'
  }
});

export default SplashScreen;
