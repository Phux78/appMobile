import { View, Text, Image, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1, backgroundColor: '#28282B'}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#28282B'}}>
        <ImageBackground source={require('../pic/greyfadeTop.png')} style={{padding:20}}>
            <View style={{height: 80, width: 80, borderRadius: 40, marginBottom: 30}}></View>
        </ImageBackground>
        <DrawerItemList {...props}
  labelStyle={{ color: 'red' }}
/>
<View style={{height: 80, width: 80, borderRadius: 40, marginBottom: 60}}></View>

        <ImageBackground source={require('../pic/greyfadeBot.png')} style={{padding:20}}>
            <View style={{height: 80, width: 80, borderRadius: 40, marginBottom: 30}}></View>
        </ImageBackground>
        <View>
            <Text style={{color: 'white'}}>Version 1.0</Text>
        </View>
    </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;