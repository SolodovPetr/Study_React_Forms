import React from 'react';

const FormField = ({fieldData, id, change}) => {

    const showErrorMessage = () => {
        let message = null;
        const { validation, valid, validationMessage } = fieldData;

        // is validation required, not valid and has error message
        if ( validation && !valid && validationMessage ) {
            message = (
                <div className="error-label">
                    { validationMessage }
                </div>
            );
        }
        return message;
    }

    const inputTemplate = fieldData => (
        <>
            <input { ...fieldData.config }
                   value={fieldData.value}
                   className="form-control"
                   onChange={ e => change({e, id, blur: false}) }
                   onBlur={ e => change({e, id, blur: true}) }
            />
            { showErrorMessage() }
        </>
    )

    const renderTemplate = () => {
        let template = '';

        switch (fieldData.element) {
            case 'input':
                return inputTemplate(fieldData);

            default:
                return template;
        }

        return template;
    }

    return renderTemplate();
}

export default FormField;