export interface Props {
  editTaskOn: boolean;
  closeEditTask: () => void;
  closeAddNewTask: () => void;
}

export type FormValues = {
  subtask: {
    value: string;
  }[];
  title: string;
  description: string;
};
