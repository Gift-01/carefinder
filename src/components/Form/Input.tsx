import { ChangeEvent, KeyboardEvent, FunctionComponent, SVGProps } from "react";
import { IconType } from "react-icons";

interface InputProps {
  value?: string;
  onChange: (value: string) => void;
  onKeyDownEnter: () => void;
  placeholder?: string;
  iconLeft?:
    | IconType
    | string
    | FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
      >;
  iconRight?:
    | IconType
    | string
    | FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
      >;
  className?: string;
  type: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onKeyDownEnter,
  placeholder,
  iconLeft: IconLeft,
  iconRight: IconRight,
  className,
  disabled,
  type,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onKeyDownEnter();
    }
  };

  const inputClassName = `border flex items-center rounded-2xl pl-[15px] pr-[38px] ${className}`;

  return (
    <div className={inputClassName}>
      {IconLeft && <IconLeft className="inline-block mr-[66px]" />}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        className="w-full outline-none h-inherit bg-inherit"
        disabled={disabled}
      />
      {IconRight && <IconRight className="inline-block" />}
    </div>
  );
};

export default Input;
function onKeyDownEnter() {
  throw new Error("Function not implemented.");
}
