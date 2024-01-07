export type TaskProps = {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: {
    title: string;
    isCompleted: boolean;
  }[];
};

export interface Props {
  task: TaskProps;
  handleTaskClick: (prop: TaskProps) => void;
  index: number;
}
