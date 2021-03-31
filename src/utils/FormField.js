import React from 'react';

const FormField = ({fieldData, id, change}) => {

    const renderTemplate = () => {
        let template = '';

        switch (fieldData.element) {

            case 'input':
                return (
                    <input { ...fieldData.config }
                           value={fieldData.value}
                           className="form-control"
                           onChange={ e => change({e, id, blur: false}) }
                           onBlur={ e => change({e, id, blur: true}) }
                    />
                );

            default:
                return template;
        }

        return template;
    }

    return renderTemplate();

}

export default FormField;