import { Country } from "./Country";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    country: Country;
  }