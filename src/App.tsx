import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { Card } from "./components/Card/Card";
import { Comments } from "./components/Comments/Comments";
import { Counter } from "./components/Counter/Counter";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { VideoElement } from "./components/VideoElement/VideoElement";
import { ConfigContext } from "./contexts/ConfigContext";
import { TasksContextProvider } from "./contexts/TasksContext";
import { useSendPageViewEvent } from "./hooks/useSendPageViewEvent";
import useCookie from "react-use-cookie";

function App() {
  useSendPageViewEvent("home");

  const [token, setToken, removeToken] = useCookie("user-token");

  return (
    <ConfigContext.Provider value={{ env: "prod", isNewHomePageAvailable: true }}>
      <TasksContextProvider>
        <main>
          {/* <Comments title="Last comments" /> */}
          <p>Token: {token}</p>
          <button onClick={() => setToken("abc", { days: 3 })}>Set token</button>
          <button onClick={removeToken}>Remove token</button>

          <UserInfo name="Adam" />
          <p>xxx</p>
          <Card title="Oferta A">
            <div>fajna oferta</div>
            <div>cena: 100 PLN</div>
          </Card>
          <Counter />
          <AddTaskForm />
          <VideoElement />
        </main>
      </TasksContextProvider>
    </ConfigContext.Provider>
  );
}

export default App;
