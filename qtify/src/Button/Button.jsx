import React from "react";
import styles from "./Button.module.css";

function Button (props) {
  console.log("entered")
  return (
    <div>
          <button className={styles.button}>
            {props.children}
          </button>
    </div>
  );
}

export default Button;