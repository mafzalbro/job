import React from 'react';

const Button = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary', // primary, secondary, danger, warning
  size = 'small',
  icon = null,
  iconPosition = 'left', // left or right
  className = '',
  style = {},
}) => {
  // Define the button's variants using Tailwind classes based on the config
  const variantClasses = {
    primary: `
      bg-text text-background hover:bg-opacity-90 focus:ring-primary 
      disabled:bg-lightGray disabled:text-background disabled:cursor-not-allowed
    `,
    secondary: `
      bg-lightGray text-text hover:bg-opacity-90 focus:ring-secondary 
      disabled:bg-hoverBg disabled:text-background disabled:cursor-not-allowed
    `,
    danger: `
      bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 
      disabled:bg-red-300 disabled:text-white disabled:cursor-not-allowed
    `,
    warning: `
      bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400 
      disabled:bg-yellow-200 disabled:text-black disabled:cursor-not-allowed
    `,
  };

  // Combine the base classes with the variant classes
  const buttonClass = `${variantClasses[variant]} ${className} 
                        font-semibold focus:outline-none focus:ring-4 
                        transition-all duration-300 ease-in-out 
                        rounded-full inline-flex items-center justify-center 
                        shadow-md transform active:scale-95 disabled:transform-none ${size === "large" ? "py-3 px-6 text-sm sm:text-lg" : "py-1 px-4 text-lg max-[600px]:!text-sm"}`;

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
        <span className="animate-spin border-t-transparent border-4 border-white w-4 h-4 inline-block mr-2"></span>
      ) : (
        icon && iconPosition === 'left' && <span className={`inline-block ${iconClasses}`}>{icon}</span>
      )}

      {children}

      {icon && iconPosition === 'right' && <span className={`inline-block ${iconClasses}`}>{icon}</span>}
    </button>
  );
};

export default Button;