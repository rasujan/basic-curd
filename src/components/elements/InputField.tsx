import React from "react";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: any;
}

const InputField = (props: Props) => {
  const { label, name, value, onChange } = props;

  return (
    <div className="m-2">
      <label htmlFor={name} className="block">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={true}
        className="relative block w-full p-2 border rounded-lg  border-gray-800 placeholder-gray-600 text-grey-600 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 focus:z-10 sm:text-sm"
      />
    </div>
  );
};

export default InputField;
