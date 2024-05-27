import React from 'react';

const RadioInput = ({ label, checked, onChange }) => {
    return (
      <div>
        <label>
          <input type="radio" checked={checked} onChange={onChange} />
          {label}
        </label>
      </div>
    );
  };

export default RadioInput;
