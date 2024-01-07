import { useContext, useState } from "react";
import { Context } from "../../app/App";
import SubTask from "./subTask/SubTask";
import CurrentStatus from "./currentStatus/CurrentStatus";
import { Props } from "./viewTask-types";
import {
  Container,
  TitleBox,
  Title,
  DotsBox,
  Dots,
  Description,
  SubtasksBox,
  SubtaskCount,
  EditDeleteBox,
  EditText,
  DeleteText,
} from "./viewTask-styles";

function ViewTask(props: Props) {
  const { currentTask, editBoardOn } = useContext(Context);
  const { editTaskOn, openEditTask, deleteOn, openDelete } = props;

  const [optionsOn, setOptionsOn] = useState<boolean>(false);

  const Completed = currentTask?.subtasks.filter(
    (sub) => sub.isCompleted === true
  ).length;

  return (
    <Container
      onClick={() => optionsOn && setOptionsOn(false)}
      $editTaskOn={editTaskOn}
      $deleteOn={deleteOn}
      $editBoardOn={editBoardOn}
    >
      <TitleBox>
        <Title>{currentTask?.title}</Title>
        <DotsBox onClick={() => setOptionsOn(!optionsOn)}>
          <Dots width="5" height="20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#828FA3" fillRule="evenodd">
              <circle cx="2.308" cy="2.308" r="2.308" />
              <circle cx="2.308" cy="10" r="2.308" />
              <circle cx="2.308" cy="17.692" r="2.308" />
            </g>
          </Dots>
        </DotsBox>
      </TitleBox>
      <Description>{currentTask?.description}</Description>
      <SubtasksBox>
        <SubtaskCount>{`Subtasks (${Completed} of ${currentTask?.subtasks.length})`}</SubtaskCount>

        {currentTask?.subtasks.map((sub, ind) => {
          return <SubTask key={ind} subtask={sub} subIndex={ind} />;
        })}
      </SubtasksBox>

      <CurrentStatus editTaskOn={editTaskOn} />

      <EditDeleteBox $optionsOn={optionsOn}>
        <EditText
          onClick={() => {
            openEditTask();
            currentTask && setOptionsOn(false);
          }}
        >
          Edit Task
        </EditText>
        <DeleteText
          onClick={() => {
            openDelete();
            currentTask && setOptionsOn(false);
          }}
        >
          Delete Task
        </DeleteText>
      </EditDeleteBox>
    </Container>
  );
}
export default ViewTask;
