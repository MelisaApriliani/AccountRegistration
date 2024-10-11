import { Country } from '../models/Country';
import { injectable } from 'inversify';

@injectable()
export class CountryService {
  private countries: Country[] = [
    { id: 1, code: 'US', name: 'United States', flagUrl: require('../../assets/flags/us.png' )},
    { id: 2, code: 'AF', name: 'Afghanistan', flagUrl: require('../../assets/flags/afghanistan.png') },
    { id: 3, code: 'AR', name: 'Argentina', flagUrl: require('../../assets/flags/argentina.png') },
    { id: 4, code: 'DK', name: 'Denmark', flagUrl: require('../../assets/flags/denmark.png') },
    { id: 5, code: 'DE', name: 'Germany', flagUrl: require('../../assets/flags/germany.png') },
    { id: 6, code: 'IN', name: 'India', flagUrl: require('../../assets/flags/india.png') },
    { id: 7, code: 'IT', name: 'Italy', flagUrl: require('../../assets/flags/italy.png') },
    { id: 8, code: 'JD', name: 'Jordan', flagUrl: require('../../assets/flags/jordan.png' )},
    { id: 9, code: 'MY', name: 'Malaysia', flagUrl: require('../../assets/flags/malaysia.png' )},
    { id: 10, code: 'PK', name: 'Pakistan', flagUrl: require('../../assets/flags/pakistan.png' )},
    { id: 11, code: 'SL', name: 'Sri Lanka', flagUrl: require('../../assets/flags/srilanka.png' )},
    { id: 12, code: 'SW', name: 'Switzerland', flagUrl: require('../../assets/flags/switzerland.png') },
    
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