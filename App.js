import React, { useState } from 'react';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import DrawerContent from './components/DrawerContent'
import HomeScreen from './screens/HomeScreen'
import { Context } from './components/Context'

export default function App() {
  const Drawer = createDrawerNavigator()

  const [darkTheme, setDarkTheme] = useState(false)

  const contextData = { darkTheme, setDarkTheme }

  return (
    <Context.Provider value={contextData}>
      <PaperProvider theme={(darkTheme) ? PaperDarkTheme : { ...PaperDefaultTheme, colors: { ...PaperDefaultTheme.colors, background: "#ddd" } }}>
        <NavigationContainer theme={(darkTheme) ? DarkTheme : { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: "#ddd", card: "#ddd" } }}>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Context.Provider>
  );
}