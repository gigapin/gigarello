import React from "react";

interface Props {
    label: string;
    handleChange: React.RefObject<HTMLTextAreaElement>;
}

const InputTextarea: React.FC<Props> = ({ label, handleChange }) => {
  const classes = "input-textarea";

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <textarea
        className={classes}
        ref={handleChange}
      ></textarea>
    </div>
  )
}

 export default InputTextarea;