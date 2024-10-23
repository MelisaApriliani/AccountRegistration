import { CountryService } from '../src/services/CountryService'; 
import { Country } from '../src/models/Country';

describe('CountryService', () => {
    let countryService: CountryService;

    beforeEach(() => {
        countryService = new CountryService();
    });

    describe('getCountries', () => {
        it('should return all countries', async () => {
            const countries: Country[] = await countryService.getCountries();
            expect(countries).toHaveLength(12); 
            expect(countries[0]).toEqual({
                id: 1,
                code: 'US',
                name: 'United States',
                flagUrl: expect.anything(), 
            });
        });
    });

    describe('getCountryById', () => {
        it('should return the country for a valid id', async () => {
            const country: Country | undefined = await countryService.getCountryById(1);
            expect(country).toEqual({
                id: 1,
                code: 'US',
                name: 'United States',
                flagUrl: expect.anything(),
            });
        });

        it('should return undefined for an invalid id', async () => {
            const country: Country | undefined = await countryService.getCountryById(999);
            expect(country).toBeUndefined();
        });
    });
});