import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import AppBar from '../components/AppBar'
import {Text} from 'react-native-paper'
import WeatherInfo from '../components/WeatherInfo'
import { days } from '../Strings/Days'
import { months } from '../Strings/Months'

const HomeScreen = ({ navigation }) => {
    const APIkey = "3bd15a07a0927e0dd53521dcf50e5e67"
    const [cityName, setCityName] = useState('Gliwice')
    const [time, setTime] = useState('niedziela, 7 marca 20:21')
    const [temperature, setTemperature] = useState('25°')
    const [minTemp, setMinTemp] = useState('20°')
    const [maxTemp, setMaxTemp] = useState('25°')
    const [weatherDescription, setWeatherDescription] = useState('kilka chmur')
    const [weatherIcon, setWeatherIcon] = useState('http://openweathermap.org/img/wn/10d@2x.png')
    const [sunset, setSunset] = useState('7:00')
    const [sunrise, setSunrise] = useState('17:00')
    const [pressure, setPressure] = useState('1015 hPa')
    const [wind, setWind] = useState('99 m/s')
    const [humidity, setHumidity] = useState('100 %')
    const [clouds, setClouds] = useState('100 %')
    const [responseFail, setResponseFail] = useState(false)

    const switchDrawerHandler = () => {
      navigation.toggleDrawer()
      Keyboard.dismiss()
    }
  
    const searchHandler = () => {
      
    }

    const fetchData = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pl&appid=${APIkey}`)
      .then((response) => {
        console.log(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pl&appid=${APIkey}`)
        if(response.status == 404) {
          setResponseFail(true)
        }
        return response.json()
      })
      .then((json) => {
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
      })
      .catch((error) => {
        console.error(error);
      })
    }

    useEffect(() => {
      Keyboard.addListener("keyboardDidHide", () => {
        fetchData()
      })
    }, [])

    var content = <Text>{"Nie znaleziono miasta"}</Text>
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
              <Text style={[styles.minMaxTemperature, styles.borderBottom]}>{maxTemp}</Text>
              <Text style={styles.minMaxTemperature}>{minTemp}</Text>
            </View>
          </View>
          <View style={styles.weatherInfoContainer}>
            <WeatherInfo text={sunrise} imagePath={require('../icons/sunrise.png')}/>
            <WeatherInfo text={sunset} imagePath={require('../icons/sunset.png')}/>
            <WeatherInfo text={pressure} imagePath={require('../icons/atmospheric-pressure.png')}/>
            <WeatherInfo text={wind} imagePath={require('../icons/wind.png')}/>
            <WeatherInfo text={humidity} imagePath={require('../icons/humidity.png')}/>
            <WeatherInfo text={clouds} imagePath={require('../icons/cloud.png')}/>
          </View>
        </View>
      )
    }
    else {
      content = <Text>{"Nie znaleziono miasta"}</Text>
    }
  
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar style="auto" />
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