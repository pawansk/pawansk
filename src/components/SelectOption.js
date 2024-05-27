import React from 'react';

const SelectOption = ({ options, value, onChange, label, compulsory }) => {
  return (
    <div>
    {label &&  <label>{label} <span className='compulsory'>{compulsory}</span></label>}
    <select value={value} onChange={onChange} className='form-control'>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
    </div>
  );
};

export default SelectOption;
