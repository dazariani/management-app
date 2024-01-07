import { useContext, useState, useEffect } from "react";
import { Context } from "../../app/App";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { FormValues, NewBoardTypes } from "./editBoard-types";
import {
  Container,
  Title,
  Form,
  LabelInputBox,
  Label,
  NameInputBox,
  NameInput,
  ColumnsSection,
  ColumnListBox,
  InputIconBox,
  ColumnInputBox,
  ColumnInput,
  AddNewBtn,
  SaveBtn,
  DeleteIcon,
  ColumnInputWrapper,
} from "./editBoard-styles";

const columnsTemplateList = ["Todo", "Doing"];

function EditBoard() {
  const {
    boardData,
    activeBoardInd,
    setBoardData,
    setEditBoardOn,
    setModalOn,
    addNewBoard,
    setAddNewBoard,
  } = useContext(Context);
  const currentBoard = boardData[activeBoardInd];

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
      boardName: !addNewBoard ? currentBoard?.name : "",
      column: !addNewBoard
        ? currentBoard?.columns.map((col) => {
            return { value: col.name };
          })
        : columnsTemplateList.map((tempCol) => {
            return { value: tempCol };
          }),
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "column",
    control,
  });

  let tempBoardData = [...boardData];

  // Remove button when editting board
  const handleColumnDeleteForEdit = (ind: number) => {
    remove(ind);
    // Remove column
    tempBoardData.forEach((board, boardInd) => {
      if (boardInd === activeBoardInd) {
        board.columns.forEach((_, colInd) => {
          if (colInd === ind) {
            board.columns.splice(colInd, 1);
          }
        });
      }
    });
  };

  // Remove button when adding new board
  const handleColumnDeleteForNew = (ind: number) => {
    remove(ind);
  };

  // Add new board
  const handleAddNewBoard = (data: FormValues) => {
    const newColumnsArray = data.column.map((col) => {
      return {
        name: col.value,
        tasks: [],
      };
    });
    const newBoard: NewBoardTypes = {
      id: String(Date.now()),
      name: data.boardName,
      columns: newColumnsArray,
    };

    tempBoardData.push(newBoard);
  };

  // Add new column and edit board name (function)
  const addNewColumn = (data: FormValues) => {
    let columnNamesForAdd = data.column
      ?.filter((item) => {
        if (item && item.value) {
          return !tempBoardData[activeBoardInd]?.columns
            .map((e) => e.name)
            .includes(item.value);
        }
      })
      .map((obj) => obj?.value);

    let mappedNewColumns: {
      name: string;
      tasks: {
        id: string;
        title: string;
        description: string;
        status: string;
        subtasks: {
          title: string;
          isCompleted: boolean;
        }[];
      }[];
    }[];
    if (columnNamesForAdd && columnNamesForAdd.length > 0) {
      mappedNewColumns = columnNamesForAdd?.map((name) => {
        if (name) {
          return {
            name: name,
            tasks: [],
          };
        } else {
          return {
            name: "",
            tasks: [],
          };
        }
      });
    }

    tempBoardData.forEach((board, boardInd) => {
      if (boardInd === activeBoardInd && mappedNewColumns) {
        board.columns.push(...mappedNewColumns);
      }
    });

    // Add editted board name
    tempBoardData.forEach((board, boardInd) => {
      if (boardInd === activeBoardInd) {
        board.name = data.boardName;
      }
    });
  };

  // Duplicate column name error
  useEffect(() => {
    const subscription = watch((value) => {
      let mapped = value.column?.map((e) => e?.value);
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // If there is no name duplicate
    if (!firstInd && !secondInd) {
      // Edit board and add new board cases
      !addNewBoard ? addNewColumn(data) : handleAddNewBoard(data);
      // Set data
      setBoardData(tempBoardData);
      setEditBoardOn(false);
      setModalOn(false);
      setAddNewBoard(false);
    }
  };

  return (
    <Container>
      <Title>{addNewBoard ? "Add New Board" : "Edit Board"}</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelInputBox>
          <Label>Board Name</Label>
          <NameInputBox>
            <NameInput
              {...register("boardName", {
                required: {
                  value: true,
                  message: "Can't be empty",
                },
              })}
            />
          </NameInputBox>
        </LabelInputBox>

        <ColumnsSection>
          <Label>Board Columns</Label>
          <ColumnListBox>
            {fields.map((field, index) => {
              return (
                <InputIconBox key={field.id}>
                  <ColumnInputBox>
                    <ColumnInputWrapper
                      $first={firstInd === index}
                      $second={secondInd === index}
                      $colError={
                        errors.column && errors.column[index]?.value?.message
                      }
                    >
                      <ColumnInput
                        style={{
                          borderColor: `${
                            index === firstInd ||
                            index === secondInd ||
                            (errors.column && errors.column[index])
                              ? "red"
                              : ""
                          }`,
                        }}
                        {...register(`column.${index}.value`, {
                          required: {
                            value: true,
                            message: "Can't be empty",
                          },
                        })}
                      />
                    </ColumnInputWrapper>
                  </ColumnInputBox>

                  <DeleteIcon
                    onClick={() =>
                      !addNewBoard
                        ? handleColumnDeleteForEdit(index)
                        : handleColumnDeleteForNew(index)
                    }
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#828FA3" fillRule="evenodd">
                      <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                      <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
                    </g>
                  </DeleteIcon>
                </InputIconBox>
              );
            })}
          </ColumnListBox>
          <AddNewBtn
            onClick={(e) => {
              e.preventDefault();
              if (firstInd == null && secondInd == null) {
                append({ value: "" });
              }
            }}
          >
            + Add New Column
          </AddNewBtn>
        </ColumnsSection>
        <SaveBtn
          type="submit"
          value={!addNewBoard ? "Save Changes" : "Create New Board"}
        />
      </Form>
    </Container>
  );
}

export default EditBoard;
