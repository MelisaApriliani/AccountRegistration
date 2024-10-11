import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useAppNavigation } from '../hooks/useAppNavigation';

const RegistrationSuccessScreen: React.FC = () => {
  const navigation = useAppNavigation(); // Assuming you have a custom hook for navigation

  const handleLogout = () => {
   
    navigation.navigateTo('Registration'); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/blue-tick.jpg')} // Make sure to replace with your icon path
        style={styles.icon}
      />
      <Text style={styles.title}>Congratulations</Text>
      <Text style={styles.subtitle}>You have successfully created your account</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: 150,
    height: 150,
    marginTop: 200,
  },
  title: {
    fontFamily: 'Inter', // Ensure you have the 'Inter' font loaded in your project
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 16,
    color: '#407aff',
    marginTop: 20, // Add margin to position the title
  },
  subtitle: {
    fontSize: 16, // Set a suitable size for the subtitle
    textAlign: 'center',
    marginVertical: 10, // Spacing around subtitle
  },
  logoutButton: {
    backgroundColor: '#FF6565',
    padding: 10,
    borderRadius: 25, // Rounded corners
    marginTop: 20,
    marginHorizontal: 24, 
    width: 327, // Width of the button
    alignItems: 'center', // Center text inside the button
  },

});

export default RegistrationSuccessScreen;