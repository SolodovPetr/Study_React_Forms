import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormOne = () => {

    return (
        <div className="container">
            <div className="col-md-12 mt-5">
                <Formik
                    initialValues={{
                        firstname: '',
                        lastname: '',
                        email: '',
                        country: '',
                        state: '',
                        zip: ''
                    }}

                    validationSchema={
                        Yup.object({
                            firstname: Yup.string()
                                .min(2, 'Too Short!')
                                .max(15, 'Too Long!')
                                .required('Field is Required'),
                            lastname: Yup.string()
                                .min(2, 'Too Short!')
                                .max(20, 'Too Long!')
                                .required('Field is Required'),
                            email: Yup.string().email('Invalid email').required('Email is Required')
                        })
                    }

                    onSubmit={ (values) => console.log('Form submit handler. Fields:', values) }>

                    {
                        ({
                             values,
                             errors,
                             touched,
                             handleChange,
                             handleBlur,
                             handleSubmit,
                             isSubmitting
                         }) => (
                            <form onSubmit={handleSubmit}>
                                <h4 className="mb-3">Personal information</h4>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstname">First name</label>
                                        <input type="text" className="form-control" id="firstname"
                                               name="firstname"
                                               value={values.firstname}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                        />
                                        { errors.firstname && touched.firstname &&
                                        ( <span>{errors.firstname}</span> ) }
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastname">Last name</label>
                                        <input type="text" className="form-control" id="lastname"
                                               name="lastname"
                                               value={values.lastname}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                        />
                                        { errors.lastname && touched.lastname &&
                                        ( <span>{errors.lastname}</span> ) }
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email"
                                           placeholder="you@example.com"
                                           value={values.email}
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                    />
                                    { errors.email && touched.email && ( <span>{errors.email}</span> )}
                                </div>

                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <label htmlFor="country">Country</label>
                                        <select className="custom-select d-block w-100" id="country"
                                                name="country"
                                                value={values.country}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                        >
                                            <option value="">Choose...</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="NL">Netherlands</option>
                                        </select>
                                        { errors.country && touched.country &&
                                        ( <span>{errors.country}</span> ) }
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="state">State</label>
                                        <select className="custom-select d-block w-100" id="state"
                                                name="state"
                                                value={values.state}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                        >
                                            <option value="">Choose...</option>
                                            <option value="california">California</option>
                                            <option value="toronto">Toronto</option>
                                            <option value="utrech">Utrech</option>
                                        </select>

                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="zip">Zip</label>
                                        <input type="text" className="form-control" id="zip"
                                               name="zip"
                                               value={values.zip}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                        />
                                    </div>
                                </div>

                                <hr className="mb-4"/>
                                <button className="btn btn-primary btn-lg btn-block" type="submit">
                                    Submit
                                </button>
                            </form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default FormOne;
