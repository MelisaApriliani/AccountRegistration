import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { FormInput } from '../src/components/FormInput'; // Adjust the path to your FormInput file
import { ImageSourcePropType } from 'react-native';

// Mock data
const mockIcon: ImageSourcePropType = require('../assets/country.png');

describe('FormInput Component', () => {
  it('renders correctly with icon and placeholder', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <FormInput
        value=""
        iconSource={mockIcon}
        placeholder="Country"
      />
    );

    // Assert that the TextInput and Image are rendered correctly
    const inputElement = getByPlaceholderText('Country');
    expect(inputElement).toBeTruthy();

    const iconElement = getByTestId('form-input-icon');
    expect(iconElement).toBeTruthy();
  });

  it('displays the correct value and calls onChangeText on input', () => {
    const mockOnChangeText = jest.fn();

    const { getByDisplayValue } = render(
      <FormInput
        value="United States"
        onChangeText={mockOnChangeText}
        iconSource={mockIcon}
        placeholder="Country"
      />
    );

    const inputElement = getByDisplayValue('United States');
    expect(inputElement).toBeTruthy();

    fireEvent.changeText(inputElement, 'Canada');
    expect(mockOnChangeText).toHaveBeenCalledWith('Canada');
  });
});