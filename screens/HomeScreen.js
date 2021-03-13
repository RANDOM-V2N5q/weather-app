import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View } from 'react-native'
import AppBar from '../components/AppBar'

const HomeScreen = ({ navigation }) => {
    const [cityName, setCityName] = useState('')

    const switchDrawerHandler = () => {

    }
  
    const searchHandler = () => {
  
    }
  
    return (
      <View>
        <StatusBar style="auto" />
        <AppBar title={cityName} switchDrawerHandler={switchDrawerHandler} searchHandler={searchHandler} />
        
      </View>
    );
}
 
export default HomeScreen;