import { Component, createSignal, Signal } from "solid-js";

import styles from "./App.module.css";
import { Body } from "./Body";
import { Header } from "./Header";

const rows = 4;
const cols = 5;

const App: Component = () => {
  const [tick, setTick] = createSignal(0);

  const board: Signal<boolean>[][] = [];
  for (let i = 0; i < cols; i++) {
    const row = [];
    for (let j = 0; j < rows; j++) {
      row.push(createSignal(false));
    }
    board.push(row);
  }

  setInterval(() => {
    setTick((prev) => prev + 1);
  }, 1000);

  return (
    <div class={styles.App}>
      <Header tick={tick} />
      <Body board={board} />
    </div>
  );
};

export default App;
