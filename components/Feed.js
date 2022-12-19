import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, TextInput, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

const Feed = ({navigation}) => {
  const [ AllUsers, setAllUsers ] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const API = 'http:/192.168.214.131:9000';

  useEffect(() => {
    fetch('http:/192.168.214.131:9000/freelances')
    .then((response) => response.json())
    .then((responseJson) => {
      setFilteredDataSource(responseJson);
      setMasterDataSource(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });

    axios.get(`${API}/freelances`)
        .then(function (response) {
        setAllUsers(response.data);
        })
        .catch(function (error) {
        console.log(error);
        });
  }, []);
 
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSourcejobTitle
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.jobTitle ? item.jobTitle.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
        <SafeAreaView style={styles.bgw}>
          <ScrollView style={styles.bg}>
            <TouchableOpacity style={[styles.card]} onPress={() => navigation.navigate('FreelanceProfile',{item})}>
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
          </ScrollView>
        </SafeAreaView>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + 'jobTitle : ' + item.jobTitle);
  };

  if (typeof search === 'string' && search.length === 0) {
    return (
      <SafeAreaView style={styles.bgw}>
        <View style={styles.container}>
          <SearchBar
            round
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            placeholder="Search here"
            value={search}
          />
        </View>
        <ScrollView style={styles.bg}>
              {
                AllUsers.map((item, key) => {
                  console.log(item)
                  return(
                    <TouchableOpacity style={[styles.card]}  key={key} onPress={() => navigation.navigate('FreelanceProfile',{item})}>
                      <View>
                        <Image source={{uri: item.profile_pic }} style = {{ width: 80, height: 80 }} resizeMode="cover"/>
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
  } else {
    return (
      <SafeAreaView style={styles.bgw}>
        <View style={styles.container}>
          <SearchBar
            round
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            placeholder="Search here"
            value={search}
          />
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
      </SafeAreaView>
    );
  }
};
 
export default Feed

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
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