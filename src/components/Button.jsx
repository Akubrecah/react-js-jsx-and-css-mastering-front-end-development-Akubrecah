import PropTypes from 'prop-types';

const Button = ({ children, onClick, variant = 'primary', size = 'md', type = 'button', ...props }) => {
  const baseStyles = 'font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform hover:scale-105';

  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  };

  const sizeStyles = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-2 px-4 text-md',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <button type={type} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`} onClick={onClick} {...props}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.string,
};

export default Button;