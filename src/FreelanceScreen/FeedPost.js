import { View, Text, FlatList, ScrollView } from 'react-native';
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
    <ScrollView>
      {
        posts.map((item, key) => {
          console.log(item)
          return(
            <TouchableOpacity key={key} onPress={() => navigation.navigate('PostEach',{item})}>
              <View>
                  <Text>{item.title}</Text>
                  <Text>{item.content}</Text>
              </View>
            </TouchableOpacity> 
          )
        })
      }
    </ScrollView>
  )
}

export default FeedPost