import React from 'react';
import { TouchableOpacity, Text } from 'react-native'; 
import { render, fireEvent, waitFor} from '@testing-library/react-native';
import CountryModal from '../src/components/CountrySelectionModal';
import { Country } from '../src/models/Country';

// Mock CountrySelect component
jest.mock('../src/components/CountrySelect', () => {
    return (props: { onSelect: (country: Country) => void }) => {
        const { onSelect } = props;

        const MockedComponent = () => {
            const { TouchableOpacity, Text } = require('react-native');

            return (
                <TouchableOpacity
                    onPress={() => onSelect({
                        id: 1,
                        code: 'US',
                        name: 'United States',
                        flagUrl: require('../assets/flags/us.png'),
                    })}>
                    <Text>Select United States</Text>
                </TouchableOpacity>
            );
        };

        return <MockedComponent />;
    };
});

// Test suite for CountryModal
describe('CountryModal', () => {
    const mockOnClose = jest.fn();
    const mockOnSelect = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly when visible', () => {
        const { getByText } = render(
            <CountryModal visible={true} onClose={mockOnClose} onSelect={mockOnSelect} />
        );

        expect(getByText('Select Country')).toBeTruthy();
        expect(getByText('Cancel')).toBeTruthy();
    });

    it('calls onClose when cancel button is pressed', () => {
        const { getByText } = render(
            <CountryModal visible={true} onClose={mockOnClose} onSelect={mockOnSelect} />
        );

        fireEvent.press(getByText('Cancel'));
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('calls onSelect when a country is selected', async () => {
        const { getByText } = render(
            <CountryModal visible={true} onClose={mockOnClose} onSelect={mockOnSelect} />
        );

        // Simulate selecting a country
        fireEvent.press(getByText('Select United States'));

        await waitFor(() => {
            expect(mockOnSelect).toHaveBeenCalledWith({
                id: 1,
                code: 'US',
                name: 'United States',
                flagUrl: require('../assets/flags/us.png'),
            });
        });
    });
});