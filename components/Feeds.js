import { ScrollView, Text, TouchableOpacity,StyleSheet, SafeAreaView, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Feeds = () => {
    const [ AllFeeds, setAllFeeds ] = useState([]);
    //const API = 'http://192.168.1.103:9000/feeds';

    /* useEffect(() => {
        axios.get(API)
            .then(function (response) {
            setAllFeeds(response.data);
            })
            .catch(function (error) {
            console.log(error);
            });
      }, []); */
     
      /* const viewUser = (ViewUserId) => {
        axios.get(`${API}/${ViewUserId}`)
          .then(function (response) {
            alert(response.data.name);
          })
          .catch(function (error) {
            console.log(error);
          });
      } */


  return (
    <View>
      <Text>Feeds</Text>
    </View>
  )
}

export default Feeds