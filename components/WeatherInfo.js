import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import {Text} from 'react-native-paper'

const WeatherInfo = ({text, imagePath}) => {
    return ( 
        <View style={styles.container}>
            <Image style={styles.image} source={imagePath} />
            <Text style={styles.text} >{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },

    text: {
        marginLeft: 10,
        fontSize: 20
    },
    
    container: {
        flexDirection: 'row',
        alignItems: "center",
        width: "50%",
        padding: 10,
        paddingLeft: "10%"
        
    }
})
 
export default WeatherInfo;