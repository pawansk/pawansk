import { colors } from '@mui/material';
import React from 'react';

const TextArea = ({ label, value, compulsory, rows }) => {
    return (
      <div>
         {label &&  <label>{label} <span className='compulsory'>{compulsory}</span></label>}
        <textarea type="text" className='form-control h-auto' value={value} rows={rows || 3}   />
      </div>
    );
  };
export default TextArea;
