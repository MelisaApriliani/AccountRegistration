import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { appStyles } from '../styles/styles';

const RegistrationSuccessScreen: React.FC = () => {
  const navigation = useAppNavigation(); // Assuming you have a custom hook for navigation

  const handleLogout = () => {
   
    navigation.navigateTo('Registration'); 
  };

  return (
    <View style={appStyles.container}>
      <Image
        source={require('../../assets/blue-tick.jpg')} // Make sure to replace with your icon path
        style={styles.icon}
      />
      <Text style={appStyles.title2}>Congratulations</Text>
      <Text style={appStyles.subtitle}>You have successfully created your account</Text>
      <TouchableOpacity style={appStyles.redButton} onPress={handleLogout}>
        <Text style={appStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
});

export default RegistrationSuccessScreen;