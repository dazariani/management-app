import { HelmetProvider } from "react-helmet-async";
import GlobalStyles from "../../GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { createContext } from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import boardDataType from "../../boardData-types";
import BoardList from "../boardList/BoardList";
import PageMask from "../pageMask/PageMask";
import BoardContent from "../boardContent/BoardContent";
import { TaskProps } from "../boardContent/column/task/task-types";
import ModalContainer from "../modalContainer/ModalContainer";
import data from "../../boardData";
import Sidebar from "../sidebar/Sidebar";
import useWindowWidth from "../../useWindowWidth";
import ShowSidebarBtn from "../sidebar/showSidebarBtn/ShowSidebarBtn";
import { LightColors, DarkColors } from "./app-types";
import { BrowserRouter } from "react-router-dom";

const setLocalStorageBoardList = () => {
  let localList = localStorage.getItem("boardList");
  if (localList) {
    let newLocalList: boardDataType = JSON.parse(localList);
    return newLocalList;
  } else {
    return data;
  }
};

interface contextProps {
  boardData: boardDataType | [];
  setBoardData: (prop: boardDataType | []) => void;
  isActive: string;
  setIsActive: (prop: string) => void;
  boardListOn: boolean;
  setBoardListOn: (prop: boolean) => void;
  appTheme: string;
  setAppTheme: (prop: string) => void;
  activeBoardInd: number;
  setActiveBoardInd: (prop: number) => void;
  currentTask: TaskProps | null;
  setCurrentTask: (props: TaskProps | null) => void;
  modalOn: boolean;
  setModalOn: (props: boolean) => void;
  addNewTask: boolean;
  setAddNewTask: (props: boolean) => void;
  editBoardOn: boolean;
  setEditBoardOn: (props: boolean) => void;
  deleteOn: boolean;
  setDeleteOn: (props: boolean) => void;
  addNewBoard: boolean;
  setAddNewBoard: (props: boolean) => void;
  boardOptionsOn: boolean;
  setBoardOptionsOn: (props: boolean) => void;
  sidebarOn: boolean;
  setSidebarOn: (props: boolean) => void;
  width: number;
}
export const Context = createContext<contextProps>({} as contextProps);

function App() {
  const width = useWindowWidth();

  const [appTheme, setAppTheme] = useState<string>("dark");
  const [boardData, setBoardData] = useState<boardDataType>(
    setLocalStorageBoardList()
    // data
  );
  const [activeBoardInd, setActiveBoardInd] = useState<number>(0);

  const [isActive, setIsActive] = useState<string>(
    boardData[0] ? boardData[0].name : ""
  );
  const [boardListOn, setBoardListOn] = useState<boolean>(false);
  const [sidebarOn, setSidebarOn] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<TaskProps | null>(null);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [addNewTask, setAddNewTask] = useState<boolean>(false);
  const [addNewBoard, setAddNewBoard] = useState<boolean>(false);
  const [editBoardOn, setEditBoardOn] = useState<boolean>(false);
  const [deleteOn, setDeleteOn] = useState<boolean>(false);
  const [boardOptionsOn, setBoardOptionsOn] = useState<boolean>(false);

  //   Set state to localstorage
  useEffect(() => {
    localStorage.setItem("boardList", JSON.stringify(boardData));
  }, [boardData]);

  // Set body BG color according to apptheme value
  useEffect(() => {
    document.body.style.backgroundColor = `${
      appTheme === "bright" ? "rgb(244, 247, 253)" : "rgb(32, 33, 44)"
    }`;
  }, [appTheme]);

  console.log("this is App");

  return (
    <>
      <BrowserRouter>
        <Context.Provider
          value={{
            boardData,
            setBoardData,
            isActive,
            setIsActive,
            boardListOn,
            setBoardListOn,
            appTheme,
            setAppTheme,
            activeBoardInd,
            setActiveBoardInd,
            currentTask,
            setCurrentTask,
            modalOn,
            setModalOn,
            addNewTask,
            setAddNewTask,
            editBoardOn,
            setEditBoardOn,
            deleteOn,
            setDeleteOn,
            addNewBoard,
            setAddNewBoard,
            boardOptionsOn,
            setBoardOptionsOn,
            sidebarOn,
            setSidebarOn,
            width,
          }}
        >
          <ThemeProvider
            theme={appTheme === "bright" ? LightColors : DarkColors}
          >
            <HelmetProvider>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700&display=swap"
                rel="stylesheet"
              />
            </HelmetProvider>
            <GlobalStyles />
            <PageMask />
            {width > 768 && <ShowSidebarBtn />}
            {modalOn && <ModalContainer />}
            <Container>
              <Navbar />

              <BarContentBox>
                {width > 768 && <Sidebar />}
                <BoardContent />
              </BarContentBox>

              <BoardList />
            </Container>
          </ThemeProvider>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

const Container = styled.div``;
const BarContentBox = styled.div`
  display: flex;
`;
