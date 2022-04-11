import type { Component, Signal } from "solid-js";
import styles from "./styles.module.css";

interface Props {
  cell: Signal<boolean>;
}

const Cell: Component<Props> = (props) => {
  const [alive, setAlive] = props.cell;
  return (
    <div
      class={styles.Cell}
      style={{ background: alive() ? "red" : "blue" }}
      onClick={() => {
        setAlive((prev) => !prev);
      }}
    />
  );
};

export { Cell };
