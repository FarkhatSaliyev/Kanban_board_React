import "./App.css";

const data = [
  {
    id: 1,
    title: "backlog",
    card: [
      {
        id: 1,
        task: "Implement Chat",
      },
      {
        id: 2,
        task: "Implement REST backend",
      },
    ],
  },
  {
    id: 2,
    title: "todo",
    card: [
      {
        id: 1,
        task: "Fix JS code",
      },
      {
        id: 2,
        task: "Clean HTML",
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <div className="backlog">
        <h3>Backlog</h3>
      </div>
      <div className="todo">
        <h3>Todo</h3>
      </div>
      <div className="progress">
        <h3>Progress</h3>
      </div>
      <div className="done">
        <h3>Done</h3>
      </div>
    </div>
  );
}

export default App;
