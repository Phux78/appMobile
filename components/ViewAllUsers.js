import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity,StyleSheet, SafeAreaView } from 'react-native';

const ViewAllUser = () => {
  const [ AllUsers, setAllUsers ] = useState([]);
  const API = 'http://192.168.1.103:9000/freelances';

 
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
    <SafeAreaView>          
      <ScrollView >
            {
              AllUsers.map((item, key) => {
                return(
                  
                  <TouchableOpacity style={styles.card} key={key} onPress={() => {}}>
                    <Text>{ item.name }</Text>
                    <Text>{ item.email }</Text>
                    <Text>{ item.jobTitle }</Text>
                    <Text>{ item.phoneNumber }</Text>
                    
                  </TouchableOpacity>
                  
                   
                  
                );
              })
            }
          </ScrollView>
    </SafeAreaView>
  );
};
 
export default ViewAllUser

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
  }
});
