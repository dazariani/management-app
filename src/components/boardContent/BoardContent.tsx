import { useContext } from "react";
import { Context } from "../app/App";
import Column from "./column/Column";
import EmptyBoard from "../emptyBoard/EmptyBoard";
import NewColumn from "../newColumn/NewColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { Wrapper, Container } from "./boardContent-styles";

let colorData = ["#49c4e5", "#8471f2", "#67e2ae"];

function BoardContent() {
  const {
    boardData,
    activeBoardInd,
    boardOptionsOn,
    setBoardOptionsOn,
    setBoardData,
  } = useContext(Context);

  //  Drag and Drop logic
  const handleOnDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newBoardData = Array.from(boardData);
    const start = newBoardData[activeBoardInd].columns.filter(
      (col) => col.name === source.droppableId
    )[0];
    const finish = newBoardData[activeBoardInd].columns.filter(
      (col) => col.name === destination.droppableId
    )[0];

    // Drag and Drop in one column
    if (start === finish) {
      let tempTask = newBoardData[activeBoardInd].columns
        .filter((col) => col.name === source.droppableId)[0]
        .tasks.filter((task) => task.id === draggableId)[0];

      newBoardData[activeBoardInd].columns.forEach((col) => {
        if (col.name === source.droppableId) {
          col.tasks.splice(source.index, 1);
          col.tasks.splice(destination.index, 0, tempTask);
        }
      });
      setBoardData(newBoardData);
      return;
    }

    // Drag and Drop in another column
    let tempTask = newBoardData[activeBoardInd].columns
      .filter((col) => col.name === source.droppableId)[0]
      .tasks.filter((task) => task.id === draggableId)[0];

    newBoardData[activeBoardInd].columns.forEach((col) => {
      if (col.name === source.droppableId) {
        col.tasks.splice(source.index, 1);
        // col.tasks.splice(destination.index, 0, tempTask);
      }
      if (col.name === destination.droppableId) {
        col.tasks.splice(destination.index, 0, tempTask);
      }
    });
    setBoardData(newBoardData);
  };

  return (
    <Wrapper onClick={() => boardOptionsOn && setBoardOptionsOn(false)}>
      {boardData[activeBoardInd]?.columns.length > 0 ? (
        <Container>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            {boardData[activeBoardInd]?.columns.map((column, ind) => {
              const { name } = column;
              if (ind > colorData.length - 1) {
                colorData = [...colorData, ...colorData];
              }
              return (
                <Column key={name} color={colorData[ind]} column={column} />
              );
            })}
          </DragDropContext>
          <NewColumn />
        </Container>
      ) : (
        <EmptyBoard />
      )}
    </Wrapper>
  );
}

export default BoardContent;
