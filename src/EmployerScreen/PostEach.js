import React, { Component,  useState, useEffect } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity,StyleSheet, SafeAreaView } from 'react-native';

const PostEach = ({navigation,route:{params:{item}}}) => {
  return (    
    <SafeAreaView style={{backgroundColor: '#FFC000', flex: 1}}>
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.card2}/>
              <Text style={{paddingTop: 5}}>{item.content}</Text>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <View style={{marginTop: 50}}>
                  <Text style={styles.tx}> {item.name} </Text>
                  <Text style={styles.tx2}> {item.contact} </Text>
              </View>
            </View>
        </View>
        
    </SafeAreaView>
  );
};
 
export default PostEach

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },card:{
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 7,
    alignSelf: 'center',
    width: '96%',
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },card2:{
    backgroundColor: 'black',
    paddingHorizontal: 2,
    paddingVertical: 3,
    marginVertical: 2,
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },
  tx:{
    fontWeight: '700',
    padding: 2,
    alignSelf: 'flex-end'},
  tx2:{
    fontWeight: '700',
    padding: 2,
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