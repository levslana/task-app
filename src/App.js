import React from "react";
import "./app.css";

function App() {
  const tasks = ["Laundry", "Mow the Grass", "Feed the Dogs"];

  console.log(tasks);

  return (
    <div>
      <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {index + 1}: {task}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
