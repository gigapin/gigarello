import React from 'react';

interface InputTypeProps {
  label?: string;
  type?: 'text' | string;
  handleChange: React.RefObject<HTMLInputElement>;
}

export const InputType: React.FC<InputTypeProps> = ({label, type = 'text', handleChange}) => {

  return (
    <div>
      <p>
        <label>{label}</label>
      </p>
      <input
        type={type}
        className="input-field"
        ref={handleChange}
      />
    </div>
  )
}

 export default InputType;