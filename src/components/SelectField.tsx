import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface Props {
  id: string;
  label: string; // this will show as the placeholder text
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  noValue?: boolean;
}

const SelectField: React.FC<Props> = ({
  id,
  label,
  options,
  value,
  onChange,
  noValue,
}) => {
  const [innerValue, setInnerValue] = useState('');
  const newValue = noValue ? innerValue : value;

  return (
    <label htmlFor={id} className="has-triangle relative inline-block">
      <span className="sr-only">{label}</span>

      <select
        id={id}
        value={newValue}
        onChange={(e) =>
          noValue
            ? setInnerValue(e.target.value)
            : onChange && onChange(e.target.value)
        }
        className="min-w-80 cursor-pointer appearance-none border-b border-white bg-transparent text-center text-lg text-slate-400 backdrop-blur-md outline-none focus:outline-none"
      >
        <option value="" disabled hidden>
          {label}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectField;
