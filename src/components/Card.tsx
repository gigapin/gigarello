import React from "react";

interface CardProps {
    title: string;
    children: any
}

const Card: React.FC<CardProps> = (props) => {

  return (
    <div className="card">
      <h4 className="card-title">{props.title}</h4>
      {props.children}
    </div>
  )
}

export default Card;