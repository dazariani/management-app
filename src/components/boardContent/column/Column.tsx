import Task from "./task/Task";
import { useContext } from "react";
import { Context } from "../../app/App";
import { TaskProps } from "./task/task-types";
import { Droppable } from "react-beautiful-dnd";
import { Props } from "./column-types";
import { Container, TitleBox, Circle, Title, TaskList } from "./column-styles";

function Column(props: Props) {
  const { column, color } = props;

  const { setCurrentTask, setModalOn } = useContext(Context);

  const handleClick = (task: TaskProps) => {
    setCurrentTask(task);
    setModalOn(true);
  };

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
