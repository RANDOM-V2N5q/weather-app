import React from 'react';
import {StyleSheet, View} from 'react-native'
import { Title, Text, Subheading, Paragraph, Headline, Caption, Switch } from 'react-native-paper';
import DrawerSwitch from './DrawerSwitch';


const DrawerContent = () => {
    return ( 
        <View style={styles.container}>
            <Title style={styles.sectionHeader}>{"Ułatwienia dostępu"}</Title>
            <DrawerSwitch text={"Dla ślepych"}/>
            <DrawerSwitch text={"Ciemny motyw"}/>
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