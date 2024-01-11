import Task from "./task/Task";
import { useContext, useEffect } from "react";
import { Context } from "../../app/App";
import { TaskProps } from "./task/task-types";
import { Droppable } from "react-beautiful-dnd";
import { Props } from "./column-types";
import { Container, TitleBox, Circle, Title, TaskList } from "./column-styles";
import { useSearchParams } from "react-router-dom";

function Column(props: Props) {
  const { column, color } = props;

  const { setCurrentTask, setModalOn, modalOn, boardData } =
    useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  const taskParamId = searchParams.get("task");

  const handleClick = (task: TaskProps) => {
    setCurrentTask(task);
    setSearchParams({ task: `${task.id}` });
    setModalOn(true);
  };

  useEffect(() => {
    if (taskParamId) {
      boardData.forEach((board) =>
        board.columns.forEach((col) =>
          col.tasks.forEach((task) => {
            if (task.id === taskParamId) {
              setCurrentTask(task);
              setModalOn(true);
            }
          })
        )
      );
    }
  }, [taskParamId]);

  useEffect(() => {
    if (!modalOn) {
      setSearchParams({});
    }
  }, [modalOn]);

  return (
    <Container>
      <TitleBox>
        <Circle style={{ background: `${color}` }}></Circle>
        <Title>{column.name + " " + column.tasks.length}</Title>
      </TitleBox>
      <Droppable droppableId={column.name}>
        {(provided, snapshot) => (
          <TaskList
            $isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {column.tasks.map((task, index) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  index={index}
                  handleTaskClick={handleClick}
                />
              );
            })}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}

export default Column;
