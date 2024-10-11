import { injectable } from 'inversify';

@injectable()
export class OTPService {
  sendOTP(phone: string): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Mock sending OTP
  }

  verifyOTP(otpCode: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(otpCode === '1234'), 1500); // Mock OTP verification
    });
  }
}