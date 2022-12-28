import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AboutUs = () => {
  return (
    <View style={{backgroundColor: '#FFC000', flex: 1}}>
      <Text style={styles.tx}>      This application is made It is a project for SWE62-308 Mobile Device Application Development course. 
      As an application For finding a job and finding people to work, with an emphasis on freelance work.</Text>
      <Text style={styles.tx}>     In this regard, we would like to thank Dr. Chirawat Wattanapanich Teachers of the 
      subject and thank Prateep Kongkla who gave advice throughout the project until completion and thanked Chitsanupong Paenyoi and ChatGPT 
      who helped to complete the project.</Text>
      <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        <View style={{marginTop: 50}}>
            <Text style={styles.tx2}> Phuwanesh </Text>
            <Text style={styles.tx2}> Mangkorn </Text>
            <Text style={styles.tx2}> Thanaphat </Text>
        </View>
      </View>
    </View>
  )
}

export default AboutUs

const styles = StyleSheet.create({
    tx:{
        fontWeight: '700',
        alignSelf: 'center',
        padding: 2,
        marginTop: 5,
    },
    tx2:{
        fontWeight: '700',
        padding: 2,
    }
});