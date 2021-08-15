import { AbstractControl } from '@angular/forms';

const forbiddenTitles = [
    'dirty',
    'curse'
];

export class CourseFormValidator {
    public static forbiddenTitle(control: AbstractControl): { forbiddenTitle: boolean} {
        if (control && control.value) {
            const forbiddenTitle = forbiddenTitles.find(title => control.value.toLowerCase() === title.toLowerCase());
            if (forbiddenTitle) {
                return {
                    forbiddenTitle: true
                };
            }
        }

        return null;
    }
}
