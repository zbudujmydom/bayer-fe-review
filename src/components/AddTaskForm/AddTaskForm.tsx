import { FormEventHandler, useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";

export const AddTaskForm = () => {
  const { addTask } = useContext(TasksContext);

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    const title = event.target.taskName.value.trim();
    addTask({ title });
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dodaj nowy task</h2>
      <input type="text" minLength={3} maxLength={10} required name="taskName" />
      <button type="submit">Dodaj task</button>
    </form>
  );
};
