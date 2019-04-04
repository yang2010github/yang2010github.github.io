import { AbstractControl, ValidationErrors } from '@angular/forms';
export class PasswordValidators {
    static passwordShouldMatch (control: AbstractControl): ValidationErrors | null {
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value) {
            return {passwordShouldMatch1: true};
        }

        return null;
    }

    static matchOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '1234') {
                    resolve({matchOldPassword1: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
