"use client";

import { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoistClone() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "First Task", completed: false },
    { id: 2, text: "Second Task", completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number, newText: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const addTask = (text: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My TODO List</h1>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}
