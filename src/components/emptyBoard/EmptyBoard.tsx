import { AddBtn } from "../navbar/navbar-styles";
import { useContext } from "react";
import { Context } from "../app/App";
import { Container, Content } from "./emptyBoard-styles";

function EmptyBoard() {
  const {
    boardData,
    setModalOn,
    setEditBoardOn,
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

  return (
    <Container>
      <Content>
        This board is empty. Create a new column to get started.
      </Content>
      <AddBtn onClick={handleEdit}>+ Add New Column</AddBtn>
    </Container>
  );
}

export default EmptyBoard;
