import React from "react";

type PropsButton = {
    label: string;
    handleClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<PropsButton> = (props) => {
  const classBtn = "btn-sheet"

  return (
    <div>
      <button className={classBtn} onClick={props.handleClick}>{props.label}</button>
    </div>
  )
}

export default Button;