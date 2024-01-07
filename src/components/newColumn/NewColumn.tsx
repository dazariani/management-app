import { useContext } from "react";
import { Context } from "../app/App";
import { Container } from "./newColumn-styles";

function NewColumn() {
  const {
    setModalOn,
    setEditBoardOn,
    boardData,
    setAddNewBoard,
    setBoardOptionsOn,
  } = useContext(Context);

  const handleEdit = () => {
    if (boardData.length > 0) {
      setModalOn(true);
      setEditBoardOn(true);
      setAddNewBoard(false);
      setBoardOptionsOn(false);
    }
  };
  return <Container onClick={handleEdit}>+ New Column</Container>;
}

export default NewColumn;
