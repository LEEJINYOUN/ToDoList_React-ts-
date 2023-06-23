import { FC, useState } from "react";
import { Header } from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";

const filters: string[] = ["모두", "진행중", "완료"];

const App: FC = () => {
  const [filter, setFilter] = useState<string>(filters[0]);

  return (
    <div className="App">
      <Header filters={filters} filter={filter} setFilter={setFilter} />
      <TodoList />
    </div>
  );
};

export default App;
