import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DateRangeCalendar = ({label,compulsory}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const applyDateRange = () => {
    // Get the selected date range
    const startDate = dateRange[0].startDate;
    const endDate = dateRange[0].endDate;

    // Format the selected dates as desired (e.g., YYYY-MM-DD)
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate.toISOString().split('T')[0];

    // Set the input field value with the selected date range
    setInputValue(`${formattedStartDate} - ${formattedEndDate}`);

    // Hide the date range picker
    setShowPicker(false);
  };

  const cancelDateRange = () => {
    // Reset the date range to its initial state
    setDateRange([
      {
        startDate: new Date(),
        endDate: null,
        key: 'selection',
      },
    ]);
    // Hide the date range picker
    setShowPicker(false);
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div>
         {label &&  <label>{label} <span className='compulsory'>{compulsory}</span></label>}
      <input type="text" value={inputValue} onClick={togglePicker} readOnly className='form-control'  />
      {showPicker && (
        <div className='date-rang-picker-cal'>
          <DateRangePicker
            ranges={dateRange}
            onChange={handleSelect}
          />
          <div className='daterage-button'>
          <button onClick={cancelDateRange} className='btn btn-danger btn-sm me-3'>Cancel</button>
             <button onClick={applyDateRange} className='btn btn-success btn-sm'>Apply</button>
          
          </div>
         
        </div>
      )}
    </div>
  );
};

export default DateRangeCalendar;
