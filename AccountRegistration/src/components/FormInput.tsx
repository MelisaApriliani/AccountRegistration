import React from 'react';
import { View, TextInput, Text, StyleSheet, ImageSourcePropType, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

interface FormInputProps {
  value: string;
  onChangeText: (text: string) => void;
  iconSource: ImageSourcePropType ;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  value,
  onChangeText,
  iconSource,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
     <Image source={iconSource} style={styles.icon} />
     <TextInput
       style={styles.input}
       placeholderTextColor="#DADADA"
       value={value}
       onChangeText={onChangeText}
       placeholder={placeholder} // Pass down all the props like placeholder, value, onChangeText, etc.
     />
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 327, // Fixed width
    height: 50, // Fixed height
    marginVertical:12,
    marginHorizontal: 24, // Margins on left and right
    borderRadius: 10, // Rounded corners
    borderWidth: 1, // Border thickness
    borderColor: '#DADADA', // Border color
    backgroundColor: '#fff', // Background color of the input field
    paddingHorizontal: 20, // Padding inside the container
  },
  icon: {
    width: 15, // Adjust icon size as needed
    height: 15,
    marginRight: 10, // Space between icon and text input
  },
  input: {
    flex: 1, // Take up remaining space
    fontSize: 16, // Font size
    color: '#000', // Text color
  },
});