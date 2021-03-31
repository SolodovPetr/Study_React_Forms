export const validate = field => {

    /**
     * @description - [ isValid, error_message ]
     * @type {array}
     */
    let error = [ false, '' ];

    // Minimum length
    if ( field.validation.min && field.validation.min > 0 ) {
        const isValid = field.value.trim().length >= field.validation.min;
        const message =  isValid ? '' : `Minimum ${field.validation.min} char(s) required.`;
        error = isValid ? error : [ isValid, message ];
    }

    // Required
    if ( field.validation.required ) {
        const isValid = field.value.trim() !== '';
        const message =  isValid ? '' : 'This field is required';
        error = isValid ? error : [ isValid, message ];
    }

    return error;
}