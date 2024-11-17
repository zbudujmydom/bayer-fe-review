import { useContext } from "react";
import { useOnInteraction } from "../../hooks/useOnInteraction";
import { TasksContext } from "../../contexts/TasksContext";

interface Props {
  name: string;
  email?: string;
}

export const UserInfo = ({ name, email = "-" }: Props) => {
  //   const { name, email } = props;
  const isInteracted = useOnInteraction();
  const { items, isFetching } = useContext(TasksContext);

  if (!isInteracted) {
    return <div>miejsce na usera</div>;
  }

  return (
    <div>
      <h3>Hello {name}</h3>
      {isFetching ? <p>pobieranie taskow</p> : <div>Masz: {items.length} taskow</div>}
      {email ? <span>(email: {email})</span> : null}
    </div>
  );
};
