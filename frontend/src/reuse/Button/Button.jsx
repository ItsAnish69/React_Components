import React from "react";
import PropTypes from "prop-types";

const Variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-rose-500",
  secondary: "bg-rose-600 text-white hover:bg-rose-700 focus:ring-gray-400",
};

const Sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
};

const base_Class =
  "rounded-md font-semibold border-1 transition-all duration-200 focus:outline-none focus:ring-offset-2";

const disable_Class =
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

export default function Button({
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  onClick = () => {},
  children,
}) {
  const classes = `${base_Class} ${Variants[variant]} ${Sizes[size]} ${disable_Class}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
