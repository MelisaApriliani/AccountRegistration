import { Country } from '../models/Country';
import { injectable } from 'inversify';

@injectable()
export class CountryService {
  private countries: Country[] = [
    { id: 1, code: 'US', name: 'United States', flagUrl: 'https://example.com/flags/us.png' },
    { id: 2, code: 'CA', name: 'Canada', flagUrl: 'https://example.com/flags/ca.png' },
    { id: 3, code: 'ID', name: 'Indonesia', flagUrl: 'https://example.com/flags/id.png' },
    { id: 4, code: 'UK', name: 'United Kingdom', flagUrl: 'https://example.com/flags/uk.png' },
    { id: 5, code: 'NZ', name: 'New Zealand', flagUrl: 'https://example.com/flags/nz.png' },
    // Add more countries
  ];

  // Fetch all countries
  getCountries(): Promise<Country[]> {
    return Promise.resolve(this.countries);
  }

  // Fetch country by id
  getCountryById(id: number): Promise<Country | undefined> {
    const country = this.countries.find(country => country.id === id);
    return Promise.resolve(country);
  }
}