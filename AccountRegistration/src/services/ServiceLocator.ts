import { Container } from 'inversify';
import 'reflect-metadata';
import { AuthService } from '../services/AuthService';
import { CountryService } from '../services/CountryService';
import { OTPService } from '../services/OTPService';

const container = new Container();

container.bind<AuthService>(AuthService).toSelf();
container.bind<CountryService>(CountryService).toSelf();
container.bind<OTPService>(OTPService).toSelf();

export { container };