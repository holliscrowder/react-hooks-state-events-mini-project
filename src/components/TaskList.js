import React, { useState } from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task
            key={task.text}
            text={task.text}
            category={task.category}
            deleteTask={() => deleteTask(task)}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
