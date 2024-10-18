import React, { useRef, useState } from "react";
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

  const handleAddBoard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newBoard = {
      id: Math.random().toString(16),
      name: titleRef.current!.value,
      description: descriptionRef.current!.value,
      createdAt: new Date().toJSON().slice(0, 10),
    }
    setBoards([...boards, newBoard]);
  }



  return (
    <main>
      <StoreBoards.Provider value={boards}>
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
