import { colors } from '@mui/material';
import React from 'react';

const TextInput = ({ label, value, onChange, compulsory, readOnlyInput }) => {
    return (
      <div>
       {label &&  <label>{label} <span className='compulsory'>{compulsory}</span></label>}
        <input type="text" className={`form-control ${readOnlyInput ? 'readOnlyInput' : ''}`} value={value} onChange={onChange} />
      </div>
    );
  };
export default TextInput;
