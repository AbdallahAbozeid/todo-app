"use client"
import NewToDoForm from "./NewToDoForm";
import { useEffect, useState } from "react";
import TasksList from "./TasksList";

export default function Home() {
  type task = {
    text: string,
    id: string,
    completed: boolean
  }
  const [tasks, setTasks] = useState<task[] | []>(() => {
    const localTasks = localStorage.getItem("Tasks");
    if (localTasks == null)
      return [];
    else
      return JSON.parse(localTasks);
  });
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);


  function addTask(txt: string) {
    if (txt.replaceAll(" ", "") === "")
      return;
    const taskObj: task = { text: txt, id: crypto.randomUUID(), completed: false };
    setTasks((prev) => [...prev, taskObj]);
  }
  function doneHandler(id: string, completed: boolean) {
    completed = completed ? false : true;
    setTasks((t) => {
      return t.map((one) => {
        if (one.id === id)
          return { ...one, completed };
        else
          return { ...one };
      });
    });
  }
  function deleteTask(id: string) {
    setTasks((t) => {
      return t.filter((task) => {
        return task.id !== id;
      });
    });
  }
  function moveup(id: string) {
    const i: number = tasks.findIndex((task) => task.id === id);
    const newTasks: task[] = [...tasks];
    if (i > 0) {
      [newTasks[i - 1], newTasks[i]] = [newTasks[i], newTasks[i - 1]];
    }
    setTasks(() => newTasks);
  }
  function movedown(id: string) {
    const i: number = tasks.findIndex((task) => task.id === id);
    const newTasks: task[] = [...tasks];
    if (i < newTasks.length - 1) {
      [newTasks[i + 1], newTasks[i]] = [newTasks[i], newTasks[i + 1]];
    }
    setTasks(() => newTasks);
  }

  return (
    <div>
      <main className="app-container">
        <h1 className="header">To Do List</h1>
        <NewToDoForm addTask={addTask} />
        <TasksList tasks={tasks} moveup={moveup}
          movedown={movedown}
          deleteTask={deleteTask}
          doneHandler={doneHandler} />
      </main>
    </div>
  );
}
