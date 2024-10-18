import Card from "./Card.tsx";
import InputType from "./InputType.tsx";
import InputTextarea from "./InputTextarea.tsx";
import React from "react";

interface Props {
    handleAddBoard: (event: React.FormEvent<HTMLFormElement>) => void;
    handleTitleBoard: React.RefObject<HTMLInputElement>;
    handleDescriptionBoard: React.RefObject<HTMLTextAreaElement>;
}

const AddBoard: React.FC<Props> = (props) => {

  return (
    <form onSubmit={props.handleAddBoard}>
      <Card title="Add Board" styles={{ backgroundColor: "white", padding: 16 }}>
        <InputType label="Enter Board Name" handleChange={props.handleTitleBoard} />
        <InputTextarea label="Enter a description" handleChange={props.handleDescriptionBoard} />
        <input type='submit' value="Add Board" />
      </Card>
    </form>
  )
}

export default AddBoard;