import React from "react";
import { useContext } from "react";
import { StoreBoards } from "../store/StoreBoards.tsx";
import AddList from "./AddList.tsx";

 const ListBoards: React.FC = () => {
  const boards = useContext(StoreBoards);

  function renderBoards() {
    return (
      boards.map((board) => (
        <div className="card-dashboard" key={board.id} onClick={handleClick}>
          <h4 className="card-title">{board.name}</h4>
          <p>{board.description}</p>
        </div>
      ))
    )
  }

  function handleClick() {
    console.log('What')
    return (
      <AddList />
    )
  }

  return (
    <>
      {renderBoards()}
    </>
  )
}

export default ListBoards;