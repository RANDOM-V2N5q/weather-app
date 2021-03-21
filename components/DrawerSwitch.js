import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Switch, Text } from 'react-native-paper';

const DrawerItem = ({text, onValueChange, Value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Switch onValueChange={onValueChange} value={Value}/>
        </View>
    );
}

const styles = StyleSheet.create({
     container: {
         marginBottom: 10
     },
 
     text: {
         position: "absolute",
         left: 0,
         marginLeft: 20
     }
})

export default DrawerItem;