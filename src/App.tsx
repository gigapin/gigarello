import { useRef, useState } from "react";
import AddBoard from "./components/AddBoard.tsx";
import { StoreBoards } from "./store/StoreBoards.tsx";
import ListBoards from "./components/ListBoards.tsx";

let addedBoards: Array<{
  id: string;
  title: string;
  description: string;
  createdAt: string;
}>;

function App() {

  const [boards, setBoards] = useState([{
    id: Math.random().toString(16),
    title: 'Tester',
    description: '',
    createdAt: new Date().toJSON().slice(0, 10),
  }])

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  let newBoard: {
    id: string;
    title: string;
    description: string;
    createdAt: string;
  }

  function handleAddBoard(): void {
    newBoard = {
      id: Math.random().toString(16),
      title: titleRef.current!.value,
      description: descriptionRef.current!.value,
      createdAt: new Date().toJSON().slice(0, 10),
    }
    setBoards([...boards, newBoard]);
    addedBoards.push(newBoard);
  }

  localStorage.setItem("boards", JSON.stringify(addedBoards));

  /*function displayBoardArea() {
    return JSON.parse(localStorage.getItem("boards"));
  }*/



  console.log(boards)

  return (
    <main>
      <StoreBoards.Provider value={ boards }>
        <ListBoards />
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
