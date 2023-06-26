import { useState, useEffect } from "react";
import styles from "./TodoList.module.css";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export type TodoCollectType = {
  id: string;
  text: string;
  status: string;
};

type Props = {
  filter: string;
};

export const TodoList = (filter: Props) => {
  const [text, setText] = useState<string>("");
  const [todoCollect, setTodoCollect] = useState<TodoCollectType[]>(() => {
    const todoCollect = localStorage.getItem("todoCollect");
    return todoCollect ? JSON.parse(todoCollect) : [];
  });
  const getFilteredItems = (todoCollect: TodoCollectType[], filter: object) => {
    let mode = Object.entries(filter)[0][1];
    if (typeof mode === "string") {
      if (mode === "모두") {
        return todoCollect;
      }
      return todoCollect.filter((todo) => todo.status === mode);
    }
  };

  const filtered = getFilteredItems(todoCollect, filter);

  useEffect(() => {
    localStorage.setItem("todoCollect", JSON.stringify(todoCollect));
  }, [todoCollect]);

  return (
    <section className={styles.container}>
      <AddTodo
        text={text}
        setText={setText}
        todoCollect={todoCollect}
        setTodoCollect={setTodoCollect}
      />
      <ul className={styles.list}>
        {filtered?.map((item, key) => (
          <Todo
            key={key}
            item={item}
            todoCollect={todoCollect}
            setTodoCollect={setTodoCollect}
          />
        ))}
      </ul>
    </section>
  );
};
