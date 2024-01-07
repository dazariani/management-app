export type FormValues = {
  boardName: string;
  column: {
    value: string;
  }[];
};

export type NewBoardTypes = {
  id: string;
  name: string;
  columns: {
    name: string;
    tasks:
      | {
          id: string;
          title: string;
          description: string;
          status: string;
          subtasks: {
            title: string;
            isCompleted: boolean;
          }[];
        }[]
      | [];
  }[];
};
