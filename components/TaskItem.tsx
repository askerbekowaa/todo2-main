"use client";

import { Check, Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TaskItemProps {
  task: { id: number; text: string; completed: boolean };
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void; // Новый пропс для редактирования
}

export default function TaskItem({
  task,
  toggleTask,
  deleteTask,
  editTask,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    if (newText.trim() === "") {
      alert("Task text cannot be empty!");
      return;
    }
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex items-center justify-between p-2 rounded ${
        task.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 mr-2 rounded border px-2 py-1"
          placeholder="Edit task"
        />
      ) : (
        <span
          className={
            task.completed ? "line-through text-gray-500" : "text-gray-800"
          }
        >
          {task.text}
        </span>
      )}

      <div className="flex items-center space-x-2">
        <Button
          onClick={() => toggleTask(task.id)}
          variant="outline"
          size="icon"
          aria-label={
            task.completed ? "Mark as incomplete" : "Mark as complete"
          }
        >
          <Check
            className={`w-4 h-4 ${
              task.completed ? "text-green-500" : "text-gray-500"
            }`}
          />
        </Button>
        {!isEditing && (
          <Button
            onClick={() => setIsEditing(true)}
            variant="outline"
            size="icon"
            aria-label="Edit task"
          >
            <Edit className="w-4 h-4 text-gray-500" />
          </Button>
        )}
        {isEditing && (
          <Button
            onClick={handleSave}
            variant="outline"
            size="icon"
            aria-label="Save task"
          >
            Save
          </Button>
        )}
        <Button
          onClick={() => deleteTask(task.id)}
          variant="outline"
          size="icon"
          aria-label="Delete task"
        >
          <Trash2 className="w-4 h-4 text-red-500" />
        </Button>
      </div>
    </li>
  );
}
