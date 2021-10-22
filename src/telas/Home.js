import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  tipografia: {
    fontFamily: 'Roboto',
    color: '#425501'
  }
});
