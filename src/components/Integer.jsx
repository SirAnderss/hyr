import React, { useState, useEffect } from 'react';

const isValid = (value, min, max) =>
  value !== '' &&
  value !== '-' &&
  (min === undefined || value >= min) &&
  (max === undefined || value <= max);

const IntegerInput = ({ value, min, max, onChange }) => {
  const regexp = new RegExp(`^-?[0-9]*$`);
  const [internalValue, setInternalValue] = useState(value);
  const [valid, setValid] = useState(isValid(value, min, max));

  useEffect(() => {
    setInternalValue('');
  }, []);

  return (
    <input
      type="text"
      className={`w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 ${
        valid ? '' : 'invalid'
      }`}
      value={internalValue}
      placeholder="310 000 0000"
      onChange={(event) => {
        const newValue = event.target.value;
        if (regexp.test(newValue)) {
          setInternalValue(newValue);
          let newValid = isValid(newValue, min, max);
          setValid(newValid);
          if (newValid) {
            onChange(newValue);
          }
        }
      }}
      onBlur={() => {
        if (internalValue < min) {
          setInternalValue(min);
        } else if (internalValue > max) {
          setInternalValue(max);
        } else {
          setInternalValue(value);
        }
        setValid(true);
      }}
    />
  );
};

export default IntegerInput;
