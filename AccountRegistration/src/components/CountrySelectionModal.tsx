import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import CountrySelect from './CountrySelect'; // Import your country search component
import { Country } from '../models/Country';

interface CountryModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (country: Country) => void;
}

const CountryModal: React.FC<CountryModalProps> = ({ visible, onClose, onSelect  }) => {
    useEffect(() => {
        console.log("ENTERING MODAL COMPONENT");
      }, );

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose} // Close modal when back button is pressed
    >
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Select Country</Text>

        {/* Cancel Button */}
        <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        {/* Country List Search Component */}
        <CountrySelect onSelect={onSelect}/>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the whole screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cancelButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  cancelText: {
    color: 'blue',
    fontSize: 18,
  },
});

export default CountryModal;