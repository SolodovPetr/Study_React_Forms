import React from 'react';

const CustomField = ({ form: {touched, errors}, field, ...props}) => (
    <>
        { props.label && (<label htmlFor={field.name}>{props.label}</label>) }
        <input { ...field } { ...props }/>
        {
            touched[field.name] && errors[field.name] &&
            ( <div className="error">{ errors[field.name] }</div> )
        }
    </>
);

export default CustomField;
