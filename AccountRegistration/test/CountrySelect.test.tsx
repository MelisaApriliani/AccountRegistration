import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CountrySelect from '../src/components/CountrySelect';
import { CountryService } from '../src/services/CountryService';
import { container } from '../src/services/ServiceLocator';
import { Country } from '../src/models/Country';

// Mock service
jest.mock('../src/services/ServiceLocator', () => ({
  container: {
    get: jest.fn(),
  },
}));

describe('CountrySelect Component', () => {
  const mockOnSelect = jest.fn();
  
  // mock countries
  const mockCountries: Country[] = [
    {
      id: 1,
      code: 'US',
      name: 'United States',
      flagUrl: require('../assets/flags/us.png'), 
    },
    {
      id: 2,
      code: 'AF',
      name: 'Afghanistan',
      flagUrl: require('../assets/flags/afghanistan.png'),
    },
    {
      id: 3,
      code: 'AR',
      name: 'Argentina',
      flagUrl: require('../assets/flags/argentina.png'),
    },
  ];

  beforeEach(() => {
    // Mock CountryService to return the mockCountries list
    (container.get as jest.Mock).mockReturnValue({
      getCountries: jest.fn().mockResolvedValue(mockCountries),
    });
  });

  jest.setTimeout(10000);

  it('renders country list and allows selecting a country', async () => {
    const { getByPlaceholderText, getByText, getAllByText } = render(
      <CountrySelect onSelect={mockOnSelect} />
    );

    await waitFor(() => expect(getByText('Flags & Names')).toBeTruthy());

    // Check that the countries are displayed
    expect(getByText('United States')).toBeTruthy();
    expect(getByText('Afghanistan')).toBeTruthy();
    expect(getByText('Argentina')).toBeTruthy();

    // Simulate searching for 'Afghanistan'
    const searchInput = getByPlaceholderText('Search Country');
    fireEvent.changeText(searchInput, 'Afghanistan');

    // Verify only 'Afghanistan' is displayed after search
    expect(getByText('Afghanistan')).toBeTruthy();
    expect(() => getByText('United States')).toThrow();
    expect(() => getByText('Argentina')).toThrow();

    const countryItem = getByText('Afghanistan');
    fireEvent.press(countryItem);

    // Verify that onSelect was called with the correct country
    expect(mockOnSelect).toHaveBeenCalledWith(mockCountries[1]);
  });
});