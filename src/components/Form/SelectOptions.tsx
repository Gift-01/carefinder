import React, { ChangeEvent } from "react";
import { IconType } from "react-icons";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  placeholder?: string;
  icon?: IconType;
  className?: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  icon: Icon,
  className,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`select-container ${className}`}>
      {Icon && <Icon className="inline-block mr-2" />}
      <select
        value={value}
        onChange={handleChange}
        className={`select-input w-full h-full bg-inherit rounded-[12px] ${
          placeholder && !value ? "placeholder placeholder:text-[#837D7D]" : ""
        }`}
      >
        {placeholder && (
          <option
            className={`text-[#837D7D !important]`}
            value=""
            disabled
            hidden
          >
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
