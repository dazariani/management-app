import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../app/App";
import { columnProps } from "../../../boardContent/column/column-types";
import { TaskProps } from "../../../boardContent/column/task/task-types";
import { Props } from "./currentStatus-types";
import {
  Container,
  Title,
  DropDownBox,
  ColumnName,
  ArrowDown,
  ArrowUp,
  ColumnList,
  ListItem,
} from "./currentStatus-styles";

function CurrentStatus(props: Props) {
  const { editTaskOn } = props;
  const {
    boardData,
    currentTask,
    setCurrentTask,
    activeBoardInd,
    setBoardData,
    addNewTask,
  } = useContext(Context);

  const [currentColumnsList, setCurrentColumnsList] = useState<columnProps[]>(
    []
  );

  const [listOn, setListOn] = useState<boolean>(false);

  const handleListItemClick = (item: columnProps) => {
    // Remove task from old column
    const newBoardData = [...boardData];
    let movedTask: TaskProps[] | null = null;
    if (item.name !== currentTask?.status) {
      newBoardData.forEach((board, boardInd) => {
        if (boardInd === activeBoardInd) {
          board.columns.forEach((column) => {
            column.tasks.forEach((task, ind) => {
              if (task.id === currentTask?.id) {
                // remove task from old column
                movedTask = column.tasks.splice(ind, 1);
              }
            });
          });
        }
      });

      // Add to new Column
      newBoardData.forEach((board, boardInd) => {
        if (boardInd === activeBoardInd) {
          board.columns.forEach((column) => {
            if (column.name === item.name && movedTask) {
              // set new status for task
              movedTask[0].status = column.name;
              // Add to new Column
              column.tasks.push(movedTask[0]);
              // set current task from new column
              if (!addNewTask) {
                setCurrentTask(column.tasks[column.tasks.length - 1]);
              }
            }
          });
        }
      });

      if (currentTask && addNewTask) {
        setCurrentTask({ ...currentTask, status: item.name });
      }

      // Close status list
      setListOn(false);
    }
    // Set data
    if (!editTaskOn) {
      setBoardData(newBoardData);
    }
  };

  //   Set current columnlist
  useEffect(() => {
    boardData.forEach((board) =>
      board.columns.forEach((col) =>
        col.tasks.forEach((task) =>
          task.id === currentTask?.id && !addNewTask
            ? setCurrentColumnsList(board.columns)
            : null
        )
      )
    );
  }, [currentTask]);

  useEffect(() => {
    editTaskOn && setListOn(false);
  }, [editTaskOn]);

  // Set current column list
  useEffect(() => {
    if (addNewTask) {
      setCurrentColumnsList(boardData[activeBoardInd].columns);
    }
  }, [addNewTask]);

  return (
    <Container>
      <Title>Current Status</Title>
      <DropDownBox $listOn={listOn} onClick={() => setListOn(!listOn)}>
        <ColumnName>{currentTask?.status}</ColumnName>
        {listOn ? (
          <ArrowDown width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#635FC7"
              strokeWidth="2"
              fill="none"
              d="m1 1 4 4 4-4"
            />
          </ArrowDown>
        ) : (
          <ArrowUp width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#635FC7"
              strokeWidth="2"
              fill="none"
              d="M9 6 5 2 1 6"
            />
          </ArrowUp>
        )}
      </DropDownBox>
      <ColumnList $editTaskOn={editTaskOn} $listOn={listOn}>
        {currentColumnsList.map((col, ind) => {
          return (
            <ListItem onClick={() => handleListItemClick(col)} key={ind}>
              {col.name}
            </ListItem>
          );
        })}
      </ColumnList>
    </Container>
  );
}

export default CurrentStatus;
