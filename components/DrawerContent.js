import React, { useContext }  from 'react';
import {StyleSheet, View} from 'react-native'
import { Title, Text, Subheading, Paragraph, Headline, Caption, Switch } from 'react-native-paper';
import DrawerSwitch from './DrawerSwitch';
import { Context } from '../components/Context'

const DrawerContent = () => {
    const {setIsDarkTheme, isDarkTheme} = useContext(Context)

    return ( 
        <View style={styles.container}>
            <Title style={styles.sectionHeader}>{"Ułatwienia dostępu"}</Title>
            <DrawerSwitch text={"Ciemny motyw"} onValueChange={() => setIsDarkTheme(val => !val)} Value={isDarkTheme}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },

    sectionHeader: {
       marginLeft: 10,
       marginBottom: 20
    },
})

export default DrawerContent;