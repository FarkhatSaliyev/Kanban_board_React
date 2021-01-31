import React, { useState } from "react";
import uuid from "react-uuid";

const styles = {
  root: {
    borderRadius: "5px",
    padding: "10px",
    height: "fit-content",
    backgroundColor: "#EBECF0",
    width: "280px",
    margin: "5px",
    cursor: "move",
  },
  single: {
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    margin: "10px",
    padding: "5px",
    boxShadow: "lightgrey 0px 2px 3px 1px",
  },
  button: {
    border: "none",
    padding: "5px",
    margin: "10px",
    backgroundColor: "lightgrey",
  },
  input: {
    backgroundColor: "white",
    border: "none",
    ":focus": {
      border: "none",
    },
  },
};

const Card = ({ title, dragged, update }) => {
  const [tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState("");
  const [addBtn, setAddbtn] = useState(false);
  const [newData, setNewData] = useState([]);

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  const handleClick = (e) => {
    setTasks([...tasks, singleTask]);
    setSingleTask("");
    setAddbtn(false);
  };

  const drag = (e) => {
    e.dataTransfer.setData("Text", e.target.innerText);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  };

  const drop = (e) => {
    var data = e.dataTransfer.getData("Text");
    setNewData([...newData, data]);
    // console.log("NEW DATA", newData);
  };

  const handleMouseEnter = (e) => {};

  return (
    <div
      style={styles.root}
      onDragOver={(e) => allowDrop(e)}
      onDrop={(e) => drop(e)}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      id={title}
    >
      <h3
        className="card_title"
        style={{ marginTop: "5px", marginBottom: "10px" }}
      >
        {title}
      </h3>
      <div className="tasks">
        <div>
          {newData &&
            newData.map((i, idx) => {
              return (
                <div
                  draggable="true"
                  id={idx}
                  onDragStart={(e) => drag(e)}
                  style={styles.single}
                  key={uuid()}
                >
                  {" "}
                  {i}{" "}
                </div>
              );
            })}
        </div>
        {tasks &&
          tasks.map((i, idx) => {
            return (
              <div
                draggable="true"
                id={idx}
                onDragStart={(e) => drag(e)}
                style={styles.single}
                key={uuid()}
              >
                {i}
              </div>
            );
          })}
      </div>
      <div>
        {!addBtn ? (
          <button style={styles.button} onClick={() => setAddbtn(true)}>
            + add another card
          </button>
        ) : (
          <div>
            <input
              style={styles.input}
              type="textarea"
              autoFocus
              value={singleTask}
              onChange={(e) => {
                setSingleTask(e.target.value);
              }}
              onKeyPress={handleKeypress}
            />
            <button onClick={handleClick}>Add</button>
            <button
              onClick={() => {
                setAddbtn(false);
                setSingleTask("");
              }}
            >
              {" "}
              X{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
