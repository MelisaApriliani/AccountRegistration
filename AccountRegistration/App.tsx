import React from 'react';
import 'reflect-metadata';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './src/screens/RegistrationScreen'
import OtpVerificationScreen from './src/screens/OtpVerificationScreen'
import RegistrationSuccessScreen from './src/screens/RegistrationSuccessScreen'
import { RootStackParamList } from './src/types/RootStackParamList';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration" screenOptions={{headerShown: false, }}>
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="OTPVerification" component={OtpVerificationScreen} />
        <Stack.Screen name="RegistrationSuccess" component={RegistrationSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});