import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { FormInput } from '../components/FormInput';
import { container } from '../services//ServiceLocator';
import { AuthService } from '../services/AuthService';
import { CountryService } from '../services/CountryService';
import { User } from '../models/User';
import { Country } from '../models/Country';
import { useNavigation } from '@react-navigation/native';
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';

const RegistrationScreen: React.FC = () => {
  const navigation = useNavigation(); 
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    country: {} as Country,
  });

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

  const handleInputChange = (field: keyof User, value: string) => {
    setUser({ ...user, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      await authService.register(user);
    //   navigation.navigate('OtpScreen');
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <FormInput
        label="First Name"
        value={user.firstName}
        onChangeText={(value) => handleInputChange('firstName', value)}
        iconName="user"
      />
      <FormInput
        label="Last Name"
        value={user.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
        iconName="user"
      />
      <FormInput
        label="Phone"
        value={user.phone}
        onChangeText={(value) => handleInputChange('phone', value)}
        iconName="phone"
      />
      <FormInput
        label="Email"
        value={user.email}
        onChangeText={(value) => handleInputChange('email', value)}
        iconName="envelope"
      />
      <FormInput
        label="Password"
        value={user.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry
        iconName="lock"
      />
      <FormInput
        label="Country"
        value={user.country.name}
        onChangeText={(value) => handleInputChange('country', value)}
        iconName="globe"
      />
      <Button title="Sign Up" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default RegistrationScreen;