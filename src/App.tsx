import type { Component } from "solid-js";

import styles from "./App.module.css";
import { Body } from "./Body";
import { Cell } from "./Cell";
import { Header } from "./Header";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <Body />
    </div>
  );
};

export default App;
