import React, { useRef, useState, useEffect } from "react";
import AddBoard from "./components/AddBoard.tsx";
import { StoreBoards } from "./store/StoreBoards.tsx";
import ListBoards from "./components/ListBoards.tsx";

interface Boards {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

function App() {

  const [boards, setBoards] = useState<Boards[]>([]);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const storedBoards = JSON.parse(localStorage.getItem("boards") as string);
    boards.map((board) => {
      if (storedBoards.indexOf(board.name) === -1) {
        localStorage.setItem("boards", JSON.stringify(boards));
      }
    })
  }, [boards]);

  const handleAddBoard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBoard = {
      id: Math.random().toString(16),
      name: titleRef.current!.value,
      description: descriptionRef.current!.value,
      createdAt: new Date().toJSON().slice(0, 10),
    }

    setBoards((prevState: Boards[]): Boards[] => {
      if (newBoard.name === '') {
        return prevState;
      }
      const board: Boards | undefined = boards.find((board: Boards): boolean => board.name === newBoard.name);
      if (board !== undefined) {
        return [...prevState];
      } else {
        return [...prevState, newBoard];
      }
    })
  }

  //console.log(boards);

  return (
    <main>
      <StoreBoards.Provider value={boards}>
        {
          boards.map((board) => (
            <h4>{board.name}</h4>
          ))

        }
        <ListBoards/>
        <AddBoard
          handleAddBoard={handleAddBoard}
          handleTitleBoard={titleRef}
          handleDescriptionBoard={descriptionRef}
        />
      </StoreBoards.Provider>
    </main>
  )
}

export default App
