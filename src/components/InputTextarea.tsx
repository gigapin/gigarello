import React from "react";

interface Props {
    label: string;
    handleChange: () => void;
}

const InputTextarea: React.FC<Props> = ({ label, handleChange }) => {
  const classes = "input-textarea";

  return (
    <div>
        <label htmlFor="">{label}</label>
      <textarea
        className={classes}
        ref={handleChange}
      ></textarea>
    </div>
  )
}

 export default InputTextarea;