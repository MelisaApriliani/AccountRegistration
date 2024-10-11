import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Image, Pressable, Modal } from 'react-native';
import { FormInput } from '../components/FormInput';
import { container } from '../services//ServiceLocator';
import { AuthService } from '../services/AuthService';
import { CountryService } from '../services/CountryService';
import { User } from '../models/User';
import { Country } from '../models/Country';
import CountryModal  from '../components/CountrySelectionModal';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { appStyles } from '../styles/styles';

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
    setUser((prevUser) => ({ ...prevUser, country: country }));
    setModalVisible(false); // Close modal after selecting a country
  };

  const authService = container.get<AuthService>(AuthService);
  const countryService = container.get<CountryService>(CountryService);

  useEffect(() => {
    const fetchDefaultCountry = async () => {
        const defaultCountry = await countryService.getCountryById(1);
        if (defaultCountry) {
          setUser((prevUser) => ({ ...prevUser, country: defaultCountry }));
        } else {
          console.log('Default country not found');
        }
      };
  
      fetchDefaultCountry();
  }, [countryService]);

  useEffect(() => {
    console.log("MODAL VISIBLE:", modalVisible);
  }, [modalVisible]);

  const handleInputChange = (field: keyof User, value: string) => {
    setUser({ ...user, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      console.log('handle submit called');
      await authService.register(user);
      navigation.navigateTo('OTPVerification');
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  const showModal = async () => {
   
    setModalVisible(true);
  };


  return (
    <View style={appStyles.container}>
      <Text style={[appStyles.title, styles.registrationTitle]}>Create an Account</Text>
      <Text style={[appStyles.textBodySmall,styles.registrationSubTitle]}>Great to have you on board. Please start by providing us with the following info</Text>
      <FormInput
        
        value={user.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
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
          onChangeText={(value) => handleInputChange('country', value)}
          iconSource={require('../../assets/country.png')} 
          placeholder='Country'
          
        />
      </TouchableOpacity>
      {/* <Button title="Sign Up" onPress={handleSubmit} /> */}
      {/* <TouchableOpacity style={styles.button} onPress={showModal}>
        <Text style={styles.buttonText}>Show Modal</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={appStyles.positiveButton} onPress={handleSubmit}>
        <Text style={appStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={[appStyles.textBodySmall, appStyles.margin20]}>Already have an account?{" "} 
        <Text style={styles.signInText} onPress={handleSubmit}>
           Sign in
        </Text>
      </Text>

      <CountryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleCountrySelect}
      />

   

      {/* <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setModalVisible(false)} // For Android back button
      >
        <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text>Select a Country</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
        </View>
      </Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1, // Allows the container to grow and fill available space
  //   // flexDirection: 'column', // Stack children vertically
  //   justifyContent: 'center', // Center children vertically
  //   alignItems: 'center', // Center children horizontally
  //   padding: 20,
  //   backgroundColor: '#fff',
  // },
  registrationTitle: {
    marginTop: 50,
  },
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
    backgroundColor: 'red', // Semi-transparent background to cover screen
    justifyContent: 'center', // Center modal vertically
    alignItems: 'center', // Center modal horizontally
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