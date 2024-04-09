
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/pages/routes';
import { NavigationContainer } from '@react-navigation/native'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './src/store';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor='#f0f4ff' barStyle={'dark-content'} />
        <Routes />
      </NavigationContainer>
    </ReduxProvider>

  );
}

