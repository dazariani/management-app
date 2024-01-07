import { useContext } from "react";
import { Context } from "../../app/App";
import { Container, EditText, DeleteText } from "./boardOptions-styles";

interface Props {
  boardOptionsOn: boolean;
  setBoardOptionsOn: (prop: boolean) => void;
}

function BoardOptions(props: Props) {
  const { boardOptionsOn, setBoardOptionsOn } = props;
  const { setModalOn, setEditBoardOn, setDeleteOn, boardData, setAddNewBoard } =
    useContext(Context);

  const handleEdit = () => {
    if (boardData.length > 0) {
      setModalOn(true);
      setEditBoardOn(true);
      setAddNewBoard(false);
      setBoardOptionsOn(false);
    }
  };

  const handleDelete = () => {
    if (boardData.length > 0) {
      setModalOn(true);
      setDeleteOn(true);
      setBoardOptionsOn(false);
    }
  };

  return (
    <Container $boardOptionsOn={boardOptionsOn}>
      <EditText onClick={handleEdit}>Edit Board</EditText>
      <DeleteText onClick={handleDelete}>Delete Board</DeleteText>
    </Container>
  );
}

export default BoardOptions;
