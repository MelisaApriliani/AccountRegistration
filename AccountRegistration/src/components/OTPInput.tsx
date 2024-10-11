// src/components/OtpInput.tsx
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface OtpInputProps {
    value: string;
    onChange: (index: number, text: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ value, onChange }) => {
    return (
        <View style={styles.container}>
            {Array(4).fill(null).map((_, index) => (
                <TextInput
                    key={index}
                    style={styles.otpInput}
                    value={value[index]}
                    onChangeText={(text) => onChange(index, text)}
                    keyboardType="number-pad"
                    maxLength={1}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    otpInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#DADADA',
        width: 50,
        height: 50,
        textAlign: 'center',
        fontSize: 24,
    },
});

export default OtpInput;