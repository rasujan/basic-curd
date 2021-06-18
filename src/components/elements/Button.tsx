import classnames from "classnames";
import React from "react";

interface propsTypes {
  label: string;
  action?: React.MouseEventHandler<HTMLButtonElement>;
  color?: "Success" | "Primary" | "Error" | "Warning";
  type?: "button" | "submit" | "reset";
}

const Button = (props: propsTypes) => {
  const { label, action, color, type, ...rest } = props;
  return (
    <>
      <button
        className={classnames(
          "flex h-10 m-2 p-2 border rounded-md bg-black text-white align-middle",
          {
            "bg-red-400": color === "Error",
            "bg-blue-400": color === "Primary",
            "bg-green-400": color === "Success",
            "bg-yellow-400": color === "Warning",
          }
        )}
        onClick={action}
        type={type}
        {...rest}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
