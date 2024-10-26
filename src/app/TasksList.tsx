"use client"
import React from "react";
import Task from "./Task";
type taskObj = { id: string, text: string, completed: boolean };
interface TasksListProps {
    tasks: taskObj[];
    moveup: (id: string) => void
    movedown: (id: string) => void
    deleteTask: (id: string) => void
    doneHandler: (id: string, completed: boolean) => void
}

const TasksList: React.FC<TasksListProps> = ({ tasks, moveup, movedown, deleteTask, doneHandler }) => {

    return (
        <ul className="tasks">
            {tasks.length === 0 && "No tasks to do ..."}
            {
                tasks.map((task) => {
                    return (<Task {...task}
                        key={task.id}
                        moveup={moveup}
                        movedown={movedown}
                        deleteTask={deleteTask}
                        doneHandler={doneHandler} />)
                })}
        </ul>
    )
}

export default TasksList;