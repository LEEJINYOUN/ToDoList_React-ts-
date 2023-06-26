import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";
import { TodoCollectType } from "../TodoList/TodoList";

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  todoCollect: TodoCollectType[];
  setTodoCollect: React.Dispatch<React.SetStateAction<TodoCollectType[]>>;
};

export default function AddTodo({
  text,
  setText,
  todoCollect,
  setTodoCollect,
}: Props) {
  const uuid = uuidv4();
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    const newTodo: TodoCollectType = {
      id: uuid,
      text,
      status: "진행중",
    };
    setTodoCollect([...todoCollect, newTodo]);
    setText("");
    inputRef.current?.focus();
  };

  return (
    <form className={styles.form} onSubmit={formSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="할 일을 추가하세요."
        value={text}
        onChange={inputChange}
        ref={inputRef}
      />
      <button className={styles.button}>+</button>
    </form>
  );
}
