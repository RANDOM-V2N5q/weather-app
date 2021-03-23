import React, { useState, useMemo } from 'react';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import DrawerContent from './components/DrawerContent'
import HomeScreen from './screens/HomeScreen'
import { Context } from './components/Context'

export default function App() {
  const Drawer = createDrawerNavigator()

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const contextFunctions = {isDarkTheme, setIsDarkTheme}

  return (
    <Context.Provider value={contextFunctions}>
      <PaperProvider theme={(isDarkTheme) ? PaperDarkTheme : {...PaperDefaultTheme, colors: {...PaperDefaultTheme.colors, background: "#ddd"}}}>
        <NavigationContainer theme={(isDarkTheme) ? DarkTheme : {...DefaultTheme, colors: {...DefaultTheme.colors, background: "#ddd", card: "#ddd"}}}>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Context.Provider>
  );
}