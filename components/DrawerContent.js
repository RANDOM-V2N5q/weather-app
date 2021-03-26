import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper';
import DrawerSwitch from './DrawerSwitch';
import { Context } from '../components/Context'

const DrawerContent = () => {
    const { setDarkTheme, darkTheme } = useContext(Context)

    return (
        <View style={styles.container}>
            <Title style={styles.sectionHeader}>{"Personalizacja"}</Title>
            <DrawerSwitch text={"Ciemny motyw"} onValueChange={() => setDarkTheme(val => !val)} value={darkTheme} />
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