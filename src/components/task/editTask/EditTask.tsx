import { useContext, useState, useEffect } from "react";
import { Context } from "../../app/App";
import CurrentStatus from "../viewTask/currentStatus/CurrentStatus";
import { TaskProps } from "../../boardContent/column/task/task-types";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { Props, FormValues } from "./editTask-types";
import {
  Container,
  PageTitle,
  Form,
  LabelInputBox,
  Label,
  TitleInputWrapper,
  SubtaskInputWrapper,
  TitleInput,
  DescrInput,
  SubtaskList,
  AddNewBtn,
  CreateBtn,
  SubtaskSection,
  SubtaskInput,
  SubtaskDelete,
} from "./editTask-styles";

const subPlaceholderData = ["e.g. Make coffee", "e.g. Drink coffee & smile"];

function EditTask(props: Props) {
  const {
    boardData,
    setBoardData,
    currentTask,
    setCurrentTask,
    addNewTask,
    activeBoardInd,
  } = useContext(Context);

  const { editTaskOn, closeEditTask, closeAddNewTask } = props;

  const [firstInd, setFirstInd] = useState<number | null>(null);
  const [secondInd, setSecondInd] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<FormValues>({
    defaultValues: {
      subtask: currentTask?.subtasks.map((sub) => {
        return { value: sub.title };
      }),
      title: currentTask?.title,
      description: currentTask?.description,
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "subtask",
    control,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Set current task according to edittask modal results
    const tempCurrentTask = currentTask && { ...currentTask };
    if (!firstInd && !secondInd) {
      if (tempCurrentTask) {
        if (!tempCurrentTask.id) {
          tempCurrentTask.id = String(Date.now());
        }
        tempCurrentTask.title = data.title;
        tempCurrentTask.description = data.description;
        tempCurrentTask.subtasks = data.subtask.map((item, ind) => {
          return {
            title: item.value,
            isCompleted: currentTask.subtasks[ind]
              ? currentTask.subtasks[ind].isCompleted
              : false,
          };
        });
      }
      setCurrentTask(tempCurrentTask);
      setTimeout(() => {
        closeEditTask();
        closeAddNewTask();
      }, 100);
    }
  };

  // Set cuurent task to data (function)
  const setTask = (setItem: TaskProps | null) => {
    const tempBoardData = [...boardData];
    tempBoardData.forEach((board, ind) => {
      // For editting task
      if (!addNewTask) {
        board.columns.forEach((col) =>
          col.tasks.forEach((task, taskInd) => {
            if (task.id === setItem?.id) {
              col.tasks[taskInd] = setItem;
            }
          })
        );
      } else {
        // For adding new task
        if (ind === activeBoardInd) {
          board.columns.forEach(
            (col) =>
              setItem &&
              col.name === currentTask?.status &&
              col.tasks.push(setItem)
          );
        }
      }
    });

    setBoardData(tempBoardData);
  };

  // Set cuurent task to data
  useEffect(() => {
    if (currentTask?.id) {
      // for new added task
      setTask(currentTask);
    }
  }, [currentTask]);

  // Duplicate subtask name error
  useEffect(() => {
    const subscription = watch((value) => {
      let mapped = value.subtask?.map((e) => e?.value);
      if (mapped) {
        for (let i = 0; i < mapped.length; i++) {
          if (
            mapped.indexOf(mapped[i]) !== mapped.lastIndexOf(mapped[i]) &&
            mapped[i] !== ""
          ) {
            setFirstInd(mapped.indexOf(mapped[i]));
            setSecondInd(mapped.lastIndexOf(mapped[i]));
          } else {
            setFirstInd(null);
            setSecondInd(null);
          }
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Container>
      <PageTitle>{addNewTask ? "Add New Task" : "Edit Task"}</PageTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <LabelInputBox>
          <Label>Title</Label>
          <TitleInputWrapper $titleError={errors.title?.message}>
            <TitleInput
              placeholder={addNewTask ? "e.g. Take coffee break" : ""}
              {...register("title", {
                required: { value: true, message: "Can't be empty" },
              })}
            />
          </TitleInputWrapper>
        </LabelInputBox>
        {/* Description */}
        <LabelInputBox>
          <Label>Description</Label>
          <DescrInput
            rows={3}
            placeholder={
              addNewTask
                ? `e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little.`
                : ""
            }
            {...register("description")}
          />
        </LabelInputBox>
        {/* Subtasks */}
        <LabelInputBox>
          <Label>Subtasks</Label>
          <SubtaskList>
            {fields.map((field, index) => {
              return (
                <SubtaskSection key={field.id}>
                  <SubtaskInputWrapper
                    $first={firstInd === index}
                    $second={secondInd === index}
                    $subError={
                      errors.subtask && errors.subtask[index]?.value?.message
                    }
                  >
                    <SubtaskInput
                      style={{
                        borderColor: `${
                          index === firstInd ||
                          index === secondInd ||
                          (errors.subtask && errors.subtask[index])
                            ? "red"
                            : ""
                        }`,
                      }}
                      placeholder={addNewTask ? subPlaceholderData[index] : ""}
                      {...register(`subtask.${index}.value`, {
                        required: {
                          value: true,
                          message: "Can't be empty",
                        },
                      })}
                    />
                  </SubtaskInputWrapper>
                  <SubtaskDelete
                    onClick={() => remove(index)}
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#828FA3" fillRule="evenodd">
                      <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                      <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                    </g>
                  </SubtaskDelete>
                </SubtaskSection>
              );
            })}
          </SubtaskList>
          <AddNewBtn
            onClick={(e) => {
              e.preventDefault();
              append({ value: "" });
            }}
          >
            + Add New Subtask
          </AddNewBtn>
        </LabelInputBox>
        {/* Status */}
        <CurrentStatus editTaskOn={editTaskOn} />

        <CreateBtn type="submit" value="Create Task" />
      </Form>
    </Container>
  );
}

export default EditTask;
