import React from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from "yup";

const FormThree = () => {

    const formikProps = {
        initialValues: {
            firstname: '',
            color: 'green'
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .required('Required')
                .min(2, 'Too Short!'),
            color: Yup.string()
                .required('Color is Required!')

        }),
        onSubmit: values => console.log('Submit', values)
    }

    return (
        <Formik { ...formikProps }>
            <div className="container">
                <div className="col-md-12 mt-5">
                    <Form>
                        <div>
                            <label htmlFor="firstname">First name</label>
                            <Field className="form-control" type="text" name="firstname" />
                            <ErrorMessage name='firstname' />
                        </div>

                        <div>
                            <label htmlFor="color">Color</label>
                            <Field name="color" as="select" className="form-control">
                                <option value="">-- Your choice --</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                            <ErrorMessage name='color' />
                        </div>

                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
        </Formik>
    )
}

export default FormThree;
