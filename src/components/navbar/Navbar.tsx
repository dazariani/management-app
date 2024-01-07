import useWindowWidth from "../../useWindowWidth";
import { Context } from "../app/App";
import { useContext, useEffect } from "react";
import {
  Wrapper,
  Container,
  LogoBox,
  Logo,
  BoardNameBox,
  BoardName,
  ChevronIconDown,
  ChevronIconUp,
  AddTaskBox,
  AddBtn,
  AddIcon,
  ThreeDotsBox,
  ThreeDotsIcon,
  LogoBoardNameWrapper,
} from "./navbar-styles";
import { TaskProps } from "../boardContent/column/task/task-types";
import BoardOptions from "./boardOptions/BoardOptions";

function Navbar() {
  const {
    boardData,
    isActive,
    setIsActive,
    boardListOn,
    setBoardListOn,
    setModalOn,
    setAddNewTask,
    setCurrentTask,
    activeBoardInd,
    boardOptionsOn,
    setBoardOptionsOn,
  } = useContext(Context);

  const width = useWindowWidth();

  const handleAddBtnClick = () => {
    if (boardData.length > 0 && boardData[activeBoardInd].columns.length > 0) {
      setModalOn(true);
      setAddNewTask(true);
      const newTask: TaskProps = {
        id: "",
        title: "",
        description: "",
        status: boardData[activeBoardInd].columns[0].name,
        subtasks: [
          {
            title: "",
            isCompleted: false,
          },
          {
            title: "",
            isCompleted: false,
          },
        ],
      };
      setCurrentTask(newTask);
    }
  };

  useEffect(() => {
    setIsActive(boardData[activeBoardInd]?.name);
  }, [boardData]);

  return (
    <Wrapper
      onClick={() => {
        boardOptionsOn && setBoardOptionsOn(false);
      }}
    >
      <Container>
        {width < 768 ? (
          <LogoBoardNameWrapper>
            <LogoBox>
              <Logo width="24" height="25" xmlns="http://www.w3.org/2000/svg">
                <g fill="#635FC7" fillRule="evenodd">
                  <rect width="6" height="25" rx="2" />
                  <rect opacity=".75" x="9" width="6" height="25" rx="2" />
                  <rect opacity=".5" x="18" width="6" height="25" rx="2" />
                </g>
              </Logo>
            </LogoBox>

            <BoardNameBox onClick={() => setBoardListOn(!boardListOn)}>
              <BoardName>
                {isActive ? isActive : "Board list is empty"}
              </BoardName>
              {!boardListOn ? (
                <ChevronIconDown
                  width="10"
                  height="7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="#635FC7"
                    strokeWidth="2"
                    fill="none"
                    d="m1 1 4 4 4-4"
                  />
                </ChevronIconDown>
              ) : (
                <ChevronIconUp
                  width="10"
                  height="7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="#635FC7"
                    strokeWidth="2"
                    fill="none"
                    d="M9 6 5 2 1 6"
                  />
                </ChevronIconUp>
              )}
            </BoardNameBox>
          </LogoBoardNameWrapper>
        ) : (
          <>
            <LogoBox>
              <Logo width="24" height="25" xmlns="http://www.w3.org/2000/svg">
                <g fill="#635FC7" fillRule="evenodd">
                  <rect width="6" height="25" rx="2" />
                  <rect opacity=".75" x="9" width="6" height="25" rx="2" />
                  <rect opacity=".5" x="18" width="6" height="25" rx="2" />
                </g>
              </Logo>
            </LogoBox>

            <BoardNameBox>
              <BoardName>
                {isActive ? isActive : "Board list is empty"}
              </BoardName>
            </BoardNameBox>
          </>
        )}

        <AddTaskBox>
          <AddBtn onClick={() => handleAddBtnClick()}>
            {width < 768 ? (
              <AddIcon
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFF"
                  d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
                />
              </AddIcon>
            ) : (
              "+ Add New Task"
            )}
          </AddBtn>
          <ThreeDotsBox onClick={() => setBoardOptionsOn(!boardOptionsOn)}>
            <ThreeDotsIcon
              width="5"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#828FA3" fillRule="evenodd">
                <circle cx="2.308" cy="2.308" r="2.308" />
                <circle cx="2.308" cy="10" r="2.308" />
                <circle cx="2.308" cy="17.692" r="2.308" />
              </g>
            </ThreeDotsIcon>
          </ThreeDotsBox>
        </AddTaskBox>

        <BoardOptions
          boardOptionsOn={boardOptionsOn}
          setBoardOptionsOn={setBoardOptionsOn}
        />
      </Container>
    </Wrapper>
  );
}

export default Navbar;
