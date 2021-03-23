import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback, Keyboard, Button } from 'react-native'
import AppBar from '../components/AppBar'
import {Text} from 'react-native-paper'
import WeatherInfo from '../components/WeatherInfo'
import { days } from '../Strings/Days'
import { months } from '../Strings/Months'
import { Context } from '../components/Context'

const HomeScreen = ({ navigation }) => {
    const APIkey = "3bd15a07a0927e0dd53521dcf50e5e67"
    const [cityName, setCityName] = useState('')
    const [time, setTime] = useState('')
    const [temperature, setTemperature] = useState('')
    const [minTemp, setMinTemp] = useState('')
    const [maxTemp, setMaxTemp] = useState('')
    const [weatherDescription, setWeatherDescription] = useState('')
    const [weatherIcon, setWeatherIcon] = useState('')
    const [sunset, setSunset] = useState('')
    const [sunrise, setSunrise] = useState('')
    const [pressure, setPressure] = useState('')
    const [wind, setWind] = useState('')
    const [humidity, setHumidity] = useState('')
    const [clouds, setClouds] = useState('')
    const [responseFail, setResponseFail] = useState(true)

    const {isDarkTheme} = useContext(Context)

    const switchDrawerHandler = () => {
      navigation.toggleDrawer()
      Keyboard.dismiss()
    }
  
    const searchHandler = () => {
      if(cityName != "") {
        fetchData()
      }
    }

    const fetchData = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pl&appid=${APIkey}`)
      .then((response) => {
        console.log(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pl&appid=${APIkey}`)
        if(response.status == 404 || response.status == 400) {
          setResponseFail(true)
        }
        return response.json()
      })
      .then((json) => {
        if(json.cod != "404" && json.cod != "400") {
          var date = new Date((json.dt+json.timezone)*1000)
          var day = days[date.getDay()]
          var monthDay = date.getDate()
          var month = months[date.getMonth()]
          var hours = "0" + date.getHours()
          var minutes = "0" + date.getMinutes()
          var timeString = day + ", " + monthDay + " " + month + " " + hours.substr(-2) + ":" + minutes.substr(-2)
          setTime(timeString)
          setTemperature(parseInt(json.main.temp) + "°")
          setMinTemp(parseInt(json.main.temp_min) + "°C")
          setMaxTemp(parseInt(json.main.temp_max) + "°C")
          setWeatherDescription(json.weather[0].description)
          setWeatherIcon("http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png")
          setSunset(new Date(json.sys.sunset*1000).getHours() + ":" + ("0" + new Date(json.sys.sunset*1000).getMinutes()).substr(-2))
          setSunrise(new Date(json.sys.sunrise*1000).getHours() + ":" + ("0" + new Date(json.sys.sunrise*1000).getMinutes()).substr(-2))
          setPressure(json.main.pressure + " hPa")
          setWind(json.wind.speed + " m/s")
          setHumidity(json.main.humidity + " %")
          setClouds(json.clouds.all + " %")
          setResponseFail(false)
        }
      })
      .catch((error) => {
        console.error(error);
      })
    }

    var content = <Text style={styles.noCity}>{"Nie znaleziono miasta"}</Text>
    if(!responseFail) {
      content = (
        <View>
          <Text style={styles.time}>{time}</Text>
          <View style={styles.weather}>
            <Image style={styles.weatherImage} source={{uri: weatherIcon}}/>
            <Text style={styles.weatherDescription}>{weatherDescription}</Text>
          </View>
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperature}>{temperature}</Text>
            <View style={styles.minMaxTemperatureContainer}>
              <Text style={[styles.minMaxTemperature, isDarkTheme ? styles.borderBottomWhite : styles.borderBottomBlack]}>{maxTemp}</Text>
              <Text style={styles.minMaxTemperature}>{minTemp}</Text>
            </View>
          </View>
          {isDarkTheme && (
            <View style={styles.weatherInfoContainer}>
              <WeatherInfo text={sunrise} imagePath={require('../icons/darkTheme/sunrise.png')}/>
              <WeatherInfo text={sunset} imagePath={require('../icons/darkTheme/sunset.png')}/>
              <WeatherInfo text={pressure} imagePath={require('../icons/darkTheme/atmospheric-pressure.png')}/>
              <WeatherInfo text={wind} imagePath={require('../icons/darkTheme/wind.png')}/>
              <WeatherInfo text={humidity} imagePath={require('../icons/darkTheme/humidity.png')}/>
              <WeatherInfo text={clouds} imagePath={require('../icons/darkTheme/cloud.png')}/>
            </View>
          )}
          {!isDarkTheme && (
            <View style={styles.weatherInfoContainer}>
              <WeatherInfo text={sunrise} imagePath={require('../icons/lightTheme/sunrise.png')}/>
              <WeatherInfo text={sunset} imagePath={require('../icons/lightTheme/sunset.png')}/>
              <WeatherInfo text={pressure} imagePath={require('../icons/lightTheme/atmospheric-pressure.png')}/>
              <WeatherInfo text={wind} imagePath={require('../icons/lightTheme/wind.png')}/>
              <WeatherInfo text={humidity} imagePath={require('../icons/lightTheme/humidity.png')}/>
              <WeatherInfo text={clouds} imagePath={require('../icons/lightTheme/cloud.png')}/>
            </View>
          )}
        </View>
      )
    }
    else {
      content = <Text style={styles.noCity}>{"Nie znaleziono miasta"}</Text>
    }
  
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar style={isDarkTheme ? "light" : "dark"} />
          <AppBar title={cityName} setTitle={setCityName} switchDrawerHandler={switchDrawerHandler} searchHandler={searchHandler} />
          {content}
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  weatherDescription: {
    fontSize: 20,
    includeFontPadding: false,
    lineHeight: 30,
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

  borderBottomBlack: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  borderBottomWhite: {
    borderBottomColor: "white",
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
  },

  noCity: {
    textAlign: "center",
  }
})
 
export default HomeScreen;