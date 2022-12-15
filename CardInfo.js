import { View, Image, ScrollView, Text, TouchableOpacity,StyleSheet, SafeAreaView } from 'react-native';
import React from 'react'
import { useIsFocused } from "@react-navigation/native";



export default function CardInfo({user}) {
  return (
    <ScrollView >

    <View style={styles.container}>
                  <View>{user.name}</View>
                      <View style={styles.header}></View>
                        <Image style={styles.avatar} source={{}}/>
                      <View style={styles.body}>
                        <View style={styles.bodyContent}>
                          <Text style={styles.name}>{ user.name }</Text>
                          <Text style={styles.info}>{ user.jobTitle }</Text>
                          <Text style={styles.contact}>{ user.email }{'\n'}{ user.phoneNumber }</Text>
                          <Text style={styles.description}>This is demo porfile naka tumma nan so tried makmak, hope u like it naka</Text>

                          <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.contact}>Response Rate { user.responseRate }  {'\n'} On-Time Rate  { user.onTimeRate }{ user.descRate } {'\n'}   </Text>
                          </TouchableOpacity>              
                          <TouchableOpacity style={styles.buttonContainer}>
                            <Text>1 more tank or sup or im go 5th dps  :)</Text> 
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => navigation.navigate('EditProfile')}
                            style={styles.button}
                          >
                            <Text style={styles.buttonText}>Edit</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    </ScrollView>
  );
}

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
    background : {
      backgroundColor: 'yellow'
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