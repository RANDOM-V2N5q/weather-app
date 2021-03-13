import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AppBar from '../components/AppBar'
import {Text} from 'react-native-paper'
import WeatherInfo from '../components/WeatherInfo'

const HomeScreen = ({ navigation }) => {
    const [cityName, setCityName] = useState('Gliwice')
    const [time, setTime] = useState('niedziela, 7 marca 20:21')
    const [temperature, setTemperature] = useState('25°')

    const switchDrawerHandler = () => {

    }
  
    const searchHandler = () => {
  
    }
  
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AppBar title={cityName} switchDrawerHandler={switchDrawerHandler} searchHandler={searchHandler} />
          <Text style={styles.time}>{time}</Text>
          <View style={styles.weather}>
            <Image style={styles.weatherImage} source={{uri: "http://openweathermap.org/img/wn/10d@2x.png"}}/>
            <Text style={styles.weatherDescription}>{"kilka chmur"}</Text>
          </View>
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperature}>{temperature}</Text>
            <View style={styles.minMaxTemperatureContainer}>
              <Text style={[styles.minMaxTemperature, styles.borderBottom]}>{"28°C"}</Text>
              <Text style={styles.minMaxTemperature}>{"23°C"}</Text>
            </View>
          </View>
          <View style={styles.weatherInfoContainer}>
            <WeatherInfo text={"7:00"} imagePath={require('../icons/sunrise.png')}/>
            <WeatherInfo text={"18:00"} imagePath={require('../icons/sunset.png')}/>
            <WeatherInfo text={"1015 hPa"} imagePath={require('../icons/atmospheric-pressure.png')}/>
            <WeatherInfo text={"99 m/s"} imagePath={require('../icons/wind.png')}/>
            <WeatherInfo text={"100 %"} imagePath={require('../icons/humidity.png')}/>
            <WeatherInfo text={"100 %"} imagePath={require('../icons/cloud.png')}/>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
  weatherDescription: {
    fontSize: 30,
    includeFontPadding: false,
    lineHeight: 30
  },

  temperatureContainer: {
    flexDirection: "row",
    width: "100%",
  },

  minMaxTemperatureContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: "30%",
    justifyContent: "center"
  },

  minMaxTemperature: {
    padding: 10,
    fontSize: 20
  },

  borderBottom: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  container: {
    height: "100%",
  },

  weather: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  weatherInfoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  time: {
    textAlign: "center",
    marginBottom: 50
  },

  temperature: {
    fontSize: 150,
    width: "70%",
    textAlign: "center",
    includeFontPadding: false,
    lineHeight: 150,
  },

  weatherImage: {
    width: 100,
    height: 100
  }
})
 
export default HomeScreen;