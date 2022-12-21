import axios from 'axios';
import React, { Component,  useState, useEffect, useContext } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity,StyleSheet, SafeAreaView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardInfo from './CardInfo';

const Profile = ({}) => {
  const [ user, setUser ] = useState();
  const [ token, setToken ] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  //const API = 'http:/192.168.250.131:9000/';
  const API = 'http:/192.168.1.103:9000';

  //const token = useContext(Token);
  
/*   const getToken = async () => {
    return await AsyncStorage.getItem('@Token');
  }  
  const token = getToken(); */
  
  const getToken = ( async () => {
    const TK = await AsyncStorage.getItem('@Token');
    setToken(TK);
  });
  
  getToken();
  
  /* const isFocused = useIsFocused();
  useEffect(() => {    
    if(isFocused) {
      axios.get(`${API}/profileFL/me`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res => {
      setUser(res.data.freelance);
      setIsLoaded(true);
      console.log(user);
    })
    .catch(err => {
      console.log(err);
    })
    }
  }, [isFocused] )  */

  const isFocused = useIsFocused();
  useEffect(() => {    
    if(isFocused) {
      const fetchUser = async() => {
      const response = await axios.get(`${API}/profileFL/me`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    });
    }
      fetchUser();
    }
  }, [isFocused] )



console.log('testttt',user);

/* const useCard = () => {
  if(isLoaded) {
    return <CardInfo user={user}/>
  } else(
      <View>
        <ActivityIndicator />
      </View>
  )
} */
  return (
    <SafeAreaView>
      {/* {useCard()} */}
      <View>{user}</View>
    </SafeAreaView>
  )
}

export default Profile
 
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

