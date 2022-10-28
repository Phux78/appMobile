import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';    


export default function RegisterScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text>RegisterScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})