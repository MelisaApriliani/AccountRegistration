// src/components/CountrySelect.tsx
import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import { CountryService } from '../services/CountryService';
import { container } from '../services//ServiceLocator';
import { Country } from '../models/Country';
import { appStyles } from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
// Adjust the import based on your folder structure


const CountrySelect: React.FC<{ onSelect: (country: Country) => void }> = ({ onSelect }) => {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true); // Loading state for fetching countries
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const countryService = container.get<CountryService>(CountryService);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const countryList = await countryService.getCountries(); // Fetch countries from the service
                if (countryList) {
                    setCountries(countryList);
                } else {
                    console.log('Default country not found');
                }
            } catch (error) {
                console.error('Failed to fetch countries:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    const filteredCountries = countries.filter(country => 
        country.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (country: Country) => {
        setSelectedCountry(country);
        onSelect(country);
    };

    if (loading) {
        return <Text>Loading...</Text>; // Optionally handle loading state
    }

    return (
        <View style={{flex:1, width:'100%'}}>
            <View style={styles.container}>
                <Icon name="search" size={15} color="#86878D"/>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Country"
                    value={search}
                    onChangeText={setSearch}
                />
            </View>
            <Text style={[appStyles.textBody, {textAlign: 'left', marginBottom:10}]}>Flags & Names</Text>
            <FlatList
                data={filteredCountries}
                keyExtractor={item => item.code}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelect(item)} style={styles.countryItem}>
                        <Image source={item.flagUrl} style={styles.countryFlag} /> 
                        <Text style={styles.countryName}>{item.name}</Text>
                        <TouchableOpacity
                            style={[styles.radioButton, selectedCountry?.id === item.id && styles.selectedRadioButton]}
                        />
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width:'100%', // Fixed width
        height: 50, // Fixed height
        borderRadius: 10, // Rounded corners
        borderWidth: 1, // Border thickness
        borderColor: '#DADADA', // Border color
        backgroundColor: '#F3F2F5', // Background color of the input field
        paddingHorizontal: 10, // Padding inside the container
        marginVertical: 20,
      },
      icon: {
        width: 15, // Adjust icon size as needed
        height: 15,
        marginRight: 25, // Space between icon and text input
      },
    searchInput: {
        flex: 1, // Take up remaining space
        fontSize: 13, // Font size
        color: '#86878D',
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    countryFlag: {
        width: 40,
        height: 30,
        marginRight: 10,
    },
    countryName: {
        flex: 1, // This allows the name to take available space
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#407aff', // Border color for unselected
        backgroundColor: 'transparent',
    },
    selectedRadioButton: {
        backgroundColor: '#407aff', // Fill color for selected
    },
    separator: {
        height: 1,
        backgroundColor: '#DADADA', // Color for separator
        width: '100%',
    },
});

export default CountrySelect;