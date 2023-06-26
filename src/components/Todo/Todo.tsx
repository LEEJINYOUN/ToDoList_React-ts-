import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "./Todo.module.css";
import { TodoCollectType } from "../TodoList/TodoList";

type Props = {
  item: TodoCollectType;
  todoCollect: TodoCollectType[];
  setTodoCollect: React.Dispatch<React.SetStateAction<TodoCollectType[]>>;
};

export default function Todo({ item, todoCollect, setTodoCollect }: Props) {
  const todoUpdate = (updated?: any) => {
    setTodoCollect(todoCollect.map((t) => (t.id === updated.id ? updated : t)));
  };
  const todoDelete = (deleted?: any) => {
    setTodoCollect(todoCollect.filter((t) => t.id !== deleted.id));
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={item.id}
        checked={item.status === "완료"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const status = e.target.checked ? "완료" : "진행중";
          todoUpdate({ ...item, status });
        }}
      />
      <label
        htmlFor={item.id}
        className={item.status !== "완료" ? styles.text : styles.textCheck}
      >
        {item.text}
      </label>
      <button
        onClick={() => {
          todoDelete(item);
        }}
        className={styles.button}
      >
        <BsFillTrashFill className={styles.trash} />
      </button>
    </li>
  );
}
