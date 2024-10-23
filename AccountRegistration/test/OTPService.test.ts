import { OTPService } from '../src/services/OTPService'; // Adjust the path as necessary

describe('OTPService', () => {
    let otpService: OTPService;

    beforeEach(() => {
        otpService = new OTPService();
    });

    describe('sendOTP', () => {
        it('should resolve after 1 second', async () => {
            const phone = '1234567890'; 
            const startTime = Date.now();
            await otpService.sendOTP(phone);
            const endTime = Date.now();
            expect(endTime - startTime).toBeGreaterThan(1000); 
        });
    });

    describe('verifyOTP', () => {
        it('should return true for the correct OTP', async () => {
            const result = await otpService.verifyOTP('1234');
            expect(result).toBe(true);
        });

        it('should return false for an incorrect OTP', async () => {
            const result = await otpService.verifyOTP('5678');
            expect(result).toBe(false);
        });

        it('should resolve after 1.5 seconds', async () => {
            const startTime = Date.now();
            await otpService.verifyOTP('1234');
            const endTime = Date.now();
            expect(endTime - startTime).toBeGreaterThan(1500); 
        });
    });
});