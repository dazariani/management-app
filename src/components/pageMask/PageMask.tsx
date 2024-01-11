import { Mask } from "./pageMask-styles";
import { useContext } from "react";
import { Context } from "../app/App";
import { useEffect } from "react";

function PageMask() {
  const {
    boardListOn,
    setCurrentTask,
    setBoardListOn,
    setAddNewTask,
    modalOn,
    setModalOn,
    setEditBoardOn,
    setDeleteOn,
  } = useContext(Context);

  // Prevent page scrolling when modal is on
  // useEffect(() => {
  //   if (boardListOn || modalOn) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [boardListOn, modalOn]);

  useEffect(() => {
    if (!modalOn) {
      setCurrentTask(null);
    }
  }, [modalOn]);

  return (
    <Mask
      onClick={() => {
        setBoardListOn(false);
        setAddNewTask(false);
        setEditBoardOn(false);
        setDeleteOn(false);
        setModalOn(false);
      }}
      $boardListOn={boardListOn}
      $modalOn={modalOn}
    ></Mask>
  );
}

export default PageMask;
