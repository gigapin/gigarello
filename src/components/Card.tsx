import React from "react";

interface CardProps {
    title: string;
    children: any;
    styles: React.CSSProperties
}

const Card: React.FC<CardProps> = (props) => {

  return (
    <div className="card">
      <h4 className="card-title" style={props.styles}>{props.title}</h4>
      {props.children}
    </div>
  )
}

export default Card;