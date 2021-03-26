import React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar, Searchbar } from 'react-native-paper';

const AppBar = ({ title, setTitle, searchHandler, switchDrawerHandler }) => {
    return (
        <Appbar.Header style={styles.header}>
            {/* <Appbar.Action icon="menu" onPress={switchDrawerHandler}/> */}
            {/* <Appbar.Content title={title} titleStyle={styles.text} /> */}
            <Searchbar
                icon="menu"
                onIconPress={switchDrawerHandler}
                style={styles.header}
                inputStyle={styles.text}
                placeholder="Podaj nazwę miasta"
                onChangeText={(query) => setTitle(query)}
                value={title}
                onEndEditing={searchHandler} />
            {/* <Appbar.Action icon="magnify" onPress={searchHandler}/> */}
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