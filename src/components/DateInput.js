
import React from 'react';
import { useState } from 'react';

const DateInput = ({ label, value, onChange, compulsory, readOnlyInput }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

    return (
      <div>
       {label &&  <label>{label} <span className='compulsory'>{compulsory}</span></label>}
        <input type="date" id="date" value={selectedDate} onChange={handleDateChange} className={`form-control ${readOnlyInput ? 'readOnlyInput' : ''}`} />
      </div>
    );
  };
export default DateInput;
