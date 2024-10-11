import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { appStyles } from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegistrationSuccessScreen: React.FC = () => {
  const navigation = useAppNavigation(); // Assuming you have a custom hook for navigation

  const handleLogout = () => {
   
    navigation.navigateTo('Registration'); 
  };

  return (
    <View style={appStyles.container}>
      {/* <Image
        source={require('../../assets/blue-tick.jpg')} // Make sure to replace with your icon path
        style={styles.icon}
      /> */}
      <View style={styles.iconContainer}>
        <Icon name="check" size={100} color="#fff"/>
      </View>
      <Text style={[appStyles.title, { marginTop: 90, color: '#407aff' }]}>Congratulations</Text>
      <Text style={appStyles.textBody}>You have successfully created your account</Text>
      <TouchableOpacity style={[appStyles.redButton,{ position: 'absolute', bottom:50}]} onPress={handleLogout}>
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
  
  iconContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#407aff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegistrationSuccessScreen;