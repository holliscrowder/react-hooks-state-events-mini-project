import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const initialData = { text: "", category: "Code" };
  const [newTask, setNewTask] = useState(initialData);

  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask(initialData);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          value={newTask.text}
          onChange={handleChange}
          type="text"
          name="text"
        />
      </label>
      <label>
        Category
        <select
          value={newTask.category}
          onChange={handleChange}
          name="category"
        >
          {categories.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
