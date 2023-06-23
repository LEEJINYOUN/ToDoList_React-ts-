import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "./TodoList.module.css";

type todoCollectType = {
  id: string;
  text: string;
  status: string;
};

export const TodoList = () => {
  const [text, setText] = useState<string>("");
  const [todoCollect, setTodoCollect] = useState<todoCollectType[]>([]);
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
    const newTodo: todoCollectType = {
      id: uuid,
      text,
      status: "진행중",
    };
    setTodoCollect([...todoCollect, newTodo]);
    setText("");
    inputRef.current?.focus();
  };
  const todoUpdate = (updated?: any) => {
    setTodoCollect(todoCollect.map((t) => (t.id === updated.id ? updated : t)));
  };
  const todoDelete = (deleted?: any) => {
    setTodoCollect(todoCollect.filter((t) => t.id !== deleted.id));
  };

  return (
    <section className={styles.container}>
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
      <ul className={styles.list}>
        {todoCollect.map((item, key) => (
          <li className={styles.todo} key={key}>
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
              className={
                item.status !== "완료" ? styles.text : styles.textCheck
              }
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
        ))}
      </ul>
    </section>
  );
};
