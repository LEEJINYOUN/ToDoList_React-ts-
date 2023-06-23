import { FC, useState } from "react";
import { Header } from "./components/Header/Header";

const filters: string[] = ["모두", "진행중", "완료"];

const App: FC = () => {
  const [filter, setFilter] = useState<string>(filters[0]);

  return (
    <div className="App">
      <Header filters={filters} filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default App;
