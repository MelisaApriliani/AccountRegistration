import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { appStyles } from '../styles/styles';

const OtpVerificationScreen = () => {
  const navigation = useAppNavigation(); 
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleVerify = () => {
    // Perform OTP verification logic here
    navigation.navigateTo('RegistrationSuccess');
  };

  return (
    <View style={appStyles.container}>
      <Image source={require('../../assets/otp.png')} style={styles.image} />
      <Text style={appStyles.title}>OTP Verification</Text>
      <Text style={appStyles.textBody}>Enter the OTP sent to <Text style={[styles.boldText]}>+234-7087139241</Text></Text>
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
      <Text style={appStyles.textBody}>Didn’t receive an OTP?</Text>
      <TouchableOpacity style={appStyles.positiveButton} onPress={handleVerify}>
        <Text style={appStyles.buttonText}>Verify & Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  boldText: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
    marginVertical:5, // Or you can use fontFamily for specific font styles
  },
  image: {
    width: 280,
    height: 280,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft:50,
    marginRight:50,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 8,
    width: 40,
    height: 40,
    textAlign: 'center',
    
  },
});

export default OtpVerificationScreen;