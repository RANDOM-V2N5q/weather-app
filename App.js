import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './components/DrawerContent'
import HomeScreen from './screens/HomeScreen'

export default function App() {
  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={(nav) => <HomeScreen navigation={nav} />} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}