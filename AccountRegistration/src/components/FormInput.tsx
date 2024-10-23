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
     <Image source={iconSource} style={styles.icon} resizeMode="contain" testID="form-input-icon" />
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
       placeholder={placeholder} 
     />
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 327,  
    height: 50, 
    marginVertical:12,
    marginHorizontal: 24, 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#DADADA', 
    backgroundColor: '#fff', 
    paddingHorizontal: 10, 
  },
  icon: {
    width: 24, 
    height: 24,
    marginRight: 10, 
  },
  input: {
    flex: 1, 
    fontSize: 16, 
    color: '#000', 
  },
});