import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Image, Pressable, Modal } from 'react-native';
import { FormInput } from '../components/FormInput';
import { User } from '../models/User';
import { Country } from '../models/Country';
import CountryModal  from '../components/CountrySelectionModal';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { RouteProp  } from '@react-navigation/native';
import { appStyles } from '../styles/styles';
import { RootStackParamList } from '../types/RootStackParamList';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegistrationScreen: React.FC = () => {
  const navigation = useAppNavigation(); 
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    country: {} as Country,
  });

  const handleCountrySelect = (country: Country) => { 
    console.log("handle country select:", modalVisible);
    setModalVisible(false);
    setUser((prevUser) => ({
      ...prevUser,
      ['country']: country,
    }));
  };

  useEffect(() => {
    console.log("User updated:", user);
  }, [user]);

  const { route } = useAppNavigation();
  const { params } = route as RouteProp<RootStackParamList, 'Registration'>;

  useEffect(() => {
    if (params?.resetUser) {
      // Reset user state
      setUser({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        country: {} as Country,
      });
    }
  }, [route.params]);


  const handleInputChange = <K extends keyof User>(field: K, value: User[K]) => {
    console.log("handling input change")
    console.log(`Field: ${field}, Value: ${value}`);
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log('handle submit called');
      navigation.navigateTo('OTPVerification')
      
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  const showModal = async () => {
    console.log("showing modal:", modalVisible);
    setModalVisible(true);
  };


  return (
    <View style={appStyles.container}>
      <Text style={[appStyles.title, { marginTop: 50,}]}>Create an Account</Text>
      <Text style={[appStyles.textBodySmall,styles.registrationSubTitle]}>Great to have you on board. Please start by providing us with the following info</Text>
      <FormInput
        value={user.firstName}
        onChangeText={(value) => handleInputChange('firstName', value)}
        iconSource={require('../../assets/user.png')} 
        placeholder='First Name'
      />
      <FormInput
        value={user.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
        iconSource={require('../../assets/user.png')} 
        placeholder='Last Name'
      />
        <FormInput
        
        value={user.phone}
        onChangeText={(value) => handleInputChange('phone', value)}
        iconSource={require('../../assets/phone.png')} 
        placeholder='Phone Number'
      />
      <FormInput
        
        value={user.email}
        onChangeText={(value) => handleInputChange('email', value)}
        iconSource={require('../../assets/email.png')} 
        placeholder='Email'
      />
      <FormInput
        
        value={user.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry
        iconSource={require('../../assets/password.png')} 
        placeholder='Password'
      />
      <TouchableOpacity onPress={showModal}>
        <FormInput
          value={user.country.name}
          iconSource={user.country?.flagUrl || require('../../assets/country.png')} 
          placeholder='Country'
          editable = {false}
        />
      </TouchableOpacity> 

      <TouchableOpacity style={appStyles.positiveButton} onPress={handleSubmit}>
        <Text style={appStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={[appStyles.textBodySmall, appStyles.margin20]}>Already have an account?{" "} 
        <Text style={styles.signInText} onPress={handleSubmit}>
           Sign in
        </Text>
      </Text>

      {modalVisible && (
        <CountryModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelect={(value) => handleCountrySelect(value)}
        />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  registrationSubTitle: {
    width: 290,
    marginBottom: 70,
  },
  signInText: {
    color: '#407AFF',
    fontSize: 13,
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'red', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
 
});


export default RegistrationScreen;