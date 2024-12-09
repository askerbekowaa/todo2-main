"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface AddTaskProps {
  addTask: (text: string) => void;
}

export default function AddTask({ addTask }: AddTaskProps) {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    addTask(taskText); // Передаем новую задачу в основной компонент
    setTaskText(""); // Очищаем поле ввода
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-1 px-3 py-2 border rounded-md"
        placeholder="Enter a new task"
      />
      <Button onClick={handleAddTask} variant="default">
        Add Task
      </Button>
    </div>
  );
}
