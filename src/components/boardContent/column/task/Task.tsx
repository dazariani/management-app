import { Draggable } from "react-beautiful-dnd";
import { Props } from "./task-types";
import { Container, TaskTitle, SubtasksDone } from "./task-styles";

function Task(props: Props) {
  const { task, index, handleTaskClick } = props;

  // Completed subtask counter in a task
  let completedCount = 0;
  task.subtasks.forEach((sub) => {
    sub.isCompleted && completedCount++;
  });

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          $isDragging={snapshot.isDragging}
          onClick={() => handleTaskClick(task)}
        >
          <TaskTitle>{task.title}</TaskTitle>
          <SubtasksDone>
            {completedCount + " of " + task.subtasks.length + " subtasks"}
          </SubtasksDone>
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
