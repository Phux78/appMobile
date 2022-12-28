import React, { Component,  useState, useEffect } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity,StyleSheet, SafeAreaView } from 'react-native';

const FreelanceProfileEach = ({navigation,route:{params:{item}}}) => {
  //console.log(route.params.item)
  return (    
    <SafeAreaView style={{backgroundColor: '#FFC000', flex: 1}}>
          <View style={styles.card}>
            <Image source={{uri: item.profile_pic }} style = {styles.pic} resizeMode="cover"/>
            
            <Text style={styles.name}>{item.name}</Text>
              <View style={styles.card2} />
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column'}}>
                
              </View>
              <View style={{flexDirection: 'column'}}>

              </View>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 10}}>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.card3}>
                  <Image style={styles.icon} source={ require('../pic/suitcase.png') } />
                  <Text numberOfLines={5} style={styles.jobTitle}> {item.jobTitle}</Text>
                </View>
              </View>

              <View style={{flexDirection: 'column', paddingLeft: 30}}>
                <View style={styles.card4}>
                  <Image style={styles.icon} source={ require('../pic/ringing.png') } />
                    <Text style={styles.phone}>{item.phoneNumber}</Text>
                  <Image style={styles.icon} source={ require('../pic/email.png') } />
                    <Text style={styles.email}>{item.email}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
                      onPress={() => navigation.navigate('EditProfile')}
                      style={styles.bottonlog}
                  >
                      <Text style={styles.bottonTextlog}>Edit</Text>
                  </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};
 
export default FreelanceProfileEach

const styles = StyleSheet.create({
  pic:{
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 20,
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },

  card:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 7,
    alignSelf: 'center',
    width: '96%',
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },
  card2:{
    backgroundColor: 'black',
    paddingHorizontal: 2,
    paddingVertical: 3,
    marginVertical: 2,
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },
  card3:{
    height: 150,
    width: 150,
    borderColor: 'Black',
    backgroundColor: 'white',
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },
  card4:{
    height: 150,
    width: 150,
    borderColor: 'Black',
    backgroundColor: 'white',
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },
  icon:{
    width: 30,
    height: 30,
    marginTop: 15,
    alignSelf: 'center',
  },
  name:{
    paddingTop: 8,
    paddingBottom: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  email:{
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  phone:{
    paddingTop: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  jobTitle:{
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 5,
  },
  bottonlog: {
    width: 200,
    marginTop: 20,
    backgroundColor: '#28282B',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
  },
  bottonTextlog: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});