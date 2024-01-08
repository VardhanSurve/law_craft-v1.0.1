import React from "react";

const sizeClasses = {
  txtAlmaraiBold45: "font-almarai font-bold",
  txtAlmaraiRegular20: "font-almarai font-normal",
  txtAlmaraiExtraBold45: "font-almarai font-extrabold",
  txtAlmaraiRegular26: "font-almarai font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
