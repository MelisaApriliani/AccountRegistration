import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import CountrySelect from './CountrySelect'; // Import your country search component
import { Country } from '../models/Country';
import { appStyles } from '../styles/styles';

interface CountryModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (country: Country) => void;
}

const CountryModal: React.FC<CountryModalProps> = ({ visible, onClose, onSelect  }) => {
  useEffect(() => {
    console.log("ENTERING MODAL COMPONENT");
  },[] );

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose} 
    >
      <View style={[appStyles.container, {justifyContent: 'flex-start'}]}>
          
        <TouchableOpacity onPress={onClose} style={styles.touchableArea}>
            <Text style={[appStyles.textBody, {textAlign: 'left',color: '#407AFF'}]}>Cancel</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={appStyles.title}>Select Country</Text>
          <CountrySelect onSelect={onSelect}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%',
  },
  touchableArea: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: '100%',
    height: 40, 
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cancelButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  countrySelect: {
    width: '100%',
    paddingHorizontal: 20, 
  },
});

export default CountryModal;