import React from 'react'
import { Appbar } from 'react-native-paper';

const AppBar = ({ title, searchHandler, switchDrawerHandler}) => {
    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={switchDrawerHandler}/>
            <Appbar.Content title={title} />
            <Appbar.Action icon="magnify" onPress={searchHandler}/>
        </Appbar.Header>
    );
}

export default AppBar;