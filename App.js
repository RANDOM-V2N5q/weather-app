import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppBar from './components/AppBar'

export default function App() {
  const [cityName, setCityName] = useState('')

  const switchDrawerHandler = () => {

  }

  const searchHandler = () => {

  }

  return (
      <PaperProvider>
        <StatusBar style="auto" />
        <AppBar title={cityName} switchDrawerHandler={switchDrawerHandler} searchHandler={searchHandler} />
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  
});
