import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View,ScrollView, Image, Text, TouchableOpacity,StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

const Feed = ({navigation}) => {
  const [ AllUsers, setAllUsers ] = useState([]);
  //const API = 'http:/192.168.250.131:9000/users';
  const API = 'http:/192.168.1.104:9000/users';

  useEffect(() => {
    axios.get(API)
        .then(function (response) {
        setAllUsers(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
  }, []);
 
  // const viewUser = (ViewUserId) => {
  //   axios.get(`${API}/${ViewUserId}`)
  //     .then(function (response) {
  //       alert(response.data.name);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  
  return (
    <SafeAreaView>          
      <ScrollView >
            {
              AllUsers.map((item, key) => {
                console.log(item)
                return(
                  <TouchableOpacity style={[styles.card]}  key={key} onPress={() => navigation.navigate('FreelanceProfile',{item})}>
                    <View>
                    <Image source={{ uri: item.profile_pic }} style = {{ width: 80, height: 80 }} resizeMode="cover"/>
                    </View>
                    <View>
                    <Text txr>{ item.name }</Text>
                    <Text txr>{ item.email }</Text>
                    <Text txr>{ item.jobTitle }</Text>
                    <Text txr>{ item.phoneNumber }</Text>
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
  leftTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'left'
  },
  card: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 3,
    alignSelf: 'center',
    borderRadius: 5,
    width: '96%',
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
  shadowOffset: {
    width: '90%',
    height: '60%',
  },
  shadowOpacity:  0.17,
  shadowRadius: 3.05,
  elevation: 4
});