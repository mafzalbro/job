import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface PasswordFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-field flex w-full gap justify-between">
      <div className="w-full flex flex-col">
        <label htmlFor="password">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="xxxxxxxx"
            className="input input-border rounded-full w-full"
            value={value}
            onChange={onChange}
          />
          <div
            className="password-eye-icon"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FiEyeOff size={20} />
            ) : (
              <FiEye size={20} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordField;
