export type columnProps = {
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
};

export interface Props {
  column: columnProps;
  color: string;
}
