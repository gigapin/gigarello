import Card from "./Card.tsx";
import InputType from "./InputType.tsx";
import Button from "./Button.tsx";
import InputTextarea from "./InputTextarea.tsx";
import React from "react";

interface Props {
    handleAddBoard: () => void;
    handleTitleBoard: React.RefObject<HTMLInputElement>;
    handleDescriptionBoard: React.RefObject<HTMLInputElement>;
}

const AddBoard: React.FC<Props> = (props) => {


  return (
    <Card title="Add Board">
      <InputType label="Enter Board Name" handleChange={() => props.handleTitleBoard} />
      <InputTextarea label="Enter a description" handleChange={() => props.handleDescriptionBoard} />
      <Button label="Create" handleClick={props.handleAddBoard} />
    </Card>
  )
}

export default AddBoard;