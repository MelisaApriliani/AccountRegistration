import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { appStyles } from '../styles/styles';

const OtpVerificationScreen = () => {
  const navigation = useAppNavigation(); 
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    // Perform OTP verification logic here
   
    setLoading(true);
    navigation.navigateTo('RegistrationSuccess');
    setLoading(false);
  };

  const handleBack = () => {
    console.log("GOING BACK");
    navigation.goBack();
  };

  return (
    <View style={[appStyles.container, {justifyContent: 'flex-start'}]}>
      <TouchableOpacity style={styles.touchableArea} onPress={handleBack}>
        <Image
          source={require('../../assets/arrow-back.png')} // Make sure to replace this with your image path
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.content}>
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
        <Text style={appStyles.textBody}>Didn’t receive an OTP?{" "}
          <Text style={styles.redText} onPress={handleVerify}>
            Resend OTP
          </Text>
        </Text>
        <TouchableOpacity style={[appStyles.positiveButton, { position: 'absolute', bottom:50}]} onPress={handleVerify}>
          <Text style={appStyles.buttonText}>Verify & Proceed</Text>
        </TouchableOpacity>

        {/* Show the loading spinner */}
        {loading && (
          <View style={appStyles.loadingContainer}>
            <ActivityIndicator size={120} color="#407aff" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1, // Allow content to fill remaining space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    width: '100%', // Ensure the content takes full width
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
    marginVertical:5, // Or you can use fontFamily for specific font styles
  },
  redText:{
    color: '#FF6565',
    fontSize: 14,
    textAlign: 'center',
    marginVertical:5,
  },
  image: {
    width: 280,
    height: 280,
    marginBottom: 20,
  },
  touchableArea: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40, // Ensure there's an area for touch
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  // backIcon: {
  //   position: 'absolute',      
  //   top: 20,                   
  //   left: 20,                  
  //   width: 40,                 
  // },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    paddingHorizontal:25,
    marginVertical:20,
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