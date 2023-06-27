import React, { ChangeEvent } from "react";
import { IconType } from "react-icons";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: IconType;
  className?: string;
  type: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  icon: Icon,
  className,
  type,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const inputClassName = `border rounded-2xl px-4 py-2 ${className}`;

  return (
    <div>
      {Icon && <Icon className="inline-block mr-2" />}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={inputClassName}
      />
    </div>
  );
};

export default Input;
