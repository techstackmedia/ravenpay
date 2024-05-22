import { ReactNode } from 'react';
import '../../styles/atoms/input.css';

interface InputProps {
  label: ReactNode
  type: string
  placeholder: string
  disabled: boolean
}

const Input = ({ label, type = 'text', placeholder, disabled }: InputProps) => {
  return (
    <div className="input">
      {label && <label className="input__label">{label}</label>}
      <input
        className="input__field"
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
