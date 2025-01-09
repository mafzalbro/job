import React from 'react';

const Button = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary', // primary, secondary, danger, etc.
  icon = null,
  iconPosition = 'left', // left or right
  className = '',
  style = {},
}) => {
  // Define the button's variants
  const classname = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    danger: 'bg-red-500 text-white hover:bg-red-700',
    outline: 'border border-gray-500 text-gray-500 hover:bg-gray-100',
  };

  // Combine the base classes with the variant
  const buttonClass = `${classname[variant]} ${className} 
                        py-2 px-4 focus:outline-none focus:ring-2 
                        focus:ring-offset-2 disabled:opacity-50`;

  // Determine the icon and text order based on `iconPosition`
  const iconClasses = iconPosition === 'right' ? 'ml-2' : 'mr-2';

  return (
    <button
      onClick={onClick}
      className={buttonClass}
      disabled={disabled || loading}
      style={style}
    >
      {loading ? (
        <span className="spinner-border animate-spin border-t-transparent border-2 border-white w-4 h-4 inline-block mr-2"></span>
      ) : (
        (icon && iconPosition === 'left') && <span className={`inline-block ${iconClasses}`}>{icon}</span>
      )}
      {children}
      {(icon && iconPosition === 'right') && <span className={`inline-block ${iconClasses}`}>{icon}</span>}
    </button>
  );
};

export default Button;
