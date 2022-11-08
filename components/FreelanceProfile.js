import React, { Component,  useState, useEffect } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity,StyleSheet, SafeAreaView } from 'react-native';

const FreelanceProfile = ({navigation,route:{params:{item}}}) => {
  //console.log(route.params.item)
  return (    
    <SafeAreaView>          
      <Text>{ item.name }</Text>
      <Text>{ item.email }</Text>
      <Text>{ item.jobTitle }</Text>
      <Text>{ item.phoneNumber }</Text>
    </SafeAreaView>
  );
};
 
export default FreelanceProfile

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  leftTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'left'
  },
  card: {
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginVertical: 2,
    alignSelf: 'center',
    borderRadius: 5,
    width: '100%',
  },
  subTitle: {
    alignSelf: 'left',
    fontWeight: 'bold',
    fontSize: 16
  },
  input: {
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 7,
    width: '100%',
    paddingLeft: 10,
    marginVertical: 4
  },
  button: {
    backgroundColor: '#0275d8',
    borderRadius: 5,
    paddingVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center'
  },
  header:{
    backgroundColor: "yellow",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "red",
    marginTop:10,
    textAlign: 'center'
  },
  contact:{
    fontSize:16,
    color: "orange",
    marginTop:10,
    textAlign: 'center'
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:180,
    borderRadius:30,
    backgroundColor: "yellow",
  },
});