import { useContext } from "react";
import { Context } from "../app/App";
import {
  Container,
  QuestionText,
  Description,
  DeleteBtn,
  CancelBtn,
  ButtonsBox,
} from "./deleteConfirm-styles";

interface Props {
  closeDelete: () => void;
}

function DeleteConfirm(props: Props) {
  const { closeDelete } = props;
  const {
    currentTask,
    setCurrentTask,
    boardData,
    setBoardData,
    setModalOn,
    activeBoardInd,
    width,
  } = useContext(Context);

  const deleteItem = () => {
    const tempBoardData = [...boardData];
    if (currentTask) {
      tempBoardData.forEach((board) =>
        board.columns.forEach((col) =>
          col.tasks.forEach((task, ind) => {
            if (task.id === currentTask.id) {
              col.tasks.splice(ind, 1);
            }
          })
        )
      );
    } else {
      tempBoardData.forEach((_, boardInd) => {
        if (boardInd === activeBoardInd) {
          tempBoardData.splice(boardInd, 1);
        }
      });
    }
    setBoardData(tempBoardData);
    currentTask && setCurrentTask(null);
    closeDelete();
    setModalOn(false);
  };

  const TASKDESCRIPTION = `Are you sure you want to delete the "${currentTask?.title}" task and its subtasks? This action cannot be reversed.`;
  const BOARDDESCRIPTION = `Are you sure you want to delete the "${boardData[activeBoardInd].name}" board? This action will remove all columns and tasks and cannot be reversed.`;
  return (
    <Container>
      <QuestionText>
        {currentTask ? "Delete this task?" : "Delete this board?"}
      </QuestionText>
      <Description>
        {currentTask ? TASKDESCRIPTION : BOARDDESCRIPTION}
      </Description>
      <ButtonsBox $width={width}>
        <DeleteBtn $width={width} onClick={deleteItem}>
          Delete
        </DeleteBtn>
        <CancelBtn $width={width} onClick={closeDelete}>
          Cancel
        </CancelBtn>
      </ButtonsBox>
    </Container>
  );
}

export default DeleteConfirm;
