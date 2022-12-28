import { View, Text, FlatList, ScrollView, StyleSheet, Image } from 'react-native';
import React, {useState, useEffect, ActivityIndicator} from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FeedPost = ({navigation}) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const API = 'http:/192.168.1.103:9000';
    //`${API}/Allposts`

    useEffect(() => {
      axios.get(`${API}/Allposts`)
      .then(function (response){
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    }, []);

  return (
    <ScrollView style={{backgroundColor: '#FFC000', flex: 1}}>
      <View style={{paddingTop: 5}}></View>
      {
        posts.map((item, key) => {
          return(
            <View>
              <TouchableOpacity style={styles.card} key={key} onPress={() => navigation.navigate('PostEach',{item})}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column'}}>               
                      <Text style={styles.title}>Title: {item.title}</Text>
                      <Text numberOfLines={5} style={styles.content}>{item.content}</Text>
                      <Text style={styles.by}>Post by: {item.name}</Text>     
                    </View>
                </View>
              </TouchableOpacity> 
            </View>
          )
        })
      }
    </ScrollView>
  )
}

export default FeedPost

const styles = StyleSheet.create({
  card2: {
    flexDirection: "row",
    alignSelf: 'flex-end',
    width: 100,
    flexDirection: 'column',
    paddingLeft: 8,
  },
  card: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 0,
    marginVertical: 2,
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 5,
    width: '96%',
    height: 170,
    borderRadius: 15, elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 22,
    flexDirection: "row",
    paddingLeft: 5,
    paddingTop: 5,
    color: 'Black',

  },
  content:{
    fontSize: 14,
    marginTop: 6,
    paddingLeft: 20,
    height: 95,
    color: 'Black',
  },
  by:{
    marginTop: 5, 
    fontWeight: '700', 
    alignSelf: 'flex-start', 
    paddingLeft: 5,
    color: 'Black',
  }

});