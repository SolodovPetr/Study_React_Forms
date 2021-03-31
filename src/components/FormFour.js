import React, { Component } from 'react';

import FormField from '../utils/FormField';
import { validate } from '../utils/validate';

export default class FormFour extends Component {

    state = {
        formData: {
            loading: false,
            name: {
                element: 'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true,
                    min: 3
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = field => {
        const newFormData = { ...this.state.formData };
        const newFieldData = { ...newFormData[field.id] };
        // set field value on input change
        newFieldData.value = field.e.target.value;

        // validation
        const [ isValid, validationMessage ] = validate(newFieldData);
        newFieldData.valid = isValid;
        newFieldData.validationMessage = validationMessage;

        // set touched on blur
        if (field.blur) {
            newFieldData.touched = field.blur;
        }

        newFormData[field.id] = newFieldData;

        this.setState({
            formData: newFormData
        })
    }

    render() {
        return (
            <div className="container mt-2">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <FormField id="name"
                                   fieldData={this.state.formData.name}
                                   change={ this.updateForm }
                        />
                    </div>
                </form>
            </div>
        )
    }
}
