import React from "react";
import ItemList from "./Components/ItemList";
import styles from "./todoList.module.css";
import { Input, Space } from "antd";

function TodoList() {
  const [values, setValues] = React.useState("");

  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.wrapper_container}>
      <div className={styles.wrapper_todolist}>
        <div>
          <h1 style={{ textAlign: "center" }}>To Do List Basic</h1>
          <Input
            placeholder="Nhập công việc"
            allowClear
            size="large"
            onChange={onChange}
          />
        </div>
        <div>
          <ItemList />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
