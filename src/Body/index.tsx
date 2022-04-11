import { Component, For, Signal } from "solid-js";
import { Cell } from "../Cell";
import styles from "./styles.module.css";

interface Props {
  board: Signal<boolean>[][];
}

const Body: Component<Props> = (props) => {
  return (
    <div class={styles.Body}>
      <For each={props.board}>
        {(row) => (
          <div class={styles.Row}>
            <For each={row}>{(cell) => <Cell cell={cell} />}</For>
          </div>
        )}
      </For>
    </div>
  );
};

export { Body };
