import { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../../app/App";
import { Props } from "./subTask-types";
import { SubtaskLabel, SubtaskInput } from "./subTask-styles";

function SubTask(props: Props) {
  const { subtask, subIndex } = props;

  const [subtaskValue, setSubtaskValue] = useState<boolean>(
    subtask.isCompleted
  );

  const { boardData, setBoardData, currentTask } = useContext(Context);

  useEffect(() => {
    setSubtaskValue(subtask.isCompleted);
  }, [currentTask]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtaskValue(e.target.checked);

    // Set subtask is completed or no when changed
    const newBoardData = [...boardData];
    newBoardData.forEach((board) =>
      board.columns.forEach((col) =>
        col.tasks.forEach((task) => {
          if (task.id === currentTask?.id) {
            console.log(task.id, currentTask.id);
            task.subtasks.forEach((sub, ind) => {
              if (ind === subIndex) {
                sub.isCompleted = !sub.isCompleted;
                console.log(sub);
              }
            });
          }
        })
      )
    );
    setBoardData(newBoardData);
  };

  return (
    <SubtaskLabel $subtaskValue={subtaskValue}>
      {subtask.title}
      <SubtaskInput
        type="checkbox"
        checked={subtaskValue}
        onChange={changeHandler}
      />
    </SubtaskLabel>
  );
}

export default SubTask;
