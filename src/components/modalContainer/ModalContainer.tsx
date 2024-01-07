import ViewTask from "../task/viewTask/ViewTask";
import EditTask from "../task/editTask/EditTask";
import { useContext, useState, useEffect } from "react";
import { Context } from "../app/App";
import { motion } from "framer-motion";
import DeleteConfirm from "../deleteConfirm/DeleteConfirm";
import EditBoard from "../board/editBoard/EditBoard";
import { Container } from "./modalContainer-styles";

function ModalContainer() {
  const {
    currentTask,
    addNewTask,
    setAddNewTask,
    setModalOn,
    editBoardOn,
    deleteOn,
    setDeleteOn,
  } = useContext(Context);
  const [editTaskOn, setEditTaskOn] = useState<boolean>(false);

  const openEditTask = () => {
    setEditTaskOn(true);
  };
  const closeEditTask = () => {
    setEditTaskOn(false);
  };
  const closeAddNewTask = () => {
    setAddNewTask(false);
  };
  const openDelete = () => {
    setModalOn(true);
    setDeleteOn(true);
  };
  const closeDelete = () => {
    currentTask && setDeleteOn(false);
    if (!currentTask) {
      setModalOn(false);
      setDeleteOn(false);
    }
  };

  useEffect(() => {
    if (addNewTask) {
      setEditTaskOn(true);
    }
    if (!addNewTask) {
      setEditTaskOn(false);
    }
  }, [addNewTask]);

  return (
    <motion.div
    // initial={{
    //   opacity: 0,
    //   borderRadius: "50%",
    // }}
    // animate={{
    //   opacity: 1,
    //   borderRadius: "2%",
    // }}
    // transition={{ duration: 0.8 }}
    >
      <Container>
        <ViewTask
          deleteOn={deleteOn}
          editTaskOn={editTaskOn}
          openEditTask={openEditTask}
          openDelete={openDelete}
        />
        {editTaskOn && (
          <EditTask
            closeEditTask={closeEditTask}
            closeAddNewTask={closeAddNewTask}
            editTaskOn={editTaskOn}
          />
        )}
        {deleteOn && <DeleteConfirm closeDelete={closeDelete} />}
        {editBoardOn && <EditBoard />}
      </Container>
    </motion.div>
  );
}

export default ModalContainer;
