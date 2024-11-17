import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface Task {
  title: string;
}

interface TasksContextProps {
  items: Task[];
  addTask: (task: Task) => void;
  isFetching: boolean;
}

export const TasksContext = createContext<TasksContextProps>({
  items: [],
  addTask: () => undefined,
  isFetching: false,
});

interface TasksResponse {
  todos: Array<{ todo: string }>;
}

export const TasksContextProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Task[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch("https://dummyjson.com/todos")
      .then((response) => {
        if (!response.ok) {
          // if not 2xx
          return Promise.reject();
        }
        return response.json();
      })
      .then((data: TasksResponse) => {
        if (!data) {
          return Promise.reject();
        }
        const tasks = data.todos.map((task) => {
          return { title: task.todo };
        });
        setItems(tasks);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  const addTask = (task: Task): void => {
    setItems((prevState) => [...prevState, task]);
  };

  return <TasksContext.Provider value={{ items, addTask, isFetching }}>{children}</TasksContext.Provider>;
};
