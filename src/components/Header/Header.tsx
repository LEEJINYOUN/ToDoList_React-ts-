import React from "react";
import styles from "./Header.module.css";

interface Props {
  filters: string[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ filters, filter, setFilter }: Props) => {
  const current = new Date();
  const week: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  const date = `${current.getFullYear()}년 ${
    current.getMonth() + 1
  }월 ${current.getDate()}일 ${week[current.getDay()]}요일`;
  return (
    <section className={styles.section}>
      <div className={styles.top}>{date}</div>
      <div className={styles.bottom}>
        <ul className={styles.filters}>
          {filters.map((value, index) => (
            <li key={index}>
              <button
                className={`${styles.filter} ${
                  filter === value && styles.selected
                }`}
                onClick={() => setFilter(value)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
