import { injectable } from 'inversify';
import { User } from '../models/User';

@injectable()
export class AuthService {
  private registeredUser: User | null = null;

  register(user: User): Promise<void> {
    this.registeredUser = user;
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API call
  }

  logout(): Promise<void> {
    this.registeredUser = null;
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API call
  }

  getUser(): User | null {
    return this.registeredUser;
  }
}