import React, { useState } from "react";
import uuid from "react-uuid";
import Card from "./Card";
import "./App.css";

const status = ["Backlog", "Todo", "Progress", "Done"];

export default function App() {
  const [tasks, setTasks] = useState([]);

  function update(prop, title) {
    setTasks([...tasks, { prop: [...prop], [title]: title }]);
  }
  console.log(tasks);

  return (
    <div className="kanban">
      {status.map((i) => {
        return <Card key={uuid()} title={i} dragged={tasks} update={update} />;
      })}
    </div>
  );
}
