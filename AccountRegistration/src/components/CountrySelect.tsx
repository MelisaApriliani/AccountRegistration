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
        console.log("country is selected", country)
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
                        <View
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
        width:'100%', 
        height: 50, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#DADADA', 
        backgroundColor: '#F3F2F5',
        paddingHorizontal: 10,
        marginVertical: 20,
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 25, 
    },
    searchInput: {
        flex: 1, 
        fontSize: 13, 
        color: '#86878D',
        marginLeft: 20,
        borderWidth: 0,
        borderColor: 'transparent',
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
    countryFlag: {
        width: 40,
        height: 30,
        marginRight: 10,
    },
    countryName: {
        flex: 1, 
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#407aff',
        backgroundColor: 'transparent',
    },
    selectedRadioButton: {
        backgroundColor: '#407aff', 
    },
    separator: {
        height: 1,
        backgroundColor: '#DADADA', 
        width: '100%',
    },
});

export default CountrySelect;