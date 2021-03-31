export const validate = field => {

    /**
     * @description - [ isValid, error_message ]
     * @type {array}
     */
    let valid = [ true, '' ];

    // Minimum length
    if ( field.validation.min && field.validation.min > 0 ) {
        const isValid = field.value.trim().length >= field.validation.min;
        const message =  isValid ? '' : `Minimum ${field.validation.min} char(s) required.`;
        valid = isValid ? valid : [ isValid, message ];
    }

    // Required
    if ( field.validation.required ) {
        const isValid = field.value.trim() !== '';
        const message =  isValid ? '' : 'This field is required';
        valid = isValid ? valid : [ isValid, message ];
    }

    return valid;
}