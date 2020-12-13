import React from 'react';

import './form-input.styles.css';

const FormInput = ({ handleChange,submitted,username,label, ...otherProps }) => (
  <div className={'group form-control' + (submitted && !username ? ' is-invalid' : '')}>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
