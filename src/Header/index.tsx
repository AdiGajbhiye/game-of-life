import type { Accessor, Component } from "solid-js";
import styles from "./styles.module.css";

interface Props {
  tick: Accessor<number>;
}
const Header: Component<Props> = (props) => {
  return <div class={styles.Header}>Tick: {props.tick}</div>;
};

export { Header };
