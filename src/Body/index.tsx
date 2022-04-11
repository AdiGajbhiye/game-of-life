import { Component, For } from "solid-js";
import { Cell } from "../Cell";
import styles from "./styles.module.css";

const temp = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const Body: Component = () => {
  return (
    <div class={styles.Body}>
      <For each={temp}>
        {(row) => (
          <div class={styles.Row}>
            <For each={row}>{() => <Cell />}</For>
          </div>
        )}
      </For>
    </div>
  );
};

export { Body };
