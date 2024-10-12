import React from 'react';
import { View, TextInput, Text, StyleSheet, ImageSourcePropType, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

interface FormInputProps {
  value: string;
  onChangeText?: (text: string) => void;
  iconSource: ImageSourcePropType ;
  placeholder?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  value,
  onChangeText,
  iconSource,
  placeholder,
  secureTextEntry = false,
  editable = true,
}) => {
  return (
    <View style={styles.container}>
     <Image source={iconSource} style={styles.icon} resizeMode="contain"  />
     <TextInput
       style={styles.input}
       placeholderTextColor="#DADADA"
       value={value}
       onChangeText={(text) => {
        console.log('TextInput onChangeText:', text);
        if (onChangeText) {
          onChangeText(text);
        }
      }}
       editable = {editable}
       placeholder={placeholder} // Pass down all the props like placeholder, value, onChangeText, etc.
     />
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 327,  // Fixed width
    height: 50, // Fixed height
    marginVertical:12,
    marginHorizontal: 24, // Margins on left and right
    borderRadius: 10, // Rounded corners
    borderWidth: 1, // Border thickness
    borderColor: '#DADADA', // Border color
    backgroundColor: '#fff', // Background color of the input field
    paddingHorizontal: 10, // Padding inside the container
  },
  icon: {
    width: 24, // Adjust icon size as needed
    height: 24,
    marginRight: 10, // Space between icon and text input
  },
  input: {
    flex: 1, // Take up remaining space
    fontSize: 16, // Font size
    color: '#000', // Text color
  },
});