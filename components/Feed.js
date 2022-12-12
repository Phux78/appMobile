import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View,ScrollView, Image,TextInput, Text, TouchableOpacity,StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

const Feed = ({navigation}) => {
  const [ AllUsers, setAllUsers ] = useState([]);
  //const API = 'http:/192.168.250.131:9000/users';
  const API = 'http:/192.168.1.103:9000/freelances';

  useEffect(() => {
    axios.get(API)
        .then(function (response) {
        setAllUsers(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
  }, []);
 
  const viewUser = (ViewUserId) => {
     axios.get(`${API}/${ViewUserId}`)
       .then(function (response) {
         alert(response.data.name);
       })
       .catch(function (error) {
         console.log(error);
       });
  }
  
  return (
    <SafeAreaView style={styles.bgw}>       
      <TextInput 
            style={[styles.input]}
            placeholder='search'
      />   
      <ScrollView style={styles.bg}>
            {
              AllUsers.map((item, key) => {
                console.log(item)
                return(
                  <TouchableOpacity style={[styles.card]}  key={key} onPress={() => navigation.navigate('FreelanceProfile',{item})}>
                    <View>
                    <Image source={{ uri: item.profile_pic }} style = {{ width: 80, height: 80 }} resizeMode="cover"/>
                    </View>
                    <View>
                    <Text style={styles.txr}>{ item.name }</Text>
                    <Text style={styles.txr}>{ item.email }</Text>
                    <Text style={styles.txr}>{ item.jobTitle }</Text>
                    <Text style={styles.txr}>{ item.phoneNumber }</Text>
                    </View>
                  </TouchableOpacity> 
                );
              })
            }
          </ScrollView>
    </SafeAreaView>
  );
};
 
export default Feed

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  txr:{
    textAlign:'right'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
},
  leftTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'left'
  },
  card: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 6.5,
    marginVertical: 3.5,
    alignSelf: 'center',
    borderRadius: 15,
    width: '96%',
  },
  subTitle: {
    alignSelf: 'left',
    fontWeight: 'bold',
    fontSize: 16
  },
  input: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: '#e6e6e6',
    borderWidth: 0.5,
    borderRadius: 15,
    paddingVertical: 7,
    width: '95%',
    paddingLeft: 25,
    marginVertical: 10
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
  bgw: {
    backgroundColor: 'white'
  },
  bg: {
    backgroundColor: 'yellow'
  },
  shadowOffset: {
    width: '30%',
    height: '60%',
  },
  shadowOpacity:  0.17,
  shadowRadius: 3.05,
  elevation: 4
});