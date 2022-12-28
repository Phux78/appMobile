import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, TextInput, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

const FeedEmployer = ({navigation}) => {
  const [ AllUsers, setAllUsers ] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  //const API = 'http:/192.168.239.131:9000';
  const API = 'http:/192.168.1.103:9000';
  //const API = 'http:/192.168.1.103:9000';
  //const API = 'http:/172.16.156.100:9000';

  useEffect(() => {
    fetch(`${API}/freelances`)
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
        <SafeAreaView style={{backgroundColor: '#FFC000'}}>
          <ScrollView>
            <TouchableOpacity style={[styles.card]} onPress={() => navigation.navigate('FreelanceProfileEach',{item})}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <Image source={{uri: item.profile_pic }} style = {styles.pic} resizeMode="cover"/>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.txrName}>{ item.name }</Text>
                  <View >
                    <Text style={styles.txr}>{ item.jobTitle }</Text>
                  </View>
                    <Text style={styles.txr}>{ item.email }</Text>
                </View>
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
      <SafeAreaView style={{backgroundColor: '#FFC000', flex: 1}}>
        <View>
          <SearchBar
            round
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            placeholder="Search here"
            value={search}
          />
        </View>
        <ScrollView style={{paddingTop: 5}}>
              {
                AllUsers.map((item, key) => {
                  return(
                    <TouchableOpacity style={[styles.card]}  key={key} onPress={() => navigation.navigate('FreelanceProfileEach',{item})}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column'}}>
                          <Image source={{uri: item.profile_pic }} style = {styles.pic} resizeMode="cover"/>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                          <Text style={styles.txrName}>{ item.name }</Text>
                            <View >
                              <Text style={styles.txr}>{ item.jobTitle }</Text>
                            </View>
                          <Text style={styles.txr}>{ item.email }</Text>
                        </View>

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
      <SafeAreaView style={{backgroundColor: '#FFC000', flex: 1}}>
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
 
export default FeedEmployer

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  pic:{
    width: 80, 
    height: 80, 
    borderRadius: 15,
  },
  itemStyle: {
    padding: 10,
  },
  txr:{
    color: 'white',
    paddingRight: 5,flexDirection: 'column',
    paddingLeft: 20,
  },
  txrName:{
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 2,
    paddingVertical: 2,
    marginVertical: 5,
    paddingRight: 5,
    paddingLeft: 20,
  },
  card: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: '#36454F',
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginVertical: 4,
    alignSelf: 'center',
    borderRadius: 15,
    width: '90%',
    elevation: 5, shadowOffset: { width: 2, height: 2 }, shadowOpacity:1, shadowRadius: 2,
    
  }
});