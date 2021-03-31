import React, { Component } from 'react';

import FormField from '../utils/FormField';
import { validate } from '../utils/validate';

export default class FormFour extends Component {

    state = {
        loading: false,
        formData: {
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
            },
            lastname: {
                element: 'input',
                value: '',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your last name'
                },
                validation: {
                    required: true,
                    min: 4
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
        this.setState({ formData: newFormData });

        return newFieldData;
    }

    submitForm = e => {
        e.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;
        const { formData } = this.state;

        for ( let key in formData ) {
            formIsValid = formData[key].valid && formIsValid;
        }

        if ( formIsValid ) {
            this.setState({ loading: true });
            // collect fields data
            for( let key in formData ) {
                dataToSubmit[key] =  formData[key].value
            }

            // save data to db etc.
            console.log('Submitted data:', dataToSubmit);

            // emulate server request
            setTimeout(() => {
                this.setState({ loading: false });
                this.onSuccess();
            }, 1000);

        } else {
            // Show fields errors
            let checkedFormData = {};
            for( let key in formData ) {
                const element = { e:{target:{value: formData[key].value}}, id: key, blur: true };
                checkedFormData[key] = this.updateForm(element);
            }
            this.setState({formData: checkedFormData})
            alert('Sorry, the form is not valid')
        }
    }

    onSuccess = () => {
        let formDataCopy = { ...this.state.formData }

        // set data to default
        for ( let key in this.state.formData ) {
            formDataCopy[key].value = '';
            formDataCopy[key].valid = false;
            formDataCopy[key].touched = false;
            formDataCopy[key].validationMessage = '';
        }
        this.setState({ formData: formDataCopy });
        alert('Thank you');
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

                    <div className="form-group">
                        <label htmlFor="name">Lastname</label>
                        <FormField id="lastname"
                                   fieldData={this.state.formData.lastname}
                                   change={ this.updateForm }
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={ e => this.submitForm(e) }
                        disabled={this.state.loading}
                    >
                        Submit
                    </button>

                </form>
            </div>
        )
    }
}
