
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/pages/routes';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='transparent' barStyle={'dark-content'} />
      <Routes />
    </NavigationContainer>
  );
}

