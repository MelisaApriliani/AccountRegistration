import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useAppNavigation } from '../hooks/useAppNavigation';

const OtpVerificationScreen = () => {
  const navigation = useAppNavigation(); 
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleVerify = () => {
    // Perform OTP verification logic here
    navigation.navigateTo('RegistrationSuccess');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/otp.png')} style={styles.image} />
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter the OTP sent to <Text style={styles.boldText}>+234-7087139241</Text></Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => {
              const newOtp = [...otp];
              newOtp[index] = text;
              setOtp(newOtp);
            }}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <Text>Didn’t receive an OTP?</Text>
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify & Proceed</Text>
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
  boldText: {
    fontWeight: 'bold', // Or you can use fontFamily for specific font styles
  },
  image: {
    width: 280,
    height: 280,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    marginBottom: 16,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 8,
    width: 40,
    height: 40,
    textAlign: 'center',
    
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    alignItems: 'center',
    width: 327, // Fixed width
    height: 50, // Fixed height
    marginVertical:12,
    marginHorizontal: 24, // Margins on left and right
    borderRadius: 25, // Rounded corners
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default OtpVerificationScreen;