import React from 'react'
import {StyleSheet} from 'react-native'
import { Appbar } from 'react-native-paper';

const AppBar = ({ title, searchHandler, switchDrawerHandler}) => {
    return (
        <Appbar.Header style={styles.header}>
            <Appbar.Action icon="menu" onPress={switchDrawerHandler}/>
            <Appbar.Content title={title} titleStyle={styles.text} />
            <Appbar.Action icon="magnify" onPress={searchHandler}/>
        </Appbar.Header>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'transparent',
        elevation: 0
    },

    text: {
        textAlign: "center",
    }
})

export default AppBar;